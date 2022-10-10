import React from "react";
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {setListAttractions} from "../../redux/siteManagement_reducer";
import {eventsAPI} from "../../api/api";


class TicketmasterCont extends React.Component {

    componentDidMount() {

       this.props.setListAttractions('eventsAPI.getStatus')
        console.log(eventsAPI.getStatus)
    }


    render() {

        return <>
            <Ticketmaster
                getCostCity={this.props.getCostCity} //Копия базы городов
                setListAttractions={this.props.setListAttractions}
            />
        </>
    }
}

let mapStateToProps = (state) => {
   // console.log(state.siteManagement_reducer.getListAttractions)
    return ({
        getCostCity: state.siteManagement_reducer.getListAttractions,
    })
};

let resultConnecting = connect(mapStateToProps, {setListAttractions})(TicketmasterCont);

export default resultConnecting;