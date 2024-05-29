import * as React from "react";
import Layout from "../../../layout";
import { Collapse, Container, Grid, Link, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../../components/Breadcrumbs/custormbreadcrumbs";
import WorkingItem from "./WorkingItem";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function PrivacyPolicy() {
  const workingList = [
    {
      title: "Quy tắc ứng xử Tài xế – Khách hàng",
      image: "https://visafe.com.vn/wp-content/uploads/2020/06/Layer-2.png",
      description: "Chúng tôi hợp tác với những Đối tác tuân thủ pháp luật, các chuẩn mực dịch vụ và nguyên tắc an toàn, an ninh.",
      url: "/nguoi-dung/quy-tac-ung-xu-khach-hang/",
    },
    {
      title: "Bảo mật dữ liệu",
      image: "https://visafe.com.vn/wp-content/uploads/2020/06/rules2.png",
      description: "Chúng tôi cam kết bảo mật thông tin của Khách hàng và Tài xế.",
      url: "/ve-chung-toi/cach-visafe-hoat-dong/",
    },
    {
      title: "Điều khoản dịch vụ",
      image: "https://visafe.com.vn/wp-content/uploads/2020/06/rules1.png",
      description: "Các điều kiện được áp dụng cho tất cả mọi người khi sử dụng các dịch vụ của TraXi.",
      url: "/dieu-khoan-dich-vu-visafe",
    },
  ];

  const expandableItemsSupport = [
    {
      id: "support_item1",
      primaryText: "Theo dõi chuyến đi của tôi",
      detailText: "Chia sẻ chi tiết hành trình và định vị GPS của bạn để bạn bè và người thân yên tâm hơn.",
    },
    {
      id: "support_item2",
      primaryText: "Bảo hiểm Tai nạn Cá nhân",
      detailText:
        "Chúng tôi cũng là đơn vị đi đầu trong việc liên kết với đơn vị khách hàng chi trả phí Bảo hiểm Tai nạn Cá Nhân, khi đồng thời chi trả phí bảo hiểm cho cả hành khách lẫn Đối tác lái xe.",
    },
    {
      id: "support_item3",
      primaryText: "Khung bảo mật dữ liệu",
      detailText:
        "Ứng dụng TraXi và các hệ thống phụ trợ sử dụng khung bảo mật dữ liệu tối ưu nhất hiện nay để bảo vệ tài khoản, lịch sử hành trình, ví điện tử và các thông tin cá nhân của khách hàng.",
    },
    {
      id: "support_item4",
      primaryText: "Đánh giá chuyến đi",
      detailText:
        "Khách hàng (chủ phương tiện) và Tài xế đều có thể đánh giá và phản hồi về trải nghiệm sau mỗi chuyến đi, thông tin này sẽ giúp TraXi hoàn thiện được chất lượng dịch vụ ngày một tốt hơn.",
    },
    {
      id: "support_item5",
      primaryText: "Điều hành Tài xế",
      detailText: "Chúng tôi có một đội ngũ làm việc 24/7 nhằm giám sát và duy trì chất lượng Tài xế.",
    },
    {
      id: "support_item6",
      primaryText: "Dịch vụ Tổng đài 24/7",
      detailText: "Bộ phận chăm sóc khách hàng dày dạn kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ bạn 24 giờ/ngày, 7 ngày/tuần.",
    },
  ];

  const expandableItemsProtect = [
    {
      id: "protect_item1",
      primaryText: "Chương trình Bảo mật đối với nhà cung cấp",
      detailText:
        "Cộng tác với nhiều nhà cung cấp (điểm liên kết) đồng nghĩa với việc chúng tôi cần chia sẻ dữ liệu với họ. Theo đó, chúng tôi đã triển khai một chương trình phát hiện sai phạm, nhằm hỗ trợ đảm bảo dữ liệu cá nhân của Khách hàng và Đối tác được bảo mật và không bị xâm phạm.",
    },
    {
      id: "protect_item2",
      primaryText: "Ngăn chặn các hành vi phạm pháp ",
      detailText:
        "Các tính năng an toàn và bảo mật của chúng tôi giúp phát hiện và ngăn chặn sự xâm nhập của các ứng dụng hoặc phần mềm bất hợp pháp; các thiết bị hoặc tài khoản đáng ngờ, thường được sử dụng để gian lận hoặc tấn công tài khoản người dùng.",
    },
    {
      id: "protect_item3",
      primaryText: "Xác thực tài khoản  ",
      detailText:
        "Hệ thống của chúng tôi được lập trình để phát hiện bất thường trong quá trình đăng nhập của bạn. Nhằm giảm thiểu các trường hợp vô tình hoặc cố ý xâm phạm tài khoản cá nhân, chúng tôi đã nâng cấp hệ thống an ninh để nhận diện đúng chủ tài khoản khi đăng nhập.",
    },
  ];

  interface OpenState {
    support_item1: boolean;
    support_item2: boolean;
    support_item3: boolean;
    support_item4: boolean;
    support_item5: boolean;
    support_item6: boolean;
    protect_item1: boolean;
    protect_item2: boolean;
    protect_item3: boolean;
  }

  const [open, setOpen] = React.useState<OpenState>({
    support_item1: false,
    support_item2: false,
    support_item3: false,
    support_item4: false,
    support_item5: false,
    support_item6: false,
    protect_item1: false,
    protect_item2: false,
    protect_item3: false,
  });

  const handleClick = (id: string) => {
    if (id in open) {
      const safeId = id as keyof OpenState; // Chuyển type assertion vào sau khi đã kiểm tra
      setOpen((prev) => {
        const newState = Object.keys(prev).reduce((acc, key) => {
          acc[key as keyof OpenState] = false; // Đảm bảo rằng tất cả các khóa khác được đặt thành false
          return acc;
        }, {} as OpenState);

        newState[safeId] = !prev[safeId]; // Chỉ đổi trạng thái của mục được chọn
        return newState;
      });
    }
  };

  return (
    <Layout>
      <Container style={{ padding: "100px 0" }}>
        <CustomBreadcrumbs firstBreadcrumbs="ve-chung-toi" firstText="Về chúng tôi" secondText="Tin tưởng và an toàn"></CustomBreadcrumbs>
        <div style={{ paddingTop: "40px", paddingBottom: "30px", borderBottom: "1px solid rgba(6,6,6,.15)", marginBottom: "70px" }}>
          <Typography variant="h3" sx={{ color: "primary.main", paddingBottom: "30px" }}>
            Siêu ứng dụng. Siêu an toàn cho mỗi chuyến đi
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px" }}>
            Với nỗ lực trở thành ứng dụng hữu ích cho cuộc sống hàng ngày, TraXi đặt an toàn và an ninh cho khách hàng làm ưu tiên hàng đầu.
          </Typography>
        </div>

        <Typography variant="h3" sx={{ color: "primary.main", paddingBottom: "30px" }}>
          Chúng tôi ở đây để bảo vệ quyền lợi của bạn
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", paddingBottom: "30px" }}>
          A. Chúng tôi tin
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px" }}>
          Chúng tôi hoạt động dựa theo một số nguyên tắc cố định và không hề khoan nhượng. Chính sách này là những nguyên tắc an toàn cơ bản
          mà chúng tôi thực hành và tuân thủ, nhằm hướng đến một cuộc sống an toàn hơn mỗi ngày.
        </Typography>

        <div style={{ display: "flex", margin: "25px -20px 0", textAlign: "left" }}>
          <Grid container spacing={{ xs: 8, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {workingList.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <WorkingItem title={item.title} image={item.image} description={item.description} url={item.url} />
              </Grid>
            ))}
          </Grid>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sx={{ marginTop: "50px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", paddingBottom: "30px" }}>
              B. Chúng tôi liên tục đổi mới
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px" }}>
              TraXi luôn sẵn sàng thích nghi với những thay đổi không ngừng trong quá trình phục vụ.
              <br />
              <br />
              TraXi tin rằng với các biện pháp bảo vệ an toàn, hỗ trợ kịp thời và hành động cụ thể đang được thực hiện và sắp triển khai
              trong thời gian tới, khách hàng (chủ phương tiện) sẽ ngày một tin tưởng và an tâm hơn khi sử dụng ứng dụng TraXi.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img style={{ paddingBottom: "35px" }} src="https://i.ibb.co/G7xnb4d/f86961f8-355a-4239-99ae-b39510f2af75.png" />
          </Grid>
        </Grid>

        <div style={{ paddingBottom: "120px" }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <div style={{ margin: "0 20px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "20px",
                    paddingBottom: "15px",
                    borderBottom: "12px solid #0483cc",
                  }}
                >
                  01.
                </Typography>

                <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "12px", fontWeight: "bold" }}>
                  Bảo vệ an toàn
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "1em", textAlign: "left" }}>
                  Các Đối tác Tài Xế của TraXi phải trải qua những bài kiểm tra nghiêm ngặt và được huấn luyện kỹ càng nhằm bảo đảm sự an
                  toàn tuyệt đối trong suốt chuyến đi cho khách hàng.
                </Typography>

                <div>
                  {expandableItemsProtect.map((item) => (
                    <React.Fragment key={item.id}>
                      <ListItemButton onClick={() => handleClick(item.id)}>
                        <ListItemText primary={item.primaryText} />
                        {open[item.id as keyof OpenState] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open[item.id as keyof OpenState]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <Typography
                              variant="subtitle1"
                              sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "1em", textAlign: "left" }}
                            >
                              {item.detailText}
                            </Typography>
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ margin: "0 20px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "20px",
                    paddingBottom: "15px",
                    borderBottom: "12px solid #0483cc",
                  }}
                >
                  02.
                </Typography>

                <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "12px", fontWeight: "bold" }}>
                  Hỗ trợ kịp thời
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "1em", textAlign: "left" }}>
                  Tại bất kỳ thời điểm nào trong chuyến đi, Khách hàng có thể sử dụng phím chức năng S.O.S để được trợ giúp kịp thời từ
                  người thân hoặc cơ quan chức năng.
                </Typography>

                <div>
                  {expandableItemsSupport.map((item) => (
                    <React.Fragment key={item.id}>
                      <ListItemButton onClick={() => handleClick(item.id)}>
                        <ListItemText primary={item.primaryText} />
                        {open[item.id as keyof OpenState] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open[item.id as keyof OpenState]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <Typography
                              variant="subtitle1"
                              sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "1em", textAlign: "left" }}
                            >
                              {item.detailText}
                            </Typography>
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <Typography variant="h4" sx={{ fontWeight: "bold", paddingBottom: "30px", marginTop: "50px" }}>
          C. Còn bạn thì sao
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img style={{ paddingTop: "15px", paddingBottom: "30px" }} src="https://visafe.com.vn/wp-content/uploads/2020/11/1713.jpg" />
            <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "12px", fontWeight: "bold" }}>
              Duy trì những nét đẹp cộng đồng
            </Typography>

            <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "20px" }}>
              Mỗi cộng đồng sẽ lớn mạnh khi mỗi cá nhân đề vững mạnh, Dù bạn là khách hàng hay đối tác tài xế, hãy hành độnh với tinh thần
              trách nhiệm, chuyên nghiệp và tôn trọng để mang đến những trải nghiệm như ý cho tất cả mọi người
              <br />
              <br />
              Tại TraXi chúng tôi đưa ra một số nguyên tắc hoạt động cơ bản dành cho đối tác tài xế và khách hàng với mong muốn xây dựng và
              duy trì một môi trường sống chan hòa và an toàn.
            </Typography>

            <Link sx={{ fontSize: "17px" }} href="/nguoi-dung/quy-tac-ung-xu-khach-hang/">
              Tiêu chuẩn cộng đồng
            </Link>
          </Grid>
          <Grid item xs={6}>
            <img
              style={{ paddingTop: "15px", paddingBottom: "30px" }}
              src="https://visafe.com.vn/wp-content/uploads/2020/11/NoPath-Copy-5.jpg"
            />
            <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "12px", fontWeight: "bold" }}>
              “Bí kíp” để có một hành trình an toàn
            </Typography>

            <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "20px" }}>
              Hãy tham khảo 1 số hướng dẫn của TraXi để có một hành trình êm ả và thuận tiện.
            </Typography>

            <Link sx={{ fontSize: "17px" }} href="/tai-xe/quy-trinh-su-dung-app-visafe/">
              Hướng dẫn sử dụng TraXi
            </Link>
          </Grid>
        </Grid>

        <div style={{ paddingTop: "120px", paddingBottom: "70px", marginBottom: "70px", borderBottom: "1px solid rgba(6,6,6,.15)" }}>
          <Typography variant="h4" sx={{ color: "primary.main", paddingBottom: "30px", fontWeight: "bold", fontSize: 45 }}>
            Mọi ý kiến đóng góp đều được chào đón
          </Typography>

          <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "20px" }}>
            Tại TraXi, chúng tôi luôn sẵn sàng tiếp nhận những góp ý, phản hồi về lỗ hổng an ninh, lỗi sai trong hệ thống hay thông báo về
            các trường hợp nghi vấn gian lận.
            <br />
            <br />
            Cùng TraXi mang đến những trải nghiệm ngày một an toàn và bảo mật hơn bằng cách phản hồi với chúng tôi.
            <br />
            <br />
            Tại TraXi, chúng tôi luôn quan tâm duy trì an toàn và an ninh cho Khách hàng (chủ phương tiện), Đối tác Tài xế.
            <br />
            <br />
            Ưu tiên hàng đầu của chúng tôi là giảm thiểu rủi ro và xử lý nghiêm ngặt các hành vi gian lận để đảm bảo an toàn cho tất cả mọi
            người sử dụng.
            <br />
            <br />
            Chúng tôi tin rằng “Phản hồi tích cực”” là cách tốt nhất để bảo vệ an toàn cho người dùng. Phản hồi tích cực cho phép mọi cá
            nhân có thể phản ánh cho TraXi về các hành vi gian lận trước khi hành vi này được biết đến rộng rãi trong cộng đồng. Nếu bạn
            nghi ngờ bất kỳ hành vi nguy hiểm, gian lận nào từ Đối tác tài xế, Khách hàng ( chủ phương tiện) của TraXi vui lòng báo ngay cho
            chúng tôi.
          </Typography>
        </div>

        <div style={{ paddingBottom: "120px" }}>
          <Typography variant="h4" sx={{ color: "primary.main", paddingBottom: "30px", fontWeight: "bold", fontSize: 45 }}>
            Quy trình phản hồi
          </Typography>

          <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "20px" }}>
            TraXi cam kết danh tính và thông tin liên lạc của người gửi phản hồi sẽ hoàn toàn được bảo mật.
            <br />
            Phản hồi của bạn cần cung cấp đầy đủ những nội dung như sau:
          </Typography>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <div style={{ margin: "0 20px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    paddingBottom: "12px",
                    fontWeight: "bold",
                    float: "left",
                    marginRight: "30px",
                    borderBottom: "12px solid #0483cc",
                  }}
                >
                  01.
                </Typography>

                <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "12px", fontWeight: "bold" }}>
                  Mô tả cụ thể sự việc
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "20px", marginLeft: "100px", textAlign: "left" }}
                >
                  Mô tả hành vi gian lận và ảnh hưởng của hành vi đó.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ margin: "0 20px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    paddingBottom: "12px",
                    fontWeight: "bold",
                    float: "left",
                    marginRight: "30px",
                    borderBottom: "12px solid #0483cc",
                  }}
                >
                  02.
                </Typography>

                <Typography variant="h5" sx={{ color: "primary.main", paddingBottom: "12px", fontWeight: "bold" }}>
                  Lưu trữ
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#8C8E8E", fontSize: "17px", paddingBottom: "15px", marginLeft: "100px", textAlign: "left" }}
                >
                  Lưu lại những chứng từ cụ thể để có thể xác minh tính xác thực của phản hồi (ảnh chụp, tin nhắn, bằng ghi âm,…) Nội dung
                  chi tiết…
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
