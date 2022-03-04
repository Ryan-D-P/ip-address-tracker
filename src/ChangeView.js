import { useMap } from "react-leaflet";

// Change center of react-leaflet map on IP change
const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default ChangeView;