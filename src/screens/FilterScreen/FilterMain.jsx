import React from 'react'
import { useContext } from 'react';
import { contexts } from '../../contexts/index';
import { Card, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { useEffect } from 'react';
function FilterMain () {
  const {data , setOrderList , orderList , orderFilter , sizeFilter , filterData , setFilterData } = useContext(contexts)
  
  const handleClickAddCard = (id) => {

    if(orderList.find(item => item.id === id)){
      let newOrderList = orderList.map(item => {
        if(item.id === id){
          item.count = item.count + 1
        }
        return item
      })
      setOrderList(newOrderList)
    }
    else{
      let newOrderList = orderList.concat(data.find(item => item.id === id))
      Object.assign(newOrderList[newOrderList.length - 1], {count: 1})
      setOrderList(newOrderList)
    }
  }

  
  const handleCheckData = (orderFilter , sizeFilter ) =>{
    if(orderFilter === 'Highest'){
      const newData = (data.filter(item => item.size.includes(sizeFilter)))
      setFilterData(newData.sort((a,b)=> b.price - a.price ))
    }
    else if(orderFilter === 'Lowest'){
      const newData = (data.filter(item => item.size.includes(sizeFilter)))
      setFilterData(newData.sort((a,b)=> a.price - b.price))
    }
  }

  useEffect(()=>{
    handleCheckData(orderFilter , sizeFilter)
  },[orderFilter,sizeFilter])


  return (
    <Grid container sx={{display:'flex',justifyContent: 'center'}}>
      {filterData.map((db)=>(
        <Grid xs={12} md={5} lg={4} item key={db.id}>
          <Card sx={{marginX:'10px', marginY:'30px' , boxShadow:'none'}}>
            <CardMedia
              component="img"
              width="100%"
              image={db.url}
              alt="shop Image"
            />
            <CardContent sx={{display: 'flex', justifyContent: 'center' , alignItems: 'center'}}>
              <p>
                {db.description}
              </p>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent: 'space-around'}}>
              <p>${db.price}</p>
              <Button sx={{backgroundColor:'#f0c041' , color:'#000', padding: '8px 12px'}} onClick={()=>handleClickAddCard(db.id)}>Add To Card</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default FilterMain


