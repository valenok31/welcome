import React from "react";
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {handleFetchEvents, setCurrentPage} from "../../redux/ticketmaster_reducer";
import Paginator from "../Paginator/Paginator";

class TicketmasterCont extends React.Component {

    componentDidMount() {
        this.props.setCurrentPage(0);
        this.props.handleFetchEvents(this.props.getLimitPage, this.props.getCurrentPage);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getCurrentPage !== prevProps.getCurrentPage) {
            this.props.handleFetchEvents(this.props.getLimitPage, this.props.getCurrentPage);
        }
    }

    render() {
        return <>
            <Ticketmaster
                getEventsTicketmaster={this.props.getEventsTicketmaster}
                handleFetchEvents={this.props.handleFetchEvents}
            />
            <Paginator
                getTotalCount={this.props.getTotalCount}
                getLimitPage={this.props.getLimitPage}
                getCurrentPage={this.props.getCurrentPage}
                setCurrentPage={this.props.setCurrentPage}
                deepPage = {999/this.props.getLimitPage}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsTicketmaster: state.ticketmaster_reducer.eventsTicketmaster,
        getTotalCount: state.ticketmaster_reducer.totalCount,
        getLimitPage: state.ticketmaster_reducer.limitPage,
        getCurrentPage: state.ticketmaster_reducer.currentPage,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchEvents, setCurrentPage})(TicketmasterCont);

export default resultConnecting;