import React from 'react'
import SearchSection from '../../components/Searchsection'
import { Box } from '@mui/material'
import Breadcrumbs from '../../components/common/BreadCums'

const New = () => {
  return (
    <div>
      <Box>
        <Box sx={{mt:"20px",mx:"14px"}}>
          <Breadcrumbs />
        </Box>
      </Box>
      <SearchSection text={"New"} />
    </div>
  );
}

export default New