import React, { Component, Fragment } from 'react';
import { Input, Row, Col } from 'antd';
import Table from '../components/Table';
import { getVenues } from '../utils/requests';

const { Search } = Input;

export default class Dashboard extends Component {
    state = {
        recommendations: [],
        loading: false,
        users: [],
    }

        handleVenueSearch = value => {
        if (value) {
            getVenues(value).then(
                response => {
                    const columns = response.data.response.groups[0].items.map(
                        (item, index) => {
                            return ({
                                title: item.venue.name,
                                id: index,
                                votes: 0,
                            });
                        }
                    )

                    this.setState({
                        recommendations: columns,
                    });
                }
            )
        }
    }


    render() {
        return (
            <Fragment>
                <Row gutter={8}>
                    <Col span={6} />
                    <Col span={12}>
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            onSearch={this.handleVenueSearch}
                            allowClear
                        />
                    </Col>
                    <Col span={6} />
                </Row>
                <Row gutter={8}>
                    <Col span={2} />
                    <Col span={20}>
                        <Table
                            columns={this.state.recommendations}
                        />
                    </Col>
                    <Col span={2} />
                </Row>
            </Fragment>
        );
    }
}
