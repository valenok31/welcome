import React from "react";
import {connect} from "react-redux";
import EventMainPage from "../EventMainPage/EventMainPage";

class NormalizerForFacility extends React.Component {

    render() {
        let id = window.location.pathname.split('/')[2];
        let url;
        let name = id;
        let description = id;
        let country = ', undefined';
        let city = 'undefined';
        let state = 'undefined';
        let address = 'undefined';
        let genre = 'undefined';
        let segment = 'undefined';
        let lng=0;
        let lat=0;
        let coordinates=[];

        let result = this.props.arrayMediaFacility.find(function (item) {
            return item.facilityId === id
        });

        if (result?.url === undefined) {
            url = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';
        } else {
            url = result.url;
        }



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
    return ({
        arrayMediaFacility: state.facility_reducer.arrayMediaFacility,
    })
};

let resultConnecting = connect(mapStateToProps, {})(NormalizerForFacility);

export default resultConnecting;