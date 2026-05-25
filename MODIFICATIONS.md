# Modifications

## Original Work

This project is a **modified version** of [PDFCraft](https://github.com/PDFCraftTool/pdfcraft), originally created by the PDFCraft Team and licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

- **Original Repository:** https://github.com/PDFCraftTool/pdfcraft
- **Original License:** AGPL-3.0 (see `LICENSE` file)
- **Original Copyright:** PDFCraft Team

## Modifications Made

The following modifications were made to the original PDFCraft codebase to create **PDF Kuansing**:

### Branding & Identity
- Replaced all references to "PDFCraft" with "PDF Kuansing" across the codebase
- Updated logo and brand identity (to be replaced by the deploying organization)
- Changed application metadata (manifest, site config, page titles, descriptions)
- Updated social links and contact information to reflect the new organization
- Renamed internal storage keys and IndexedDB names to prevent conflicts with the original application

### Organization-Specific Customization
- Updated creator/vendor information to "Diskominfo Kabupaten Kuantan Singingi"
- Customized contact email to `diskominfo@kuansing.go.id`
- Updated GitHub repository links to point to the fork at `https://github.com/Masriadi/pdf-kuansing`
- Localized default locale to `id_ID` (Indonesian)

### Technical Changes
- Renamed package from `pdfcraft` to `pdf-kuansing`
- Updated Docker image labels and container paths
- Updated Tauri desktop app configuration (product name, identifier, window title)
- Updated service worker cache names and IndexedDB database names
- Updated CSS class names and console log prefixes in the PDF editor tool

## Date of Modification

**May 25, 2026**

## Modified By

**Dinas Komunikasi dan Informatika (Diskominfo) Kabupaten Kuantan Singingi**

## License Notice

This modified version continues to be licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. In accordance with Section 13 of the AGPL-3.0, the complete source code of this modified version is made available at:

**https://github.com/Masriadi/pdf-kuansing**

If you access this application over a network, you have the right to request and receive the Corresponding Source code of the version running on the server.

## Disclaimer

This is an independent modification of the original PDFCraft project. The original authors (PDFCraft Team) are not affiliated with, endorsed by, or responsible for this modified version.
