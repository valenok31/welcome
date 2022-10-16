import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {getUsersRed, setListAttractionsR} from "../../redux/siteManagement_reducer";


class RecreationCont extends React.Component {

    componentDidMount() {
        this.props.setListAttractionsR();
    }


    render() {
        return <>
            <Recreation
                getCostCity={this.props.getCostCity}
                setListAttractionsR={this.props.setListAttractionsR}
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

let resultConnectingR = connect(mapStateToProps, {setListAttractionsR, getUsersRed})(RecreationCont);

export default resultConnectingR;