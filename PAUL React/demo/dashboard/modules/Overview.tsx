import React from "react";
import { Flex, FlexItem, TextTitlePage, TextSubtitle, Card, TextHeading, Text, TextSmall, Grid } from "@paul/ui";
import * as Icons from "@paul/ui";

export const Overview = () => {
  return (
    <Flex direction="column" gap="800">
      <header>
        <TextTitlePage>Dashboard Overview</TextTitlePage>
        <TextSubtitle>Welcome back, here's what's happening with your projects today.</TextSubtitle>
      </header>

      <Grid columns="quarter" gap="400">
        {[
          { label: "Total Users", value: "12,450", trend: "+12%", icon: <Icons.IconUsers size="24" />, color: "var(--paul-color-brand-default)" },
          { label: "Revenue", value: "$45,200", trend: "+8%", icon: <Icons.IconDollarSign size="24" />, color: "var(--paul-color-positive-default)" },
          { label: "Active Sessions", value: "1,200", trend: "-3%", icon: <Icons.IconActivity size="24" />, color: "var(--paul-color-warning-default)" },
          { label: "Errors", value: "12", trend: "-25%", icon: <Icons.IconAlertCircle size="24" />, color: "var(--paul-color-danger-default)" },
        ].map((stat, i) => (
          <Card key={i} variant="stroke" padding="600">
            <Flex direction="column" gap="200">
              <Flex alignPrimary="space-between" alignSecondary="center">
                <div style={{ color: stat.color }}>{stat.icon}</div>
                <Text style={{ color: stat.trend.startsWith("+") ? "var(--paul-color-positive-default)" : "var(--paul-color-danger-default)" }}>
                  {stat.trend}
                </Text>
              </Flex>
              <div>
                <TextHeading style={{ margin: 0 }}>{stat.value}</TextHeading>
                <TextSmall>{stat.label}</TextSmall>
              </div>
            </Flex>
          </Card>
        ))}
      </Grid>

      <Grid columns="third" gap="800">
        <FlexItem size="major">
          <Card variant="stroke" padding="600" style={{ height: "100%" }}>
            <TextHeading>Recent Activity</TextHeading>
            <Flex direction="column" gap="400" style={{ marginTop: "var(--paul-size-space-400)" }}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Flex key={item} gap="400" alignSecondary="center">
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paul-color-brand-default)" }} />
                  <div style={{ flex: 1 }}>
                    <Text>User {item} updated their profile</Text>
                    <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)" }}>2 hours ago</TextSmall>
                  </div>
                </Flex>
              ))}
            </Flex>
          </Card>
        </FlexItem>
        <FlexItem size="minor">
          <Card variant="stroke" padding="600" style={{ height: "100%" }}>
            <TextHeading>System Status</TextHeading>
            <Flex direction="column" gap="400" style={{ marginTop: "var(--paul-size-space-400)" }}>
              <Flex alignPrimary="space-between">
                <Text>API Server</Text>
                <Text style={{ color: "var(--paul-color-positive-default)" }}>Online</Text>
              </Flex>
              <Flex alignPrimary="space-between">
                <Text>Database</Text>
                <Text style={{ color: "var(--paul-color-positive-default)" }}>Online</Text>
              </Flex>
              <Flex alignPrimary="space-between">
                <Text>Auth Service</Text>
                <Text style={{ color: "var(--paul-color-positive-default)" }}>Online</Text>
              </Flex>
            </Flex>
          </Card>
        </FlexItem>
      </Grid>
    </Flex>
  );
};
