import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Logo from "../logo";
import { StarBorder, AccountCircle, Place } from "@mui/icons-material";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import InfoIcon from "@mui/icons-material/Info";
import Person4Icon from "@mui/icons-material/Person4";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RuleIcon from "@mui/icons-material/Rule";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BookIcon from "@mui/icons-material/Book";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Đơn vị liên kết", url: "/don-vi-lien-ket-cung-visafe/" },
  { name: "Trung tâm hỗ trợ", url: "/trung-tam-ho-tro/" },
  { name: "Liên hệ", url: "/lien-he/" },
];

interface MenuOption {
  name: string;
  icon: JSX.Element;
  url: string;
}

interface MenuOptions {
  [key: string]: MenuOption[];
}

const menuOptions: MenuOptions = {
  "Về chúng tôi": [
    { name: "Tin Tưởng và An Toàn", icon: <SafetyCheckIcon />, url: "/ve-chung-toi/privacy-policy/" },
    { name: "Cách TraXi hoạt động", icon: <InfoIcon />, url: "/ve-chung-toi/cach-traxi-hoat-dong/" },
    { name: "Điểm nhận hồ sơ đối tác", icon: <Person4Icon />, url: "/ve-chung-toi/diem-nhan-ho-so-doi-tac/" },
  ],
  "Tài xế": [
    { name: "Tư vấn đối tác TraXi", icon: <ContactSupportIcon />, url: "/tai-xe/tu-van-doi-tac-traxi/" },
    { name: "Qui trình sử dụng App TraXi", icon: <StarBorder />, url: "/tai-xe/quy-trinh-su-dung-app-traxi/" },
    { name: "Trung tâm hỗ trợ đối tác TraXi", icon: <SupportAgentIcon />, url: "/tai-xe/trung-tam-ho-tro-doi-tac-tai-xe-traxi/" },
  ],
  "Người dùng": [
    { name: "Thông tin đăng kí", icon: <AccountCircle />, url: "/nguoi-dung/thong-tin-dang-ki/" },
    { name: "Tìm tài xế", icon: <Person4Icon />, url: "/nguoi-dung/tim-tai-xe-lai-xe-ho/" },
    { name: "Qui trình đặt tài xế lái xe hộ TraXi", icon: <StarBorder />, url: "/nguoi-dung/quy-trinh-dat-tai-xe-   lai-xe-ho-traxi/" },
    { name: "Qui tắc ứng xử Khách hàng", icon: <RuleIcon />, url: "/nguoi-dung/quy-tac-ung-xu-khach-hang/" },
  ],
  "Chuyên mục": [
    { name: "Tin tức", icon: <NewspaperIcon />, url: "/chuyen-muc/tin-tuc/" },
    { name: "Khu vực hoạt động", icon: <Place />, url: "/chuyen-muc/khu-vuc-hoat-dong/" },
    { name: "TraXi Blog", icon: <BookIcon />, url: "/chuyen-muc/traxi-blog/" },
    { name: "Tin tức khuyến mãi", icon: <LocalOfferIcon />, url: "/chuyen-muc/tin-tuc-khuyen-mai/" },
  ],
};

export default function DrawerAppBar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMenu, setSelectedMenu] = useState("");
  const navigate = useNavigate();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleNavItemClick = (url: string) => {
    navigate(url);
    setMobileOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedMenu(menu);
  };
  const handleClose = (url?: string) => {
    setAnchorEl(null);
    setSelectedMenu("");
    if (url) navigate(url);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => handleNavItemClick(item.url)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Logo />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
              {Object.keys(menuOptions).map((item) => (
                <div key={item} style={{ marginRight: "8px" }}>
                  <Button
                    sx={{ color: "#fff" }}
                    aria-controls={selectedMenu === item ? "menu-" + item : undefined}
                    aria-haspopup="true"
                    aria-expanded={selectedMenu === item ? "true" : undefined}
                    onClick={(e) => handleClick(e, item)}
                    endIcon={<KeyboardDoubleArrowDownIcon />}
                  >
                    {item}
                  </Button>
                  <Menu id={"menu-" + item} anchorEl={anchorEl} open={selectedMenu === item} onClose={() => handleClose()}>
                    {menuOptions[item].map((option) => (
                      <React.Fragment key={option.name}>
                        <MenuItem onClick={() => handleClose(option.url)}>
                          <ListItemIcon>{option.icon}</ListItemIcon>
                          {option.name}
                        </MenuItem>
                      </React.Fragment>
                    ))}
                  </Menu>
                </div>
              ))}
              {navItems
                .filter((item) => !Object.keys(menuOptions).some((key) => menuOptions[key].some((option) => option.name === item.name)))
                .map((item) => (
                  <Button key={item.name} sx={{ color: "#fff", mr: 2 }} onClick={() => navigate(item.url)}>
                    {item.name}
                  </Button>
                ))}
            </Box>
            <Button variant="contained" color="success" size="large" sx={{ borderRadius: 10 }}>
              Tải App
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
