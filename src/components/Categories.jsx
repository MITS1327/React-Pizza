import React from "react";

function Categories ({ value, onChangeCategory }) {
    const categories = ["все", "мясные", "вегитарианские", "гриль", "острые", "закрытые"];

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) =>
                    <li onClick={() => onChangeCategory((i))} className={value === i ? "active" : " "} key={i}>
                        {categoryName}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Categories;