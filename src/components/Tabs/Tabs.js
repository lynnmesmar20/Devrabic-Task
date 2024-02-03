import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Tabs.css";
const CustomTabs=({handleTabSelect}) => {
    
  return (
    <Tabs
      defaultActiveKey="All"
      className="customTab"
      onSelect={handleTabSelect}
    >
      <Tab eventKey="All" title={<span className="tabTitle">All</span>}>
        
      </Tab>
      <Tab eventKey="Laptops" title={<span className="tabTitle">Laptops</span>}  >
        
      </Tab>
      </Tabs>
  );
}
export default CustomTabs;