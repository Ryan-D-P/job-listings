import "./FilterMenu.css";
import removeIcon from "./images/icon-remove.svg";

const FilterMenu = ({ filterList, setFilterList }) => {
    // Clear all tags from the filter list and restore the full (unfiltered) job listings
    const clearFilterList = () => setFilterList([]);
    // Remove a specific tag from the FilterMenu when close icon is clicked
    const removeTag = (filterTag) => setFilterList(filterList.filter(tag => tag !== filterTag));

    // Do not display FilterMenu if filterList is empty
    if (!filterList.length) return null;

    return (
        <div className="FilterMenu">
            <div className="flex-container">
                {
                    // Output the currently selected filter tags in the FilterMenu
                    filterList.map((filterTag) => (
                        <div className="filter-tag" key={ filterTag }>
                            <div className="tag-name">
                                <p>{ filterTag }</p>
                            </div>
                            <div className="tag-remove" onClick={ () => removeTag(filterTag) }>
                                <img src={ removeIcon } alt="icon-remove" onClick={ (filterTag) => removeTag(filterTag) } />
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