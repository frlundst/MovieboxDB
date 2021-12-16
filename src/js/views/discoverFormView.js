import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../css/discoverForm.css';

function DiscoverFormView(props) {
    return (
        <div className="discover-form-section">
            <div className="discover-form">
                <Form className="form">

                    <Form.Group className="form-group">
                        <h1>Discover</h1>
                        <Row className="g-2">
                            <Col>
                                <Form.Select onChange={e => props.onSortBy(e.target.value)} defaultValue="none">
                                    <option value="none">Sort By</option>
                                    <option value="popularity.desc">Most popular</option>
                                    <option value="popularity.asc">Least popular</option>
                                    <option value="release_date.desc">Newest</option>
                                    <option value="release_date.asc">Oldest</option>
                                    <option value="revenue.desc">Most revenue</option>
                                    <option value="revenue.asc">Least revenue</option>
                                    <option value="rating.desc">Top rated</option>
                                    <option value="rating.asc">Worst rated</option>
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
                            <Col>
                                <Form.Range value={props.minScore}
                                    onChange={e => props.onMinScoreChange(e.target.value)}
                                    max={10}
                                    tooltip='auto'
                                    variant="secondary"
                                />
                            </Col>
                            <Col>
                                <Form.Control value={props.minScore} readOnly="readOnly"/>
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
                            
                            <Col>
                                <Form.Range value={props.maxScore}
                                    onChange={e => props.onMaxScoreChange(e.target.value)}
                                    max={10}
                                    tooltip='auto'
                                    variant="secondary"
                                />
                            </Col>
                            <Col>
                                <Form.Control value={props.maxScore} readOnly="readOnly"/>
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