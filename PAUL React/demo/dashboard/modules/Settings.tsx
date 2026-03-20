import React, { useState } from "react";
import { Flex, TextTitlePage, TextSubtitle, Card, TextHeading, SwitchField, Text, TextSmall } from "@paul/ui";

export const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (isSelected: boolean) => {
    setIsDarkMode(isSelected);
    document.documentElement.classList.toggle("dark", isSelected);
  };

  return (
    <Flex direction="column" gap="800">
      <header>
        <TextTitlePage>Settings</TextTitlePage>
        <TextSubtitle>Manage your account settings and preferences.</TextSubtitle>
      </header>

      <Card variant="stroke" padding="800">
        <TextHeading>Appearance</TextHeading>
        <Flex direction="column" gap="600" style={{ marginTop: 24 }}>
          <Flex alignPrimary="space-between" alignSecondary="center">
            <div>
              <Text>Dark Mode</Text>
              <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)" }}>
                Adjust the appearance of the dashboard to reduce eye strain.
              </TextSmall>
            </div>
            <SwitchField isSelected={isDarkMode} onChange={toggleDarkMode} aria-label="Dark Mode" />
          </Flex>

          <Flex alignPrimary="space-between" alignSecondary="center">
            <div>
              <Text>Compact View</Text>
              <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)" }}>
                Display more content on the screen with less padding.
              </TextSmall>
            </div>
            <SwitchField aria-label="Compact View" />
          </Flex>
        </Flex>
      </Card>

      <Card variant="stroke" padding="800">
        <TextHeading>Notifications</TextHeading>
        <Flex direction="column" gap="600" style={{ marginTop: 24 }}>
          <Flex alignPrimary="space-between" alignSecondary="center">
            <div>
              <Text>Email Notifications</Text>
              <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)" }}>
                Receive updates about your account via email.
              </TextSmall>
            </div>
            <SwitchField defaultSelected aria-label="Email Notifications" />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
