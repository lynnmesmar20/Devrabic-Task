import { Pagination } from "react-bootstrap";
import "./Pagination.css";
const CustomPagination =({totalPages,currentPage,onChangePageHandler}) =>{
   
    return (
        <Pagination className='justify-content-center customPage'>
        <Pagination.First onClick={() => onChangePageHandler(1)}/>
        {currentPage != 1 && <Pagination.Prev  onClick={() => onChangePageHandler(currentPage - 1)} />}
        {Math.floor(totalPages/2)-1 > 1 && <Pagination.Ellipsis/>}
        {Math.floor(totalPages/2)-1 > 0 && <Pagination.Item  onClick={() => onChangePageHandler(Math.floor(totalPages/2)-1)}>{Math.floor(totalPages/2)-1}</Pagination.Item>}
        <Pagination.Item  onClick={() => onChangePageHandler(Math.floor(totalPages/2))}>{Math.floor(totalPages/2)}</Pagination.Item>
        <Pagination.Item  onClick={() =>onChangePageHandler(Math.floor(totalPages/2)+1)}>{Math.floor(totalPages/2)+1}</Pagination.Item>
        {Math.floor(totalPages/2)+1 != totalPages  && <Pagination.Ellipsis/>}
        {currentPage != totalPages  && <Pagination.Next  onClick={() => onChangePageHandler(currentPage + 1)} />}
<Pagination.Last onClick={()=>onChangePageHandler(totalPages)}/>
</Pagination>
    );
}
export default CustomPagination;