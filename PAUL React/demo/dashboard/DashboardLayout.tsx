import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Flex,
  FlexItem,
  Header,
  Navigation,
  NavigationButton,
  Logo,
  Text,
} from "@paul/ui";
import * as Icons from "@paul/ui";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { label: "Overview", path: "/", icon: <Icons.IconGrid size="16" /> },
    { label: "Projects", path: "/projects", icon: <Icons.IconBriefcase size="16" /> },
    { label: "Users", path: "/users", icon: <Icons.IconUsers size="16" /> },
    { label: "Roles", path: "/roles", icon: <Icons.IconShield size="16" /> },
    { label: "Calendar", path: "/calendar", icon: <Icons.IconCalendar size="16" /> },
    { label: "Files", path: "/files", icon: <Icons.IconFolder size="16" /> },
    { label: "Analytics", path: "/analytics", icon: <Icons.IconBarChart size="16" /> },
    { label: "Tables", path: "/tables", icon: <Icons.IconTable size="16" /> },
    { label: "Forms", path: "/forms", icon: <Icons.IconEdit size="16" /> },
    { label: "Notifications", path: "/notifications", icon: <Icons.IconBell size="16" /> },
    { label: "Settings", path: "/settings", icon: <Icons.IconSettings size="16" /> },
    { label: "Style Guide", path: "/style-guide", icon: <Icons.IconBookOpen size="16" /> },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      <Header style={{ flexShrink: 0 }}>
        <Flex alignPrimary="space-between" alignSecondary="center" style={{ width: "100%" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Flex gap="400" alignSecondary="center">
              <Logo />
              <Text style={{ margin: 0 }}>PAUL Dashboard</Text>
            </Flex>
          </Link>
          <Flex gap="400" alignSecondary="center">
            <NavigationButton icon={<Icons.IconSearch size="16" />} />
            <NavigationButton icon={<Icons.IconBell size="16" />} />
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--paul-color-gray-200)" }} />
          </Flex>
        </Flex>
      </Header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <aside style={{ 
          width: 240, 
          borderRight: "1px solid var(--paul-color-border-default-default)",
          padding: "var(--paul-size-space-400)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--paul-size-space-200)",
          background: "var(--paul-color-background-default-default)"
        }}>
          <Navigation direction="column" style={{ gap: "var(--paul-size-space-100)" }}>
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} style={{ textDecoration: "none" }}>
                <NavigationButton
                  direction="row"
                  isSelected={location.pathname === item.path}
                  icon={item.icon}
                  style={{ width: "100%", justifyContent: "flex-start" }}
                >
                  {item.label}
                </NavigationButton>
              </Link>
            ))}
          </Navigation>
        </aside>

        <main style={{ 
          flex: 1, 
          overflowY: "auto", 
          padding: "var(--paul-size-space-800)",
          background: "var(--paul-color-background-default-secondary)"
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};
