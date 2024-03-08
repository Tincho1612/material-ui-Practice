import { Box, Card, Grid, Rating, Typography } from "@mui/material";
import { title } from "process";
import { useState } from "react";

interface Args {
  title: string;
  description: string;
  img: string | null;
}
const CardInfo = ({ title, description, img }: Args) => {
  const [validateHeaderValue, setValue] = useState<number | null>(0);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return (
    <Card variant="outlined" sx={{ boxShadow: 10 }}>
      <Typography
        variant="h4"
        sx={{
          margin: 5,
          textAlign: "start",
          marginTop: 10,
          display: "inline-block",
        }}
      >
        {title}
      </Typography>
      <Typography component={"p"} sx={{ margin: 5, display: "inline-block" }}>
        rating:
      </Typography>
      <Rating
        name="simple-controlled"
        value={validateHeaderValue}
        onChange={handleChange}
      />
      <Typography
        variant="h6"
        component={"p"}
        sx={{ margin: 5, textAlign: "start" }}
      >
        {description}
      </Typography>
      <img src={img ? img : ""} alt="imagen" />
    </Card>
  );
};
export default CardInfo;
