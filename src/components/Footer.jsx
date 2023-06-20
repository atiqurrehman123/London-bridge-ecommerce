import React from 'react'
import { Grid,Box, Divider } from '@mui/material';
import listdata from "../dummy.json"
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
const Footer = () => {
  const {footer}=listdata;
  const {UsefulLinks,ContactUs,AdditionalInfo}=footer;
  return (
    <Box sx={{ background: "#E1E1E1",paddingBottom:"34px" }}>
      <Box
        sx={{
          borderTop: "1px solid black",
          borderBottom: "1x solid black",
          padding: "12px",
        }}
      >
        <Box sx={{ py: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* {Array.from(Array(6)).map((_, index) => ( */}
            <Grid item xs={2} sm={3} md={3}>
              <Box>
                <Box>
                  <img
                    width={"250px"}
                    src="https://cdn.shopify.com/s/files/1/0144/7827/8739/files/black_font_header_410x.png?v=1613690312"
                  />
                </Box>
                <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            p: 0.5,
            gap: "16px",
            width: "100%",
            height: "100%",marginTop:"16px"
          }}
        >
          {/* Social Media icons */}
          <Box>
            <RiFacebookFill size={22} />
          </Box>
          <Box>
            <FaInstagram size={22} />
          </Box>
          <Box>
            <CiMail size={22} />
          </Box>
          </Box>
              </Box>

            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Box>
                <Box sx={{ fontWeight: "bold", marginBottom: "18px" }}>
                  Useful Links
                </Box>
                {UsefulLinks.map((item, idx) => {
                  return (
                    <Box
                      sx={{ marginBottom: "14px", fontSize: "14px" }}
                      key={idx}
                    >
                      {item}
                    </Box>
                  );
                })}
              </Box>
            </Grid>{" "}
            <Grid item xs={2} sm={3} md={3}>
              <Box>
                <Box sx={{ fontWeight: "bold", marginBottom: "18px" }}>
                  Contact Us
                </Box>
                {ContactUs.map((item, idx) => {
                  return (
                    <Box
                      sx={{ marginBottom: "14px", fontSize: "14px" }}
                      key={idx}
                    >
                      {item}
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Box>
                <Box sx={{ fontWeight: "bold", marginBottom: "18px" }}>
                  Additional Info
                </Box>
                {AdditionalInfo.map((item, idx) => {
                  return (
                    <Box
                      sx={{ marginBottom: "14px", fontSize: "14px" }}
                      key={idx}
                    >
                      {item}
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            {/* ))} */}
          </Grid>
        </Box>
        <Box>
          <Divider sx={{ borderColor: " black" }} light={true} />
        </Box>
      </Box>
      <Box py="10px" px="10px">
        <Box>© 2023 London Bridge.</Box>
      </Box>
    </Box>
  );
}

export default Footer