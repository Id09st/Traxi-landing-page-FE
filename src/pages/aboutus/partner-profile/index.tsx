import Layout from "../../../layout";
import CustomBreadcrumbs from "../../../components/Breadcrumbs/custormbreadcrumbs";
import { Container, Grid, Typography, Box, Link } from "@mui/material";

export default function PartnerProfile() {
  const locationTitle = {
    fontWeight: "bold",
    paddingBottom: "15px",
    paddingLeft: "20px",
    textTransform: "uppercase",
    position: "relative",
    "&::before": {
      content: '"\\2022"',
      color: "primary.main",
      fontWeight: 700,
      display: "inline-block",
      fontSize: "22px",
      top: 0,
      left: 0,
      position: "absolute",
    },
  };
  const locationDetail = { pb: "10px", pl: "20px", position: "relative", color: "text.secondary" };
  const hotline = { pb: "10px", pl: "20px", position: "relative", color: "text.secondary" };

  return (
    <Layout>
      <Container style={{ padding: "100px 0" }}>
        <CustomBreadcrumbs firstBreadcrumbs="ve-chung-toi" firstText="Về chúng tôi" secondText="Điểm nhận hồ sơ đối tác" />

        <Box sx={{ py: "50px", maxWidth: "1170px", mx: "auto" }}>
          <Typography variant="h3" sx={{ color: "primary.main", paddingBottom: "35px", margin: "0" }}>
            Các điểm nhận hồ sơ, hoàn tất thủ tục
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: "bold", paddingBottom: "40px", margin: "0" }}>
            Địa điểm đăng ký và hỗ trợ hồ sơ:
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }} sx={{ paddingBottom: "20px" }}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h6" sx={locationTitle}>
                Trụ sở Hồ Chí Minh:
              </Typography>
              <Typography variant="subtitle1" sx={locationDetail}>
                <strong>Địa chỉ:</strong> Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
              </Typography>
              <Typography variant="subtitle1" sx={hotline}>
                <strong>Hotline:</strong> <span style={{ color: "#007bff", fontWeight: "bold" }}>0123456789</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h6" sx={locationTitle}>
                Trụ sở Bình Dương
              </Typography>
              <Typography variant="subtitle1" sx={locationDetail}>
                <strong>Địa chỉ:</strong> Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương
              </Typography>
              <Typography variant="subtitle1" sx={hotline}>
                <strong>Hotline:</strong> <span style={{ color: "#007bff", fontWeight: "bold" }}>0123456789</span>
              </Typography>
            </Grid>
          </Grid>

          <Link href="/quy-trinh-tro-thanh-tai-xe-traxi">Thông tin chi tiết tại đây...</Link>
        </Box>
      </Container>
    </Layout>
  );
}
