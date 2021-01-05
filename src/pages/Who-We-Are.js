import "@immfly/flights-map";
import React from "react";
import Layout from "../components/layout";
import styles from "../theme/index.module.css";
export default function WhoWeAre() {
  const flights = [
    {
      name: "V131", // Flight name
      origin: {
        city: "Paris", // Origin city name
        latitude: 48.8567, // Origin city latitude
        longitude: 2.351, // Origin city longitude
      },
      destination: {
        city: "Toronto", // Destination city name
        latitude: 43.8163, // Destination city latitude
        longitude: -79.4287, // Destination city longitude
      },
      state: 1, // * Optional. Flight state: 0 means pending to start, 1 means in progress, and 2 means completed. If there is no state, the position of the aircraft on the flight will be on the middle
      //color: "#F60", // * Optional. Color to be painted on the map, including aircraft, cities and line flight,
    },
  ];
  const config = {
    mapContainerId: "map", // The id of the map container on the custom element.
    linesArc: -0.7, // Angle of the lines curve on the map.
    globalFlightsState: 0.5, // The value of this can be between 0 and 1. It specifies the position of the aircraft on the line flight. For example, 0 will be at the begining of the line and 1 at the end.
    colors: {
      land: "#BDBDBD", // Specifies the colors of the land.
      background: "#F5F5F5", // Specifies the color of the map background.
      aircrafts: "#000000", // Specifies a global color for aircrafts wich flight has no color.
      lines: "#000000", // Specifies a global color for lines wich flight has no color.
      cities: "#000000", // Specifies a global color for cities wich flight has no color.
    },
    zoomedContinent: null, // Specifies default bounding boxes to initialize the map. You can use 'europe', 'asia', 'oceania', 'africa', 'north_america' or 'south_america'.
    forceUpdate: false, // In react applications, you have to forceUpdate to render the flights, when the component that wraps the flights-map already has been mounted.,
    showMarkers: false, // Specifies if the default markers have to be shown.
    dataToShowOnMarkers: [
      { id: "name", text: "Flight" },
      { id: "origin.city", text: "Origin" },
      { id: "destination.city", text: "Destination" },
    ], // Specifies the data to be shown on markers. 'id' is key on the object and 'text' is the name that will be showed on the marker.
    animation: {
      enabled: true, // If it is false, any aircraft will be animate altough its state is 'in progress'.
      flip: false, // Specifies if the aircrafts will move throug both directions.
      loop: true, // Specifies if the aircrafts will move constantly on its line flight.
      duration: 8.5, // Specifies the duration of the aircrafts animation.
      shouldAnimateFlyingState: true, // * Optional. If it setted to true, the aircrafts and the airports with flights in state FLYING will be animated with a glow effect.
    },
    zoom: {
      initialLevel: 1, // Specifies initial zoom level.
      minLevel: 1, // Specifies minimum zoom level.
      maxLevel: 7, // Specifies maximum zoom level.
      initialCenter: {
        // Specifies initial zoom position of the map. If you have set the attribute zoomedContinent, this one has one effect.
        latitude: null, // Specifies the initial zoom latitude.
        longitude: null, // Specifies the initial zoom longitude.
        level: null, // Specifies the initial zoom level.
      },
      homeButtonEnabled: false, // Specifies if the home button must be shown.
      buttonFillAlpha: 0.7, // Specifies the alpha value of the buttons background.
      buttonFillColor: "#E6E6E6", // Specifies the background color of the buttons.
      controlsPosition: {
        top: 20,
        right: 20,
      }, // Specifies the position of the map control (home, zomm in, zoom out). You can add left, bottom, top and right.
    },
    texts: {
      labelsFontSize: 8, // Specifies labels font size of the map.
      markersFontSize: 14, // Specifies font size on flights markers.
    },
  };
  return (
    <Layout>
      <div className={styles.containerMap}>
        <flights-map
          ref={(el) => {
            el && (el.flights = flights) && (el.config = config);
          }}
        ></flights-map>
      </div>
    </Layout>
  );
}
