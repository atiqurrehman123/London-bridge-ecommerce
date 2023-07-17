import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomSelect from "./common/Select";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  color: theme.palette.text.secondary,
}));
const selectSize=[
  "Select Size",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
]
const selectFeature = ["FEATURED", "PRICE LOW TO HIGH","PRICE HIGH TO LOW"];

export default function SearchSection({text}) {
  return (
    <Box sx={{ flexGrow: 1,mx:"14px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "4px 0px 0px",
          my: "15px",
        }}
      >
        <Grid item xs={12} md={6} sm={12}>
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
        <Grid item xs={12} md={3} sm={6}>
          <Box>
            <CustomSelect array={selectSize} />
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Box>
            <CustomSelect array={selectFeature} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
