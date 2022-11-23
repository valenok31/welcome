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
                //let norm = chapterNorm[chapterNorm.length-1];
                //country = norm.RECAREAADDRESS ?? ' no data ';
                if(norm.RECAREAADDRESS){
                    country = norm.RECAREAADDRESS[0].AddressCountryCode;
                    city = norm.RECAREAADDRESS[0].City;
                    state = norm.RECAREAADDRESS[0].AddressStateCode;
                    address = norm.RECAREAADDRESS[0].RecAreaStreetAddress1;

                }
                segment = norm.Keywords;

            }

            /*            //let norm = chapterNorm[chapterNorm.length-1];
                         country = norm.RecAreaName;
                         city = norm.RecAreaName;
                         state = norm.RecAreaName;
                         address = norm.RecAreaName;
                         genre = undefined;
                         segment = norm.Keywords;*/
        }

        /*        let country = norm.RECAREAADDRESS[0].AddressCountryCode;
                let city = norm.RECAREAADDRESS[0].City;
                let state = norm.RECAREAADDRESS[0].AddressStateCode;
                let address = norm.RECAREAADDRESS[0].RecAreaStreetAddress1;
                let genre = '';
                let segment = norm.Keywords;*/

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

