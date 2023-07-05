import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import { Box ,Container} from '@mui/material';
import Card from '../../components/Card';
import Grid from '@mui/material/Grid';
import NewArrivalCard from '../../components/NewArrivalCard';
function Home() {
  return (
    <Box >

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
        {/* Card List  */}
        <Box sx={{ display: "flex", flexDirection: "column", px: "30px" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={4} sm={6}>
              <Card />
            </Grid>
            <Grid xs={6} md={4} sm={6}>
              <Card />
            </Grid>
            <Grid xs={6} md={4} sm={6}>
              <Card />
            </Grid>
            <Grid xs={6} md={4} sm={6} >
              <Card />
            </Grid>
            <Grid xs={6} md={4} sm={6} >
              <Card />
            </Grid>{" "}
            <Grid xs={6} md={4} sm={6} >
              <Card />
            </Grid>
            <Grid xs={6} md={4} sm={6} >
              <Card />
            </Grid>
          </Grid>
        </Box>
        {/* Arrival Card */}
        <NewArrivalCard/>
      </Box>
</Box >

  );
}

export default Home