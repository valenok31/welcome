import React from "react";
import style from './Ticketmaster.module.css'
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {handleFetchEvents, setCurrentPage} from "../../redux/ticketmaster_reducer";
import Paginator from "../Paginator/Paginator";
import Preloader from "../Preloader/Preloader";

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
        let visio;
        console.log(this.props.getIsLoading)
        if (!this.props.getIsLoading) {
            visio = <Ticketmaster
                getEventsTicketmaster={this.props.getEventsTicketmaster}
                handleFetchEvents={this.props.handleFetchEvents}
            />
        } else {
            visio = <Preloader/>
        }

        return <><div id='fieldPlaying' className={style.field__playing}>
            {visio}
        </div>
            <Paginator
                getTotalCount={this.props.getTotalCount}
                getLimitPage={this.props.getLimitPage}
                getCurrentPage={this.props.getCurrentPage}
                setCurrentPage={this.props.setCurrentPage}
                deepPage={999 / this.props.getLimitPage}
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
        getIsLoading: state.ticketmaster_reducer.isLoading,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchEvents, setCurrentPage})(TicketmasterCont);

export default resultConnecting;