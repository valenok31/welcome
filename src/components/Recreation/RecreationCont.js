import React from "react";
import { connect } from "react-redux";
import Recreation from "./Recreation";
import {
    handleFetchArr,
    handleFetchEvents,
    handleFetchEventsImages,
    setUpdateCrutch,
    setEventsImagesURL
} from "../../redux/recreation_reducer";
import style from "./Recreation.module.css";
import Paginator from "../Paginator/Paginator";

class RecreationCont extends React.Component {

    componentDidMount() {
        if (this.props.getEventsRecreation.length === 0) {
            this.props.handleFetchEvents(this.props.getLimitPage);
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
                    />
                </div>
                <Paginator getTotalCount={this.props.getTotalCount} getLimitPage={this.props.getLimitPage}/>
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
    })
};

let resultConnectingR = connect(mapStateToProps, {
    handleFetchEvents,
    handleFetchEventsImages,
    setUpdateCrutch,
    handleFetchArr,
    setEventsImagesURL
})(RecreationCont);

export default resultConnectingR;