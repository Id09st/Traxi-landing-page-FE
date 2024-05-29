import Layout from "../../../layout";
import { Container, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../../components/Breadcrumbs/custormbreadcrumbs";
import styled from "@emotion/styled";
import { useState } from "react";
import Benefit from "./benefit";
import Reason from "./reason";
import Instruct from "./instruct";
import Procedure from "./procedure";

export default function ConsultingPartners() {
  const BackgroundDiv = styled.div`
    position: relative;
    width: 100%;
    height: 570px;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("https://i.ibb.co/TkZJdg3/uong-bia-ruou-o-nhat-ban-15767687495491257223095-crop-1576768756667691599313.webp");
    background-size: cover;
    background-position: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `;

  const BannerContent = { display: "flex", alignItems: "center", justifyContent: "space-between" };

  const BannerContentItem = {
    display: "flex",
    alignItems: "center",
    padding: "0 35px",
    background: "linear-gradient(to right, rgb(41 132 226 / 80%), rgb(37 116 175 / 80%))", // Sửa ở đây
    color: "#fff",
    height: "150px",
    width: "calc(100% / 4)",
  };

  const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

  const handleSelect = (divId: number) => {
    setSelectedDiv(divId);
  };

  const options = [
    { id: 1, component: <Instruct /> },
    { id: 2, component: <Reason /> },
    { id: 3, component: <Benefit /> },
    { id: 4, component: <Procedure /> },
  ];

  return (
    <Layout>
      <div style={{ paddingTop: "70px" }}>
        <BackgroundDiv>
          <Container style={{ maxWidth: "1170px", margin: "0 auto", padding: "0", width: "100%" }}>
            <div style={{ padding: "175px 0 100px" }}>
              <Typography
                variant="h2"
                style={{ fontSize: "50px", lineHeight: "60px", color: "#fff", fontWeight: "700", paddingBottom: "15px" }}
              >
                Tư vấn đăng ký đối tác <span style={{ color: "#18A9E1" }}>TraXi</span>
              </Typography>
              <p style={{ fontSize: "18px", lineHeight: "20px", color: "#fff" }}>
                Chào mừng bạn đến với tư vấn đăng ký của TraXi dành cho đối tác đăng ký TraXi
              </p>

              <div style={BannerContent}>
                {options.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    style={selectedDiv === option.id ? { ...BannerContentItem, backgroundColor: "#fff" } : BannerContentItem}
                  >
                    {option.component}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </BackgroundDiv>
      </div>
      <Container style={{ paddingTop: "58px", maxWidth: "1170px", width: "100%", padding: "27px 0" }}>
        <CustomBreadcrumbs firstBreadcrumbs="tai-xe" firstText="Tài xế " secondText="Tư vấn đối tác TraXi"></CustomBreadcrumbs>
      </Container>
    </Layout>
  );
}
