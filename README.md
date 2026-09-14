# Alexandre Sigiridis-Schlepp — Engineering Portfolio v5

This version contains both the real Next.js portfolio and a zero-install offline preview.

## Fastest way to inspect it on Windows

1. Extract the ZIP completely.
2. Double-click `OPEN-PREVIEW.html`.
3. Every flagship project card is clickable and opens a dedicated offline case-study page in `preview/`.
4. Engineering-study cards are also clickable.
5. When a source report exists, the detail page opens the PDF directly. The V4 engine page also links to the original calculation workbook.

The offline preview does **not** need Node.js, npm or a local server.

## Run the real Next.js site

Requirements: Node.js 20.9+ (Node 22 LTS is fine).

### Easy Windows method

Double-click:

`start-windows.bat`

It runs `npm.cmd install`, starts the Next.js development server and opens the local site.

### Manual method

Open **Command Prompt** in the extracted folder and run:

```bat
npm.cmd install
npm.cmd run dev
```

Then open:

`http://localhost:3000`

Using `npm.cmd` avoids the common PowerShell `npm.ps1` execution-policy problem.

## Portfolio navigation

Flagship projects use dynamic routes:

- `/projects/hybrid-multiphase-cfd-electrolysis`
- `/projects/axial-compressor-cfd`
- `/projects/135-v4-engine`
- `/projects/external-aerodynamics`
- `/projects/market-time-series-ml`
- `/projects/robotic-sheet-forming-timeseries`

Additional engineering studies use:

- `/studies/neural-driving-neuroevolution`
- `/studies/brake-disc-thermomechanics`
- `/studies/heated-pipe-thermomechanics`
- `/studies/sheet-metal-interlock`

## Included source documents

- `public/docs/master-thesis.pdf`
- `public/docs/axial-compressor-report.pdf`
- `public/docs/bachelor-thesis.pdf`
- `public/docs/brake-disc-report.pdf`
- `public/docs/neural-driving-report.pdf`
- `public/docs/alexandre-sigiridis-schlepp-cv.pdf`
- `public/docs/v4-engine-calculations.xlsx`

Each relevant project/study page links directly to its report or calculation workbook.

## Real project visuals used

The portfolio now uses the supplied simulation screenshots for:

- MultiMorph / electrolysis morphology and validation;
- the new side-view coupled axial-compressor rotor–stator velocity field;
- the selected NACA airfoil separation / wake view as the external-aerodynamics cover;
- Formula 1 external aerodynamics;
- delta-wing aircraft flow;
- automotive pressure / streamline studies;
- sheet-metal joining in Abaqus;
- heated-pipe thermal analysis;
- the selected brake-disc total-deformation ANSYS result;
- the selected Neural Driving training / network visualization;
- the selected Bachelor time-series weighted-average prediction plot;
- the uploaded 135° V4 CAD / mechanism view.

## Data architecture

Content lives primarily in `data/projects.ts`. Project and study pages are generated from these structured objects, so adding a new project does not require duplicating page code.

## Deployment

After `npm install` succeeds locally:

```bat
npm.cmd run build
```

For Vercel, import the folder/repository as a standard Next.js project. Set `NEXT_PUBLIC_SITE_URL` to the deployed domain if desired so the sitemap uses the public URL.

## Note on verification in the generated environment

The offline HTML preview and its local links/assets were generated and checked in the working environment. The full Next.js production build could not be executed here because access to the npm registry timed out before dependencies were installed. Run `npm.cmd install` and `npm.cmd run build` locally to perform the final dependency-aware build check.

## V4 workbook data used on the portfolio page

The V4 case study now reads its quantitative summary from the supplied workbook: 135° bank angle, 35 mm crank radius, 111 mm rod length, ≈1.078 L displacement, 3000 rpm reference speed, piston / rod masses, the ≈57.7 kN combustion-load branch and the simplified balance-shaft calculation. The workbook itself is preserved and linked from the project page.


V4 workbook: the project links to the cleaned engineering workbook with Dashboard, Inputs, Balancing and Detailed Calculations sheets.


## V9 updates
- Homepage featured compressor image replaced with the annular/isometric velocity-magnitude view.
- Bitcoin ML project rewritten from the supplied 35-page audited report.
- Bitcoin project now uses the supplied neural-network schematic as its sole presentation image, while the text explicitly states that the final audited model is a logistic-regression + histogram-gradient-boosting ensemble.
- Full Bitcoin ML report added as a direct PDF link.
