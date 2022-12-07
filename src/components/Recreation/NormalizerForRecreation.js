import React from "react";
import {connect} from "react-redux";
import EventMainPage from "../EventMainPage/EventMainPage";
import {handleFetchAreas, handleFetchArr, handleFetchRecArea, setCoordinates} from "../../redux/recreation_reducer";
import MediaURL from "./MediaURL";


class NormalizerForRecreation extends React.Component {

    componentDidMount() {
        //debugger;
        let id = window.location.pathname.split('/')[2];
        this.props.handleFetchRecArea(id);
        this.props.handleFetchAreas(id);
        // this.props.MediaURL(id)
    }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.props.getCoordinates[0]!==prevProps.getCoordinates[0]){
                this.props.setCoordinates(this.props.getCoordinates)
            }
        }


    render() {
        let id = window.location.pathname.split('/')[2];
        let image = () => {
            return image = this.props.getRecreationData; // geo, name, img, description
        }
        let norm = () => this.props.getNormalizerRecArea; // adress
        //console.log(image);
        image = image();
        norm = norm();

        let url = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';

        let name = id;
        let description = id;
        let country = ', undefined';
        let city = 'undefined';
        let state = 'undefined';
        let address = 'undefined';
        let genre = 'undefined';
        let segment = 'undefined';
        let lng;
        let lat;
        let coordinates = [];


        if (this.props.getCoordinates.length !== 0) {
            lng = () => this.props.getCoordinates[0];
            lat = () => this.props.getCoordinates[1];
            coordinates = this.props.getCoordinates;
        }


        if (Object.entries(this.props.getURL).length !== 0) {
            url = this.props.getURL.url;
        }

        if (Object.entries(image).length !== 0) {
            description = image.RecAreaDescription;
            name = image.RecAreaName;

        }

        if (Object.entries(norm).length !== 0) {
            country = norm.AddressCountryCode + ', ' + norm.PostalCode;
            city = norm.City;
            state = norm.AddressStateCode;
            address = norm.RecAreaStreetAddress1;
            segment = norm.Keywords;
            genre = norm.RecAreaPhone;
        }
        //console.log(lat +', '+lng );

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
                           lat={lat}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    //debugger;
    return ({
        getNormalizerRecArea: state.recreation_reducer.normalizerRecArea,
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
        getRecreationData: state.recreation_reducer.recreationData,
        getURL: state.recreation_reducer.url,
        getCoordinates: state.recreation_reducer.coordinates,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleFetchRecArea,
    MediaURL,
    handleFetchArr,
    handleFetchAreas,
    setCoordinates
})(NormalizerForRecreation);

export default resultConnecting;

