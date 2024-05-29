import * as React from "react";
import Layout from "../../../layout";
import { Box, Container, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../../components/Breadcrumbs/custormbreadcrumbs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HowTraxiWork() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Container style={{ padding: "100px 0" }}>
        <CustomBreadcrumbs firstBreadcrumbs="ve-chung-toi" firstText="Về chúng tôi" secondText="Cách TraXi hoạt động"></CustomBreadcrumbs>

        <div style={{ paddingTop: "54px", paddingBottom: "54px" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", paddingBottom: "115px", color: "primary.main" }}>
            Quy chế hoạt động và Điều khoản sử dụng
          </Typography>
        </div>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={(_, newValue) => handleChange(newValue)} // Sử dụng "_" để bỏ qua biến không sử dụng
            aria-label="basic tabs example"
            sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
          >
            <Tab label="Quy chế hoạt động" {...a11yProps(0)} />
            <Tab label="Điều khoản và điều kiện sử dụng ứng dụng" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
      </Container>
    </Layout>
  );
}
