import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

function ReactMap() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);
  return (
    <Card>
      <MapView
        style={{ width: 600, height: 400 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
      />
    </Card>
  );
}

export default ReactMap;
