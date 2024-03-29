import React, { useState } from "react";
import Box from "@mui/material/Box";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const SecondNavbar = () => {
  const [IsActiveDropdown, setIsActivedropdown] = useState(false);
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
                {IsActiveDropdown ? (
                  <RxCross2
                    size={26}
                    onClick={() => setIsActivedropdown(false)}
                  />
                ) : (
                  <VscThreeBars
                    size={26}
                    onClick={() => setIsActivedropdown(true)}
                  />
                )}
              </Box>

              <Box typography={"h6"} sx={{ fontSize: "16px", padding: "0" }}>
                MENU{" "}
              </Box>
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
                <Box typography={"h6"} sx={{ color: "white" }}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Box
                      component={"span"}
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        ":hover": { color: "#03a196" },
                      }}
                    >
                      LOGIN{" "}
                    </Box>
                  </Link>
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
      {!matches && IsActiveDropdown && (
        <Box
          sx={{
            position: "relative",
            // background: "rgba(232, 232, 232, 0.9)",
            zIndex: "2",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              background: "rgba(232, 232, 232, 0.9)",
              width: "100%",
            }}
          >
            <Link
              to="/"
              onClick={() => setIsActivedropdown(false)}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                typography={"h6"}
                sx={{
                  fontSize: "16px",
                  fontFamily: "system-ui",
                  color: "#383838",
                  py: "8px",
                  px: "18px",
                }}
              >
                HOME
              </Box>
            </Link>
            <Link
              to="/New"
              onClick={() => setIsActivedropdown(false)}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                typography={"h6"}
                sx={{
                  fontSize: "16px",
                  fontFamily: "system-ui",
                  color: "#383838",
                  py: "8px",
                  px: "18px",
                }}
              >
                WhatS NEW
              </Box>
            </Link>
            <Link
              to="/summer"
              onClick={() => setIsActivedropdown(false)}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                typography={"h6"}
                sx={{
                  fontSize: "16px",
                  fontFamily: "system-ui",
                  color: "#383838",
                  py: "8px",
                  px: "18px",
                }}
              >
                SUMMER TWINSETS
              </Box>
            </Link>
            <Link
              to="/trouser"
              onClick={() => setIsActivedropdown(false)}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                typography={"h6"}
                sx={{
                  fontSize: "16px",
                  fontFamily: "system-ui",
                  color: "#383838",
                  py: "8px",
                  px: "18px",
                }}
              >
                TROUSER
              </Box>
            </Link>
            <Link
              to="/caps"
              onClick={() => setIsActivedropdown(false)}
              style={{ textDecoration: "none", color: "white" }}
            ></Link>
            <Box
              typography={"h6"}
              sx={{
                fontSize: "16px",
                fontFamily: "system-ui",
                color: "#383838",
                py: "8px",
                px: "18px",
              }}
            >
              CAPS
            </Box>
            <Link
              to="/accessories"
              onClick={() => setIsActivedropdown(false)}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                typography={"h6"}
                sx={{
                  fontSize: "16px",
                  fontFamily: "system-ui",
                  color: "#383838",
                  py: "8px",
                  px: "18px",
                }}
              >
                ACCESSORIES
              </Box>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                typography={"h6"}
                sx={{
                  fontSize: "16px",
                  fontFamily: "system-ui",
                  color: "#383838",
                  py: "8px",
                  px: "18px",
                }}
              >
                WHATSAPP 923238528992
              </Box>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                typography={"h6"}
                sx={{
                  fontSize: "16px",
                  fontFamily: "system-ui",
                  // color: "white",
                  py: "8px",
                  px: "18px",
                }}
              >
                LOGIN
              </Box>
            </Link>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default SecondNavbar;
