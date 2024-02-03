import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../components/Search/Search';
import CustomDropdown from '../components/Dropdown/Dropdown';
import CustomTable from '../components/Table/Table';
import CustomPagination from '../components/Pagination/Pagination';

const Users = () =>{
  const [pageSize, setPageSize] = useState(5);//state to handle fetching data based on page size

  const [currentPage, setCurrentPage] = useState(1);//state to handle pagination

  const [users, setUsers] = useState([]); // state of array of users 

  const [filteredUsers, setFilteredUsers] = useState([]); //filtered users based on search value

  const [search, setSearch] = useState(''); // serach value change and i should handle and render data based on it

  const [totalPages, setTotalPages] = useState(1);//total pages to handle pagination the value in the object in response.data and to ensure that total is set after data fetched i use state


  //function to fetch data using axios and parameters page size and skip value 
  const fetchingData = async () => {
    try{
    let skip = (currentPage - 1) * pageSize;
    const response = await axios.get("https://dummyjson.com/users", {
      params: {
        skip: skip,
        limit: pageSize
      }
    });
    setUsers(response.data.users);
    
    const totalPages = Math.ceil(response.data.total / pageSize);// total pages in pagination based on page size
     setTotalPages(totalPages);
    } catch (error) {
      
    }
  }
   useEffect(() => {
    fetchingData();
  }, [pageSize, currentPage]); // fetching data based on page size and current page whenever they change


  // filter data whenever search change or users so if i delete or wirte in search the data in table will be filtered
  useEffect(() => {
    const newFilteredUsers = users.filter((user) =>
    //any data or row in table that contain the value in search field will be added to the array newFilteredUsers
      Object.values(user).slice(0, 12).some((value) => {
        //whenever the value is string or number it will be compared

        if (typeof value === 'string') {
          return value.toLowerCase().includes(search);
        } else {
          return value.toString().includes(search);
        }
      })
    );
    setFilteredUsers(newFilteredUsers);
  }, [users, search]);

  // function to hanle the change of the page size in dropdown whenever the page size return to the first page
  const handlePageSizeChange = (selectedSize) => {
    setPageSize(parseInt(selectedSize));
    setCurrentPage(1);
  };
 


    return (
        <div className="customLayout" id="Users">
         <CustomDropdown pageSize={pageSize} handlePageSizeChange={handlePageSizeChange}/>

         <SearchBox 
          onChangeHandler={(e) =>{setSearch(e.target.value.toLowerCase());}} 
          placeholder={`Search`}/>
      
        {filteredUsers && filteredUsers.length > 0 && (<CustomTable filteredArray={filteredUsers}/>)}

        <CustomPagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onChangePageHandler={(e) =>{setCurrentPage(e);}}/>

        </div>
    );
}
export default Users;