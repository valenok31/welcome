import React from "react";
import style from "./Facility.module.css";
import EventCell from "../EventCell/EventCell";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {handleFetchFacility, handleFetchFacilityMedia, setCurrentPage} from "../../redux/facility_reducer";
import Ymap from "../Ymap/Ymap";


class GetArrEventCell extends React.Component {
    componentDidMount() {

    }

    render() {

        let coordinates2 = [-95, 37];
        let yau = <Preloader/>
        let arrEventCell = <Preloader/>

        if (Object.entries(this.props.arrayNameFacility).length > 0) {

            yau = <Ymap description='description' coordinates={coordinates2} name='name'
                        array={this.props.arrayNameFacility}/>

        arrEventCell = this.props.arrayNameFacility.map(data => {
            let image = 'http://dummyimage.com/10.png/87CEEBFF&text=+';

            if (this.props.getIsLoading) {
                return <Preloader/>
            }
            return <EventCell id={data.FacilityID} name={data.FacilityName} image={image}/>
        })
    }

        return (<>
            <div className={style.box}>
                {arrEventCell}

            </div>
                {yau}
            </>
        )
    }


}


let mapStateToProps = (state) => {
    return ({
        //getIsLoading: state.facility_reducer.isLoading,
    });
};
let resultConnecting = connect(mapStateToProps,
    {})(GetArrEventCell);

export default resultConnecting;



