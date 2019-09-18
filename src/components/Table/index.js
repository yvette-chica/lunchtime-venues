import React, { Component } from 'react';
import { Row, Col, Radio } from 'antd';

export default class Table extends Component {
    render() {
        const { columns, users, onSelection } = this.props;

        return (
            <div>
                <Row>
                    {
                        columns.map(column => (
                            <Col
                                span={4}
                                key={column.id}
                            >
                                {column.title}
                                {` Votes: ${column.votes}`}
                            </Col> 
                        )) 
                    }
                </Row>
                {
                    users.map(user => {
                        return (
                            <Row key={user.id}>
                                {user.participant}
                                <Radio.Group
                                    onChange={onSelection}
                                    value={user.venueId}
                                    name={user.id.toString()}
                                >
                                    { columns.map(column => (
                                        <Radio
                                            value={column.id}
                                            key={column.id}
                                        >
                                            {column.title}
                                        </Radio>
                                    ))}
                                </Radio.Group>
                            </Row>
                        )
                    })
                }
            </div>
        )
    }
}
