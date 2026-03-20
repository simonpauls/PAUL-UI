import clsx from "clsx";
import {
  OverlayArrow as RACOverlayArrow,
  Tooltip as RACTooltip,
  type OverlayArrowProps as RACOverlayArrowProps,
  type TooltipProps as RACTooltipProps,
} from "react-aria-components";
import "./tooltip.css";

export interface TooltipProps extends RACTooltipProps {
  children: React.ReactNode;
}

export function Tooltip({
  children,
  className,
  offset = 16,
  ...props
}: TooltipProps) {
  const classNames = clsx(className, "tooltip");
  return (
    <RACTooltip className={classNames} offset={offset} {...props}>
      <TooltipOverlayArrow />
      {children}
    </RACTooltip>
  );
}

export type TooltipOverlayArrowProps = RACOverlayArrowProps;
export function TooltipOverlayArrow({
  className,
  ...props
}: TooltipOverlayArrowProps) {
  const classNames = clsx(className, "tooltip-overlay-arrow");
  return (
    <RACOverlayArrow {...props} className={classNames}>
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
    </RACOverlayArrow>
  );
}
