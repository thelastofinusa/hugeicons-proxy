# hugeicons-proxy

A lightweight React helper for [**Hugeicons**](https://hugeicons.com/). Import once and use any icon as a React component by name. No manual imports, no icon mapping, full TypeScript support and autocomplete.

## Why this exists

Hugeicons ships icons as data. This package turns every icon into a ready to use React component with a single export.

## Installation

```bash
npm install hugeicons-proxy
```

## Usage

```tsx
import { Icons } from "hugeicons-proxy";

function MyComponent() {
  return (
    <Icons.HugeiconsIcon
      size={20}
      strokeWidth={1.5}
      className="text-muted-foreground"
      // {...props}
    />
  );
}
```

## How it works

Icon is a Proxy. Property access resolves an icon definition at runtime and returns a React Component. Types ensure autocomplete and correct props.

> Notes: Works with ESM, no per icon imports and is built for TypeScript first.

## License

MIT
