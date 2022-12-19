import React from 'react';
import style from "./Ymap.module.css";

import {connect} from "react-redux";

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZW5vazMxIiwiYSI6ImNsYjltM2Z3bjBxN3Mzbm41eHM5bWNtenAifQ.L3wRr1NE1EXxr9YjsEx97Q';


// Longitude: -86.0091 | Latitude: 35.8473 | Zoom: 6.76

class Ymap extends React.Component {
    constructor(props) {
        super(props);

        //console.log(this.props.array)
        let lngS = this.props.coordinates[0];
        if (lngS > 0) {
            lngS = -lngS
        }

        this.state = {
            lng: lngS ?? -98,
            lat: this.props.coordinates[1] ?? 39,
            zoom: 5,
        };
        this.mapContainer = React.createRef();
    }


    componentDidMount() {

        //console.log(this.mapContainer.current)
        const {lng, lat, zoom} = this.state;
        let coordinates = [lng, lat]
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: coordinates,
            //center: [-98, 39],
            zoom: zoom
        });

/*

        const monument = coordinates;
// create the popup
        const popup = new mapboxgl.Popup({offset: 25}).setText(
            `${this.props.name} - 
            ${this.props.description}`
        );
*/


// create the marker
        let arrayL = [
            {
                GEOJSON: {COORDINATES: [-98, 39]},
                FacilityName:'1',
                FacilityDescription: '11',
            },
            {
                GEOJSON: {COORDINATES: [-97, 39]},
                FacilityName:'2',
                FacilityDescription: '22',
            },
            {
                GEOJSON: {COORDINATES: [-98.1, 39.4]},
                FacilityName:'3',
                FacilityDescription: '33',
            },
            {
                GEOJSON: {COORDINATES: [-98.8, 38.2]},
                FacilityName:'4',
                FacilityDescription: '44',
            },
            {
                GEOJSON: {COORDINATES: [-98.2, 39.9]},
                FacilityName:'5',
                FacilityDescription: '55',
            },
            {
                GEOJSON: {COORDINATES: [-97, 36]},
                FacilityName:'1',
                FacilityDescription: '11',
            },
            {
                GEOJSON: {COORDINATES: [-97.1, 39.2]},
                FacilityName:'2',
                FacilityDescription: '22',
            },
            {
                GEOJSON: {COORDINATES: [-96.1, 39.4]},
                FacilityName:'3',
                FacilityDescription: '33',
            },
            {
                GEOJSON: {COORDINATES: [-97.8, 36.2]},
                FacilityName:'4',
                FacilityDescription: '44',
            },
            {
                GEOJSON: {COORDINATES:[-96.2, 34.9]
    },
                FacilityName:'5',
                FacilityDescription: '55',
            },

        ];
        console.log(this.props.arrayNameFacility)
        if(this.props.array().length>0){
            this.props.array().map((s) => {
                // arrayL.map((s) => {
                const popup2 = new mapboxgl.Popup({offset: 25}).setText(
                    /*                `${s.FacilityName} -
                                ${s.FacilityDescription}`*/
                    'hakjsdfhal'
                );
                //console.log(s.GEOJSON.COORDINATES)

                new mapboxgl.Marker()
                    .setLngLat(s.GEOJSON.COORDINATES)
                    .setPopup(popup2) // sets a popup on this marker
                    .addTo(map);

            });
        }


        // new mapboxgl.Marker()
        //     .setLngLat(monument)
        //     .setPopup(popup) // sets a popup on this marker
        //     .addTo(map);


        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });


    }

    render() {
        const {lng, lat, zoom} = this.state;
        return (
            <div>
                <div className={style.sidebar}>
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={this.mapContainer} className={style.mapContainer}/>
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return ({
        arrayNameFacility: state.facility_reducer.getArrayNameFacility(),
    })
};

let resultConnecting = connect(mapStateToProps,
    {})(Ymap);

export default resultConnecting;
//export default Ymap;