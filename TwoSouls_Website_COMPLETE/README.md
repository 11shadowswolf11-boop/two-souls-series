# Two Souls Series — Shadow Wolf

World-class cinematic author website with all real book covers embedded.

## Quick Deploy

### Netlify (30 seconds — no account needed)
1. Unzip this folder
2. Go to netlify.com/drop
3. Drag the entire `twosoulsv2` folder onto the page
4. Done — live URL instantly

### Vercel
```bash
npm install -g vercel
cd twosoulsv2
npm install
vercel
```

### Local preview
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## What's inside

- **All 6 real book covers** + complete series cover + all logo variants in `/public/images/`
- Custom amber cursor with ring follow
- Live ocean particle canvas (animated background)
- Scroll-reveal animations on every section
- Cinematic film-bar effect on the Film section
- Book detail modal on click
- Newsletter subscribe form with success state
- Fully mobile responsive
- Zero external image dependencies (all images embedded)

## Text corrections made
- "Six books. One journey." (NOT "Six souls")
- All copy proofed against your actual series

## Palette
| Token | Hex | Use |
|-------|-----|-----|
| void | `#04060E` | Background |
| pearl | `#F0ECE6` | Text |
| amber.warm | `#D4924C` | Primary accent |
| amber.glow | `#E8A855` | Gradient |
| ocean.shine | `#1E8CAA` | Secondary |

## Connect Payments
Replace `href="#newsletter"` on unlock buttons with your Stripe/Gumroad/Payhip link.
