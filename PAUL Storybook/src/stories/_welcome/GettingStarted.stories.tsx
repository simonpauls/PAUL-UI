import { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem, Section } from "layout";
import {
  Logo,
  Text,
  TextHeading,
  TextList,
  TextListItem,
} from "primitives";

const meta: Meta<typeof HTMLIFrameElement> = {
  title: "PAUL/Getting started",
};
export default meta;

export const StoryGettingStarted: StoryObj<{}> = {
  name: "Getting started",
  render: () => (
    <Section className="hello-stories">
      <Flex container type="third" alignPrimary="center">
        <FlexItem size="major">
          <Flex direction="column" gap="300">
            <Logo />
            <TextHeading>PAUL: Pattern & Asset UI Library</TextHeading>
            <Text className="hello-stories-paragraph">
              Crafted by SirPauls. The new gold standard for digital product design.
            </Text>
            <Text className="hello-stories-paragraph">
              At SirPauls, we grew rather tired of compromising. We spent years navigating fragmented component libraries, patching together inconsistent behaviours, and battling design systems that promised the world but delivered friction. We realised the industry didn't just need another UI toolkit—it needed a benchmark.
            </Text>

            <TextHeading>Enter PAUL</TextHeading>
            <Text className="hello-stories-paragraph">
              Pattern & Asset UI Library is the culmination of our relentless pursuit of perfection. It was designed to bridge the gap between bespoke design and seamless engineering. This is the foundation where we forge components that look brilliant, feel intuitive, and perform flawlessly.
            </Text>

            <TextHeading>The Vision: A New Gold Standard</TextHeading>
            <Text className="hello-stories-paragraph">
              We didn't set out to build a library that simply "works." We set out to build a system that defines how modern interfaces should behave. In a market saturated with "off-the-shelf" solutions, PAUL stands apart as a bespoke, highly-engineered foundation for those who refuse to settle for the status quo.
            </Text>
            <Text className="hello-stories-paragraph">
              Every atom within this library has been scrutinised. From the mathematical precision of our spacing scales to the psychological impact of our colour palettes, PAUL is the definitive choice for premium digital products.
            </Text>

            <div className="principles-section">
              <TextHeading className="principles-heading">Our Founding Principles</TextHeading>
              <Text className="principles-text">
                We designed this system around four core pillars to ensure it genuinely serves as the market's gold standard:
              </Text>
              <TextList className="principles-list">
                <TextListItem>
                  Uncompromising Rigour: Every pixel, state change, and micro-interaction has been intensely debated and refined. We do not settle for 'good enough'; we iterate until it is exceptional.
                </TextListItem>
                <TextListItem>
                  Inclusivity by Design: True excellence leaves absolutely no one behind. PAUL is engineered from the ground up to strictly adhere to WCAG 2.1 AA accessibility standards, ensuring a world-class experience for every user.
                </TextListItem>
                <TextListItem>
                  Intelligent Theming: A robust design token architecture that understands the subtle nuances of colour, typography, and spatial rhythm. It allows for effortless customisation without ever breaking the underlying logic.
                </TextListItem>
                <TextListItem>
                  Engineering Harmony: Built for the modern web, PAUL provides a remarkably predictable and brilliantly documented experience, allowing teams to move from concept to production with unprecedented speed and confidence.
                </TextListItem>
              </TextList>
            </div>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
};
