import {Table}  from 'react-bootstrap';
import "./Table.css";

const CustomTable =({filteredArray}) => {
    return (
     
        <Table stripped="true" bordered hover responsive className="customTable">
        <thead>
          <tr>
            {Object.keys(filteredArray[0]).slice(0, 12).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredArray.map(user =>
            <tr key={user.id}>
              {Object.values(user).slice(0, 12).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          )}
        </tbody>
      </Table>
     
    
    );
}
export default CustomTable;