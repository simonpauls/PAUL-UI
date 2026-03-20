import React from "react";
import { Flex, TextTitlePage, TextSubtitle, Card, TextHeading, Grid, TextSmall } from "@paul/ui";

export const Analytics = () => {
  return (
    <Flex direction="column" gap="800">
      <header>
        <TextTitlePage>Analytics</TextTitlePage>
        <TextSubtitle>Deep dive into your application's performance and user behavior.</TextSubtitle>
      </header>

      <Grid columns="half" gap="800">
        <Card variant="stroke" padding="800">
          <TextHeading>Conversion Rate</TextHeading>
          <div style={{ height: 200, marginTop: 24, background: "var(--paul-color-gray-100)", borderRadius: 8, display: "flex", alignItems: "flex-end", padding: 16, gap: 8 }}>
            {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: "var(--paul-color-brand-default)", borderRadius: "4px 4px 0 0" }} />
            ))}
          </div>
          <Flex alignPrimary="space-between" style={{ marginTop: 8 }}>
            <TextSmall>Mon</TextSmall>
            <TextSmall>Tue</TextSmall>
            <TextSmall>Wed</TextSmall>
            <TextSmall>Thu</TextSmall>
            <TextSmall>Fri</TextSmall>
            <TextSmall>Sat</TextSmall>
            <TextSmall>Sun</TextSmall>
          </Flex>
        </Card>

        <Card variant="stroke" padding="800">
          <TextHeading>Traffic Sources</TextHeading>
          <Flex direction="column" gap="400" style={{ marginTop: 24 }}>
            {[
              { label: "Direct", value: 45, color: "var(--paul-color-brand-default)" },
              { label: "Social", value: 25, color: "var(--paul-color-positive-default)" },
              { label: "Referral", value: 20, color: "var(--paul-color-warning-default)" },
              { label: "Other", value: 10, color: "var(--paul-color-gray-400)" },
            ].map((source, i) => (
              <div key={i}>
                <Flex alignPrimary="space-between" alignSecondary="center" style={{ marginBottom: 4 }}>
                  <TextSmall>{source.label}</TextSmall>
                  <TextSmall>{source.value}%</TextSmall>
                </Flex>
                <div style={{ height: 8, width: "100%", background: "var(--paul-color-gray-200)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${source.value}%`, background: source.color }} />
                </div>
              </div>
            ))}
          </Flex>
        </Card>
      </Grid>
    </Flex>
  );
};
