import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {handleFetchEvents} from "../../redux/recreation_reducer";

class RecreationCont extends React.Component {

    componentDidMount() {
        this.props.handleFetchEvents();
    }

    render() {
        return <>
            <Recreation
                getEventsRecreation={this.props.getEventsRecreation}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
    })
};

let resultConnectingR = connect(mapStateToProps, {handleFetchEvents})(RecreationCont);

export default resultConnectingR;