import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function MaterialUI() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12} className="Material-Ui">
        <Divider>Material UI</Divider>
        <Typography variant="h4">Material UI:</Typography>
        <Typography>Proximamente...</Typography>
      </Grid>
    </Grid>
  );
}
