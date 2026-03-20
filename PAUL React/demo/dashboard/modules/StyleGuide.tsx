import React from "react";
import { 
  Flex, 
  TextTitlePage, 
  TextSubtitle, 
  Card, 
  TextHeading, 
  Text, 
  TextSmall,
  Button, 
  ButtonDanger,
  TextCode,
  Grid
} from "@paul/ui";

export const StyleGuide = () => {
  return (
    <Flex direction="column" gap="800">
      <header>
        <TextTitlePage>Style Guide</TextTitlePage>
        <TextSubtitle>A reference for PAUL React components and design patterns.</TextSubtitle>
      </header>

      <section>
        <TextHeading>Typography</TextHeading>
        <Card variant="stroke" padding="800" style={{ marginTop: 24 }}>
          <Flex direction="column" gap="600">
            <div>
              <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)", marginBottom: 8 }}>Title Page</TextSmall>
              <TextTitlePage>The quick brown fox jumps over the lazy dog</TextTitlePage>
            </div>
            <div>
              <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)", marginBottom: 8 }}>Heading</TextSmall>
              <TextHeading>The quick brown fox jumps over the lazy dog</TextHeading>
            </div>
            <div>
              <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)", marginBottom: 8 }}>Body</TextSmall>
              <Text>The quick brown fox jumps over the lazy dog. PAUL is a design system that focuses on accessibility and speed.</Text>
            </div>
          </Flex>
        </Card>
      </section>

      <section>
        <TextHeading>Buttons</TextHeading>
        <Card variant="stroke" padding="800" style={{ marginTop: 24 }}>
          <Flex direction="column" gap="800">
            <Flex gap="400" alignSecondary="center">
              <Button variant="primary">Primary</Button>
              <Button variant="neutral">Neutral</Button>
              <Button variant="subtle">Subtle</Button>
              <ButtonDanger variant="danger-primary">Danger</ButtonDanger>
            </Flex>
            
            <div>
              <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)", marginBottom: 16 }}>Code Example</TextSmall>
              <TextCode style={{ padding: 16, display: "block", background: "var(--paul-color-gray-100)", borderRadius: 8 }}>
                {`<Button variant="primary">Click Me</Button>`}
              </TextCode>
            </div>
          </Flex>
        </Card>
      </section>

      <section>
        <TextHeading>Grid System</TextHeading>
        <Card variant="stroke" padding="800" style={{ marginTop: 24 }}>
          <Grid columns="quarter" gap="400">
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ height: 60, background: "var(--paul-color-brand-tertiary)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text>Column {i}</Text>
              </div>
            ))}
          </Grid>
        </Card>
      </section>
    </Flex>
  );
};
