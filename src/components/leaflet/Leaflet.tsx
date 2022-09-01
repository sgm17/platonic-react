import { TileLayer, MapContainer, useMap, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import universities from '../../utils/universities.json'
import { University } from "../../ts/interfaces/University";
import "leaflet-geosearch/dist/geosearch.css";
import { FC, useEffect } from "react";
import L, { MapOptions } from 'leaflet';
import { useSearchParams } from 'react-router-dom';

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

type SortUniversityStoriesProperties = { userUniversity: number[] }


export const sortUniversityStories = ({ userUniversity }: SortUniversityStoriesProperties) => {
    const userCenter: L.LatLng = L.latLng(userUniversity[0], userUniversity[1])

    const sortedUniversities = universities.features.sort((a, b) => {
        const universityACenter: L.LatLng = L.latLng(a.properties.center[0], a.properties.center[1])
        const universityBCenter: L.LatLng = L.latLng(b.properties.center[0], b.properties.center[1])

        return userCenter.distanceTo(universityACenter) > userCenter.distanceTo(universityBCenter) ? 1 : -1
    })

    const ret: University[] = sortedUniversities.map(({ properties }) => properties)
    return ret
}

const LeafletgeoSearch = () => {
    const map = useMap();

    function changeInputPlaceholder(placeholder: string) {
        const form = document.querySelector('form');

        if (form !== null)
            form.querySelector('input[type="text"]')?.setAttribute('placeholder', placeholder)
    }

    useEffect(() => {
        const provider = new OpenStreetMapProvider();

        const searchControl = GeoSearchControl({
            provider: provider,
            style: 'bar',
        });

        map.addControl(searchControl);

        changeInputPlaceholder('search the area of your university')

        return () => { map.removeControl(searchControl); }
    }, []);

    return null

}

type LeafletProperties = {
    center?: number[],
    props: MapOptions,
    search: boolean
}

export const Leaflet: FC<LeafletProperties> = ({ center = [41.50613010080779, 2.10393994586322], props, search }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat")
    const lon = searchParams.get("lon")

    const checkParametersAreNotNull = lat !== null && lon !== null
    const checkParametersAreNumbers = !isNaN(Number(lat)) && !isNaN(Number(lon))
    const parametersPreference = checkParametersAreNotNull && checkParametersAreNumbers

    const data: GeoJSON.FeatureCollection<any> = {
        type: 'FeatureCollection',
        features: universities.features.map((feature) => {
            return {
                type: 'Feature',
                properties: feature.properties,
                geometry: {
                    type: feature.geometry.type as GeoJSON.GeoJsonTypes,
                    coordinates: feature.geometry.coordinates
                }
            }
        })
    }

    const mapContainerProps: MapOptions = {
        center: parametersPreference ? L.latLng(Number(lat), Number(lon)) : L.latLng(center[0], center[1]),
        zoom: 13,
        minZoom: 13,
    }

    return (
        <MapContainer
            style={{ height: '100vh', width: '100vw' }}
            {...mapContainerProps}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON
                data={data}
                style={{
                    fillColor: '#FD8D3C',
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: 'white'
                }}
                onEachFeature={(feature, layer) => {
                    const popup = `<div>
                    <p style={{fontSize: '3rem'}}>${feature.properties.associate ?? ''}</p></div>
                    <p style={{fontSize: '3rem'}}>${feature.properties.parentName} ${feature.properties.acronym ? '(' + feature.properties.acronym + ')' : ''}</p></div>
                    <p style={{fontSize: '3rem'}}>${feature.properties.name}</p></div>`

                    layer.on({
                        mouseover: (e) => {
                            const layer = e.target;
                            layer.setStyle({
                                dashArray: "",
                                fillColor: "#BD0026",
                                fillOpacity: 0.7,
                                weight: 2,
                                opacity: 1,
                                color: "white",
                            })
                            layer.bindPopup(popup).openPopup();
                        },
                        mouseout: (e) => {
                            const layer = e.target;
                            layer.setStyle({
                                fillOpacity: 0.7,
                                weight: 2,
                                dashArray: "3",
                                color: 'white',
                                fillColor: '#FD8D3C'
                            });
                            layer.bindPopup(popup).closePopup()
                        },
                        click: () => {
                            console.log('selected')
                        },
                    })
                }}
            />
            {search && <LeafletgeoSearch />}
        </MapContainer >
    )
}



