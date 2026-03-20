import clsx from "clsx";
import { Flex, FlexItem } from "../../layout/Flex/Flex";
import { Section, type SectionProps } from "../../layout/Section/Section";
import { Logo } from "../../Logo";
import "./headers.css";

export type HeaderProps = Omit<SectionProps, "variant" | "padding" | "src">;

export function Header({ className, children, ...props }: HeaderProps) {
  const classNames = clsx(className, "header");
  return (
    <Section
      className={classNames}
      elementType="header"
      variant="stroke"
      padding={"800"}
      {...props}
    >
      <Flex container alignPrimary="space-between" alignSecondary="center">
        <FlexItem size="minor">
          <Logo />
        </FlexItem>
        <FlexItem size="major">
          <Flex gap="600" alignPrimary="end" alignSecondary="center">
            {children}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
