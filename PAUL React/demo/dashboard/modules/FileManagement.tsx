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
  IconButton,
  InputField
} from "@paul/ui";
import * as Icons from "@paul/ui";

export const FileManagement = () => {
  const [files] = useState([
    { name: "Brand Guidelines.pdf", size: "2.4 MB", type: "pdf", date: "Mar 15, 2026" },
    { name: "Dashboard Mockups.fig", size: "12.8 MB", type: "figma", date: "Mar 12, 2026" },
    { name: "Q1 Report.xlsx", size: "850 KB", type: "excel", date: "Mar 10, 2026" },
    { name: "Hero Image.png", size: "1.2 MB", type: "image", date: "Mar 08, 2026" },
    { name: "Team Photo.jpg", size: "3.5 MB", type: "image", date: "Mar 05, 2026" },
  ]);

  return (
    <Flex direction="column" gap="800">
      <header>
        <Flex alignPrimary="space-between" alignSecondary="end">
          <div>
            <TextTitlePage>File Management</TextTitlePage>
            <TextSubtitle>Upload, organize, and share your project assets.</TextSubtitle>
          </div>
          <Button variant="primary">
            <Icons.IconUpload size="16" /> Upload File
          </Button>
        </Flex>
      </header>

      <Grid columns="quarter" gap="400">
        <Card variant="stroke" padding="600">
          <Flex alignSecondary="center" gap="400">
            <div style={{ padding: 12, borderRadius: 8, background: "var(--paul-color-brand-tertiary)", color: "var(--paul-color-brand-default)" }}>
              <Icons.IconFileText size="24" />
            </div>
            <div>
              <TextHeading style={{ margin: 0 }}>1,240</TextHeading>
              <TextSmall>Total Files</TextSmall>
            </div>
          </Flex>
        </Card>
        <Card variant="stroke" padding="600">
          <Flex alignSecondary="center" gap="400">
            <div style={{ padding: 12, borderRadius: 8, background: "var(--paul-color-positive-tertiary)", color: "var(--paul-color-positive-default)" }}>
              <Icons.IconHardDrive size="24" />
            </div>
            <div>
              <TextHeading style={{ margin: 0 }}>45.2 GB</TextHeading>
              <TextSmall>Storage Used</TextSmall>
            </div>
          </Flex>
        </Card>
      </Grid>

      <Card variant="stroke" padding="600">
        <Flex direction="column" gap="600">
          <Flex gap="400" alignSecondary="center">
            <div style={{ flex: 1 }}>
              <InputField placeholder="Search files..." aria-label="Search files" />
            </div>
            <Button variant="neutral"><Icons.IconFilter size="16" /> Filter</Button>
          </Flex>

          <Grid columns="quarter" gap="600">
            {files.map((file, i) => (
              <Card key={i} variant="stroke" padding="600" style={{ cursor: "pointer" }}>
                <Flex direction="column" alignPrimary="center" gap="300" style={{ textAlign: "center" }}>
                  <div style={{ color: "var(--paul-color-text-default-tertiary)" }}>
                    <Icons.IconFile size="48" />
                  </div>
                  <div>
                    <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 4 }}>{file.name}</Text>
                    <TextSmall style={{ color: "var(--paul-color-text-default-tertiary)" }}>{file.size} • {file.date}</TextSmall>
                  </div>
                  <Flex gap="200">
                    <IconButton aria-label="Download"><Icons.IconDownload size="16" /></IconButton>
                    <IconButton aria-label="More options"><Icons.IconMoreVertical size="16" /></IconButton>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Card>
    </Flex>
  );
};
