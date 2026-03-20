import React, { ForwardedRef, forwardRef } from "react";
import {
  Button as RACButton,
  Link as RACLink,
  type ButtonProps as RACButtonProps,
  type LinkProps as RACLinkProps,
} from "react-aria-components";

export type AnchorOrButtonSharedProps = {
  children?: React.ReactNode;
  href?: string;
};

export type AnchorOrButtonProps = (RACButtonProps | RACLinkProps) &
  AnchorOrButtonSharedProps;

function isAnchorProps(
  props: AnchorOrButtonProps,
): props is RACLinkProps & AnchorOrButtonSharedProps {
  return "href" in props;
}

export const AnchorOrButton = forwardRef(function AnchorOrButton(
  props: AnchorOrButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  if (isAnchorProps(props)) {
    const { href, className, children, ...rest } = props;
    return (
      <RACLink
        {...(rest as any)}
        href={href}
        className={className}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
      >
        {children}
      </RACLink>
    );
  } else {
    const { className, children, ...rest } = props;
    return (
      <RACButton
        {...(rest as any)}
        className={className}
        ref={ref as ForwardedRef<HTMLButtonElement>}
      >
        {children}
      </RACButton>
    );
  }
});
