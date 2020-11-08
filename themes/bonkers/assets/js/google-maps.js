(function( $ ) {// jscs:ignore validateLineBreaks
  'use strict';

  $( document ).ready( function( $ ) {
    var lat = parseFloat( bonkersGMaps.lat ),
        lon = parseFloat( bonkersGMaps.lon );

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener( window, 'load', init );

    function init() {

      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {

        // How zoomed in you want the map to start at (always required)
        zoom: parseInt( bonkersGMaps.zoom, 10 ),

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng( lat, lon ), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {
            'featureType': 'landscape',
            'stylers': [ { 'saturation': -100 }, { 'lightness': 65 }, { 'visibility': 'on' } ]
          },
          {
            'featureType': 'poi',
            'stylers': [ { 'saturation': -100 }, { 'lightness': 51 }, { 'visibility': 'simplified' } ]
          },
          {
            'featureType': 'road.highway',
            'stylers': [ { 'saturation': -100 }, { 'visibility': 'simplified' } ]
          },
          {
            'featureType': 'road.arterial',
            'stylers': [ { 'saturation': -100 }, { 'lightness': 30 }, { 'visibility': 'on' } ]
          },
          {
            'featureType': 'road.local',
            'stylers': [ { 'saturation': -100 }, { 'lightness': 40 }, { 'visibility': 'on' } ]
          },
          {
            'featureType': 'transit',
            'stylers': [ { 'saturation': -100 }, { 'visibility': 'simplified' } ]
          },
          {
            'featureType': 'administrative.province',
            'stylers': [ { 'visibility': 'off' } ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels',
            'stylers': [ { 'visibility': 'on' }, { 'lightness': -25 }, { 'saturation': -100 } ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [ { 'hue': '#ffff00' }, { 'lightness': -25 }, { 'saturation': -97 } ]
          } ]
      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById( 'bonkers-map' );

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map( mapElement, mapOptions );

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker( {
        position: new google.maps.LatLng( lat, lon ),
        map: map,
        title: ''
      } );

      var center;

      //Move the map to the left
      if ( $( window ).outerWidth() > 480 ) {
        center = new google.maps.LatLng( lat, ( lon + 0.04 ) );
        map.panTo( center );
      }
    }
  } );

})( jQuery );
