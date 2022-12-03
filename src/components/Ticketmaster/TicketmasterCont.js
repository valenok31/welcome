import React from "react";
import style from './Ticketmaster.module.css'
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {handleFetchEvents, setCurrentPage, setSettings} from "../../redux/ticketmaster_reducer";
import Paginator from "../Paginator/Paginator";
import Preloader from "../Preloader/Preloader";
import SearchTicketmaster from "../SearchTicketmaster/SearchTicketmaster";
import {logDOM} from "@testing-library/react";

class TicketmasterCont extends React.Component {

    componentDidMount() {
        //this.props.setCurrentPage(0);
        this.props.handleFetchEvents(this.props.getLimitPage, this.props.getCurrentPage, this.props.getSettings);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getCurrentPage !== prevProps.getCurrentPage) {
            this.props.handleFetchEvents(this.props.getLimitPage, this.props.getCurrentPage, this.props.getSettings);
        }
        /*if (this.props.getSettings.search !== prevProps.getSettings.search || this.props.getSettings.classificationName !== prevProps.getSettings.classificationName) {
                            this.props.handleFetchEvents(this.props.getLimitPage, this.props.getCurrentPage, this.props.getSettings);
                        }*/

        if (this.props.getSettings !== prevProps.getSettings) {
            this.props.handleFetchEvents(this.props.getLimitPage, this.props.getCurrentPage, this.props.getSettings);
        }


    }

    render() {

        let visio;

        if (!this.props.getIsLoading) {
            visio = <Ticketmaster
                getEventsTicketmaster={this.props.getEventsTicketmaster}
                handleFetchEvents={this.props.handleFetchEvents}
            />
        } else {
            visio = <Preloader/>
        }

        //console.log(this.props.getSettings)

        return <>
            <SearchTicketmaster setSettings={this.props.setSettings} getSettings={this.props.getSettings}/>
            <div id='fieldPlaying' className={style.field__playing}>
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
        getSettings: state.ticketmaster_reducer.settings,
    })
};

let resultConnecting = connect(mapStateToProps, {handleFetchEvents, setCurrentPage, setSettings})(TicketmasterCont);

export default resultConnecting;