import React from "react";
import style from "./Facility.module.css";
import EventCell from "../EventCell/EventCell";
import GetArrEventCell from "./GetArrEventCell";

class GetListFacility extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arrName: [
                {
                    name: 'Altay',
                    id: '1',
                    image: 'https://live.staticflickr.com/65535/49925175213_3c0d56078b_b.jpg',
                },
                {
                    name: 'Baykal',
                    id: '2',
                    image: 'https://dobrovestnik.ru/wp-content/uploads/2021/03/33-2.png',
                },
                {
                    name: 'Kavkaz',
                    id: '3',
                    image: 'https://molotoff-hotel.ru/wp-content/uploads/0/e/2/0e2f6ec75e5d47e334f5953b4291ce86.jpeg',
                }
            ]
        };
    }



    render(){

        return <>
            <GetArrEventCell arrName={this.state.arrName}/>
        </>
    }


}

export default GetListFacility;