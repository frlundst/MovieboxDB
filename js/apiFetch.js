const ApiFetch = {
    apiCall(params) {
        return fetch(BASE_URL + params, {
                "method": "GET",
                "headers": {
                    'api_key' : API_KEY,
                    'language' : 'en-US',
                }
        }).then(response => response.ok ? response.json() : throwError(response.statusText));
    },
};

function throwError(message) {
    throw new Error(message);
}
