import React from 'react';
import classnames from 'classnames';

const ColumnHeader = ({ column, isVoteWinner }) => {
    const columnHeaderCn = classnames(
        'voting-table__column',
        {'voting-table__column--most-voted': isVoteWinner}
    )
    return (
        <div className={columnHeaderCn}>
            <div className="voting-table__column-title">
                <a href={column.url}>
                    {column.title}
                </a>
            </div>
            <div className="voting-table__column-category">
                {column.category}
            </div>
            <div className="voting-table__column-rating">
                {column.rating}
            </div>
        </div> 
    );
}

export default ColumnHeader;
