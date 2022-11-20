import React from "react";
import {connect} from "react-redux";
import style from "../EventCell/EventCell.module.css";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import EventMainPage from "../EventMainPage/EventMainPage";


class NormalizerForTicketmaster extends React.Component {


    render() {

        let id = window.location.pathname.split('/')[2];
        let chapterGet = this.props.getEventsTicketmaster;

        let image;
        let im = chapterGet.find(function (item) {
            return id === item.id
        })

        if (im !== undefined) {
            image = im;
        }

        let city = image._embedded.venues[0].city.name ?? 'undefined';
        let country = image._embedded.venues[0].country.countryCode ?? 'undefined';
        let state = '';
        if (country == 'US') {
            state = image._embedded.venues[0].state.name + ', ' ?? 'undefined';
        }
        let address = image._embedded.venues[0].address.line1 ?? 'undefined';
        let genre = image.classifications[0].genre.name;
        let segment = image.classifications[0].segment.name;
        let url = image.images[0].url;
        let name = image.name;
        return <>
            <EventMainPage city={city}
                           country={country}
                           state={state}
                           address={address}
                           genre={genre}
                           segment={segment}
                           url={url}
                           name={name}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsTicketmaster: state.ticketmaster_reducer.eventsTicketmaster,
    })
};

let resultConnecting = connect(mapStateToProps, {})(NormalizerForTicketmaster);

export default resultConnecting;

