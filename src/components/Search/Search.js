import "./Search.css";

const SearchBox =({onChangeHandler, placeholder}) =>{

    return(
        <div className="box">
        <input 
        className="search-box"
        type="search" 
        placeholder={placeholder}
        onChange={onChangeHandler}/> 
        </div>
    );
}

export default SearchBox;