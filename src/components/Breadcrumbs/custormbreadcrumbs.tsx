import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Stack } from "@mui/material";

type Props = {
  firstBreadcrumbs: string;
  firstText: string;
  secondText: string;
};

export default function CustomBreadcrumbs({ firstBreadcrumbs, firstText, secondText }: Props) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Link underline="hover" key="2" color="inherit" href={`/${firstBreadcrumbs}/`}>
      {firstText}
    </Link>,
    <Typography key="3" color="text.primary">
      {secondText}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
