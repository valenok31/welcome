import React from "react";
import {connect} from "react-redux";
import Recreation from "./Recreation";
import {getUsersRedR, setListAttractionsR} from "../../redux/recreation_siteManagement_reducer";


class RecreationCont extends React.Component {

    componentDidMount() {
        this.props.setListAttractionsR();
    }


    render() {
        return <>
            <Recreation
                getCostCity={this.props.getCostCityR}
                setListAttractionsR={this.props.setListAttractionsR}
                getUsersRed={this.props.getUsersRedR}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getCostCityR: state.recreation_siteManagement_reducer.listAttractionsR,
    })
};

let resultConnectingR = connect(mapStateToProps, {setListAttractionsR, getUsersRedR})(RecreationCont);

export default resultConnectingR;