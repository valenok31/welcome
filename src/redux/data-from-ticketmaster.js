import React from "react";

const initialState = {
    tree: [
        {
            path: '/',
            choiceLeft: 'nature',
            choiceRight: 'ticketmaster'
        }]
};


const dataFromTicketmaster = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default dataFromTicketmaster;