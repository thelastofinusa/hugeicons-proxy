![31c9262e-aeea-4403-9086-3c8b88885cab](https://github.com/hugeicons/hugeicons-react/assets/130147052/ff91f2f0-095a-4c6d-8942-3af4759f9021)

# hugeicons-proxy

A lightweight React helper for [**Hugeicons**](https://hugeicons.com/). Import once and use any icon as a React component by name. No manual imports, no icon mapping, full TypeScript support and autocomplete.

![a40aa766-1b04-4a2a-a2e6-0ec3c492b96a](https://github.com/hugeicons/hugeicons-react/assets/130147052/f82c0e0e-60ae-4617-802f-812cdc7a58da)

## Why this exists

Hugeicons ships icons as data. This package turns every icon into a ready to use React component with a single export.

## Installation

```bash
# Using npm
npm install hugeicons-proxy

# Using yarn
yarn add hugeicons-proxy

# Using pnpm
pnpm add hugeicons-proxy

# Using bun
bun add hugeicons-proxy
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

## Props

These props pass straight to HugeiconsIcon. The icon prop is handled internally by the proxy and never required from you.

| Prop                      | Type       | Default        | Description                                                                                      |
| ------------------------- | ---------- | -------------- | ------------------------------------------------------------------------------------------------ |
| `icon`                    | `IconType` | Required       | The main icon to display                                                                         |
| `altIcon`                 | `IconType` | -              | Alternative icon that can be used for states, interactions, animations, or dynamic icon swapping |
| `showAlt`                 | `boolean`  | `false`        | When true, displays the altIcon instead of the main icon                                         |
| `size`                    | `number`   | `24`           | Icon size in pixels                                                                              |
| `color`                   | `string`   | `currentColor` | Icon color (CSS color value)                                                                     |
| `primaryColor`            | `string`   | `currentColor` | Primary color for multicolor icons (Bulk, Duotone, Twotone styles)                               |
| `secondaryColor`          | `string`   | -              | Secondary color for multicolor icons (Bulk, Duotone, Twotone styles)                             |
| `disableSecondaryOpacity` | `boolean`  | `false`        | When true, disables the default opacity applied to the secondary color                           |
| `strokeWidth`             | `number`   | `1.5`          | Width of the icon strokes (works with stroke-style icons)                                        |
| `className`               | `string`   | -              | Additional CSS classes                                                                           |

> Icons are selected by property name, not by props.

### Example.

```tsx
<Icons.SearchIcon size={20} />
<Icons.PlusSignIcon primaryColor="#0ea5e9" />
```

This keeps usage simple and prevents invalid icon values at runtime.

## License

MIT
