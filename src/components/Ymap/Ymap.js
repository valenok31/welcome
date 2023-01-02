import React from 'react';
import style from "./Ymap.module.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZW5vazMxIiwiYSI6ImNsYjltM2Z3bjBxN3Mzbm41eHM5bWNtenAifQ.L3wRr1NE1EXxr9YjsEx97Q';


// Longitude: -86.0091 | Latitude: 35.8473 | Zoom: 6.76

class Ymap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: this.props.coordinates[0] ?? -98,
            lat: this.props.coordinates[1] ?? 39,
            zoom: 3.18,
        };
        this.mapContainer = React.createRef();
    }


    componentDidMount() {

        const {lng, lat, zoom} = this.state;
        let coordinates = [lng, lat]
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: coordinates,
            zoom: zoom
        });


        /*        const popup = new mapboxgl.Popup({offset: 25}).setText(
                    `${this.props.FacilityName} -
                                        ${this.props.FacilityDescription}`
                );
                new mapboxgl.Marker()
                    .setLngLat(coordinates)
                    .setPopup(popup) // sets a popup on this marker
                    .addTo(map);*/

        // debugger;
        /*        console.log(this.props.description)
                console.log(this.props.coordinates)
                console.log(this.props.name)*/
        let array = this.props.array;


        /*        console.log('--------------')*/

        let arrayL = [

            {
                GEOJSON: {COORDINATES: [-96.1, 39.4]},
                FacilityName: '3',
                FacilityDescription: '33',
            },
            {
                GEOJSON: {COORDINATES: [-97.8, 36.2]},
                FacilityName: '4',
                FacilityDescription: '44',
            },
            {
                GEOJSON: {COORDINATES: [-96.2, 34.9]},
                FacilityName: '5',
                FacilityDescription: '55',
            },

        ];
        //console.log(array.GEOJSON.COORDINATES)
        console.log(array);
        if (Object.entries(array).length > 0) {
            array.map((s) => {
                let popup2 = new mapboxgl.Popup({offset: 25}).setText(
                    /*`${s.FacilityName} - ${s.FacilityDescription}`*/
                    'Description'
                );
                let coordinat = s.GEOJSON.COORDINATES;
                if(coordinat===null){
                    coordinat = [-96.2, 34.9]
                }

                return new mapboxgl.Marker().setLngLat(coordinat).setPopup(popup2).addTo(map);
            });
        }


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


/*let mapStateToProps = (state) => {
    return ({
        arrayNameFacility: state.facility_reducer.getArrayNameFacility(),
    })
};*/

/*let resultConnecting = connect(mapStateToProps,
    {})(Ymap);

export default resultConnecting;*/
export default Ymap;