import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import { Box } from "@mui/material";

const SearchInput = () => {

  const handleSearch = (event) => {
    // Handle search logic here
    console.log(event.target.value);
  };

  return (
    <Box>
      <input type="text" onChange={handleSearch} />
      <AiOutlineSearch />
    </Box>
  );
};

export default SearchInput;
