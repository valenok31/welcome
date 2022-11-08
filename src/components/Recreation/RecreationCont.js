import React from "react";
import { connect } from "react-redux";
import Recreation from "./Recreation";
import {
    handleFetchArr,
    handleFetchEvents,
    handleFetchEventsImages,
    setUpdateCrutch,
    setEventsImagesURL,
    setCurrentPage
} from "../../redux/recreation_reducer";
import style from "./Recreation.module.css";
import Paginator from "../Paginator/Paginator";

class RecreationCont extends React.Component {

    componentDidMount() {
        let offset = this.props.getCurrentPage * this.props.getLimitPage - 10;
        if (this.props.getEventsRecreation.length === 0) {
            this.props.handleFetchEvents(this.props.getLimitPage, offset);
        }

    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):

        console.log('prevProps ' + prevProps.getCurrentPage);
        console.log('props ' + this.props.getCurrentPage);
        if (this.props.getCurrentPage !== prevProps.getCurrentPage) {

            let offset = this.props.getCurrentPage * this.props.getLimitPage - 10;
            
            this.props.handleFetchEvents(this.props.getLimitPage, offset);
        }
    }

    render() {

        let arrImg = [];
        this.props.getEventsRecreation.map((r) => {
            arrImg.push(r.RecAreaID);
        })
        if (arrImg.length > 0) {
            return (<>
                <div id='fieldPlaying' className={style.field__playing}>
                    <Recreation arrImg={arrImg}
                        handleFetchArr={this.props.handleFetchArr}
                        getEventsRecreation={this.props.getEventsRecreation}
                        getEventsRecreationImages={this.props.getEventsRecreationImages}
                        setEventsImagesURL={this.props.setEventsImagesURL}
                        getCurrentPage={this.props.getCurrentPage}
                    />
                </div>
                <Paginator
                    getTotalCount={this.props.getTotalCount}
                    getLimitPage={this.props.getLimitPage}
                    getCurrentPage={this.props.getCurrentPage}
                    setCurrentPage={this.props.setCurrentPage} />
            </>
            )
        }


        return <>
            <div>return</div>
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
    })
};

let resultConnectingR = connect(mapStateToProps, {
    handleFetchEvents,
    handleFetchEventsImages,
    setUpdateCrutch,
    handleFetchArr,
    setEventsImagesURL,
    setCurrentPage,
})(RecreationCont);

export default resultConnectingR;