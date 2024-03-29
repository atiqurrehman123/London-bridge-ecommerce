import React from "react";
import { Box, Typography, backdropClasses ,useMediaQuery} from "@mui/material";

const Card = () => {
  const [isHovered, setIsHovered] = React.useState(false);
      const matches = useMediaQuery("(min-width:600px)");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box sx={{ px: "18px", py: "10px" }}>
      <Box
        // height={400}
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: "100%",
        }}
      >
        <img
          src={
            isHovered
              ? "https://londonbridge.com.pk/cdn/shop/products/AY5A1931_2000x.jpg?v=1681554345"
              : "https://cdn.shopify.com/s/files/1/0144/7827/8739/files/MAJ5437_2000x.jpg?v=1683110402"
          }
          alt="Product"
          style={{
            width: "100%",
            objectFit: "cover",
            filter: isHovered && "brightness(0.5)",
            transitionDelay: "0.5s",
          }}
        />

        {/* {isHovered && ( */}
        {matches && (
          <Box
            position="absolute"
            top="50%"
            left="30%"
            transform="translate(-50%, -50%)"
            bgcolor={isHovered && "rgba(0, 0, 0, 0.5)"}
            border={isHovered && "1px solid #ffffff"}
            padding="8px 16px"
            // border="none"
            cursor="pointer"
            fontweight="bold"
            zIndex={1}
            transition="opacity 0.3s"
            opacity="0.8"
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              "&:hover": {
                opacity: 1,
                backgroundColor: "white",
              },
            }}
          >
            {isHovered && (
              <Typography
                variant="h6"
                color="white"
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    opacity: isHovered && 1,
                    color: isHovered && "black",
                  },
                }}
              >
                Quick View
              </Typography>
            )}
          </Box>
        )}
        {/* )} */}

        <Box position="absolute" right={0} top={0} color="white" zIndex={1}>
          <Typography
            sx={{ px: "10px", py: "5px", bgcolor: "#38424E" }}
            variant="body2"
          >
            <Typography
              component={"span"}
              sx={{ fontSize: !matches && "12px" }}
            >
              66% off
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              px: "10px",
              py:!matches&& "0px",
              bgcolor: "#03A196",
              fontweight: "700",
              fontFamily: "Lato, sans-serif",
            }}
          >
            <Typography
              component={"span"}
              sx={{ fontSize: !matches && "12px" }}
            >
            New
            </Typography>
          </Typography>
        </Box>

        {/* <Box
        position="absolute"
        top={50}
        right={10}
        bgcolor="green"
        color="white"
        padding={1}
        borderRadius={5}
        zIndex={1}
      >
        <Typography variant="body2">New</Typography>
      </Box> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography sx={{ textAlign: "center" }}>
            Iron Fit Twinset - Black
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "8px" }}>
            <Box>
              <Box sx={{ color: "red" }}>
                <Box
                  component={"span"}
                  sx={{ color: "black", fontSize: "16px", fontStyle: "italic" }}
                >
                  from
                </Box>{" "}
                Rs 1,990.00
              </Box>
              <Box
                sx={{
                  textDecoration: "line-through",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Rs 6000.00
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;

