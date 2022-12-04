import React from "react";
import {connect} from "react-redux";
import EventMainPage from "../EventMainPage/EventMainPage";
import {handleFetchEventsDetails} from "../../redux/ticketmaster_reducer";


class NormalizerForTicketmaster extends React.Component {

    componentDidMount() {
        let id = window.location.pathname.split('/')[2];

        this.props.handleFetchEventsDetails(id);
    }



    render() {

        let city = '';
        let country = '';
        let state = '';
        let address = '';
        let genre = '';
        let segment = '';
        let url = '';
        let name = '';


        let image = this.props.getTicketmasterDetails;
        console.log(Object.entries(image).length != 0);
        if(Object.entries(image).length != 0){
            city = image._embedded.venues[0].city.name ?? 'undefined';
            country = image._embedded.venues[0].country.countryCode ?? 'undefined';
            state = '';
            if (country == 'US') {
                state = image._embedded.venues[0].state.name + ', ' ?? 'undefined';
            }
            address = image._embedded.venues[0].address.line1 ?? 'undefined';
            genre = '';
            segment = '';
            if (image.classifications) {
                if (image.classifications[0].genre) {
                    genre = image.classifications[0].genre.name;
                }
                if (image.classifications[0].segment) {
                    segment = image.classifications[0].segment.name;
                }
            }
            url = image.images[0].url;
            name = image.name;
        }

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
        getTicketmasterDetails: state.ticketmaster_reducer.ticketmasterDetails,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchEventsDetails})(NormalizerForTicketmaster);

export default resultConnecting;

