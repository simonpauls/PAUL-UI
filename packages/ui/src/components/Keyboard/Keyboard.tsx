import clsx from "clsx";
import { Text, TextProps } from "react-aria-components";

export type KeyboardProps = TextProps;
export function Keyboard({ className, children, ...props }: KeyboardProps) {
  const classNames = clsx(className, "keyboard");
  const items =
    typeof children === "string"
      ? children.split("").map((k, i) => <kbd key={i}>{k}</kbd>)
      : children;
  return (
    <Text {...props} className={classNames}>
      {items}
    </Text>
  );
}
