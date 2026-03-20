import { useMediaQuery } from "../../../hooks";
import { Flex, FlexItem } from "../../layout/Flex/Flex";
import { Section, type SectionProps } from "../../layout/Section/Section";
import { Logo } from "../../Logo";
import { TextLink, TextLinkList, TextListItem, TextStrong } from "../../Text";

export type FooterProps = Omit<SectionProps, "variant" | "padding" | "src">;

export function Footer({ className, ...props }: FooterProps) {
  const { isTabletDown } = useMediaQuery();
  const listDensity = isTabletDown ? "tight" : "default";
  return (
    <Section
      elementType="footer"
      variant="brand"
      paddingTop="1600"
      paddingBottom="4000"
      style={{ marginTop: "auto" }}
      {...props}
    >
      <Flex wrap type="quarter" gap="600" container>
        <FlexItem size="minor">
          <Flex direction="column" gap="600" alignSecondary="start">
            <FlexItem>
              <Logo className="footer-logo" />
            </FlexItem>
            <TextLinkList density={listDensity}>
              <TextListItem>
                <TextLink href="https://www.figma.com">figma.com</TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.x.com/figma">X</TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://instagram.com/figma">
                  Instagram
                </TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.youtube.com/@Figma">
                  YouTube
                </TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.linkedin.com/company/figma/">
                  LinkedIn
                </TextLink>
              </TextListItem>
            </TextLinkList>
          </Flex>
        </FlexItem>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Use cases</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">UI design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">UX design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Wireframing</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Diagramming</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Brainstorming</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Online whiteboard</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Team collaboration</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Explore</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Prototyping</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Development features</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Design systems</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Collaboration features</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Design process</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">FigJam</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Resources</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Blog</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Best practices</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Colors</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Color wheel</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Support</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Developers</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Resource library</TextLink>
          </TextListItem>
        </TextLinkList>
      </Flex>
    </Section>
  );
}
