import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";


export default function NewArrivalCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        px={"12px"}
        py={"40px"}
      >
        <Grid item xs={12} md={6}>
          <Box>
            <img
            width={"100%"}
              alt="arrivalImage"
              src="https://cdn.shopify.com/s/files/1/0144/7827/8739/files/AY5A7277_600x.jpg?v=1665079572"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} alignItems={"center"} display={"flex"} >
          <Box display={"flex"} flexDirection={"column"} px={"52px"}> 
            <Box
              sx={{ fontSize: "32px", fontWeight: "bold", color: "#412885" }}
            >
              New Arrivals
            </Box>
            <Button
              sx={{
                border: "1px solid #412885",
                borderRadius: "0px",
                px: "20px",
                py: "8px",
                color: "#412885",
                marginTop:"14px",
                ":hover": { background: "#412885", color: "white" },
              }}
            >
              View All
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
