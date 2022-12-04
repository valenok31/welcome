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
            lng: -86.0091,
            lat: 35.8473,
            zoom: 6.76,
        };
        this.mapContainer = React.createRef();
    }


    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

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