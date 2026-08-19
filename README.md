# RAHCo Corporate Website Concept

Concept website for **Rosenida, Azlina, Hafidz & Co. (RAHCo)**, prepared as a lightweight corporate redesign based on publicly available firm information.

## Preview

Expected GitHub Pages URL after Pages is enabled:

`https://shukritobi.github.io/Rosenida-Azlina-Hafidz-Co/`

If the first workflow reports that Pages is not configured, open **Repository Settings → Pages → Build and deployment → Source → GitHub Actions**. The included workflow will deploy automatically on the next push or can be run manually from the Actions tab.

## What is included

- Responsive corporate landing page, no framework required
- RAHCo-inspired purple and gold visual system
- Bahasa Malaysia / English toggle for core website content
- Matter-based service routing
- Property & conveyancing, litigation, Syariah, probate / estate, and financing documentation sections
- Selected public lawyer / management profiles
- Knowledge Centre links to existing RAHCo articles
- Four locations currently shown on RAHCo's official website
- Structured WhatsApp enquiry flow to the public RAHCo hotline
- Client portal link to RAHCounsel
- Legal-information disclaimer and Malaysian Bar link
- Schema.org `LegalService` structured data
- Mobile navigation, accessible controls and reduced-motion support
- No analytics, cookies or large image dependencies in the concept
- `noindex,nofollow` while this remains a proposal / preview

## Research notes

The concept uses public information from:

- RAHCo official website: `https://www.rahco.com.my/`
- RAHCo management page: `https://www.rahco.com.my/management/`
- RAHCo services: `https://www.rahco.com.my/our-services/`
- RAHCo contact page: `https://www.rahco.com.my/contact-us/`
- RAHCo Knowledge Centre: `https://www.rahco.com.my/resources/`
- RAHCounsel: `https://rahcounsel.my/`
- Malaysian Bar and public legal directories for cross-checking firm / lawyer information

### Items to verify with RAHCo before production launch

1. Final lawyer roster, titles, practice descriptions and profile photos.
2. Which office list should be treated as current. The firm's official site prominently shows Kajang, Setia Alam, Kuantan and Kemaman, while public legal directories also contain Shah Alam / Taman Cahaya Alam and Kuala Lumpur / Mont Kiara records.
3. Preferred central enquiry number and whether enquiries should be routed by practice area or location.
4. Whether `rahcounsel.my` is intended for public client access and the label the firm wants to use for it.
5. Final Bahasa Malaysia and English legal copy.
6. Any calculator functionality that should be migrated from the current website.
7. Compliance review under the current Malaysian legal-profession publicity requirements before going live.
8. Replace `noindex,nofollow` with production indexing rules only after the official domain and content are approved.

## Recommended production direction

For the live site, keep the front end lightweight but move firm-managed content into a small CMS so RAHCo can update lawyer profiles, articles, branch details and contact routing without editing code. A practical production stack would be Astro or Next.js on Cloudflare Pages / Vercel with a headless CMS, while preserving the same fast, low-dependency interface used in this preview.

For launch, consolidate the current fragmented experience into one primary domain with clear routes for **Services, People, Knowledge Centre, Locations, Enquiry, Calculator / Tools, Careers, and Client Portal**. Redirect or clearly connect any secondary RAHCo domains rather than making visitors guess which site is current.

## Files

- `index.html` — content, semantic structure and structured data
- `styles.css` — full responsive design system
- `script.js` — language toggle, mobile navigation, animations and WhatsApp routing
- `.github/workflows/pages.yml` — GitHub Pages deployment

## Important

This is a proposal concept, not the firm's approved production website. Public information can change, and all legal, team and branch content should be verified by RAHCo before publication.
