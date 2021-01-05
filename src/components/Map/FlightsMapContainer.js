import "@immfly/flights-map";
import React from "react";
import "./FlightsMapContainer.css";
class FlightsMapContainer extends React.Component {
  render() {
    const config = {
      mapContainerId: "map", // The id of the map container on the custom element.
      linesArc: -0.7, // Angle of the lines curve on the map.
      globalFlightsState: 0.5, // The value of this can be between 0 and 1. It specifies the position of the aircraft on the line flight. For example, 0 will be at the begining of the line and 1 at the end.
      // colors: {
      //   land: "#BDBDBD", // Specifies the colors of the land.
      //   background: "#F5F5F5", // Specifies the color of the map background.
      //   aircrafts: "#000000", // Specifies a global color for aircrafts wich flight has no color.
      //   lines: "#000000", // Specifies a global color for lines wich flight has no color.
      //   cities: "#000000", // Specifies a global color for cities wich flight has no color.
      // },
      showMarkers: true, // Specifies if the default markers have to be shown.
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
    };
    return (
      <flights-map
        ref={(el) => {
          el && (el.config = config);
        }}
      />
    );
  }
}

export default FlightsMapContainer;
