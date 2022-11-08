import React from "react";
import { connect } from "react-redux";
import { handleFetchArr } from "../../redux/recreation_reducer";
import EventCell from "./../EventCell/EventCell";


class HightRecreation extends React.Component {
    componentDidMount() {
        this.props.handleFetchArr(this.props.arrImg);
    }

 /*   componentDidUpdate(prevProps) {
        if (this.props.getCurrentPage !== prevProps.getCurrentPage) {
            this.props.handleFetchArr(this.props.arrImg);
        }
    }*/

    render() {

        let arrI = this.props.getEventsRecreationImages;
        let mapRequestgg = this.props.getEventsRecreation.map((r, i) => {

            let image //= 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';
            let im = arrI.find(function (item) { return r.RecAreaID == item.id })

            if (im !== undefined) {
                image = im.url;
            }

            //if (!this.props.getEventsRecreation[i].url || this.props.getEventsRecreation[i].url == 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg') {
            if (!this.props.getEventsRecreation[i].url) {
                //debugger;
                this.props.setEventsImagesURL(i, image);
                return;
            } else {
                image = this.props.getEventsRecreation[i].url;
                return <EventCell id={r.RecAreaID} image={image} name={r.RecAreaName} />
            }
        })

        return <>
            {mapRequestgg}
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getEventsRecreation: state.recreation_reducer.eventsRecreation,
        getEventsRecreationImages: state.recreation_reducer.getEventsRecreationImages(),
    })
};

let resultConnectingR = connect(mapStateToProps, {
    handleFetchArr
})(HightRecreation);

export default resultConnectingR;