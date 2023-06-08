import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import {AiOutlineSearch} from "react-icons/ai"

const useStyles = makeStyles((theme) => ({
  searchInput: {
    marginRight: theme.spacing(1),
    padding: "9.5px 10px;",
    color: "black",
    
  },
}));

const SearchInput = () => {
  const classes = useStyles();

  const handleSearch = (event) => {
    // Handle search logic here
    console.log(event.target.value);
  };

  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      size="small"
      className={classes.searchInput}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="Search">
              <AiOutlineSearch />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
