import { ReactNode } from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "../components/sidebar";
import Footer from "../components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
    // sx={{
    //   backgroundColor: "#10141F",
    //   display: "flex",
    //   flexDirection: {
    //     xs: "column",
    //     lg: "row",
    //   },
    //   color: "white",
    //   padding: 3,
    //   gap: 3,
    //   overflowY: "hidden",
    //   height: "100vh",
    // }}
    >
      <ResponsiveAppBar />

      <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>

      <Footer />
    </Box>
  );
};

export default Layout;
