import React from 'react'
import Box from "@mui/material/Box";

const FirstNAvbar = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          background: "#666666",
          color: "white",
          fontSize:"12px",

        }}
      >
        <div></div>
        <div> Free Shipping on orders above Rs 4000</div>
        <div>x</div>
      </Box>
    </div>
  );
}

export default FirstNAvbar