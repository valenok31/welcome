import Ticketmaster from "../division/Ticketmaster/ticketmaster";
import React from "react";

const ADD_POST='ADD-POST';

const initialState = {
    tree: [
        {
            path: '/',
            choiceLeft: 'nature',
            choiceRight: 'ticketmaster'
        },
        {
            path: '/ticketmaster',
            choiceLeft: 'few',
            choiceRight: 'many',
            endTree: <Ticketmaster/>
        },

        {
            path: '/nature',
            choiceLeft: 'few',
            choiceRight: 'many',
            endTree: <Ticketmaster/>
        }]
};


const surveyTree = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.tree = action.tree;
            return state;

        default:
            return state;
    }
};


export default surveyTree;