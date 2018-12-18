import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import User from './User'


class Users extends Component {

    render() {
        return (
            <Row>
                <Col sm="6" className="p-4" >
                   <User  onClickHandler={this.props.onClickHandler} />
                </Col>
                <Col sm="6" className="p-4">
                    <User onClickHandler={this.props.onClickHandler} />
                </Col>
            </Row>
        )
    }
}

export default Users;