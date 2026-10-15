# Local personal-website preview

This is a standalone, buildless preview. It does not change the live Jekyll
pages, navigation, theme, interactive tools, or CV. Jekyll normally excludes
this underscore-prefixed directory. Do not add it to Jekyll's `include` list.

Serve the repository root locally, then open `/_preview/`. Navigation within
the preview uses hash routes; all six proposed pages are functional. Photos,
scientific figures, interactive tools, and the CV are read from their existing
repository locations. No new external libraries or remote fonts are required.

`publications.js` is a preview snapshot of the CV's `own-bib.bib`, generated
on October 15, 2026. It includes 15 refereed/accepted papers, three under-review
manuscripts, and two other contributions. The original bibliography is unchanged.

The design has now been adopted locally in `/index.html` and `/assets/site/`.
This folder remains a standalone preview; production content updates should
be made in `/assets/site/`. The former website is preserved on the local branch
`archive/site-before-redesign-2026-10-15`. Nothing has been pushed or deployed.
