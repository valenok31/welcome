import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {handleFetchEvents, handleFetchEventsImages, setUpdateCrutch} from "../../redux/recreation_reducer";

class RecreationCont extends React.Component {

    componentDidMount() {
        this.props.handleFetchEvents();
        //this.props.setUpdateCrutch(1);
    }

    render() {
        return <>
            <Recreation
                getEventsRecreation={this.props.getEventsRecreation}
                getEventsRecreationImages={this.props.getEventsRecreationImages}
                handleFetchEventsImages={this.props.handleFetchEventsImages}
                setUpdateCrutch={this.props.setUpdateCrutch}
                kn={this.props.kn}
                //updateCrutch={this.props.updateCrutch}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
        //getEventsRecreationImages: state.recreation_reducer.getEventsRecreationImages(),
        getEventsRecreationImages: state.recreation_reducer.eventsRecreationImages,
        //updateCrutch: state.recreation_reducer.updateCrutch,
    })
};

let resultConnectingR = connect(mapStateToProps, {
    handleFetchEvents,
    handleFetchEventsImages,
    setUpdateCrutch
})(RecreationCont);

export default resultConnectingR;