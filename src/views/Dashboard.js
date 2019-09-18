import React, { Component, Fragment } from 'react';
import { Input, Row, Col } from 'antd';
import Table from '../components/Table';
import { getVenues } from '../utils/requests';

const { Search } = Input;

export default class Dashboard extends Component {
    state = {
        venues: [],
        loading: false,
        users: [],
    }

    handleUpdateUserName = (event) => {
        const { users } = this.state;
        const userId = Number(event.nativeEvent.target.id);
        const userIndex = users.findIndex(user => user.id === userId);
        const newUserName = event.nativeEvent.target.value;

        const updatedUsers = [...users];
        updatedUsers[userIndex].participant = newUserName;

        this.setState({
            users: updatedUsers,
        })
    }

    handleVenueSearch = value => {
        if (value) {
            getVenues(value).then(
                response => {
                    const columns = response.data.response.groups[0].items.map(
                        item => {
                            return ({
                                title: item.venue.name,
                                id: item.venue.id,
                                votes: 0,
                                category: item.venue.categories[0].name,
                            });
                        }
                    )

                    this.setState({
                        venues: columns,
                    });
                }
            )
        }
    }

    handleAddNewUser = userName => {
        if (userName) {
            const newUser = {
                id: this.state.users.length,
                participant: userName,   
                venueId: null,
            }

            this.setState(state => ({
                users: [
                    newUser,
                    ...state.users
                ],
            }))
        }
    }

    handleVote = radioEvent => {
        const { users, venues } = this.state;

        // Determine which participant is voting
        const votingUserId = Number(radioEvent.target.name);
        const votingUserIndex = users.findIndex(user => user.id === votingUserId);

        const venueId = radioEvent.target.value;
        const previousVenueId = users[votingUserIndex].venueId;

        // Determine which venues' votes need to be updated
        const venueIndex = venues.findIndex(venue => venue.id === venueId)
        const previousVenueIndex = venues.findIndex(venue => venue.id === previousVenueId)

        // Create new users & venue arrays so as not to mutate state directly
        const updatedUsers = [...users];
        const updatedVenues = [...venues];

        // Update the participant's vote
        updatedUsers[votingUserIndex].venueId = venueId;

        // Update the venues' vote tally
        updatedVenues[venueIndex].votes++
        if (previousVenueIndex > -1) {
            updatedVenues[previousVenueIndex].votes--
        }

        // Update this.state.users & this.state.venues
        this.setState({
            users: updatedUsers,
            venues: updatedVenues, 
        })
    }

    render() {
        return (
            <Fragment>
                <Row gutter={8}>
                    <Col span={6} />
                    <Col span={12}>
                        <Search
                            placeholder="Add location"
                            enterButton="Get Venues"
                            size="large"
                            onSearch={this.handleVenueSearch}
                            allowClear
                        />
                    </Col>
                    <Col span={6} />
                </Row>
                <Row>
                    <Col span={2} />
                    <Col span={20}>
                        <Table
                            columns={this.state.venues}
                            users={this.state.users}
                            onSelection={this.handleVote}
                            onChangeName={this.handleUpdateUserName}
                        />
                    </Col>
                    <Col span={2} />
                </Row>
                <Row>
                    <Col span={6} />
                    <Col span={12}>
                        <Search
                            addonBefore="+"
                            placeholder="Participant Name"
                            enterButton="Add Participant"
                            size="large"
                            onSearch={this.handleAddNewUser}
                            allowClear
                        />
                    </Col>
                    <Col span={6} />
                </Row>
            </Fragment>
        );
    }
}
