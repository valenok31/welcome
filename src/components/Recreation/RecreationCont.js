import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {handleFetchEvents, handleFetchEventsImages, updateCrutch} from "../../redux/recreation_reducer";

class RecreationCont extends React.Component {

    componentDidMount() {
        this.props.handleFetchEvents();
    }

    render() {
        return <>
            <Recreation
                getEventsRecreation={this.props.getEventsRecreation}
                getEventsRecreationImages={this.props.getEventsRecreationImages}
                handleFetchEventsImages={this.props.handleFetchEventsImages}
                updateCrutch={this.props.updateCrutch}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
        getEventsRecreationImages: state.recreation_reducer.getEventsRecreationImages(),
    })
};

let resultConnectingR = connect(mapStateToProps, {handleFetchEvents, handleFetchEventsImages, updateCrutch})(RecreationCont);

export default resultConnectingR;