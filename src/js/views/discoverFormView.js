import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../css/discoverForm.css';

function DiscoverFormView(props) {
    return (
        <div className="discover-form-section">
            <div className="discover">
                <h1>Discover Movies</h1>
            </div>            
            <div className="discover-form-section">
                <div className="discover-box">
                    <div className="discover-title">
                        <h1>All Movies</h1>
                    </div>
                    <div className="discover-options">
                        <div className="discover-sort">
                            <Form.Select className="discover-select" onChange={e => props.onSortBy(e.target.value)} defaultValue="none">
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
                        </div>
                        <div className="min-score">
                            <div className="min-score-title">
                                <p className="discover-box-label">Min Rating: {props.minScore}</p>
                            </div>
                            <div className="min-score-range">
                                <Form.Range
                                    value={props.minScore}
                                    onChange={e => props.onMinScoreChange(e.target.value)}
                                    max={10}
                                    tooltip='auto'
                                    variant="secondary"
                                    className="discover-box-range"
                                />
                            </div>
                        </div>
                        <div className="max-score">
                            <div className="min-score-title">
                                <p className="discover-box-label">Max Rating: {props.maxScore}</p>
                            </div>
                            <div className="min-score-range">
                                <Form.Range
                                    value={props.maxScore}
                                    onChange={e => props.onMaxScoreChange(e.target.value)}
                                    max={10}
                                    tooltip='auto'
                                    variant="secondary"
                                />
                            </div>
                        </div>
                        <div className="year">
                            <Form.Control className="year-input" type="search" placeholder="Enter Specific Year..." onInput={e => props.onYearChange(e.target.value)} onKeyPress={e => { if (e.key === "Enter") props.onSearch() }} />
                        </div>
                        <div className="search-button">
                            <Button className="discover-box-search" variant="dark" onClick={() => props.onSearch()}>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverFormView;