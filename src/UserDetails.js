import React, { Component } from 'react';
import { Card, CardText, Row, Col } from 'reactstrap';


class UserDetails extends Component {
    render() {
        console.log(this.props);
        return (
            <Row className="m-4 p-4">
                <Col>
                    <Col sm="12" className="text-left">
                        <div onClick={this.props.onBackButtonClick}> back</div>

                    </Col>
                    <Col>
                        <Row>
                            <Col sm="1" className="text-right mt-4">
                                <h1><i class="fas fa-user"></i></h1>
                            </Col>
                            <Col sm="11" className="text-left mt-4">
                                <strong>User Name</strong>
                                <br></br>@ handle
                    </Col>
                            <Col sm="12" className="text-left mt-4">
                                <div className="ml-4">
                                    <strong>bio</strong>
                                    <br></br>
                                    Lorem ipsum dolor sit amet, has lorem persius ea, in vel maluisset gubergren philosophia,
                       <br></br>vim eros salutandi te. Qui lorem euripidis voluptatibus in.
                       <br></br> Solum prodesset id per, suavitate ocurreret te sit.
                        </div>
                            </Col>
                            <Col sm="12" className="text-left mt-4">
                                <div className="ml-4">
                                    <strong>Work At</strong>
                                    <br></br>
                                    Lorem ipsum dolor sit amet.
                        </div>
                            </Col>

                        </Row>
                    </Col>
                    <Row>
                        <Col md="6" className="text-left mt-4">
                            <div className="ml-4">
                                <strong>Repository</strong>
                                <br></br>
                                4
                        </div>
                        </Col>
                        <Col md="6" className="text-left mt-4">
                            <div className="text-left">
                                <strong>Followers</strong>
                                <br></br>
                                259
                        </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <div>
                                <Card body>
                                    <Row >
                                        <Col sm="3">
                                            <h1><i class="fas fa-user-circle"></i></h1>
                                        </Col>
                                        <Col sm="9" className="text-left" onClick={this.props.onClickHandler}>
                                            <strong> Username/reponame</strong>
                                            <CardText>@handle, work at discription
                            </CardText>
                                        </Col>
                                    </Row>

                                </Card></div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <div>
                                <Card body>
                                    <Row >
                                        <Col sm="3">
                                            <h1><i class="fas fa-user-circle"></i></h1>
                                        </Col>
                                        <Col sm="9" className="text-left" onClick={this.props.onClickHandler}>
                                            <strong> Username/reponame</strong>
                                            <CardText>@handle, work at discription
                            </CardText>
                                        </Col>
                                    </Row>

                                </Card></div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <div>
                                <Card body>
                                    <Row >
                                        <Col sm="3">
                                            <h1><i class="fas fa-user-circle"></i></h1>
                                        </Col>
                                        <Col sm="9" className="text-left" onClick={this.props.onClickHandler}>
                                            <strong> Username/reponame</strong>
                                            <CardText>@handle, work at discription
                            </CardText>
                                        </Col>
                                    </Row>

                                </Card></div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        )
    }
}

export default UserDetails;