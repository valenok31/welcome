import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {handleFetchEvents, handleFetchEventsImages} from "../../redux/recreation_reducer";

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
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
        getEventsRecreationImages: state.recreation_reducer.eventsRecreationImages,
    })
};

let resultConnectingR = connect(mapStateToProps, {handleFetchEvents, handleFetchEventsImages})(RecreationCont);

export default resultConnectingR;