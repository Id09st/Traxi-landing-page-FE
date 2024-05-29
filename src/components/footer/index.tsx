import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import Logo from "../logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import NearMeIcon from "@mui/icons-material/NearMe";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <>
      <Box component="footer" sx={{ bgcolor: "primary.dark", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ paddingTop: "13px" }}>
            <Grid item xs={12} sm={4} sx={{ paddingBottom: "32px" }}>
              <Logo />
              <Typography variant="h6" gutterBottom>
                Công Ty Của Bạn
              </Typography>
              <Typography variant="subtitle1">Mô tả ngắn gọn về công ty, sản phẩm hoặc dịch vụ của bạn.</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Liên Kết Nhanh
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link href="#" color="inherit">
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Về Chúng Tôi
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Sản Phẩm
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Liên Hệ
                  </Link>
                </li>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Divider />
            <Typography variant="h6" gutterBottom>
              Liên Hệ
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NearMeIcon color="inherit" />
              <Typography variant="subtitle1">
                Trụ sở HCM: TRƯỜNG ĐẠI HỌC FPT. Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM
              </Typography>
            </Box>
            <Typography variant="subtitle1">Email: daihoc.hcm@fpt.edu.vn</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon color="inherit" />
              <Typography variant="subtitle1">(028) 7300 5588</Typography>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "primary.main", color: "white" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center" sx={{ bgcolor: "primary.main", color: "white", py: 2 }}>
            <Grid item>
              <Typography variant="body2">Bản quyền © {new Date().getFullYear()} Công Ty Của Bạn. Mọi quyền được bảo lưu.</Typography>
            </Grid>
            <Grid item>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
