# @axiom-foundation/design-system

> **⚠️ Deprecated and unused.** The canonical Axiom Foundation design
> system is **[`@axiom-foundation/ui`](https://www.npmjs.com/package/@axiom-foundation/ui)**,
> developed in
> [`TheAxiomFoundation/axiom-foundation.org/packages/ui`](https://github.com/TheAxiomFoundation/axiom-foundation.org/tree/master/packages/ui).
>
> This repository was an early experiment with a different visual
> direction (dark-mode `--ra-*` token namespace) that was never wired
> into any consumer and has been superseded.

## Use `@axiom-foundation/ui` instead

```bash
bun add @axiom-foundation/ui
```

```css
/* app/globals.css */
@import "tailwindcss";
@import "@axiom-foundation/ui/tokens.css";
```

The production design system uses a "statute paper & legal ink" aesthetic
(`--color-paper`, `--color-ink`, `--color-accent`, etc.) with a
WCAG 2.2 AA contrast matrix asserted in CI as of 0.2.0.

## Why is this still here?

Archived for git history. The repo will not receive further updates.
