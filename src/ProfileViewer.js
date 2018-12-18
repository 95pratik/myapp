import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import Users from './Users';
import UserDetails from './UserDetails';

class ProfileViewer extends Component {
    state = {
        showUserDetails: false,
    }

    onClickHandler = () => {
        this.setState({
            showUserDetails: true
        })
    }

    onBackButtonClick = () => {
        this.setState({
            showUserDetails: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    !this.state.showUserDetails && <div className="m-2 p-4">
                        <h1 className="text-left pr-4"><i className="fab fa-github"> GitHub Profile Viewer</i> </h1>
                        <form className="form-inline my-2 my-lg-0 mt-4">
                            <input className="form-control mr-sm-2 bg-info" type="search" placeholder="Search" aria-label="Search"></input>
                            <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
                        </form>
                        <Row>
                            <Col>
                                <Users onClickHandler={this.onClickHandler} />
                                <Users onClickHandler={this.onClickHandler} />
                                <Users onClickHandler={this.onClickHandler} />
                            </Col>
                        </Row>
                        <strong className="text-left">
                            Note: More search result should be lazy loaded as user scroll down.
                        </strong>
                    </div>
                }
                {
                    this.state.showUserDetails && <UserDetails onBackButtonClick={this.onBackButtonClick} />
                }

            </React.Fragment>

        )
    }
}

export default ProfileViewer;