import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import { Box } from '@mui/material';
import Card from '../../components/Card';
import Grid from '@mui/material/Grid';
function Home() {
  return (
    <div>
      {/* Slider for Image Showing */}
      <ImageSlider />
      <Box>
        <Box
          sx={{
            textAlign: "center",
            m: 5,
            fontFamily: "bold",
            fontSize: "24px",
          }}
        >
          Our Best Sellers
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", px: "30px" }}>
          <Grid container spacing={2}>
            <Grid xs={4} md={4}>
              <Card />
            </Grid>
            <Grid xs={4} md={4}>
              <Card />
            </Grid>
            <Grid xs={4} md={4}>
              <Card />
            </Grid>
            <Grid xs={4} md={4}>
              <Card />
            </Grid>
            <Grid xs={4} md={4}>
              <Card />
            </Grid>{" "}
            <Grid xs={4} md={4}>
              <Card />
            </Grid>
            <Grid xs={4} md={4}>
              <Card />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home