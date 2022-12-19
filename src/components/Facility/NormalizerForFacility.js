import React from "react";
import {connect} from "react-redux";
import EventMainPage from "../EventMainPage/EventMainPage";
import {
    handleFetchCurrentFacility,
    handleFetchCurrentFacilityAddress,
    handleFetchFacilityMedia
} from "../../redux/facility_reducer";

class NormalizerForFacility extends React.Component {

    componentDidMount(){

        let id = window.location.pathname.split('/')[2];
        this.props.handleFetchCurrentFacility(id);
        this.props.handleFetchCurrentFacilityAddress(id);
        this.props.handleFetchFacilityMedia(id);
    }

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



        let resultUrl = this.props.arrayMediaFacility.find(function (item) {
            return item.facilityId === id
        });

        if (resultUrl?.url === undefined) {
            url = 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';
        } else {
            url = resultUrl.url;
        }


        if(Object.entries(this.props.currentFacility).length !== 0 && Object.entries(this.props.currentFacilityAddress).length !== 0){
            console.log(this.props.currentFacilityAddress.METADATA.RESULTS.TOTAL_COUNT)
            let s = this.props.currentFacility;
            name = s?.FacilityName;
            description = s?.FacilityDescription;
            country = ', undefined';
            city = 'undefined';
            state = 'undefined';
            address = 'undefined';
            genre = 'undefined';
            segment = 'undefined';
            lng=s?.FacilityLongitude;
            lat=s?.FacilityLatitude;

            coordinates=(s?.GEOJSON?.COORDINATES==null ? [] : s?.GEOJSON?.COORDINATES);
            if(this.props.currentFacilityAddress.METADATA.RESULTS.TOTAL_COUNT>0){
               let adrs = this.props.currentFacilityAddress.RECDATA[0];
                country = adrs.AddressCountryCode;
                city = adrs.City;
                state = adrs.AddressStateCode;
                address = adrs.FacilityStreetAddress1;
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
}

let mapStateToProps = (state) => {
    return ({
        arrayNameFacility: state.facility_reducer.getArrayNameFacility(),
        arrayMediaFacility: state.facility_reducer.arrayMediaFacility,
        currentFacility: state.facility_reducer.currentFacility,
        currentFacilityAddress: state.facility_reducer.currentFacilityAddress,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchCurrentFacility, handleFetchFacilityMedia, handleFetchCurrentFacilityAddress})(NormalizerForFacility);

export default resultConnecting;