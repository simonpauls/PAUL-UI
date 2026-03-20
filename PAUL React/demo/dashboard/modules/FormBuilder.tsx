import React, { useState } from "react";
import { 
  Flex, 
  TextTitlePage, 
  TextSubtitle, 
  Button, 
  Card, 
  TextHeading, 
  Form, 
  InputField, 
  SwitchField, 
  CheckboxField, 
  SelectField,
  SelectItem,
  RadioGroup,
  RadioField,
  Label,
  Grid
} from "@paul/ui";

export const FormBuilder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "editor",
    plan: "pro",
    notifications: true,
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));
  };

  return (
    <Flex direction="column" gap="800">
      <header>
        <TextTitlePage>Form Builder</TextTitlePage>
        <TextSubtitle>Create and manage dynamic forms with built-in validation.</TextSubtitle>
      </header>

      <Grid columns="half" gap="800">
        <Card variant="stroke" padding="800">
          <TextHeading>Profile Information</TextHeading>
          <Form onSubmit={handleSubmit} style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 24 }}>
            <Flex gap="400">
              <div style={{ flex: 1 }}>
                <InputField 
                  label="First Name" 
                  placeholder="John" 
                  value={formData.firstName}
                  onChange={(val: string) => setFormData({...formData, firstName: val})}
                  isRequired
                />
              </div>
              <div style={{ flex: 1 }}>
                <InputField 
                  label="Last Name" 
                  placeholder="Doe" 
                  value={formData.lastName}
                  onChange={(val: string) => setFormData({...formData, lastName: val})}
                  isRequired
                />
              </div>
            </Flex>

            <InputField 
              label="Email Address" 
              type="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={(val: string) => setFormData({...formData, email: val})}
              isRequired
              description="We'll never share your email with anyone else."
            />

            <SelectField 
              label="Role" 
              selectedKey={formData.role} 
              onSelectionChange={(key) => setFormData({...formData, role: key as string})}
            >
              <SelectItem id="admin">Admin</SelectItem>
              <SelectItem id="editor">Editor</SelectItem>
              <SelectItem id="viewer">Viewer</SelectItem>
            </SelectField>

            <RadioGroup 
              label="Subscription Plan" 
              value={formData.plan} 
              onChange={(val: string) => setFormData({...formData, plan: val})}
            >
              <Flex direction="column" gap="200">
                <RadioField value="free">Free</RadioField>
                <RadioField value="pro">Pro ($19/mo)</RadioField>
                <RadioField value="enterprise">Enterprise</RadioField>
              </Flex>
            </RadioGroup>

            <Flex direction="column" gap="400">
              <Label>Preferences</Label>
              <SwitchField 
                label="Push Notifications" 
                isSelected={formData.notifications}
                onChange={(val: boolean) => setFormData({...formData, notifications: val})}
              />
              <CheckboxField 
                label="Subscribe to newsletter"
                isSelected={formData.newsletter} 
                onChange={(val: boolean) => setFormData({...formData, newsletter: val})}
              />
            </Flex>

            <Button variant="primary" type="submit" style={{ alignSelf: "flex-start" }}>
              Save Profile
            </Button>
          </Form>
        </Card>

        <Card variant="stroke" padding="800">
          <TextHeading>Form Preview (JSON)</TextHeading>
          <pre style={{ 
            marginTop: 24, 
            padding: 16, 
            background: "var(--paul-color-gray-100)", 
            borderRadius: 8,
            overflow: "auto",
            fontSize: 14,
            fontFamily: "monospace"
          }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </Card>
      </Grid>
    </Flex>
  );
};
