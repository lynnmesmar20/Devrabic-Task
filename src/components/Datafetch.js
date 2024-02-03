import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetch = ({ apiUrl, pageSize, currentPage,setFilteredData }) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchingData = async () => {
    try{
    let skip = (currentPage - 1) * pageSize;
    const response = await axios.get(apiUrl, {
      params: {
        skip: skip,
        limit: pageSize
      }
    });
    setData(response.data.products);
    setFilteredData(response.data.products);// i use filtered products in table so i set it initialy to products
    const totalPages = Math.ceil(response.data.total / pageSize);// total pages in pagination based on page size
    setTotalPages(totalPages);
   
  } catch (error){
      
    }
  }
  useEffect(() => {
    fetchingData();
  }, [apiUrl,pageSize, currentPage]);// fetching data based on page size and current page whenever they change


};

export default DataFetch;