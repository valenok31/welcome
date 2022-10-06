import React from "react";
import {connect} from "react-redux";
import Ticketmaster from "./Ticketmaster";
import {setListAttractions} from "../../redux/siteManagement_reducer";


class TicketmasterCont extends React.Component {

    componentDidMount() {
        this.props.setListAttractions('second Ticketmaster')
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
    return ({
        getCostCity: state.siteManagement_reducer.listAttractions,
    })
};

export default connect(mapStateToProps,
    {setListAttractions})(TicketmasterCont)