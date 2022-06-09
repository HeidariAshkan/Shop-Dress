import React from 'react'
import { Box, FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { contexts } from './../../../contexts/index';
import { useStyles } from './mainHeader.style';
import { useEffect } from 'react';
function MainHeader() {
    const classses = useStyles() 

    const { orderFilter , setOrderFilter  , sizeFilter , setSizeFilter , filterData } = useContext(contexts)
    
    const handleOrderChange = (e) => {
        setOrderFilter(e.target.value)
    }
    const handleFilterChange = (e) => {
        setSizeFilter(e.target.value)
    }


  return (
    <>
        <Box className={classses.root}>
            <Box>
                <p>
                    {filterData.length} Products
                </p>
            </Box>
            <Box>
                <FormControl className={classses.Selector} sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Order</InputLabel>
                    <Select 
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Order"
                    value={orderFilter}
                    onChange={handleOrderChange}
                    >
                        <MenuItem value={'Lowest'}>Lowest</MenuItem>
                        <MenuItem value={'Highest'}>Highest</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
                    <Select 
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Filter"
                    value={sizeFilter}
                    onChange={handleFilterChange}
                    >
                        <MenuItem value={'ALL'}>All</MenuItem>
                        <MenuItem value={'XS'}>XS</MenuItem>
                        <MenuItem value={'S'}>S</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    </>
  )
}

export default MainHeader