import React from "react";

function persistModel(model) {
    model.setPersistence();
    model.getDataBaseInfo();
}

export default persistModel;
