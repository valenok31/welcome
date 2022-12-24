import React from "react";
import style from "./Facility.module.css";
import EventCell from "../EventCell/EventCell";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {handleFetchFacility, handleFetchFacilityMedia, setCurrentPage} from "../../redux/facility_reducer";


class GetArrEventCell extends React.Component {
    componentDidMount() {

    }

    render() {
        debugger;
        console.log(this.props.arrayNameFacility)
        let arrEventCell = this.props.arrayNameFacility.map(data => {
            let image='http://dummyimage.com/10.png/87CEEBFF&text=+';

/*            let result = this.props.arrayMediaFacility.find(function (item, index, array) {
                return item.facilityId === data.FacilityID
            });

            if (result?.url === undefined) {
                this.props.handleFetchFacilityMedia(data.FacilityID);
            } else {
                image = result.url;
            }*/

            if (this.props.getIsLoading) {
                return <Preloader/>
            }
            return <EventCell id={data.FacilityID} name={data.FacilityName} image={image}/>
        })

        return (
            <div className={style.box}>
                {arrEventCell}
            </div>
        )
    }


}


let mapStateToProps = (state) => {
    return ({
        getIsLoading: state.facility_reducer.isLoading,
    });
};
let resultConnecting = connect(mapStateToProps,
    {})(GetArrEventCell);

export default resultConnecting;


