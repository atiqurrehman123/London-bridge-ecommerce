import React from "react";
import Box from "@mui/material/Box";
import { RiFacebookFill } from "react-icons/ri";
import {FaInstagram} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
const SecondNavbar = () => {
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
        <Box></Box>
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
              <Box typography={"h6"}>LOGIN</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                width: "100px",
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