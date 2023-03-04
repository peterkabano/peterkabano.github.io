ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([452677.883991, 33173.321064, 455151.026267, 35040.100632]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LocalClimateZones_1 = new ol.format.GeoJSON();
var features_LocalClimateZones_1 = format_LocalClimateZones_1.readFeatures(json_LocalClimateZones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_LocalClimateZones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalClimateZones_1.addFeatures(features_LocalClimateZones_1);
var lyr_LocalClimateZones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalClimateZones_1, 
                style: style_LocalClimateZones_1,
                interactive: true,
                title: 'Local Climate Zones'
            });
var lyr_Modelledairtemperature_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Modelled air temperature",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Modelledairtemperature_2.png",
    attributions: ' ',
                                projection: 'EPSG:32636',
                                alwaysInRange: true,
                                imageExtent: [449850.692500, 33246.686100, 456840.692500, 40386.686100]
                            })
                        });
var format_AirtemperaturedegreesCsensors_3 = new ol.format.GeoJSON();
var features_AirtemperaturedegreesCsensors_3 = format_AirtemperaturedegreesCsensors_3.readFeatures(json_AirtemperaturedegreesCsensors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_AirtemperaturedegreesCsensors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirtemperaturedegreesCsensors_3.addFeatures(features_AirtemperaturedegreesCsensors_3);
var lyr_AirtemperaturedegreesCsensors_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirtemperaturedegreesCsensors_3, 
                style: style_AirtemperaturedegreesCsensors_3,
                interactive: true,
    title: 'Air temperature degrees (C) - sensors<br />\
    <img src="styles/legend/AirtemperaturedegreesCsensors_3_0.png" /> 20.8 - 21.8<br />\
    <img src="styles/legend/AirtemperaturedegreesCsensors_3_1.png" /> 21.8 - 22.1<br />\
    <img src="styles/legend/AirtemperaturedegreesCsensors_3_2.png" /> 22.1 - 22.8<br />\
    <img src="styles/legend/AirtemperaturedegreesCsensors_3_3.png" /> 22.8 - 23.1<br />\
    <img src="styles/legend/AirtemperaturedegreesCsensors_3_4.png" /> 23.1 - 24.4<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_LocalClimateZones_1.setVisible(true);lyr_Modelledairtemperature_2.setVisible(true);lyr_AirtemperaturedegreesCsensors_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LocalClimateZones_1,lyr_Modelledairtemperature_2,lyr_AirtemperaturedegreesCsensors_3];
lyr_LocalClimateZones_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'LCZ': 'LCZ', });
lyr_AirtemperaturedegreesCsensors_3.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Level_of_u': 'Level_of_u', 'Day_of_Yea': 'Day_of_Yea', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'RelHum_nig': 'RelHum_nig', 'RelHum_day': 'RelHum_day', 'AbsHum_nig': 'AbsHum_nig', 'AbsHum_day': 'AbsHum_day', 'HeatIndex_': 'HeatIndex_', 'HeatIndex1': 'HeatIndex1', 'SpecHum_ni': 'SpecHum_ni', 'SpecHum_da': 'SpecHum_da', 'VapPres_ni': 'VapPres_ni', 'VapPres_da': 'VapPres_da', 'VapPresDef': 'VapPresDef', 'VapPresD_1': 'VapPresD_1', 'Soil_moist': 'Soil_moist', 'OID_': 'OID_', 'Elevation': 'Elevation', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'POINT_Z': 'POINT_Z', 'Location_n': 'Location_n', 'Location_1': 'Location_1', });
lyr_LocalClimateZones_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'LCZ': 'TextEdit', });
lyr_AirtemperaturedegreesCsensors_3.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Level_of_u': 'TextEdit', 'Day_of_Yea': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'RelHum_nig': 'TextEdit', 'RelHum_day': 'TextEdit', 'AbsHum_nig': 'TextEdit', 'AbsHum_day': 'TextEdit', 'HeatIndex_': 'TextEdit', 'HeatIndex1': 'TextEdit', 'SpecHum_ni': 'TextEdit', 'SpecHum_da': 'TextEdit', 'VapPres_ni': 'TextEdit', 'VapPres_da': 'TextEdit', 'VapPresDef': 'TextEdit', 'VapPresD_1': 'TextEdit', 'Soil_moist': 'TextEdit', 'OID_': 'TextEdit', 'Elevation': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'POINT_Z': 'TextEdit', 'Location_n': 'TextEdit', 'Location_1': 'TextEdit', });
lyr_LocalClimateZones_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'LCZ': 'header label', });
lyr_AirtemperaturedegreesCsensors_3.set('fieldLabels', {'fid': 'no label', 'Location': 'no label', 'Level_of_u': 'no label', 'Day_of_Yea': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'RelHum_nig': 'no label', 'RelHum_day': 'no label', 'AbsHum_nig': 'no label', 'AbsHum_day': 'no label', 'HeatIndex_': 'no label', 'HeatIndex1': 'no label', 'SpecHum_ni': 'no label', 'SpecHum_da': 'no label', 'VapPres_ni': 'no label', 'VapPres_da': 'no label', 'VapPresDef': 'no label', 'VapPresD_1': 'no label', 'Soil_moist': 'no label', 'OID_': 'no label', 'Elevation': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'POINT_Z': 'no label', 'Location_n': 'no label', 'Location_1': 'no label', });
lyr_AirtemperaturedegreesCsensors_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});