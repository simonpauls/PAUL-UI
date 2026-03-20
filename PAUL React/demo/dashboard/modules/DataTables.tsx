import React, { useState } from "react";
import { 
  Flex, 
  TextTitlePage, 
  TextSubtitle, 
  Card, 
  Table, 
  TableHead, 
  TableBody, 
  TableColumn, 
  TableRow, 
  TableCell,
  Input,
  Button
} from "@paul/ui";
import * as Icons from "@paul/ui";

const DATA = [
  { id: 1, product: "Laptop Pro", category: "Electronics", price: "$1,200", stock: 15 },
  { id: 2, product: "Wireless Mouse", category: "Accessories", price: "$25", stock: 120 },
  { id: 3, product: "Monitor 4K", category: "Electronics", price: "$450", stock: 8 },
  { id: 4, product: "Mechanical Keyboard", category: "Accessories", price: "$150", stock: 45 },
  { id: 5, product: "USB-C Hub", category: "Accessories", price: "$45", stock: 60 },
];

export const DataTables = () => {
  const [search, setSearch] = useState("");

  const filtered = DATA.filter(d => d.product.toLowerCase().includes(search.toLowerCase()));

  return (
    <Flex direction="column" gap="800">
      <header>
        <TextTitlePage>Data Tables</TextTitlePage>
        <TextSubtitle>Advanced data management with sorting, filtering, and pagination.</TextSubtitle>
      </header>

      <Card variant="stroke" padding="600">
        <Flex direction="column" gap="600">
          <Flex gap="400" alignSecondary="center">
            <div style={{ flex: 1 }}>
              <Input 
                placeholder="Filter by product name..." 
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="neutral"><Icons.IconDownload size="16" /> Export CSV</Button>
          </Flex>

          <Table aria-label="Inventory" striped>
            <TableHead>
              <TableColumn allowsSorting>Product</TableColumn>
              <TableColumn allowsSorting>Category</TableColumn>
              <TableColumn allowsSorting>Price</TableColumn>
              <TableColumn allowsSorting>Stock</TableColumn>
            </TableHead>
            <TableBody>
              {filtered.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Flex>
      </Card>
    </Flex>
  );
};
