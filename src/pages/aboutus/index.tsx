import { Container, Divider, Grid, Typography } from "@mui/material";
import Layout from "../../layout";
import CustomBreadcrumb from "../../components/Breadcrumbs/custormbreadcrumb";

export default function AboutUs() {
  return (
    <Layout>
      <Container style={{ padding: "100px 0" }}>
        <CustomBreadcrumb firstText="Về chúng tôi"></CustomBreadcrumb>
        <Grid container spacing={2} style={{ paddingTop: "50px" }}>
          <Grid item xs={6} md={4}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "20px",
                  width: "50%",
                  height: "55%",
                  zIndex: -1,
                  backgroundColor: "primary.light",
                },
              }}
            >
              Về chúng tôi
            </Typography>
          </Grid>
          <Grid item xs={6} md={8} style={{ paddingBottom: "50px", textAlign: "left" }}>
            <Typography variant="subtitle1" style={{ fontSize: "17px" }}>
              Chúng tôi mong muốn rằng mỗi khi bạn mở ứng dụng TRAXI, bạn sẽ đặt niềm tin vào công nghệ của chúng tôi để không chỉ kết nối
              bạn với tài xế mà còn cung cấp cho bạn các sự hỗ trợ trong trường hợp khẩn cấp. Sự tin tưởng đó là điều thúc đẩy chúng tôi
              liên tục nâng tầm, xây dựng các tính năng an toàn mới, thiết lập các nguyên tắc cho những trải nghiệm tôn trọng và tích cực...
              <br />
              Sứ mệnh của chúng tôi là mang đến cho người dùng và tài xế những giải pháp tối ưu nhất. Chúng tôi muốn những điều tốt đẹp xảy
              ra khi mọi người có thể di chuyển an toàn với sự trợ giúp công nghệ của chúng tôi.
            </Typography>
          </Grid>

          <Grid container spacing={10} style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <img style={{ width: 500, height: 300 }} src="https://visafe.com.vn/wp-content/uploads/2020/09/090909090.jpg" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold", paddingBottom: "20px", display: "block", textAlign: "left" }}>
                Bạn là chủ xe và bạn thường chủ động lái xe hơi trong công việc hàng ngày. Nhưng bạn có việc đột xuất phải tiếp khách ở khu
                trung tâm thành phố và lo lắng chỗ đậu xe?
              </Typography>
              <Divider sx={{ borderWidth: 7, borderColor: "primary.light", width: "98%" }} />
            </Grid>
          </Grid>

          <Grid container spacing={10} style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold", paddingBottom: "20px" }}>
                Bạn là giám đốc công ty và có xe cá nhân nhưng nhu cầu dùng xe oto không nhiều nên bạn không cần làm hợp đồng thuê tài xế
                riêng theo tháng. Chỉ sử dụng khi có nhu cầu gặp đối tác hoặc khách hàng?
              </Typography>
              <Divider sx={{ borderWidth: 7, borderColor: "primary.light", width: "98%" }} />
            </Grid>
            <Grid item xs={6}>
              <img style={{ width: 500, height: 300 }} src="https://visafe.com.vn/wp-content/uploads/2020/09/2134234234.jpg" />
            </Grid>
          </Grid>

          <Grid container spacing={10} style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <img style={{ width: 500, height: 300 }} src="https://visafe.com.vn/wp-content/uploads/2020/09/abou1.jpg" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold", paddingBottom: "20px" }}>
                Buổi tiệc với bạn bè hoặc đám tiệc, bạn không tránh khỏi sử dụng đồ uống có cồn. Bạn lại ngại tham gia nhưng sẽ mất mối quan
                hệ bạn bè đồng nghiệp nếu từ chối?
              </Typography>
              <Divider sx={{ borderWidth: 7, borderColor: "primary.light", width: "98%" }} />
            </Grid>
          </Grid>

          <Grid container spacing={10} style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold", paddingBottom: "20px" }}>
                Bạn bận công việc nhưng lại có hẹn đưa gia đình đi chơi, bạn đau đầu vì chuyện này?
              </Typography>
              <Divider sx={{ borderWidth: 7, borderColor: "primary.light", width: "98%" }} />
            </Grid>
            <Grid item xs={6}>
              <img style={{ width: 500, height: 300 }} src="https://visafe.com.vn/wp-content/uploads/2020/09/51515151.jpg" />
            </Grid>
          </Grid>

          <Grid container spacing={10} style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <img style={{ width: 500, height: 300 }} src="https://visafe.com.vn/wp-content/uploads/2020/09/about2.jpg" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold", paddingBottom: "20px" }}>
                Cuối tuần này, bạn muốn đi picnic hoặc thư giãn cùng gia đình. Nhưng bạn là người cầm lái suốt chuyến đi, bạn lo lắng sẽ
                không đem trọn niềm vui đó.
              </Typography>
              <Divider sx={{ borderWidth: 7, borderColor: "primary.light", width: "98%" }} />
            </Grid>
          </Grid>
        </Grid>

        <div style={{ marginTop: "80px" }}>
          <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "20px", fontWeight: "bold" }}>
            TRAXI sẽ thay bạn làm điều đó. Sự an toàn của bạn thúc đẩy chúng tôi làm điều đó.
          </Typography>

          <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "20px", fontWeight: "bold" }}>
            Cho dù bạn là khách hàng (chủ phương tiện) , tài xế hay bất kỳ ai sử dụng TRAXI, sự an toàn của bạn sẽ thúc đẩy chúng tôi.
          </Typography>
        </div>
      </Container>
    </Layout>
  );
}
