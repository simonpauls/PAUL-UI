import React from "react";
import { 
  Flex, 
  TextTitlePage, 
  TextSubtitle, 
  Card, 
  TextHeading, 
  Table, 
  TableHead, 
  TableBody, 
  TableColumn, 
  TableRow, 
  TableCell,
  CheckboxField,
  Button,
  TextSmall
} from "@paul/ui";

export const RolesPermissions = () => {
  const permissions = [
    "View Dashboard",
    "Manage Users",
    "Edit Content",
    "View Reports",
    "Manage Billing",
    "API Access",
  ];

  const roles = [
    { name: "Admin", permissions: [0, 1, 2, 3, 4, 5] },
    { name: "Editor", permissions: [0, 2, 3] },
    { name: "Viewer", permissions: [0, 3] },
  ];

  return (
    <Flex direction="column" gap="800">
      <header>
        <Flex alignPrimary="space-between" alignSecondary="end">
          <div>
            <TextTitlePage>Roles & Permissions</TextTitlePage>
            <TextSubtitle>Define access levels and system permissions for your team.</TextSubtitle>
          </div>
          <Button variant="primary">Add Role</Button>
        </Flex>
      </header>

      <Card variant="stroke" padding="600">
        <Flex direction="column" gap="600">
          <TextHeading>Permission Matrix</TextHeading>
          
          <Table aria-label="Permission Matrix" grid>
            <TableHead>
              <TableColumn>Permission</TableColumn>
              {roles.map(role => (
                <TableColumn key={role.name} align="center">{role.name}</TableColumn>
              ))}
            </TableHead>
            <TableBody>
              {permissions.map((perm, pIndex) => (
                <TableRow key={perm}>
                  <TableCell>
                    <Flex direction="column">
                      <TextSmall style={{ fontWeight: "600" }}>{perm}</TextSmall>
                      <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)" }}>Allows user to {perm.toLowerCase()}</TextSmall>
                    </Flex>
                  </TableCell>
                  {roles.map(role => (
                    <TableCell key={role.name} align="center">
                      <CheckboxField 
                        isSelected={role.permissions.includes(pIndex)} 
                        aria-label={`${perm} for ${role.name}`}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Flex alignPrimary="end" style={{ marginTop: 24 }}>
            <Button variant="neutral" style={{ marginRight: 12 }}>Reset</Button>
            <Button variant="primary">Save Changes</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
