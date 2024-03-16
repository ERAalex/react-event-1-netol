import React from "react";
import "./css/toolbar.css";


export const Toolbar = (props) => {
    console.log('Toolbar')

    const { filters, selected, onSelectFilter } = props;

    return (
        <div className="toolbar">
                {filters.map((filters) => (
                    <button
                        className={filters === selected ? "toolbaButton selected" : "toolbarButton"}
                        key={filters}
                        onClick={onSelectFilter}
                    >
                        
                        {filters}
                    </button>
                ))}
            </div>
    );

}
