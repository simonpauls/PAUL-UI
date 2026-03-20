import React, { useState } from "react";
import { 
  Flex, 
  TextTitlePage, 
  TextSubtitle, 
  Card, 
  TextHeading, 
  Grid, 
  Text, 
  TextSmall,
  Button,
  IconButton
} from "@paul/ui";
import * as Icons from "@paul/ui";

export const Calendar = () => {
  const [currentDate] = useState(new Date());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Mock data for a month
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const events = {
    5: [{ title: "Team Sync", time: "10:00 AM", type: "work" }],
    12: [{ title: "Design Review", time: "2:00 PM", type: "work" }],
    15: [{ title: "Product Launch", time: "9:00 AM", type: "launch" }],
    22: [{ title: "Interview", time: "11:30 AM", type: "hiring" }],
  };

  return (
    <Flex direction="column" gap="800">
      <header>
        <Flex alignPrimary="space-between" alignSecondary="end">
          <div>
            <TextTitlePage>Calendar</TextTitlePage>
            <TextSubtitle>Manage your schedule and upcoming project milestones.</TextSubtitle>
          </div>
          <Button variant="primary">
            <Icons.IconPlus size="16" /> Create Event
          </Button>
        </Flex>
      </header>

      <Card variant="stroke" padding="600">
        <Flex direction="column" gap="600">
          <Flex alignPrimary="space-between" alignSecondary="center">
            <TextHeading>March 2026</TextHeading>
            <Flex gap="200">
              <IconButton aria-label="Previous Month"><Icons.IconChevronLeft size="16" /></IconButton>
              <Button variant="neutral">Today</Button>
              <IconButton aria-label="Next Month"><Icons.IconChevronRight size="16" /></IconButton>
            </Flex>
          </Flex>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", borderTop: "1px solid var(--paul-color-border-default-default)" }}>
            {days.map(day => (
              <div key={day} style={{ padding: "12px", textAlign: "center", fontWeight: "600", color: "var(--paul-color-text-default-secondary)" }}>
                <TextSmall>{day}</TextSmall>
              </div>
            ))}
            {calendarDays.map(day => (
              <div key={day} style={{ 
                minHeight: 120, 
                padding: 8, 
                borderTop: "1px solid var(--paul-color-border-default-default)",
                borderRight: day % 7 === 0 ? "none" : "1px solid var(--paul-color-border-default-default)",
                background: day === 20 ? "var(--paul-color-brand-tertiary)" : "transparent"
              }}>
                <TextSmall style={{ fontWeight: day === 20 ? "bold" : "normal" }}>{day}</TextSmall>
                <Flex direction="column" gap="100" style={{ marginTop: 4 }}>
                  {events[day as keyof typeof events]?.map((event, i) => (
                    <div key={i} style={{ 
                      padding: "2px 6px", 
                      borderRadius: 4, 
                      background: "var(--paul-color-brand-default)", 
                      color: "white",
                      fontSize: 10
                    }}>
                      <Text style={{ fontSize: 10, color: "inherit", margin: 0 }}>{event.title}</Text>
                    </div>
                  ))}
                </Flex>
              </div>
            ))}
          </div>
        </Flex>
      </Card>
    </Flex>
  );
};
