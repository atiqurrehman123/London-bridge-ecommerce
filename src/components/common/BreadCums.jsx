import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {Link} from "react-router-dom";
import {useLocation } from "react-router-dom"
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Breadcrumb() {
    const {pathname}=useLocation();
    // console.log(location);
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ textTransform: "uppercase", fontSize: "11px" }}
      >
        <Link to="/" style={{ color: "inherit",textDecoration:"none" }}>
          home
        </Link>
        <Link
    
          style={{ color: "inherit",textDecoration:"none" }}
          to={pathname}
        >
          {pathname.replace("/", "")}
        </Link>
        <Typography
          color="text.primary"
          sx={{ textTransform: "uppercase", fontSize: "11px" }}
        >
          {" "}
          PAGE 1 OF 3
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
