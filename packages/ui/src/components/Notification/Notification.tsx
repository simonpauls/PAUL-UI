import clsx from "clsx";
import { IconX } from "../../icons";
import { DestructiveIconButton, IconButton } from "../IconButton";
import type { ReactNode } from "react";
import "./notification.css";

type NotificationVariant = "message" | "alert";

export type NotificationProps = React.ComponentPropsWithoutRef<"div"> & {
  isDismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
  variant?: NotificationVariant;
};
export function Notification({
  children,
  className,
  isDismissible,
  onDismiss,
  icon,
  variant = "message",
  ...props
}: NotificationProps) {
  const classNames = clsx(
    className,
    "notification",
    `notification-variant-${variant}`,
  );
  return (
    <div className={classNames} {...props}>
      {icon && <span className="notification-icon">{icon}</span>}
      <div className="notification-content">{children}</div>
      {isDismissible &&
        (variant === "alert" ? (
          <DestructiveIconButton
            size="small"
            variant="danger-subtle"
            aria-label="Dismiss notification"
            onPress={onDismiss}
          >
            <IconX />
          </DestructiveIconButton>
        ) : (
          <IconButton
            size="small"
            variant="subtle"
            aria-label="Dismiss notification"
            onPress={onDismiss}
          >
            <IconX />
          </IconButton>
        ))}
    </div>
  );
}
