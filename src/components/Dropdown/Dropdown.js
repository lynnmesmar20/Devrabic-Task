import { Dropdown, DropdownButton} from 'react-bootstrap';
import "./Dropdown.css"
const CustomDropdown =({pageSize , handlePageSizeChange}) =>{
    return (
    <DropdownButton
    className="customDrop"
    title={`Page Size: ${pageSize}`}
    onSelect={handlePageSizeChange}
 
  >
    <Dropdown.Item eventKey={5}>5</Dropdown.Item>
    <Dropdown.Item eventKey={10}>10</Dropdown.Item>
    <Dropdown.Item eventKey={20}>20</Dropdown.Item>
    <Dropdown.Item eventKey={50}>50</Dropdown.Item>
  </DropdownButton>);
}
export default CustomDropdown;