"use client";

import { useEffect, useRef } from 'react'

const LETTERS = ['W','A','T','C','H','O']
const COLORS  = [
  '#FFFFFF','#F07832','#F5C518',
  '#0097A7','#FFFFFF','#F5C518',
  '#6B46E0','#F07832','#FFFFFF','#0097A7'
]
const TOTAL   = 300
const GRAVITY = 0.28
const BOUNCE  = 0.32
const FRICTION_GROUND = 0.78
const FRICTION_AIR    = 0.992
const MOUSE_RADIUS    = 120
const MOUSE_FORCE     = 9
const MIN_SIZE = 18
const MAX_SIZE = 72

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a)
}

export default function GravityLetters({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse     = useRef({ x: -999, y: -999, active: false })
  const particles = useRef<any[]>([])
  const rafRef    = useRef<number | null>(null)

  useEffect(() => {
    const canvas  = canvasRef.current
    const parent  = containerRef.current
    if (!canvas || !parent) return

    // Size canvas to parent
    const resize = () => {
      canvas.width  = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const ctx = canvas.getContext('2d')
    if (!ctx) return;

    const isMobile = window.innerWidth < 768
    const count = isMobile ? 80 : TOTAL
    const maxSize = isMobile ? 48 : MAX_SIZE

    // --- BUILD FLOOR MAP ---
    // The "floor" is the section bottom.
    // Also parse headline text bounding boxes as landing platforms.
    // We approximate headline rect as a flat platform at 55% height.
    const getFloors = () => {
      const W = canvas.width
      const H = canvas.height
      return [
        // Section floor
        { x: 0, y: H - 8, w: W, h: 8 },
        // Headline platform (approximate — top of headline text)
        { x: W * 0.12, y: H * 0.30, w: W * 0.76, h: 6 },
        // Subline platform
        { x: W * 0.20, y: H * 0.58, w: W * 0.60, h: 6 },
        // Button platform
        { x: W * 0.38, y: H * 0.73, w: W * 0.24, h: 6 },
      ]
    }

    // --- SPAWN PARTICLES ---
    const W = canvas.width
    particles.current = Array.from({ length: count }, (_, i) => {
      const size = randomBetween(MIN_SIZE, maxSize)
      return {
        char:        LETTERS[i % LETTERS.length],
        color:       COLORS[i  % COLORS.length],
        size,
        x:           randomBetween(size, W - size),
        // Stagger spawn heights — some start higher
        y:           randomBetween(-800, -size),
        vx:          randomBetween(-1.2, 1.2),
        vy:          randomBetween(0, 2),
        rotation:    randomBetween(-180, 180),
        rotVel:      randomBetween(-2.5, 2.5),
        landed:      false,
        landedTimer: 0,
        opacity:     randomBetween(0.18, 0.32),
        // Slight tilt personality per letter
        tiltBias:    randomBetween(-0.3, 0.3),
      }
    })

    // --- MAIN LOOP ---
    const floors = getFloors()

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouse.current.x
      const my = mouse.current.y
      const active = mouse.current.active

      particles.current.forEach(p => {
        // --- MOUSE FORCE ---
        if (active) {
          const dx   = p.x - mx
          const dy   = p.y - my
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          if (dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
            p.vx      += (dx / dist) * force * MOUSE_FORCE
            p.vy      += (dy / dist) * force * MOUSE_FORCE * 0.8
            p.rotVel  += (Math.random() - 0.5) * force * 8
            p.landed   = false   // knock off platform
          }
        }

        // --- GRAVITY ---
        if (!p.landed) {
          p.vy += GRAVITY
          p.vx *= FRICTION_AIR
          p.vy *= FRICTION_AIR
          p.x  += p.vx
          p.y  += p.vy
          p.rotation += p.rotVel
          p.rotVel   *= 0.97

          // --- FLOOR COLLISION ---
          floors.forEach(floor => {
            const inX = p.x > floor.x && p.x < floor.x + floor.w
            const hitY = p.y + p.size * 0.5

            if (inX && hitY >= floor.y && p.vy > 0) {
              // How many letters already landed near here?
              // Stack them by checking if close letters occupy y-1 size up
              p.y    = floor.y - p.size * 0.5
              p.vy   = -p.vy * BOUNCE
              p.vx  *= FRICTION_GROUND
              p.rotVel *= 0.5

              // Settle if bounce is tiny
              if (Math.abs(p.vy) < 0.8) {
                p.vy     = 0
                p.vx     = 0
                p.rotVel = p.tiltBias
                p.landed = true
                // Freeze rotation to final resting angle
                p.rotation = Math.round(p.rotation / 15) * 15
              }
            }
          })

          // Wall bounce
          if (p.x < p.size * 0.5) {
            p.x  = p.size * 0.5
            p.vx = Math.abs(p.vx) * 0.6
          }
          if (p.x > canvas.width - p.size * 0.5) {
            p.x  = canvas.width - p.size * 0.5
            p.vx = -Math.abs(p.vx) * 0.6
          }

          // Reset if somehow exits top (shouldn't happen but safety)
          if (p.y < -canvas.height) {
            p.y = randomBetween(-200, -p.size)
            p.x = randomBetween(p.size, canvas.width - p.size)
          }
        } else {
          // Landed — micro wobble so they never look completely frozen
          p.rotation += p.tiltBias * 0.3 * Math.sin(Date.now() * 0.001 + p.x)
        }

        // --- DRAW ---
        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.font = `900 ${p.size}px "Sansita", serif`
        ctx.fillStyle = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.textAlign  = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.char, 0, 0)
        ctx.restore()
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    tick()

    // --- MOUSE EVENTS ---
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
    const onEnter = (e: MouseEvent) => {
      mouse.current.active = true
      // Entry burst
      const rect = canvas.getBoundingClientRect()
      const ex = e.clientX - rect.left
      const ey = e.clientY - rect.top
      particles.current.forEach(p => {
        const dx   = p.x - ex
        const dy   = p.y - ey
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        if (dist < MOUSE_RADIUS * 1.5) {
          p.vx    += (dx / dist) * 5
          p.vy    += (dy / dist) * 5
          p.landed = false
        }
      })
    }
    const onLeave = () => {
      mouse.current.active = false
      mouse.current.x = -999
      mouse.current.y = -999
    }

    if (!isMobile) {
      parent.addEventListener('mousemove',  onMove)
      parent.addEventListener('mouseenter', onEnter)
      parent.addEventListener('mouseleave', onLeave)
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      if (!isMobile) {
        parent.removeEventListener('mousemove',  onMove)
        parent.removeEventListener('mouseenter', onEnter)
        parent.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
