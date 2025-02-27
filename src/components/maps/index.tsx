import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  MapView,
  MapViewRef,
  Camera,
  CameraRef,
  MarkerView,
} from "@maplibre/maplibre-react-native";

// import MapView  from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome6 } from "@expo/vector-icons";

function ReactMap() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [userLocation, setUserLocation] = useState<number[] | null>(null);
  const cameraRef = useRef<CameraRef | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [markerCoordinate, setMarkerCoordinate] = useState({
    latitude: -7.871689,
    longitude: 113.293444,
  });

  const gununggeni = [
    -7.871689,
    113.293444
  ]

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation([location.coords.longitude, location.coords.latitude]);
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  const goToUserLocation = () => {
    console.log(userLocation, cameraRef.current);
    if (userLocation && cameraRef?.current) {
      cameraRef?.current.flyTo(gununggeni)
    }
  };

  return (
    <View style={styles.container}>
<MapView
          style={styles.map}
          mapStyle="https://tiles.openfreemap.org/styles/liberty"
          logoEnabled={false}
          attributionPosition={{bottom: 8, right: 8}}>
          <Camera
          ref={cameraRef}
            defaultSettings={{centerCoordinate: [2, 41.5], zoomLevel: 8}}
          />
        </MapView>

        <TouchableOpacity style={styles.button} onPress={() => goToUserLocation()}>
          <FontAwesome6 name="location-arrow" size={24} color="white" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  map: {
    flex: 1,
  },

  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
  },
  userMarker: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: 'white'
  },
  button: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ReactMap;