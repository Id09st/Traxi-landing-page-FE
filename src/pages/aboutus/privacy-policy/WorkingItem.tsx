import { Link, Typography } from "@mui/material";

type Props = {
  title: string;
  image: string;
  description: string;
  url: string;
};

export default function WorkingItem({ title, image, description, url }: Props) {
  return (
    <div>
      <img style={{ paddingTop: "15px", paddingBottom: "20px" }} src={image} />
      <p>
        <Link href={`/${url}/`} style={{ display: "block", paddingBottom: "20px", fontSize: "17px" }}>
          {title}
        </Link>
        <Typography variant="subtitle1" sx={{ color: "#8C8E8E", fontSize: "17px" }}>
          {description}
        </Typography>
      </p>
    </div>
  );
}
