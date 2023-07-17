import React from "react";
import Box from "@mui/material/Box";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import { useMediaQuery } from "@mui/material";
const styleUderline={
    textDecoration:"none"
}
const ThirdNavbar = () => {

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EAEAEA",
        }}
      >
        <Box sx={{ my: "8px" }}>
          <Link to="/" style={styleUderline}>
            <img
              width={"250px"}
              src="https://cdn.shopify.com/s/files/1/0144/7827/8739/files/black_font_header_410x.png?v=1613690312"
            />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#EAEAEA",
          color: "black",
          fontSize: "12px",
          height: "48px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "18px",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <Box>
            <Link style={styleUderline} to="/">
              <Box
                sx={{
                  textDecoration: "none",
                  color: "#383838",
                  paddingBottom: "8px",
                  ":hover": {
                    borderBottom: "1px solid #9a9696",
                    color: "#9a9696",
                  },
                }}
              >
                Home
              </Box>
            </Link>
          </Box>
          <Box>
            <Link style={styleUderline} to="/New">
              <Box
                sx={{
                  textDecoration: "none",
                  color: "#383838",
                  paddingBottom: "8px",
                  ":hover": {
                    borderBottom: "1px solid #9a9696",
                    color: "#9a9696",
                  },
                }}
              >
                WHATS NEW
              </Box>
            </Link>
          </Box>
          <Box>
            <Link style={styleUderline} to="/summer">
              <Box
                sx={{
                  textDecoration: "none",
                  color: "#383838",
                  paddingBottom: "8px",
                  ":hover": {
                    borderBottom: "1px solid #9a9696",
                    color: "#9a9696",
                  },
                }}
              >
                SUMMER TWINSETS
              </Box>
            </Link>
          </Box>
          <Box>
            <Link style={styleUderline} to="/caps">
              <Box
                sx={{
                  textDecoration: "none",
                  color: "#383838",
                  paddingBottom: "8px",
                  ":hover": {
                    borderBottom: "1px solid #9a9696",
                    color: "#9a9696",
                  },
                }}
              >
                CAPS
              </Box>
            </Link>
          </Box>
          <Box>
            <Link style={styleUderline} to="/accessories">
              <Box
                sx={{
                  textDecoration: "none",
                  color: "#383838",
                  paddingBottom: "8px",
                  ":hover": {
                    borderBottom: "1px solid #9a9696",
                    color: "#9a9696",
                  },
                }}
              >
                ACCESSORIES
              </Box>
            </Link>
          </Box>
          <Box sx={{ color: "#383838", marginBottom: "10px", width: "250px" }}>
            <SearchInput />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ThirdNavbar;
