import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {
    handleFetchArr,
    handleFetchEvents,
    handleFetchEventsImages,
    setUpdateCrutch
} from "../../redux/recreation_reducer";
import style from "./Recreation.module.css";
import HightRecreation from "./HightRecreation";

class RecreationCont extends React.Component {

    componentDidMount() {
        this.props.handleFetchEvents();
        //this.props.setUpdateCrutch(1);
    }

    render() {

        let arrImg = [];
        this.props.getEventsRecreation.map((r) => {
            arrImg.push(r.RecAreaID);
        })
        if (arrImg.length > 0) {
            return (
                <div id='fieldPlaying' className={style.field__playing}>
                    <HightRecreation arrImg={arrImg}
                                     handleFetchArr={this.props.handleFetchArr}
                                     getEventsRecreation={this.props.getEventsRecreation}
                                     getEventsRecreationImages={this.props.getEventsRecreationImages}
                    />
                </div>
            )
        }


        return <>
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
        getEventsRecreationImages: state.recreation_reducer.getEventsRecreationImages(),
        //getEventsRecreationImages: state.recreation_reducer.eventsRecreationImages,
        //updateCrutch: state.recreation_reducer.updateCrutch,
    })
};

let resultConnectingR = connect(mapStateToProps, {
    handleFetchEvents,
    handleFetchEventsImages,
    setUpdateCrutch,
    handleFetchArr
})(RecreationCont);

export default resultConnectingR;