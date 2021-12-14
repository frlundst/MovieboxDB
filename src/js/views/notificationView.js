function MovieNotification(props) {
    return (
        <div className="notification">
            <Toast show={props.inWatchlist} bg="warning">
                <Toast.Header>
                    <strong className="me-auto">MovieBoxDB</strong>
                    <button type="button" onClick={() => props.close() } className="close" data-dismiss="toast" aria-label="Close"><FontAwesomeIcon icon={faTimes}/></button>
                </Toast.Header>
                <Toast.Body>This movie already exists in your watchlist!</Toast.Body>
            </Toast>
        </div>
    );
}
