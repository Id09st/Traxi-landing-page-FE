import * as React from "react";
import { Container, Typography } from "@mui/material";
import Layout from "../../../layout";
import CustomBreadcrumbs from "../../../components/Breadcrumbs/custormbreadcrumbs";

interface ReasonContentProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ReasonContent: React.FC<ReasonContentProps> = ({ imageUrl, title, description }) => (
  <div style={{ width: "50%", padding: "0 25px", marginBottom: "45px", display: "flex", alignItems: "center" }}>
    <div style={{ width: "26%", backgroundColor: "#c1efc5" }}>
      <span style={{ position: "relative", paddingTop: "100%", width: "100%", display: "inline-block" }}>
        <img style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, objectFit: "contain" }} src={imageUrl} />
      </span>
    </div>
    <div style={{ paddingLeft: "30px", width: "74%" }}>
      <p style={{ color: "primary.main" }}>
        <strong>{title}</strong>
      </p>
      <p>{description}</p>
    </div>
  </div>
);

export default function FindDriver() {
  const sections = [
    {
      imageUrl: "https://visafe.com.vn/wp-content/uploads/2020/10/1.png",
      title: "Tận hưởng chuyến đi an toàn và tiết kiệm.",
      description:
        "Giá cước trọn gói, rẻ nhất trên thị trường. Chỉ cần chọn đi, điểm đến, chúng tôi sẽ lọc và gợi ý cho bạn tài xế phù hợp",
    },
    {
      imageUrl: "https://visafe.com.vn/wp-content/uploads/2020/10/2.png",
      title: "Tiêu chuẩn phục vụ chuẩn kim cương",
      description:
        "Chuyến đi an toàn, phải bắt đầu từ người lái xe đáng tin cậy.Các Đối tác Tài Xế luôn được trang bị sẵn sàng để xử lý với bất kỳ vấn đề nào phát sinh trên đường đi.",
    },
    {
      imageUrl: "https://visafe.com.vn/wp-content/uploads/2020/10/3.png",
      title: "Chất lượng dịch vụ sang trọng, đẳng cấp",
      description: "Tài xế riêng đưa đón theo yêu cầu cá nhân của khách hàng",
    },
    {
      imageUrl: "https://visafe.com.vn/wp-content/uploads/2020/10/4.png",
      title: "Đội ngũ tài xế giàu kinh nghiệm",
      description:
        "Với đội ngũ tài xế giàu kinh nghiệm được tuyển chọn và đào tạo vô cùng bài bản. ViSafe mong muốn chủ phương tiện luôn cảm thấy thoải mái, an toàn và thư giãn nhất trên từng chuyến đi.",
    },
    {
      imageUrl: "https://visafe.com.vn/wp-content/uploads/2020/10/5.png",
      title: "Tin tưởng đồng hành trên mọi chặng đường",
      description:
        "TraXi ra đời với mục đích đem lại cho khách hàng những trải nghiệm tốt nhất – an toàn trên mỗi chuyến đi, với chất lượng phục vụ và thái độ tinh thần làm việc chuyên nghiệp.",
    },
  ];

  return (
    <Layout>
      <Container style={{ padding: "100px 0" }}>
        <CustomBreadcrumbs firstBreadcrumbs="nguoi-dung" firstText="Người dùng" secondText="Tìm tài xế" />
        <div style={{ padding: "27px 0", backgroundColor: "#89CFF3", paddingTop: "60px" }}>
          <div style={{ maxWidth: "1170px", margin: "0 auto" }}>
            <Typography sx={{ paddingBottom: "10px" }} variant="h6">
              <strong>Bạn muốn tìm tài xế lái xe hộ lái thay cho bạn trong những chuyến đi?</strong>
              <br />
              <strong> Bạn muốn biết trước giá cuốc mà mình tính đi mặc dù chưa đặt chuyến?</strong>
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                lineHeight: "60px",
                paddingBottom: "50px",
              }}
              variant="h3"
            >
              <strong>Tại sao chọn TraXi – Ứng dụng đặt tài xế lái xe hộ?</strong>
            </Typography>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -25px", paddingBottom: "30px", marginBottom: "20px" }}>
            {sections.map((section) => (
              <ReasonContent key={section.imageUrl} {...section} />
            ))}
          </div>
        </div>

        <div style={{ padding: "120px 0" }}>
          <div style={{ maxWidth: "1170px", margin: "0 auto" }}>
            <Typography variant="h3">
              <strong>Lợi ích của khách hàng khi sử dụng TraXi</strong>
            </Typography>

            <div style={{ position: "relative", paddingLeft: "40px", paddingBottom: "34px" }}>
              <span
                style={{
                  position: "absolute",
                  background: "url(https://visafe.com.vn/wp-content/uploads/2020/09/77777.png)",
                  width: "26px",
                  height: "26px",
                  display: "block",
                  top: "5px",
                  left: "0",
                }}
              />
              <p>Có thêm nhiều thời gian để nghỉ ngơi và làm bất cứ công việc nào mà bạn muốn.</p>
            </div>

            <p>Giá trọn gói không thêm bất kỳ một loại phí ẩn nào nên bạn có thể yên tâm tận hưởng chuyến đi.</p>
            <p>Chuyến đi của khách hàng sẽ nhanh và hiệu quả hơn bởi các tài xế có kinh nghiệm lâu năm thông thuộc nhiều cung đường.</p>
            <p>Bạn không cần quá lo lắng về vấn đề an toàn bởi vì đã có các tài xế với tay nghề cao lái xe thay mình.</p>
            <p>Bạn uống thả ga thoải mái, có chúng tôi lái thay cho bạn</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
