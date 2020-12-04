import {modalConstants} from '../_constants';

export const modalActions = {
    showModal,
    dropModal,
};


function showModal(element) {
    return dispatch => {
        dispatch(show(element));
    };
    function show(element) {return {type : modalConstants.SHOW_MODAL, payload: element}}
}

function dropModal() {
    return dispatch => {
        dispatch(drop());
    };
    function drop() {return {type: modalConstants.DROP_MODAL}};
}