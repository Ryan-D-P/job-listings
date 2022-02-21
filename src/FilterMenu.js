import "./FilterMenu.css";
import RemoveIcon from "./images/icon-remove.svg";

const FilterMenu = () => {
    return (
        <div className="FilterMenu">
            <div className="flex-container">
                <div className="filter-tag">
                    <div className="tag-name">
                        <p>Frontend</p>
                    </div>
                    <div className="tag-remove">
                        <img src={ RemoveIcon } alt="icon-remove" />
                    </div>
                </div>
            </div>
            <div className="flex-container">
                <div className="clear-container">
                    <p>Clear</p>
                </div>
            </div>
        </div>
    );
}

export default FilterMenu;