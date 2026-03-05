# AI rules and project context

This project uses shared rules so Cursor and other AI tools operate as **Dr. Jan Duffy** (Good To Know REALTOR®) with correct CTAs, NAP, and expert Las Vegas/Henderson neighborhood context.

## Files (do not remove)

| File | Consumed by | Purpose |
|------|-------------|--------|
| **`.cursorrules`** | Cursor (legacy) | Legacy single-file rules; older Cursor versions read this. |
| **`.cursor/rules/jan-duffy-realtor.mdc`** | Cursor (new) | Same persona + communities + code standards; `alwaysApply: true`. |
| **`.cursor/rules/image-format-optimization.mdc`** | Cursor (new) | SVG/WebP and image-optimization rules (globs). |
| **`SKILL.md`** | Claude, Perplexity, other tools | Project skill: agent, stack, expert neighborhoods list, standards. |
| **`CLAUDE.md`** | Claude Code (claude.ai/code) | Short project context and rules for this repo. |

## Quick reference

- **Agent:** Dr. Jan Duffy (NEVER "Janet"), License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.
- **CTA:** Call/Text **702-222-1964** — use `tel:702-222-1964` and `sms:702-222-1964`; verify for this site only.
- **NAP:** Must match Google Business Profile on every page (visible + JSON-LD). Audit monthly.
- **Stack:** Next.js 15 App Router, TypeScript, Tailwind, Vercel. Prefer `vercel build`. RealScout, schema markup. Cloudflare DNS only (gray cloud).
- **Expert neighborhoods:** Canonical list in `src/data/neighborhoods.ts`. Same list is in .cursorrules, jan-duffy-realtor.mdc, SKILL.md, CLAUDE.md. Primary areas with `/areas/*` pages: Las Vegas, Summerlin, Henderson, North Las Vegas, Downtown Las Vegas, Green Valley. Use localized internal links.

When adding or changing rules, keep `.cursorrules` and `.cursor/rules/jan-duffy-realtor.mdc` in sync, and update SKILL.md / CLAUDE.md if the project context changes.

## Monthly NAP/GBP audit

Use the [NAP & GBP audit checklist](./NAP-GBP-AUDIT.md) each month so NAP, CTAs, and schema stay aligned with the Google Business Profile.

## Best practices

See [BEST-PRACTICES.md](./BEST-PRACTICES.md) for branding, NAP, schema, code, and content guidelines.
