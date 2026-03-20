import clsx from "clsx";
import { ReactNode } from "react";
import { IconChevronDown } from "../../icons";
import {
  Button as RACButton,
  Disclosure as RACDisclosure,
  DisclosureGroup as RACDisclosureGroup,
  DisclosurePanel as RACDisclosurePanel,
  Heading as RACHeading,
  type DisclosureGroupProps as RACDisclosureGroupProps,
  type DisclosureProps as RACDisclosureProps,
} from "react-aria-components";
import "./accordion.css";

export type AccordionProps = RACDisclosureGroupProps;
export function Accordion({ className, ...props }: AccordionProps) {
  const classNames = clsx(className, "accordion");
  return <RACDisclosureGroup className={classNames} {...props} />;
}

export type AccordionItemProps = Omit<RACDisclosureProps, "children"> & {
  title: string;
  children?: ReactNode;
};
export function AccordionItem({
  className,
  title,
  children,
  ...props
}: AccordionItemProps) {
  const classNames = clsx(className, "accordion-item");
  return (
    <RACDisclosure className={classNames} {...props}>
      <RACHeading className="accordion-item-title">
        <RACButton slot="trigger">
          {title}
          <span
            role="img"
            aria-hidden="true"
            aria-label="accordion item indicator"
            className="accordion-item-indicator"
          >
            <IconChevronDown size="20" />
          </span>
        </RACButton>
      </RACHeading>
      <RACDisclosurePanel className="accordion-item-content">
        {children}
      </RACDisclosurePanel>
    </RACDisclosure>
  );
}
