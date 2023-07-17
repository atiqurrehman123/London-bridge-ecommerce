import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({array}) {
  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          value={age}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
                border:"none",
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "1px solid #ccc",
              },
            },
          }}
        >
          {array.map((item, index) => (
            <MenuItem value={index + 1}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
