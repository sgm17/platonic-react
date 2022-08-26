import { useEffect } from "react";
import { TileLayer, MapContainer, useMap, Polygon, GeoJSON, } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import L, { LatLng } from 'leaflet';
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import final from '../../final.json'
import geojson from '../../geojson.json'
import { GeoJsonTypes } from "geojson";

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

export type Area = {
    parentName: string | undefined,
    acronym: string | undefined,
    type: string,
    name: string,
    address: string,
    coordinates: number[],
    areas: LatLng[] | LatLng[][]
}

export const LeafletExample = () => {
    const center = [41.50220636048354, 2.1038106823879845]

    const mapContainerProps = {
        keyboard: false,
        dragging: false,
        zoomControl: false,
        boxZoom: false,
        doubleClickZoom: false,
        // scrollWheelZoom: false,
        // tap:false,
        // touchZoom:false,
        center: L.latLng(center[0], center[1]),
        zoom: 13,
        minZoom: 13,
        // maxZoom:30
    }

    const geoJsonFeature: GeoJSON.FeatureCollection = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                2.1015214920043945,
                                41.50761316720445
                            ],
                            [
                                2.0956850051879883,
                                41.49909605991382
                            ],
                            [
                                2.106842994689941,
                                41.49533532020788
                            ],
                            [
                                2.114224433898926,
                                41.499963891911854
                            ],
                            [
                                2.1022081375122066,
                                41.50790240778247
                            ],
                            [
                                2.1015214920043945,
                                41.50761316720445
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                2.108430862426758,
                                41.5054598911746
                            ],
                            [
                                2.1189022064208984,
                                41.5054598911746
                            ],
                            [
                                2.1189022064208984,
                                41.50896294551319
                            ],
                            [
                                2.108430862426758,
                                41.50896294551319
                            ],
                            [
                                2.108430862426758,
                                41.5054598911746
                            ]
                        ]
                    ]
                }
            }
        ]
    }



    return (
        <MapContainer style={{ height: '100vh', width: '100vw' }} {...mapContainerProps}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON
                data={geoJsonFeature}
                style={{
                    fillColor: '#FD8D3C',
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: 'white'
                }}
                onEachFeature={(feature, layer) => {
                    const popup = `<div><p style={{fontSize: '3rem'}}>FUCK U!</p></div>`

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
                        // mouseout: (e) => {
                        //     const layer = e.target;
                        //     layer.setStyle({
                        //         fillOpacity: 0.7,
                        //         weight: 2,
                        //         dashArray: "3",
                        //         color: 'white',
                        //         fillColor: '#FD8D3C'
                        //     });
                        //     layer.bindPopup(popup).closePopup()
                        // },
                        click: (e) => {
                            console.log('selected')
                        },
                    })
                }}
            />
            <LeafletgeoSearch />
        </MapContainer >

    )
}


const LeafletPolygons = (props: any) => {

    const setUniversity = props.setUniversity
    const a: Area = props.area
    const area = a.areas

    const popup = `${a.parentName ? `${a.parentName} ${a.acronym ? `(${a.acronym})` : ''} - ` : ''} ${a.name}`

    if (!Array.isArray(area[0])) {
        return <Polygon
            pathOptions={{
                fillColor: '#FD8D3C',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                color: 'white'
            }}
            positions={area}
            eventHandlers={{
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
                click: (e) => {
                    setUniversity(a)
                },
            }}

        />
    } else {
        return <>{area.map((ar: any, i) => {
            return <Polygon key={i}
                pathOptions={{
                    fillColor: '#FD8D3C',
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: 'white'
                }}
                positions={ar}
                eventHandlers={{
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
                    click: (e) => {
                        setUniversity(a)
                    },
                }}

            />
        })}
        </>
    }
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

const getAreas = () => {
    let ret: Area[] = []

    final.map((universitat) => {
        const areas = universitat.areas

        let simpleArea: L.LatLng[] = []
        let multipleArea: L.LatLng[][] = []

        areas.map((points) => {
            const x = points[0]
            const y = points[1]

            if (typeof x === 'number' && typeof y === 'number') {
                const coord = L.latLng(x, y)

                simpleArea.push(coord)

            } else {

                let oneArea: L.LatLng[] = []

                points.map((p) => {

                    if (Array.isArray(p)) {
                        const x = p[0]
                        const y = p[1]

                        const coord = L.latLng(x, y)

                        oneArea.push(coord)
                    }
                })

                multipleArea.push(oneArea)
            }
        })

        ret.push({
            parentName: universitat.parentName,
            acronym: universitat.acronym,
            type: universitat.type,
            name: universitat.name,
            address: universitat.address,
            coordinates: universitat.coordinates,
            areas: simpleArea.length ? simpleArea : multipleArea
        })
    })

    return ret
}

export function LeafletRegister(props: any) {

    const { setUniversity } = props

    const center = [41.50220636048354, 2.1038106823879845]

    const areas = getAreas()

    const mapContainerProps = {
        keyboard: false,
        dragging: false,
        zoomControl: false,
        boxZoom: false,
        doubleClickZoom: false,
        // scrollWheelZoom: false,
        // tap:false,
        // touchZoom:false,
        center: L.latLng(center[0], center[1]),
        zoom: 13,
        minZoom: 13,
        // maxZoom:30
    }

    return (
        <MapContainer style={{ height: '100vh', width: '100vw' }} {...mapContainerProps}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {areas.map((area) => {
                return <LeafletPolygons area={area} setUniversity={setUniversity} />
            })}
            <LeafletgeoSearch />
        </MapContainer >
    )
}

