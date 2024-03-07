import { Box, Grid, Typography } from "@mui/material";
import { title } from "process";

interface Args {
  title: string;
  description: string;
  img: string;
}
const CardInfo = ({ title, description, img }: Args) => {
  return (
    <Box sx={{ boxShadow: 10, paddingBottom: 4 }}>
      <Typography
        variant="h4"
        sx={{ margin: 5, textAlign: "start", marginTop: 10 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        component={"p"}
        sx={{ margin: 5, textAlign: "start" }}
      >
        {description}
      </Typography>
      <img src={img} alt="imagen" />
    </Box>
  );
};
export default CardInfo;
