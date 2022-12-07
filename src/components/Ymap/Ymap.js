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
            lng: this.props.coordinates[0] ?? -1,
            lat: this.props.coordinates[1] ?? 50,
            zoom: 6.7,
        };
        this.mapContainer = React.createRef();
    }


    componentDidMount() {

        //console.log(this.mapContainer.current)
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: this.props.coordinates,
            zoom: zoom
        });


        const monument = this.props.coordinates;
// create the popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            `${this.props.name} - 
            ${this.props.description}`
        );


// create the marker
        new mapboxgl.Marker()
            .setLngLat(monument)
            .setPopup(popup) // sets a popup on this marker
            .addTo(map);



        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });


    }

    render() {
        const { lng, lat, zoom } = this.state;
        return (
            <div>
                <div className={style.sidebar}>
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={this.mapContainer} className={style.mapContainer} />
            </div>
        );
    }
}



export default Ymap;