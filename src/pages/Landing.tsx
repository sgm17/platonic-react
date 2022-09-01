import { Download } from '../components/landingpage/download/Download';
import { How } from '../components/landingpage/meet/Meet';
import { Universities } from '../components/landingpage/universities/Universities';
import { Leaflet } from '../components/leaflet/Leaflet';

export const Landing = () => {
    return <>
        <How />
        <Universities />
        <Download />
    </>
}