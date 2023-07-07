import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  color: theme.palette.text.secondary,
}));

export default function SearchSection({text}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "4px 0px 0px",
          margin: "15px",
        }}
      >
        <Grid item xs={8}>
          <Box
            component={"h1"}
            sx={{
              fontsize: "20px",
              textAlign: "left",
            }}
          >
            {text}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>select</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>select</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
