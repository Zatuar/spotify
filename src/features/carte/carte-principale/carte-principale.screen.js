import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import MapView from 'react-native-maps';
//import ClusteredMapView from 'react-native-maps-super-cluster';
import image from './images/flag-pink.png';

export default class CartePrincipale extends React.Component {
  render() {

    const coordinates = [];

    coordinates.push({
      key: 0,
      location: {
        longitude: 2.3630499,
        latitude: 48.8704823
      }
    });

    for(let i = 1; i<2; i++) {

      const location = {
        longitude: coordinates[i-1].location.longitude + (Math.random() * (i%2 === 0 ? -1 : 1)),
        latitude: coordinates[i-1].location.latitude + (Math.random() * (i%2 === 0 ? -1 : 1)),
      };

      coordinates.push({ key: i, location });

    }


    function getDistanceFromLatLonInKm(pointA, pointB) {
      var lat1 = pointA.latitude
      var lon1 = pointA.longitude
      var lat2 = pointB.latitude
      var lon2 = pointB.longitude

      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2-lat1);  // deg2rad below
      var dLon = deg2rad(lon2-lon1);
      var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c; // Distance in km
      return d.toFixed(3);
    }

    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    const pointA = coordinates[0].location
    const pointB = coordinates[1].location
    return (<>
      <View style={{top:20,height:200}}>
        <Text>
          Distance entre : {JSON.stringify(pointA)}
          et {JSON.stringify(pointB)}
          = {getDistanceFromLatLonInKm(pointA, pointB) }
        </Text>
      </View>

      <MapView
        renderMarker={renderMarker}
        initialRegion={{
          longitude: 2.3630499,
          latitude: 48.8704823,
          latitudeDelta: 9.22,
          longitudeDelta: 4.21,
        }}
        style={{height:500}}>

        { coordinates.map(({ key, location } ) => <MapView.Marker key={key} image={image} coordinate={location} />) }

      </MapView>
    </>

    );
  }
}

function renderMarker({ location }) {
  return (
    <MapView.Marker
      image={image}
      coordinate={location}
    >
      <MapView.Callout>
        <Text>BiG BiG Callout</Text>
      </MapView.Callout>
    </MapView.Marker>
  );
}