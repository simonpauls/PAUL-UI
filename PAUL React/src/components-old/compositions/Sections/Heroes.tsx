import { Flex, type FlexProps } from "../../layout/Flex/Flex";
import { Section, type SectionProps } from "../../layout/Section/Section";

export type HeroProps = SectionProps & { flexProps?: FlexProps };
export function Hero({ children, flexProps, ...sectionProps }: HeroProps) {
  return (
    <Section padding="1600" {...sectionProps}>
      <Flex
        container
        alignPrimary="center"
        alignSecondary="center"
        direction="column"
        gap="600"
        {...flexProps}
      >
        {children}
      </Flex>
    </Section>
  );
}
