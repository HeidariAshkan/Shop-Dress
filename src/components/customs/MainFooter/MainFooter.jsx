import React from 'react'
import { contexts } from '../../../contexts';
import { useContext } from 'react';
import { Box, Card, Button, TextField, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import { Formik } from 'formik';
function MainFooter() {

    const { orderList , setOrderList, showForm , setShowForm} = useContext(contexts);

    
    const handleSubmitForm = (values) => {
        const sendOrder = [
            {
                name: values.name,
                email: values.email,
                address: values.address,
            }
        ]
        setOrderList([]) 
        setShowForm(false)
        alert('your order has been sent')
    }

    const handleClickShowForm = () => {
        setShowForm(true);
    }

    const handleMinusButton = (id) => {
        const item = orderList.find(item => item.id === id);
        if (item.count > 1) {
            item.count = item.count - 1;
            setOrderList([...orderList]);
        }
        else {
            const newOrderList = orderList.filter(item => item.id !== id);
            setOrderList(newOrderList);
        }
    }
    
    console.log(orderList)
    if(orderList.length === 0){
        setShowForm(false);
        return (
            <>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' , padding: '10px'}}>
                    <h2>Cart is Empty</h2>
                </Box>
            </>
        );
    }
    else{
        return (
            <>
                <Box container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' , padding: '10px', borderTop:'1px solid silver' ,flexDirection: 'column' , gap:2}}>
                    {
                        orderList.map((item)=>(
                            <Box>
                                <Card key={item.id} sx={{display: 'flex', width:'350px' , boxShadow:'none' }}>
                                    <CardMedia
                                    sx={{width: '100px'}}
                                    component="img"
                                    image={item.url}
                                    alt="shop Image"
                                    />
                                    <CardContent sx={{display: 'flex', flexDirection:'column', alignItems:'center' , justifyContent: 'center'}}>
                                        <p>{item.description}</p>
                                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <p>${item.price} x {item.count}</p>
                                            <Button color='error' onClick={()=>handleMinusButton(item.id)}>Remove</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))
                    }
                </Box>
                <Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' , gap:3}}>
                        <p>
                            Total: ${orderList.reduce((acc,item)=> acc + item.price * item.count , 0).toFixed(2)}
                        </p>
                        <Button onClick={()=>handleClickShowForm()} sx={{backgroundColor:'#f0c041' , color:'#000', padding: '8px 12px' , margin:'10px 0'}}>Proceed</Button>
                    </Box>
                    {showForm && (
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' , gap:3 }}>
                        <Formik
                            initialValues={{
                                email:'',
                                name:'',
                                address:'',
                            }}
                            onSubmit={(values)=>{
                                console.log(values);
                            }
                            }
                        
                        >
                            {(handler) => (
                                <Box component={'form'} sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        onChange={handler.handleChange}
                                        value={handler.values.email}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        onBlur={handler.handleBlur}
                                        autoFocus
                                    />
                                    <TextField
                                        label="Name"
                                        name="name"
                                        onChange={handler.handleChange}
                                        value={handler.values.name}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        onBlur={handler.handleBlur}
                                        autoFocus
                                    />
                                    <TextField
                                        label="Address"
                                        name="address"
                                        onChange={handler.handleChange}
                                        value={handler.values.address}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        onBlur={handler.handleBlur}
                                        autoFocus
                                    />
                                    <Button onClick={handleSubmitForm} type="submit" sx={{margin:'10px 0' , backgroundColor:'#f0c041', color:'#000'}}>
                                        Checkout
                                    </Button>
                                </Box>
                            )}
                        </Formik>
                    </Box>)}
                </Box>
            </>
        );
    }
      
}

export default MainFooter