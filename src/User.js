import React, { Component } from 'react';
import { Card, CardText, Row, Col } from 'reactstrap';


class Users extends Component {
    render() {
        return (
            <div>
                <Card body>
                    <Row>
                        <Col sm="3" className="text-right">
                            <h1><i class="fas fa-user-circle"></i></h1>
                        </Col>
                        <Col sm="9" className="text-left" onClick={this.props.onClickHandler}>
                            <strong> User Name</strong>
                            <CardText>@handle, work at discription
                                <br></br>bio to be wrap and not than
                                <br></br>line 3
                            </CardText>
                        </Col>
                    </Row>

                </Card></div>

        )
    }
}

export default Users;