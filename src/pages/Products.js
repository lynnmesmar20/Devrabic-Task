import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../components/Search/Search';
import CustomDropdown from '../components/Dropdown/Dropdown';
import CustomTable from "../components/Table/Table";
import CustomPagination from '../components/Pagination/Pagination';
import CustomTabs from "../components/Tabs/Tabs";
const Products = () =>{
  const [pageSize, setPageSize] = useState(5);//state to handle fetching data based on page size

  const [currentPage, setCurrentPage] = useState(1);//state to handle pagination

  const [products, setProducts] = useState([]);// state of array of products

  const [filteredProducts, setFilteredProducts] = useState([]);//filtered products based on search value

  const [search, setSearch] = useState(''); // serach value change and i should handle and render data based on it

  const [totalPages, setTotalPages] = useState(1);//total pages to handle pagination the value in the object in response.data and to ensure that total is set after data fetched i use state

  const [tabKey , setTabKey] = useState("All");//state for tabs 
   
  //function to fetch data using axios and parameters page size and skip value 
  const fetchingData = async () => {
    try{
    let skip = (currentPage - 1) * pageSize;
    const response = await axios.get("https://dummyjson.com/products", {
      params: {
        skip: skip,
        limit: pageSize
      }
    });
    setProducts(response.data.products);
    setFilteredProducts(response.data.products);// i use filtered products in table so i set it initialy to products
    const totalPages = Math.ceil(response.data.total / pageSize);// total pages in pagination based on page size
    setTotalPages(totalPages);
    console.log(response.data.products);
  } catch (error){
      
    }
  }
  useEffect(() => {
    fetchingData();
  }, [pageSize, currentPage]);// fetching data based on page size and current page whenever they change

  useEffect(() => {
    
   if(tabKey=="All"){
    const newFilteredProducts = products.filter((product) =>{
       //filter based on title of the product
      if(product.title.toLowerCase().includes(search)) {
          return product;
        } 
        //filter based on the brand
       else if(product.brand.toLowerCase().includes(search)) {
            return product;
          } 
          //filter based on category
        else if(product.category.toLowerCase().includes(search)) {
            return product;
          }
        }

        );
        setFilteredProducts(newFilteredProducts);
      }
      else if(tabKey=="Laptops"){
        const newFilteredProducts = products.filter(product =>
          product.category == "laptops").filter((product) =>{
            //filter based on title of the product
           if(product.title.toLowerCase().includes(search)) {
               return product;
             } 
             //filter based on the brand
            else if(product.brand.toLowerCase().includes(search)) {
                 return product;
               } });
               setFilteredProducts(newFilteredProducts);
        
      }

       
        
     }
    
  , [products, search,tabKey]);//whenever search or products change

  // function to hanle the change of the page size in dropdown whenever the page size return to the first page
  const handlePageSizeChange = (selectedSize) => {
    setPageSize(parseInt(selectedSize));
    setCurrentPage(1);
  };



    return (
        <div className="customLayout" id="Products">
        <CustomTabs handleTabSelect = {(tab) =>{setTabKey(tab);}}/>

        <CustomDropdown pageSize={pageSize} handlePageSizeChange={handlePageSizeChange}/>
        
        <SearchBox 
        onChangeHandler={ (e) =>{setSearch(e.target.value.toLowerCase());}} 
        placeholder={`Search for a title brand or Category`}/>

        {filteredProducts && filteredProducts.length > 0 && <CustomTable filteredArray={filteredProducts}/>}
        
        <CustomPagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onChangePageHandler={(e) =>{setCurrentPage(e);}}/>
              
            
          </div>
    );
}
export default Products;