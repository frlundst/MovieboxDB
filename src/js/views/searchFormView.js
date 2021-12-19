import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../css/searchForm.css';

function SearchFormView(props) {
    return (
        <div className="search-form-section">
            <div className="search-form">
                <Row className="g-2">
                    <h1>Search For Movies</h1>
                </Row>
                <Row className="g-2">
                    <InputGroup>
                        <Form.Control className="input" placeholder="Search..." type="search" onInput={e => props.onText(e.target.value)} onKeyPress={e => { if (e.key === "Enter") props.onSearch() }} />
                        <Button className="button" variant="dark" onClick={() => props.onSearch()}>Search</Button>
                    </InputGroup>
                </Row>
            </div>

        </div>
    );
}

export default SearchFormView;
