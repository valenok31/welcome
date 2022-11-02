import React from "react";
import { connect } from "react-redux";
import { handleFetchArr } from "../../redux/recreation_reducer";
import style from "./Recreation.module.css";

class HightRecreation extends React.Component {
    componentDidMount() {
        this.props.handleFetchArr(this.props.arrImg);
    }

    render() {

        let arrI = this.props.getEventsRecreationImages;

        let mapRequestgg = this.props.getEventsRecreation.map((r, i) => {

            let image //= 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg';
            let im = arrI.find(function (item) { return r.RecAreaID == item.id })

            if (im !== undefined) {
                image = im.url;
            }
           /* if (this.props.getEventsRecreation[i].url == image) {
                image = this.props.getEventsRecreation[i].url;
            } else {
                //console.log(image);
                this.props.setEventsImagesURL(i, image);
            }*/
           // console.log(this.props.getEventsRecreation[i].url);
            if (!this.props.getEventsRecreation[i].url || this.props.getEventsRecreation[i].url == 'https://avatanplus.com/files/resources/mid/581ccfb952d8e158308b6bfb.jpg') {
                this.props.setEventsImagesURL(i, image);
                return;
            } else {
                image = this.props.getEventsRecreation[i].url;
            //this.props.getEventsRecreation[i].url=image;
            return <div id={r.RecAreaID} key={i} className={style.boxMap}
                style={{ background: `url('${image}') no-repeat center/cover` }}>
                {r.RecAreaName}
            </div>
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