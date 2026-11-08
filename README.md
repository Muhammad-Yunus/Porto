# ◆ KANG YUNUS — Retro Portfolio

Retro-styled personal portfolio of Muhammad Yunus — Software & IoT / Embedded / AI engineer. Pure static site with zero dependencies and zero build step: just open `index.html` and it works anywhere.

![Language](https://img.shields.io/badge/language-HTML%2FCSS%2FJS-888?labelColor=#ECE6C2)
![Dependencies](https://img.shields.io/badge/dependencies-0-73BDA8?labelColor=#ECE6C2)
![Build](https://img.shields.io/badge/build-none-D2A24C?labelColor=#ECE6C2)
![Style](https://img.shields.io/badge/style-retro%20CRT-CC6B49?labelColor=#ECE6C2)
![Status](https://img.shields.io/badge/status-available-73BDA8?labelColor=#ECE6C2)

**Live Demo:** [muhammad-yunus.github.io/Porto](https://muhammad-yunus.github.io/Porto/)

## Features

- Terminal-style hero with typewriter role switcher
- Skill grids (software + embedded) rendered from JS data
- Working experience timeline with in-card status tags
- 95+ project log with category filters (`[RnD]`, `LOGISTIC`, `IOT/RF`, `OTHER`)
- Speaking & webinars, certifications, contact section
- Scroll-reveal animations, counters, ticker marquee — all vanilla JS

## Stack

| Layer      | Tech                                   |
| ---------- | -------------------------------------- |
| Markup     | HTML5                                  |
| Styling    | CSS3 (custom retro/CRT theme)          |
| Logic      | Vanilla JavaScript (ES6+, no libs)     |
| Fonts      | Google Fonts (Press Start 2P, VT323)   |
| Hosting    | Static — GitHub Pages ready            |

Palette: `#ECE6C2` (bg) · `#6F5643` · `#CC6B49` (font) · `#D2A24C` · `#73BDA8` (accents)

## Project Structure

```
Porto/
├── index.html        # Page structure: nav, hero, skills, timeline, projects, speaking, certs, contact
├── style.css         # Retro CRT theme, responsive layout, animations
├── script.js         # Data-driven rendering (skills, 95+ projects, certs) + interactions
├── photo-yunus.png   # Portrait used in the ABOUT panel
└── docs/             # Source reference documents (CV)
```

## Usage

```bash
# Option 1: just open it
start index.html

# Option 2: serve locally (optional)
python -m http.server 8000
# -> http://localhost:8000
```

## Editing Content

All dynamic content (skills, projects, certifications) lives in `script.js`:

- `skillGroups` / `embeddedGroups` → skill chip grids
- `projects[]` → project cards (`tag`, `name`, `date`, `role`, `desc`)
- `certs[]` → certification cards

HTML sections only need touching for new section layouts.
