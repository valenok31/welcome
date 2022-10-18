import React from "react";
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {getUsersRed, setListAttractions} from "../../redux/siteManagement_reducer";


class TicketmasterCont extends React.Component {

    componentDidMount() {
        console.log(this.props.per)
        this.props.setListAttractions(this.props.per);
    }


    render() {
        return <>
            <Ticketmaster
                getCostCity={this.props.getCostCity}
                setListAttractions={this.props.setListAttractions}
                getUsersRed={this.props.getUsersRed}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        getCostCity: state.siteManagement_reducer.listAttractions,
    })
};

let resultConnecting = connect(mapStateToProps, {setListAttractions, getUsersRed})(TicketmasterCont);

export default resultConnecting;