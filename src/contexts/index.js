import { createContext, useEffect, useRef, useState } from "react";
import ShopItem from "../data/db";
// Store
export const contexts = createContext({
  data:[],
  setData:()=>{},
  orderFilter:'Lowest',
  setOrderFilter:()=>{},
  sizeFilter:'ALL',
  setSizeFilter:()=>{},
  orderList:[],
  setOrderList:()=>{},
  filterData:[],
  setFilterData:()=>{},
  showForm:false,
  setShowForm:()=>{}


});

// Provider
const ContextsProvider = ({ children }) => {
  const [data,setData] = useState(ShopItem);
  const [orderFilter, setOrderFilter] = useState('Lowest');
  const [sizeFilter, setSizeFilter] = useState('ALL');
  const [orderList, setOrderList] = useState([])
  const [filterData , setFilterData] = useState(data)
  const [showForm, setShowForm] = useState(false);


  return (
    <contexts.Provider value={{
      data:data,
      setData,
      orderFilter,
      setOrderFilter,
      sizeFilter,
      setSizeFilter,
      orderList,
      setOrderList,
      filterData,
      setFilterData,
      showForm,
      setShowForm
    }}>
      {children}
    </contexts.Provider>
  );
};

export default ContextsProvider;
