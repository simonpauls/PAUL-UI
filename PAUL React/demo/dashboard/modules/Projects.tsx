import React from "react";
import { 
  Flex, 
  TextTitlePage, 
  TextSubtitle, 
  Card, 
  TextHeading, 
  Accordion, 
  AccordionItem,
  ListBox,
  ListBoxItem,
  Text,
  TextSmall,
  Button,
  Grid
} from "@paul/ui";
import * as Icons from "@paul/ui";

export const Projects = () => {
  const tasks = [
    { id: 1, title: "Update brand assets", priority: "High" },
    { id: 2, title: "Review dashboard mockups", priority: "Medium" },
    { id: 3, title: "Implement dark mode", priority: "High" },
    { id: 4, title: "Fix table sorting bug", priority: "Low" },
  ];

  return (
    <Flex direction="column" gap="800">
      <header>
        <Flex alignPrimary="space-between" alignSecondary="end">
          <div>
            <TextTitlePage>Projects</TextTitlePage>
            <TextSubtitle>Track project progress and manage team tasks.</TextSubtitle>
          </div>
          <Button variant="primary">New Project</Button>
        </Flex>
      </header>

      <Grid columns="half" gap="800">
        <Flex direction="column" gap="600">
          <TextHeading>Active Projects</TextHeading>
          <Accordion>
            <AccordionItem title="E-commerce Redesign">
              <Flex direction="column" gap="400">
                <Text>Comprehensive redesign of the main shopping experience.</Text>
                <Flex alignPrimary="space-between">
                  <TextSmall>Progress: 65%</TextSmall>
                  <TextSmall>Due: April 12</TextSmall>
                </Flex>
                <div style={{ height: 8, width: "100%", background: "var(--paul-color-gray-200)", borderRadius: 4 }}>
                  <div style={{ height: "100%", width: "65%", background: "var(--paul-color-brand-default)", borderRadius: 4 }} />
                </div>
              </Flex>
            </AccordionItem>
            <AccordionItem title="Mobile App Development">
              <Text>Developing the first version of our native mobile application.</Text>
            </AccordionItem>
            <AccordionItem title="Marketing Site Updates">
              <Text>Updating the landing page with new product features.</Text>
            </AccordionItem>
          </Accordion>
        </Flex>

        <Flex direction="column" gap="600">
          <TextHeading>My Tasks</TextHeading>
          <Card variant="stroke" padding="600">
            <ListBox aria-label="Tasks" selectionMode="multiple">
              {tasks.map(task => (
                <ListBoxItem key={task.id} textValue={task.title}>
                  <Flex alignPrimary="space-between" alignSecondary="center" style={{ width: "100%" }}>
                    <Text>{task.title}</Text>
                    <span style={{ 
                      padding: "2px 8px", 
                      borderRadius: 12, 
                      fontSize: 10, 
                      background: task.priority === "High" ? "var(--paul-color-danger-tertiary)" : "var(--paul-color-gray-200)",
                      color: task.priority === "High" ? "var(--paul-color-danger-default)" : "var(--paul-color-text-default-secondary)"
                    }}>
                      {task.priority}
                    </span>
                  </Flex>
                </ListBoxItem>
              ))}
            </ListBox>
          </Card>
        </Flex>
      </Grid>
    </Flex>
  );
};
