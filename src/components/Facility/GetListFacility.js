import React from "react";
import GetArrEventCell from "./GetArrEventCell";
import {connect} from "react-redux";
import {handleFetchFacility, handleFetchFacilityMedia, setCurrentPage} from "../../redux/facility_reducer";
import Paginator from "../Paginator/Paginator";
import Ymap from "../Ymap/Ymap";

class GetListFacility extends React.Component {

    componentDidMount() {
        //debugger;
        let offset = this.props.getCurrentPage * this.props.getLimitPage;
        this.props.handleFetchFacility(this.props.getLimitPage, offset);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getCurrentPage !== prevProps.getCurrentPage) {
           // debugger;
            let offset = this.props.getCurrentPage * this.props.getLimitPage //- this.props.getLimitPage;
            this.props.handleFetchFacility(this.props.getLimitPage, offset);

        }
    }

    render() {


       // let arrInf = () => this.props.arrayNameFacility;

       // console.log(this.props.arrayNameFacility);

        return <>
            <GetArrEventCell
                arrayNameFacility={this.props.arrayNameFacility}
                arrayMediaFacility={this.props.arrayMediaFacility}
                getIsLoading={this.props.getIsLoading}
                handleFetchFacilityMedia ={this.props.handleFetchFacilityMedia}
            />
            <Paginator
                getTotalCount={this.props.getTotalCount}
                getLimitPage={this.props.getLimitPage}
                getCurrentPage={this.props.getCurrentPage}
                setCurrentPage={this.props.setCurrentPage}
                deepPage={999 / this.props.getLimitPage}/>

            {/*<Ymap description='description' coordinates={coordinates2} name='name'/>*/}

        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        arrayNameFacility: state.facility_reducer.getArrayNameFacility(),
        arrayMediaFacility: state.facility_reducer.arrayMediaFacility,
        getTotalCount: state.facility_reducer.totalCount,
        getLimitPage: state.facility_reducer.limitPage,
        getCurrentPage: state.facility_reducer.currentPage,
        getIsLoading: state.facility_reducer.isLoading,
    })
};

let resultConnecting = connect(mapStateToProps,
    {handleFetchFacility, setCurrentPage, handleFetchFacilityMedia})(GetListFacility);

export default resultConnecting;