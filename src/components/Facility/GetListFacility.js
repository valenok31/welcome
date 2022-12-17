import React from "react";
import GetArrEventCell from "./GetArrEventCell";
import {connect} from "react-redux";
import {handleFetchFacility, setCurrentPage} from "../../redux/facility_reducer";
import Paginator from "../Paginator/Paginator";

class GetListFacility extends React.Component {

    componentDidMount(){
        let offset = this.props.getCurrentPage * this.props.getLimitPage;
        this.props.handleFetchFacility(this.props.getLimitPage, offset);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getCurrentPage !== prevProps.getCurrentPage) {
            let offset = this.props.getCurrentPage * this.props.getLimitPage //- this.props.getLimitPage;
            this.props.handleFetchFacility(this.props.getLimitPage, offset);
        }
    }

    render() {
        return <>
            <GetArrEventCell arrayNameFacility={this.props.arrayNameFacility} getIsLoading={this.props.getIsLoading}/>
            <Paginator
                getTotalCount={this.props.getTotalCount}
                getLimitPage={this.props.getLimitPage}
                getCurrentPage={this.props.getCurrentPage}
                setCurrentPage={this.props.setCurrentPage}
                deepPage={999 / this.props.getLimitPage}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        arrayNameFacility: state.facility_reducer.getArrayNameFacility(),
        getTotalCount: state.facility_reducer.totalCount,
        getLimitPage: state.facility_reducer.limitPage,
        getCurrentPage: state.facility_reducer.currentPage,
        getIsLoading: state.facility_reducer.isLoading,
    })
};

let resultConnecting = connect(mapStateToProps,
    {handleFetchFacility, setCurrentPage})(GetListFacility);

export default resultConnecting;