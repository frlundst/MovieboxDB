import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../css/discoverFormView.css';

function DiscoverFormView(props) {
    return (
        <div className="discover-form-section">
            <div className="discover-form">
                <Form className="form">

                    <Form.Group className="form-group" controlId="formDiscover">
                        <h1>Discover</h1>
                        <Row className="g-2">
                            <Col>
                                <Form.Select onChange={e => props.onSortBy(e.target.value)}>
                                    <option value="none">Sort By</option>
                                    <option value="popularity">Popularity</option>
                                    <option value="release_date">Release date</option>
                                    <option value="revenue">Revenue</option>
                                    <option value="rating">Rating</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="g-2">
                            <Col>
                                <Form.Select onChange={e => props.onOrder(e.target.value)}>
                                    <option value="none">Order</option>
                                    <option value="asc">Ascending</option>
                                    <option value="desc">Descending</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="g-2">
                            <Col>
                                <Form.Label>Min score: </Form.Label>
                            </Col>
                            <Col />
                            <Col />
                            <Col />
                            <Col />
                            <Col />
                            <Col />
                            <Col>
                                <Form.Range value={props.minScore}
                                    onChange={e => props.onMinScoreChange(e.target.value)}
                                    max={10}
                                    tooltip='auto'
                                    variant="secondary"
                                />
                            </Col>
                            <Col>
                                <Form.Control value={props.minScore} />
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Col>
                                <Form.Label>Max score: </Form.Label>
                            </Col>
                            <Col />
                            <Col />
                            <Col />
                            <Col />
                            <Col />
                            <Col />
                            <Col>
                                <Form.Range value={props.maxScore}
                                    onChange={e => props.onMaxScoreChange(e.target.value)}
                                    max={10}
                                    tooltip='auto'
                                    variant="secondary"
                                />
                            </Col>
                            <Col>
                                <Form.Control value={props.maxScore} />
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Button variant="dark" onClick={() => props.onSearch()}>Search</Button>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default DiscoverFormView;