import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {
    handleFetchArr,
    handleFetchEvents,
    setEventsImagesURL,
    setCurrentPage
} from "../../redux/recreation_reducer";
import style from "./Recreation.module.css";
import Paginator from "../Paginator/Paginator";
import Preloader from "../Preloader/Preloader";

class RecreationCont extends React.Component {

    componentDidMount() {
        //this.props.setCurrentPage(0);
        let offset = this.props.getCurrentPage * this.props.getLimitPage;
        this.props.handleFetchEvents(this.props.getLimitPage, offset);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getCurrentPage !== prevProps.getCurrentPage) {
            let offset = this.props.getCurrentPage * this.props.getLimitPage //- this.props.getLimitPage;
            this.props.handleFetchEvents(this.props.getLimitPage, offset);
        }
    }

    render() {
        let arrImg = [];
        //console.log(this.props.getEventsRecreation)
        this.props.getEventsRecreation.map((r) => {
            arrImg.push(r.RecAreaID);

        })
        if (arrImg.length > 0) {

            let visio;
            // console.log(this.props.getIsLoading)
            if (!this.props.getIsLoading) {
                visio = <Recreation arrImg={arrImg}
                                    handleFetchArr={this.props.handleFetchArr}
                                    getEventsRecreation={this.props.getEventsRecreation}
                                    getEventsRecreationImages={this.props.getEventsRecreationImages}
                                    setEventsImagesURL={this.props.setEventsImagesURL}
                                    getCurrentPage={this.props.getCurrentPage}
                                    getLimitPage={this.props.getLimitPage}
                />
            } else {
                visio = <Preloader/>
            }


            return <>
                <div id='fieldPlaying' className={style.field__playing}>
                    {visio}
                </div>
                <Paginator
                    getTotalCount={this.props.getTotalCount}
                    getLimitPage={this.props.getLimitPage}
                    getCurrentPage={this.props.getCurrentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    deepPage={999 / this.props.getLimitPage}/>
            </>
        }

        return <>
            <Preloader/>
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
        getEventsRecreationImages: state.recreation_reducer.getEventsRecreationImages(),
        getTotalCount: state.recreation_reducer.totalCount,
        getLimitPage: state.recreation_reducer.limitPage,
        getCurrentPage: state.recreation_reducer.currentPage,
        getIsLoading: state.ticketmaster_reducer.isLoading,
    })
};

let resultConnectingR = connect(mapStateToProps, {
    handleFetchEvents,
    handleFetchArr,
    setEventsImagesURL,
    setCurrentPage,
})(RecreationCont);

export default resultConnectingR;