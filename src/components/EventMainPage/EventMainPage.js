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

        let adres = {};
        adres.city = image._embedded.venues[0].city.name ?? 'undefined';
        adres.country = image._embedded.venues[0].country.countryCode ?? 'undefined';
        adres.state = '';
        if (adres.country == 'US') {
            adres.state = image._embedded.venues[0].state.name + ', ' ?? 'undefined';
        }


        adres.address = image._embedded.venues[0].address.line1 ?? 'undefined';


        return <>
            <div>
                <img src={image.images[0].url ?? 'undefined'}/>
            </div>
            <div>
                {image.name ?? 'undefined'}
                <hr/>
                {image.classifications[0].segment.name ?? 'undefined'} - {image.classifications[0].genre.name ?? 'undefined'}
                <br/>
                {adres.address}, {adres.city}, {adres.state}{adres.country}
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
