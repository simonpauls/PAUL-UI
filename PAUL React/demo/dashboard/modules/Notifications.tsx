import React, { useState } from "react";
import { Flex, TextTitlePage, TextSubtitle, Button, Notification, Card, TextHeading } from "@paul/ui";
import * as Icons from "@paul/ui";

interface Toast {
  id: number;
  message: string;
  variant: "message" | "alert";
}

export const Notifications = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (variant: "message" | "alert") => {
    const id = Date.now();
    const message = variant === "message" ? "Successfully saved!" : "Something went wrong.";
    setToasts([...toasts, { id, message, variant }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <Flex direction="column" gap="800">
      <header>
        <TextTitlePage>Notifications</TextTitlePage>
        <TextSubtitle>Configure your alert preferences and test system notifications.</TextSubtitle>
      </header>

      <Card variant="stroke" padding="800">
        <TextHeading>Test Toasts</TextHeading>
        <Flex gap="400" style={{ marginTop: 24 }}>
          <Button variant="primary" onPress={() => addToast("message")}>
            Show Success Toast
          </Button>
          <Button variant="neutral" onPress={() => addToast("alert")}>
            Show Alert Toast
          </Button>
        </Flex>
      </Card>

      <Card variant="stroke" padding="800">
        <TextHeading>System Logs</TextHeading>
        <Flex direction="column" gap="400" style={{ marginTop: 24 }}>
          {[1, 2, 3].map(i => (
            <Notification 
              key={i} 
              variant={i % 2 === 0 ? "alert" : "message"}
              icon={i % 2 === 0 ? <Icons.IconAlertCircle size="16" /> : <Icons.IconCheck size="16" />}
              isDismissible
            >
              System update {i} was completed successfully at 10:00 AM.
            </Notification>
          ))}
        </Flex>
      </Card>

      {/* Toast Container */}
      <div style={{ position: "fixed", bottom: 24, right: 24, display: "flex", flexDirection: "column", gap: 12, zIndex: 1000 }}>
        {toasts.map(toast => (
          <Notification 
            key={toast.id} 
            variant={toast.variant}
            isDismissible
            onDismiss={() => removeToast(toast.id)}
            icon={toast.variant === "message" ? <Icons.IconCheck size="16" /> : <Icons.IconAlertCircle size="16" />}
          >
            {toast.message}
          </Notification>
        ))}
      </div>
    </Flex>
  );
};
