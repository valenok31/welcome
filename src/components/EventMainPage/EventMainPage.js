import React from "react";
import {connect} from "react-redux";
import style from "../EventCell/EventCell.module.css";
import {NavLink, useHistory, useLocation} from "react-router-dom";


class EventMainPage extends React.Component {


    render() {
        let chapterGet;
        let id = window.location.pathname.split('/')[2];
        let chapter = window.location.pathname.split('/')[1];
        if (chapter === 'ticketmaster') {
            chapterGet = this.props.getEventsTicketmaster
        }
        if (chapter === 'recreation') {
            chapterGet = this.props.getEventsRecreation
        }


        let image;
        let im = chapterGet.find(function (item) {
            return id === item.id
        })

        if (im !== undefined) {
            image = im;
        }

        console.log(Object.entries(image))
        return <>
            <div>
                {image.name}
                <hr/>
                {image.classifications[0].genre.name}
            </div>
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsTicketmaster: state.ticketmaster_reducer.eventsTicketmaster,
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
    })
};

let resultConnecting = connect(mapStateToProps, {})(EventMainPage);

export default resultConnecting;


/*
export default function EventMainPage(props) {


    console.log(window.location.href.split('/'));
    console.log(window.location.pathname);
    return <><div>
        789
    </div>
    </>

}*/
