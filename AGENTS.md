# AI Agent Context — PDF Kuansing

## Overview

This repository is a **forked and rebranded** version of [PDFCraft](https://github.com/PDFCraftTool/pdfcraft), originally licensed under AGPL-3.0. It has been modified for use by the **Diskominfo Kabupaten Kuantan Singingi** (Indonesian government agency). All branding, storage keys, and deployment configurations have been changed from "PDFCraft" to "PDF Kuansing".

## Key Principle: Distinguish Upstream vs. Rebrand

When modifying code in this repo, **always assume** references to the old brand may still exist. Use `grep -r "PDFCraft" src/` or `grep -r "pdfcraft" src/` to verify. If you encounter any remaining upstream branding, change it to the Kuansing equivalent.

## Branding Reference Table

| Context | Old (Upstream) | New (Kuansing) | File(s) |
|---------|---------------|----------------|---------|
| App name | `PDFCraft` | `PDF Kuansing` | `messages/*.json`, `src/config/site.ts`, metadata generators |
| Package name | `pdfcraft` | `pdf-kuansing` | `package.json`, `Cargo.toml` |
| GitHub repo | `PDFCraftTool/pdfcraft` | `Masriadi/pdf-kuansing` | `src/config/site.ts`, `Header.tsx`, `Footer.tsx`, `ContactPageClient.tsx` |
| Creator | `PDFCraft Team` | `Diskominfo Kabupaten Kuantan Singingi` | `src/config/site.ts` |
| Site URL | `pdfcraft.devtoolcafe.com` | `pdfkuansing.example.com` (placeholder) | `src/config/site.ts` |
| Default locale | `en_US` | `id_ID` | `src/config/site.ts` |
| Logo file | `public/images/logo.png` | `public/images/logo/logo-kuansing.png` | `Header.tsx`, `Footer.tsx`, `README.md`, `structured-data.ts` |
| Favicon | `public/favicon.svg` | `public/images/favicon/favicon.ico` | `layout.tsx`, `metadata.ts`, `manifest.ts` |
| Apple icon | `public/favicon.svg` | `public/images/favicon/kuansing-icon.png` | `layout.tsx`, `metadata.ts` |

## Storage & IndexedDB Keys

All client-side storage keys were renamed to avoid collision with the original app:

| Type | Old Key | New Key | File |
|------|---------|---------|------|
| Favorites | `pdfcraft-favorite-tools` | `pdf-kuansing-favorite-tools` | `src/hooks/useFavorites.ts` |
| Language preference | `pdfcraft-language-preference` | `pdf-kuansing-language-preference` | `src/components/layout/LanguageSelector.tsx` |
| Tour completed | `pdfcraft_tour_completed` | `pdf-kuansing-tour-completed` | `src/lib/hooks/useGuidedTour.ts` |
| Tour dismissed | `pdfcraft_tour_dismissed` | `pdf-kuansing-tour-dismissed` | `src/lib/hooks/useGuidedTour.ts` |
| Recent files | `pdfcraft_recent_files` | `pdf-kuansing-recent-files` | `src/lib/storage/recent-files.ts` |
| Projects DB | `pdfcraft_projects` | `pdf-kuansing-projects` | `src/lib/storage/project-db.ts` |
| Font cache DB | `pdfcraft-fonts` | `pdf-kuansing-fonts` | `src/lib/pdf/processors/text-to-pdf.ts`, `watermark.ts` |
| Workflows | `pdfcraft_workflows` | `pdf-kuansing-workflows` | `src/lib/workflow/storage.ts` |
| Workflow history | `pdfcraft_workflow_history` | `pdf-kuansing-workflow-history` | `src/lib/workflow/history.ts` |
| Service Worker cache | `pdfcraft-cache-v2` | `pdf-kuansing-cache-v2` | `public/sw.js` |

## PDF Editor Tool CSS Classes

The PDF annotation editor injects dynamic CSS classes. These were renamed:

| Old Class/ID | New Class/ID |
|-------------|-------------|
| `pdfcraft-custom-hl-picker` | `pdf-kuansing-custom-hl-picker` |
| `pdfcraft-custom-controls` | `pdf-kuansing-custom-controls` |
| `pdfcraft-fill-enabled` | `pdf-kuansing-fill-enabled` |
| `pdfcraft-undo-btn` | `pdf-kuansing-undo-btn` |
| `pdfcraft-redo-btn` | `pdf-kuansing-redo-btn` |

Source: `src/components/tools/edit-pdf/EditPDFTool.tsx`

## Deployment Configurations

| File | Change Summary |
|------|---------------|
| `Dockerfile` | Labels point to `Masriadi/pdf-kuansing`, image title/description updated |
| `docker-compose.yml` | Volume mount `/website/pdf-kuansing` |
| `nginx.conf` | Root changed to `/website/pdf-kuansing` |
| `next.config.js` | Comment subpath example: `/pdf-kuansing/` |
| `netlify.toml` | Comment header rebranded |
| `.htaccess` | Comment header rebranded |

## AGPL-3.0 Compliance Artifacts

| File | Purpose |
|------|---------|
| `LICENSE` | Original AGPL-3.0 text **kept intact** (required by license) |
| `MODIFICATIONS.md` | Documents this rebrand: original source, what changed, date, responsible party |
| `README.md` | Contains attribution to PDFCraft and AGPL-3.0 notice |

## Tauri Desktop App

| File | Old | New |
|------|-----|-----|
| `src-tauri/Cargo.toml` | `name = "pdfcraft"`, `description = "PDFCraft Desktop"` | `name = "pdf-kuansing"`, `description = "PDF Kuansing Desktop"` |
| `src-tauri/tauri.conf.json` | `productName: "PDFCraft"`, `identifier: "com.pdfcraft.app"` | `productName: "PDF Kuansing"`, `identifier: "com.kuansing.pdfkuansing"` |
| `src-tauri/tauri.conf.json` | `title: "PDFCraft"` | `title: "PDF Kuansing"` |

## When Adding New Features

1. **Do not re-introduce "PDFCraft" branding** in new UI text, console logs, CSS class names, or storage keys.
2. If creating new locale strings, use `"PDF Kuansing"` (or the translation key `"common.brand"` from `messages/id.json`).
3. If adding new IndexedDB or localStorage keys, prefix with `pdf-kuansing-`.
4. Keep the `LICENSE` file untouched. Add modification notes to `MODIFICATIONS.md` if your change is substantial.

## Testing Notes

- Tests in `src/__tests__/properties/layout.property.test.tsx` reference `PDF Kuansing` as the expected brand name.
- If you encounter TypeScript errors in `seo.property.test.ts` regarding `metadata.twitter`, use a type assertion (`as Record<string, unknown>`) — Next.js 15 changed the `Metadata.twitter` type definition.
