# BIZWORK-IT — Multi-page corporate website

A bilingual (Vietnamese / English) React + Vite website with four distinct routes:
- `/vi/` and `/en/` — Home
- `/vi/about` and `/en/about` — About
- `/vi/services` and `/en/services` — Services
- `/vi/contact` and `/en/contact` — Contact

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Live Chat
The custom Live Chat launcher supports Tawk.to. Copy `.env.example` to `.env` and set:
```env
VITE_TAWK_PROPERTY_ID=your_property_id
VITE_TAWK_WIDGET_ID=your_widget_id
```
Without these values, the widget displays a setup notice; it does not pretend to be connected.

## Contact form
The form is intentionally in demo mode and performs client-side validation only. It does not send or store enquiries. Connect a trusted backend or form provider before production.

## Motion and performance
- CSS page transitions with a small 3D robot portal animation
- Animated rotating hero slogan
- CSS-based isometric infrastructure scene (server rack, network, database, cloud nodes) and robot guide
- Four page-specific visual compositions: editorial company story, dark technical services, light connection hub, and infrastructure-led home page
- Layered scene lighting, animated network paths, floating infrastructure nodes, and staggered slogan reveal
- Reduced-motion support
- No heavy 3D rendering dependency

## Content notes
Business facts and service descriptions are based on the user-provided BIZWORK-IT reference screenshots and earlier website content. No unverified customer counts, certifications, office address, phone numbers or performance claims are invented.


## Signature redesign v3

This revision changes the visual composition of all four routes:
- Home: dark editorial hero with an original CSS 3D data-centre / server-rack / network scene.
- About: asymmetric company masthead, editorial story layout, and dark principles timeline.
- Services: interactive service selector with a detailed capability panel instead of a repeated card grid.
- Contact: high-contrast split layout with company details and enquiry form.

The right-side homepage artwork is built from HTML/CSS/SVG and Lucide icons rather than a stock dashboard screenshot. This keeps the illustration crisp, responsive, lightweight, and editable in source.

Run locally:
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
```

Note: dependency installation timed out in the current execution environment, so a successful production build has not been verified here.

## BIZWORK-IT UI v4 — layout repair

This revision corrects the reported layout and readability defects:
- Home hero slogan lines now use natural document flow and no longer overlap the intro paragraph.
- About-page promise panel uses a flexible text column and a separate shield column; the quote can no longer collapse into a narrow 100px track.
- Service ROI section restores a dark background with high-contrast light text.
- Process and FAQ spacing, body typography, responsive grids, and small-screen layouts are normalized.

Run `npm install` and `npm run build` before deployment. The source package was updated, but dependency installation could not be completed in this environment, so a production build has not been verified here.
