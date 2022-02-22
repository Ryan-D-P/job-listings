import "./FilterMenu.css";
import removeIcon from "./images/icon-remove.svg";

const FilterMenu = ({ filterList, setFilterList }) => {
    // Clear all tags from the filter list
    const clearFilterList = () => setFilterList([]);

    return (
        <div className="FilterMenu">
            <div className="flex-container">
                {
                    // Output the currently selected filter tags in the FilterMenu
                    filterList.map((filterTag) => (
                        <div className="filter-tag">
                            <div className="tag-name">
                                <p>{ filterTag }</p>
                            </div>
                            <div className="tag-remove">
                                <img src={ removeIcon } alt="icon-remove" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex-container">
                <div className="clear-container" onClick={ () => clearFilterList() }>
                    <p onClick={ () => clearFilterList() }>Clear</p>
                </div>
            </div>
        </div>
    );
}

export default FilterMenu;