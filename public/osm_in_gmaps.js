function initialize() {

    var myLatlng = new google.maps.LatLng(53, -1);
  
    var map = new google.maps.Map(document.getElementById("map-canvas"), {
      center: myLatlng,
      zoom: 10
    });
  
    map.mapTypes.set("StreetMap", new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
      },
      tileSize: new google.maps.Size(256, 256),
      name: "OpenStreetMap",
      maxZoom: 18
    }));
  
    map.setOptions({
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP, 'OSM'],
        position: google.maps.ControlPosition.TOP_LEFT
      },
      mapTypeId: 'OSM'
    });
  }
  
  initialize();
  
  //TODO: Use this to add original openstreetmap and opencyclemap into index.html. This might also help to allow detailed zoom levels!