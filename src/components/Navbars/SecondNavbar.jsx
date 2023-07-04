import React from "react";
import Box from "@mui/material/Box";
import { RiFacebookFill } from "react-icons/ri";
import {FaInstagram} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom"
import { useMediaQuery } from "@mui/material";

const SecondNavbar = () => {
        const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#000000",
          color: "white",
          fontSize: "12px",
          height: "48px",
        }}
      >
        <Box>
          {matches && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                p: 0.5,
                gap: "16px",
                width: "100%",
                height: "100%",
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
              <Box
                typography={"h6"}
                sx={{
                  fontFamily: "bold",
                  fontSize: "14px",
                  ":hover": { color: "yellow", cursor: "pointer" },
                }}
              >
                {" "}
                WHATSAPP 923165244023
              </Box>
            </Box>
          )}
          {!matches && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                p: 0.5,
                gap: "2px",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Social Media icons */}
              <Box>
                bars
              </Box>
              
              <Box
                typography={"h6"}
                sx={{fontSize:"16px",padding:"0"}}
               
              >
                MENU              </Box>
            </Box>
          )}
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              width: "100%",
              height: "100%",
            }}
          >
            {!matches && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  width={"160px"}
                  src="https://cdn.shopify.com/s/files/1/0144/7827/8739/files/white_font_header_410x.png?v=1613690316"
                />
              </Box>
            )}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              width: "100%",
              height: "100%",
            }}
          >
            {matches && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box>
                  <FaRegUser size="22" />
                </Box>
                <Box typography={"h6"}>
                  <Link to="/login">LOGIN</Link>
                </Box>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                width: matches ? "100px" : "48px",
                height: "100%",
                backgroundColor: "#666666",
              }}
            >
              <Box>
                <AiOutlineShopping size="22" />
              </Box>
              <Box typography={"h6"}>0</Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SecondNavbar;
