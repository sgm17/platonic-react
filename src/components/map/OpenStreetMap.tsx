import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css"
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from 'leaflet';
import uni from '../../universities.json'
import { OpenStreetMapContainer, } from './OpenStreetMapStyles';
import React from 'react';

export type University = {
    name: string,
    type: AreaType,
    parent: string | undefined,
    acronym: string | undefined,
    areas: Area[],
}

//    var map = L.map('map', {
//         keyboard: false,
//         dragging: false,
//         zoomControl: false,
//         boxZoom: false,
//         doubleClickZoom: false,
//         scrollWheelZoom: false,
//         tap: false,
//         touchZoom: false,
//         center: [51.505, -0.09],
//         zoom: 30,
//         minZoom: 30,
//         maxZoom: 40
//     });

export enum AreaType {
    center = 'center',
    school = 'school',
    campus = 'campus',
    faculties = 'faculties',
    institute = 'institute'
}

export type Area = {
    name: string,
    coordinates: number[],
    address: string
}

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

export const OpenStreetMap = () => {
    const [universities, setUniversities] = useState<University[]>([])
    const [mapState, setMapState] = useState<University>()

    useEffect(() => {
        const unis = uni["universities"]

        const buffer: University[] = []

        unis.map((uni, i) => {
            const university: University = {
                name: uni.name,
                parent: uni.parent,
                acronym: uni.acronym,
                type: uni.type as AreaType,
                areas: uni.areas
            }
            buffer.push(university)
        })
        setMapState(buffer[0])
        setUniversities(buffer)
        console.log(universities)
    }, [])


    return (
        <div id='map'>
            {mapState && <MapContainer
                center={L.latLng(mapState.areas[0].coordinates[0], mapState.areas[0].coordinates[1])}
                zoom={30}
                scrollWheelZoom={false}
                style={{ height: '100vh', width: '100wh' }}
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker draggable={false} position={L.latLng(mapState.areas[0].coordinates[0], mapState.areas[0].coordinates[1])}>
                    <Popup>
                        <p>{mapState.name}</p>
                        <p>{mapState.areas[0].name}</p>
                        <p>{mapState.areas[0].address}</p>
                    </Popup>
                </Marker>
            </MapContainer>}
        </div>
    )

}