import React from "react";
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {handleFetchEvents} from "../../redux/ticketmaster_reducer";

class TicketmasterCont extends React.Component {

    componentDidMount() {
        this.props.handleFetchEvents(this.props.size);
    }

    render() {
        return <>
            <Ticketmaster
                getEventsTicketmaster={this.props.getEventsTicketmaster}
                handleFetchEvents={this.props.handleFetchEvents}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsTicketmaster: state.ticketmaster_reducer.eventsTicketmaster,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchEvents})(TicketmasterCont);

export default resultConnecting;