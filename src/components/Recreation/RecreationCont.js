import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {getUsersRed, setListAttractions} from "../../redux/siteManagement_reducer";


class RecreationCont extends React.Component {

    componentDidMount() {
        this.props.setListAttractions();
    }


    render() {
        return <>
            <Recreation
                getCostCity={this.props.getCostCity}
                setListAttractions={this.props.setListAttractions}
                getUsersRed={this.props.getUsersRed}
                stopAxios={this.props.stopAxios}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getCostCity: state.siteManagement_reducer.listAttractions,
    })
};

let resultConnectingR = connect(mapStateToProps, {setListAttractions, getUsersRed})(RecreationCont);

export default resultConnectingR;