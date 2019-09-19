import React, { Component } from 'react';
import { Radio, Input, Empty } from 'antd';
import ColumnHeader from './ColumnHeader';

import './style.scss';

export default class Table extends Component {
    render() {
        const { columns, users, onSelection, onChangeName, mostVoted } = this.props;
        if (!columns.length) {
            return (
                <div className="voting-table">
                    <Empty />
                </div>
            );
        }

        return (
            <div className="voting-table">
                <div className="voting-table__row">
                    <div className="voting-table__column voting-table__participant-label">
                        Participants
                    </div>
                    {
                        columns.map(column => (
                            <ColumnHeader
                                column={column}
                                key={column.id}
                                isVoteWinner={mostVoted.id === column.id}
                            />
                        )) 
                    }
                </div>
                { users.length ? null : <Empty />}
                {
                    users.map(user => {
                        return (
                            <Radio.Group
                                onChange={onSelection}
                                value={user.venueId}
                                name={user.id.toString()}
                                className="voting-table__row"
                                key={user.id}
                            >
                                <Input
                                    value={user.participant}
                                    onChange={onChangeName}
                                    className="voting-table__column"
                                    id={user.id.toString()}
                                />
                                    
                                { columns.map(column => (
                                    <Radio
                                        className="voting-table__column"
                                        value={column.id}
                                        key={column.id}
                                    />
                                ))}
                            </Radio.Group>
                        )
                    })
                }
            </div>
        )
    }
}
