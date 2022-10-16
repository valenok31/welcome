import React from "react";
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {getUsersRed, setListAttractions} from "../../redux/siteManagement_reducer";


class TicketmasterCont extends React.Component {

    componentDidMount() {
        this.props.setListAttractions();
    }


    render() {
        return <>
            <Ticketmaster
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
        stopAxios: state.siteManagement_reducer.stopAxios,
    })
};

let resultConnecting = connect(mapStateToProps, {setListAttractions, getUsersRed})(TicketmasterCont);

export default resultConnecting;