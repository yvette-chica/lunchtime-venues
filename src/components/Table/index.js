import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Table extends Component {
    render() {
        const { columns } = this.props;

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
                            </Col> 
                        )) 
                    }
                </Row>
            </div>
        )
    }
}
