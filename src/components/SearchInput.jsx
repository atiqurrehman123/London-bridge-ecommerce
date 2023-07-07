import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import { Box, InputAdornment, TextField } from "@mui/material";

const SearchInput = () => {

  const handleSearch = (event) => {
    // Handle search logic here
    console.log(event.target.value);
  };

  return (
    <Box>
      <TextField
        type="text"
        onChange={handleSearch}
        id="input-with-icon-textfield"
        // label="TextField"
        sx={{maxWidth:"80%",maxHeight:"10%", "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black", // Sets the focus border color to transparent
        }}}
        InputProps={{
          style:{borderRadius:"1px",maxHeight:"30px"},
          endAdornment: (
          <InputAdornment position="end">
            <AiOutlineSearch />
          </InputAdornment>
          )
        }
        }
      />
    </Box>
  );
};

export default SearchInput;
