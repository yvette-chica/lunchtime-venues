import React from 'react';

const ColumnHeader = ({ column }) => {
    return (
        <div className="voting-table__column">
            <div className="voting-table__column-title">
                {column.title}
            </div>
            <div className="voting-table__column-category">
                {column.category}
            </div>
            <div>
                {` Votes: ${column.votes}`}
            </div>
        </div> 
    );
}

export default ColumnHeader;
