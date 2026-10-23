# Lokadata Wallacea

KotaBerdaya's WebGIS of investment opportunities and development gaps in eastern Indonesia (Nusa Tenggara, Sulawesi, Maluku and Papua).

The map shows:

- **36 investment projects** listed by Kementerian Investasi dan Hilirisasi/BKPM (IPRO, PPI and regional PID listings), with investment value, IRR, NPV and payback as published.
- **22 World Bank, ADB and JICA programmes** that name an eastern province or site.
- **Development gaps by province**: BPS poverty rate (March 2026) and Human Development Index (2024), on the current 38-province boundaries.

## Data sources

| Layer | Source | Retrieved |
| --- | --- | --- |
| Investment projects | BKPM Potensi Investasi Regional, regionalinvestment.bkpm.go.id | 23 Oct 2026 |
| Poverty rate (P0) | BPS, Persentase Penduduk Miskin menurut Provinsi, March 2026 | 23 Oct 2026 |
| HDI | BPS, [Metode Baru] IPM menurut Provinsi, 2024 | 23 Oct 2026 |
| World Bank, ADB | IATI records via d-portal.org, plus project pages | 23 Oct 2026 |
| JICA | JICA Indonesia project map (May 2025) and press releases | 23 Oct 2026 |
| Boundaries | ardian28/GeoJson-Indonesia-38-Provinsi, simplified | 23 Oct 2026 |

Two BKPM map points were corrected because the published coordinates were invalid (Mautika Mandalika Hotel; Beef Cattle Farming, Bone). Donor programmes are placed at province or site level, not at exact project footprints. Figures are feasibility estimates as published, not offers to invest.

## Security

The site is static: no server code, no cookies, no analytics, no third-party scripts.

- Content-Security-Policy allows scripts only from this site, and blocks all network requests from scripts (`connect-src 'none'`).
- Leaflet 1.9.4 is self-hosted and checked against the official release hash. Every script and stylesheet loads with Subresource Integrity.
- The only external requests are Google Fonts. Remove the fonts link in `index.html` to drop them; the page falls back to system fonts.
- The shortlist is saved only in the visitor's own browser (localStorage).

Leaflet is © Volodymyr Agafonkin, BSD-2-Clause (see `vendor/leaflet-1.9.4/LICENSE`).
