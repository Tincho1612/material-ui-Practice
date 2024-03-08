import React from "react";
import BasicTabs from "../TabPanelProps";
import { Box, Grid } from "@mui/material";
import Hooks from "../Hooks";
import MaterialUI from "../MaterialUI";
import ReactBasic from "../ReactBasic";

export default function HomePage() {
  return (
    <div>
      <Box marginTop={10}>
        <BasicTabs />
      </Box>
      <Grid container spacing={2}>
        <ReactBasic />
        <Hooks />
        <MaterialUI />
      </Grid>
    </div>
  );
}
