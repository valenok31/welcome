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
        let id = window.location.pathname.split('/')[2];
        let image = () => this.props.getTicketmasterDetails;


        let name = id;
        let description = 'description';
        let country = ', undefined';
        let city = 'undefined';
        let state = 'undefined';
        let address = 'undefined';
        let genre = 'undefined';
        let segment = 'undefined';
        let lng;
        let lat;
        let url;
        let coordinates = [7, 0];



        image = image();


               if(Object.entries(image).length != 0) {




                   city = image._embedded.venues[0].city.name ?? 'undefined';
                   country = image._embedded.venues[0].country.countryCode ?? 'undefined';
                   state = '';
                   coordinates = [image._embedded.venues[0].location.longitude, image._embedded.venues[0].location.latitude];
                   description = image.dates.start.dateTime;
                   console.log(description);
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


                   return <>
                       <EventMainPage city={city}
                                      country={country}
                                      state={state}
                                      address={address}
                                      genre={genre}
                                      segment={segment}
                                      url={url}
                                      name={name}
                                      description={description}
                                      coordinates={coordinates}
                                      lng={lng}
                                      lat={lat}/>
                   </>
               }


    }
}

let mapStateToProps = (state) => {
    return ({
        getTicketmasterDetails: state.ticketmaster_reducer.ticketmasterDetails,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchEventsDetails})(NormalizerForTicketmaster);

export default resultConnecting;

