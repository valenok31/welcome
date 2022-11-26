import React from "react";
import {connect} from "react-redux";
import EventMainPage from "../EventMainPage/EventMainPage";
import {handleFetchRecArea} from "../../redux/recreation_reducer";


class NormalizerForRecreation extends React.Component {

    componentDidMount() {
        //debugger;
        let id = window.location.pathname.split('/')[2];
        this.props.handleFetchRecArea(id);

    }


    render() {


        let id = window.location.pathname.split('/')[2];
        //console.log(this.props.getNormalizerRecArea)
        let chapterGet = this.props.getEventsRecreation;
        let image;
        let im = chapterGet.find(function (item) {
            return id === item.RecAreaID
        })

        if (im !== undefined) {
            image = im;
        }
        let name = image.RecAreaName;
        let url = image.url;


        let chapterNorm = this.props.getNormalizerRecArea;

        let norm;
        /*        let nm = chapterNorm.find(function (item) {
                    return id === item.RecAreaID
                })

                if (nm !== undefined) {
                    norm = nm;
                }*/

        let country = ', undefined';
        let city = 'undefined';
        let state = 'undefined';
        let address = 'undefined';
        let genre = 'undefined';
        let segment = 'undefined';
        if (chapterNorm.length !== 0) {

            let nm = chapterNorm.find(function (item) {
                return id === item.RecAreaID
            })

            if (nm !== undefined) {
                norm = nm;
                console.log(norm)
                //let norm = chapterNorm[chapterNorm.length-1];
                //country = norm.RECAREAADDRESS ?? ' no data ';

                    country = norm.AddressCountryCode + ', ' + norm.PostalCode;
                    city = norm.City;
                    state = norm.AddressStateCode;
                    address = norm.RecAreaStreetAddress1;


                segment = norm.Keywords;
                genre = norm.RecAreaPhone;

            }


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
    //debugger;
    return ({
        getNormalizerRecArea: state.recreation_reducer.normalizerRecArea,
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchRecArea})(NormalizerForRecreation);

export default resultConnecting;

