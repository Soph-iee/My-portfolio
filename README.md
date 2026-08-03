# Portfolio — Blessing Opeyemi

Single-page portfolio for a mobile engineer. Vite + React 19, no other runtime dependencies.

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
npm run lint
```

## Sections

Hero → About → Skills → Projects → Experience → How I work → Earlier work → Contact

## Editing content

All copy lives in `src/data/` — edit it without touching JSX:

| File | Contains |
|---|---|
| `profile.js` | Name, role, headline, bio, photo, email, links |
| `metrics.js` | The three stats in About |
| `projects.js` | Project cards (book app + FlyPro work) |
| `experience.js` | Job history |
| `stack.js` | Skills tag groups + "learning" list |
| `principles.js` | "How I work" items + the AI note |
| `earlierWork.js` | Older frontend project links |

## Before publishing (TODOs)

1. **Photo** — drop it at `public/photo.jpg`, then set `photo: "/photo.jpg"` in `src/data/profile.js`. Until then it shows your initials.
2. **CV** — drop it at `public/Blessing-Opeyemi-CV.pdf`.
3. **Links** — confirm LinkedIn and GitHub URLs in `src/data/profile.js` (currently best guesses).
4. **Email** — confirm the contact address in `src/data/profile.js`.
5. **Book app links** — add GitHub/demo URLs to the `links` array of the `book-app` entry in `src/data/projects.js` when there's something to show.

## Note

FlyPro is employer work: the project entries describe approach and architecture only — no proprietary code, no supplier names.
