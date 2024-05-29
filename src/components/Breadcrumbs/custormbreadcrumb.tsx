import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type Props = {
  firstText: string;
};

export default function CustormBreadcrumb({ firstText }: Props) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Typography key="2" color="text.primary">
      {firstText}
    </Typography>,
  ];

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{ padding: "27px 0" }} />} aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
}
