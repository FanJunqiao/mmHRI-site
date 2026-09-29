# mmHRI Project Website

Project page for **mmHRI: Towards Privacy-Preserving Human-Robot Interaction with Millimeter-Wave Radar** (Under Review).

Includes Figures 1–6 and Tables 1–4 from the paper, a local paper PDF, and click-to-play playback of `mmhri.mp4`. Single-column figures have captions beside them on desktop; full-width figures have captions below. On mobile, captions stack below the figures.

Run `python3 -m http.server 8000` from this directory and open <http://localhost:8000>. No build step or external JavaScript dependencies are required.

- `index.html`: paper content and HTML tables.
- `static/css/index.css`: responsive page layout.
- `static/js/index.js`: video playback controls.
- `static/images/mmhri/`: paper figures and video poster.
- `static/paper/mmHRI.pdf`: paper PDF.
- `mmhri.mp4`: demonstration video.

Website adapted from [Nerfies](https://github.com/nerfies/nerfies.github.io), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
