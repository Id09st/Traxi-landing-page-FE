import Layout from "../../../layout";
import { Container, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../../components/Breadcrumbs/custormbreadcrumbs";

export default function DriverPartnerSupportCenter() {
  const locationDetails = {
    paddingBottom: "15px",
    color: "text.secondary",
    "&::marker": {
      color: "primary.main",
      fontSize: "1.5em",
      unicodeBidi: "isolate",
      fontVariantNumeric: "tabular-nums",
      textTransform: "none",
      textIndent: "0px !important",
      textAlign: "start !important",
      textAlignLast: "start !important",
    },
  };
  const hotline = { paddingBottom: "15px", color: "text.secondary" };
  const icon = {
    display: "inline",
    border: "none",
    boxShadow: "none",
    height: "1em",
    width: "1em",
    margin: "0 0.07em",
    verticalAlign: "-0.1em",
    background: "none",
    padding: "0",
  };

  return (
    <Layout>
      <Container style={{ padding: "100px 0" }}>
        <CustomBreadcrumbs
          firstBreadcrumbs="ve-chung-toi"
          firstText="Về chúng tôi"
          secondText="Trung tâm hỗ trợ đối tác tài xế TraXi"
        ></CustomBreadcrumbs>
        <div style={{ padding: "54px 0" }}>
          <div style={{ padding: "27px 0" }}>
            <Typography variant="h5" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
              Trung tâm hỗ trợ đối tác tài xế TraXi
            </Typography>
            <img style={{ padding: "15px 0" }} src="https://visafe.com.vn/wp-content/uploads/2020/07/Shape-6.png" />
            <Typography variant="subtitle1" sx={{ paddingBottom: "15px !important", color: "text.secondary" }}>
              Sau khi tài xế đã hoàn tất các thủ tục thì sẽ nhận được mã xác minh của ViSafe để kích hoạt tài khoản tài xế, có thể bắt đầu
              nhận chuyến.
            </Typography>
            <Typography variant="h6" sx={{ paddingBottom: "10px", textTransform: "uppercase", fontWeight: "bold" }}>
              Nhận mã kích hoạt tài khoản tại công ty công nghệ TraXi
            </Typography>
            <Typography variant="subtitle1" sx={locationDetails}>
              <img style={icon} src="https://s.w.org/images/core/emoji/14.0.0/svg/1f3e0.svg" />
              <strong>Chi nhánh Hồ Chí Minh:</strong> Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
            </Typography>
            <Typography variant="subtitle1" sx={hotline}>
              <img style={icon} alt="☎️" src="https://s.w.org/images/core/emoji/14.0.0/svg/260e.svg" />
              <strong>Hotline Hồ Chí Minh:</strong> <span style={{ color: "#007bff", fontWeight: "bold" }}>0123456789</span>
            </Typography>
            <Typography variant="subtitle1" sx={locationDetails}>
              <img style={icon} src="https://s.w.org/images/core/emoji/14.0.0/svg/1f3e0.svg" />
              <strong>Chi nhánh Bình Dương:</strong> Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương
            </Typography>
            <Typography variant="subtitle1" sx={hotline}>
              <img style={icon} alt="☎️" src="https://s.w.org/images/core/emoji/14.0.0/svg/260e.svg" />
              <strong>Hotline Bình Dương:</strong> <span style={{ color: "#007bff", fontWeight: "bold" }}>0123456789</span>
            </Typography>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
