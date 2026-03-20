import React, { useState } from "react";
import { 
  Flex, 
  TextTitlePage, 
  TextSubtitle, 
  Button, 
  Table, 
  TableHead, 
  TableBody, 
  TableColumn, 
  TableRow, 
  TableCell,
  Card,
  Input,
  Dialog,
  DialogTrigger,
  DialogModal,
  TextHeading,
  IconButton,
  InputField,
  SelectField,
  SelectItem
} from "@paul/ui";
import * as Icons from "@paul/ui";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const INITIAL_USERS: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Admin", status: "Active" },
  { id: 5, name: "Ethan Hunt", email: "ethan@example.com", role: "Editor", status: "Active" },
];

export const UserManagement = () => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <Flex direction="column" gap="800">
      <header>
        <Flex alignPrimary="space-between" alignSecondary="end">
          <div>
            <TextTitlePage>User Management</TextTitlePage>
            <TextSubtitle>Manage your team members and their access levels.</TextSubtitle>
          </div>
          
          <DialogTrigger>
            <Button variant="primary">
              <Icons.IconPlus size="16" /> Add User
            </Button>
            <DialogModal>
              <Dialog>
                {({ close }) => (
                  <Flex direction="column" gap="600" style={{ padding: 24 }}>
                    <TextHeading>Add New User</TextHeading>
                    <Flex direction="column" gap="400">
                      <InputField label="Full Name" placeholder="Jane Doe" isRequired />
                      <InputField label="Email Address" type="email" placeholder="jane@example.com" isRequired />
                      <SelectField label="Role" defaultSelectedKey="editor">
                        <SelectItem id="admin">Admin</SelectItem>
                        <SelectItem id="editor">Editor</SelectItem>
                        <SelectItem id="viewer">Viewer</SelectItem>
                      </SelectField>
                    </Flex>
                    <Flex alignPrimary="end" gap="400" style={{ marginTop: 24 }}>
                      <Button variant="neutral" onPress={close}>Cancel</Button>
                      <Button variant="primary" onPress={close}>Create User</Button>
                    </Flex>
                  </Flex>
                )}
              </Dialog>
            </DialogModal>
          </DialogTrigger>
        </Flex>
      </header>

      <Card variant="stroke" padding="600">
        <Flex direction="column" gap="600">
          <Flex gap="400" alignSecondary="center">
            <div style={{ flex: 1 }}>
              <Input 
                placeholder="Search users..." 
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <Button variant="neutral">Filters</Button>
          </Flex>

          <Table aria-label="Users" selectionMode="multiple">
            <TableHead>
              <TableColumn allowsSorting>Name</TableColumn>
              <TableColumn allowsSorting>Email</TableColumn>
              <TableColumn allowsSorting>Role</TableColumn>
              <TableColumn allowsSorting>Status</TableColumn>
              <TableColumn align="right">Actions</TableColumn>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span style={{ 
                      padding: "2px 8px", 
                      borderRadius: "12px", 
                      fontSize: "12px",
                      background: user.status === "Active" ? "var(--paul-color-positive-tertiary)" : "var(--paul-color-gray-200)",
                      color: user.status === "Active" ? "var(--paul-color-positive-default)" : "var(--paul-color-gray-600)"
                    }}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    <Flex alignPrimary="end" gap="200">
                      <IconButton aria-label="Edit"><Icons.IconEdit2 size="16" /></IconButton>
                      <IconButton aria-label="Delete" onPress={() => deleteUser(user.id)}><Icons.IconTrash2 size="16" /></IconButton>
                    </Flex>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Flex>
      </Card>
    </Flex>
  );
};
