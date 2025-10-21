# MIRAS React (Vite)

This is the React conversion of the MIRAS frontend.

## Develop

```bash
cd react
npm install
npm run dev
```

Open the app at the URL printed by Vite (usually http://localhost:5173).

## Structure

- `public/assets` contains all images, videos, and fonts. They are served at `/assets/...`.
- `src/styles/home.css` and `src/styles/catalog.css` are the ported CSS from the original site.
- `src/components` contains shared UI such as `Navbar`, `Footer`, `Hero`.
- `src/pages` contains `HomePage` and `CatalogPage`.

## Notes

- Routing uses `react-router-dom`.
- Asset references use absolute paths like `/assets/image.jpg` (Vite serves these from `public`).
