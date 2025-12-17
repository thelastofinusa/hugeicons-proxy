import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import * as HugeiconsCore from "@hugeicons/core-free-icons";

type HugeiconsBaseProps = React.ComponentProps<typeof HugeiconsIcon>;
type IconProps = Omit<HugeiconsBaseProps, "icon">;

type IconComponent = (props: IconProps) => React.JSX.Element;

type IconRegistry = {
  [Key in keyof typeof HugeiconsCore]: IconComponent;
};

/**
 * Icons namespace for Hugeicons.
 *
 * Access any Hugeicons core icon as a typed React component by name.
 * Example. Icons.PlusSign Icons.Search Icons.FolderOpen
 *
 * Source icons and documentation.
 * https://hugeicons.com/icons
 */
const Icons = new Proxy({} as IconRegistry, {
  get(_, iconName: string) {
    const iconDefinition = (HugeiconsCore as Record<string, unknown>)[iconName];

    if (!iconDefinition) return undefined;

    return (props: IconProps) =>
      React.createElement(HugeiconsIcon, {
        ...props,
        icon: iconDefinition as any,
      });
  },
});

export { Icons, type IconRegistry };
