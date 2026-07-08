export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://watchhow.co";

// Watch How Inc. monogram — tilted amber H + orange W with a teal accent dot.
// Kept in sync with app/icon.svg so favicons, the Apple icon and the OG image
// all render the same brand mark.
export const logoMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <g fill="none" stroke-linecap="butt">
    <g transform="rotate(15 250 220)" stroke="#F5A623" stroke-width="42">
      <path d="M196 130 V330" />
      <path d="M312 130 V330" />
      <path d="M196 232 H312" />
    </g>
    <g transform="rotate(11 300 320)">
      <path d="M214 232 L262 402 L308 300 L354 402 L400 232" stroke="#F07832" stroke-width="44" stroke-linejoin="miter" stroke-miterlimit="6" stroke-linecap="butt" />
    </g>
  </g>
  <circle cx="214" cy="368" r="34" fill="#35A8C6" />
</svg>`;

export const logoMarkDataUri = `data:image/svg+xml;base64,${Buffer.from(
  logoMarkSvg
).toString("base64")}`;
