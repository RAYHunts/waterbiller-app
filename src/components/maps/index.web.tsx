"use dom";
import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below
import { Card } from "../ui/card";

function ReactMap() {
  return (
    <Card>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="https://demotiles.maplibre.org/style.json"
      />
    </Card>
  );
}

export default ReactMap;
