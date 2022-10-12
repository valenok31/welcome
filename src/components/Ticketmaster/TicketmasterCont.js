import React from "react";
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {getUsersRed, setListAttractions} from "../../redux/siteManagement_reducer";
import {eventsAPI} from "../../api/api";


class TicketmasterCont extends React.Component {

    componentDidMount() {

        //this.props.getUsersRed('789');
        //console.log(eventsAPI.getStatus())
    }


    render() {
       // this.props.setListAttractions('0987');
        return <>
            <Ticketmaster
                getCostCity={this.props.getCostCity} //Копия базы городов
                setListAttractions={this.props.setListAttractions}
                getUsersRed={this.props.getUsersRed}
            />
        </>
    }
}

let mapStateToProps = (state) => {
   // console.log(state.siteManagement_reducer.getListAttractions)
    return ({
        getCostCity: state.siteManagement_reducer.listAttractions,
    })
};

let resultConnecting = connect(mapStateToProps, {setListAttractions, getUsersRed})(TicketmasterCont);

export default resultConnecting;