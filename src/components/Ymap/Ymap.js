import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Ymap() {
    const defaultState = {
        center: [39.070363, -105.577128],
        zoom: 5,
    };

    return (
        <YMaps>
            <Map defaultState={defaultState}>
                <Placemark geometry={[39.070363, -105.577128]} />
            </Map>
        </YMaps>
    );
}