var wms_layers = [];

var format_limite_yunquera_0 = new ol.format.GeoJSON();
var features_limite_yunquera_0 = format_limite_yunquera_0.readFeatures(json_limite_yunquera_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_yunquera_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_yunquera_0.addFeatures(features_limite_yunquera_0);
var lyr_limite_yunquera_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limite_yunquera_0, 
                style: style_limite_yunquera_0,
                interactive: true,
                title: '<img src="styles/legend/limite_yunquera_0.png" /> limite_yunquera'
            });
var format_vegetacion_yunquera_1 = new ol.format.GeoJSON();
var features_vegetacion_yunquera_1 = format_vegetacion_yunquera_1.readFeatures(json_vegetacion_yunquera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vegetacion_yunquera_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vegetacion_yunquera_1.addFeatures(features_vegetacion_yunquera_1);
var lyr_vegetacion_yunquera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vegetacion_yunquera_1, 
                style: style_vegetacion_yunquera_1,
                interactive: true,
                title: '<img src="styles/legend/vegetacion_yunquera_1.png" /> vegetacion_yunquera'
            });
var format_Shannon_yunquera_2 = new ol.format.GeoJSON();
var features_Shannon_yunquera_2 = format_Shannon_yunquera_2.readFeatures(json_Shannon_yunquera_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shannon_yunquera_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shannon_yunquera_2.addFeatures(features_Shannon_yunquera_2);
var lyr_Shannon_yunquera_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shannon_yunquera_2, 
                style: style_Shannon_yunquera_2,
                interactive: true,
                title: '<img src="styles/legend/Shannon_yunquera_2.png" /> Shannon_yunquera'
            });
var format_ocurrencias_yunquera_3 = new ol.format.GeoJSON();
var features_ocurrencias_yunquera_3 = format_ocurrencias_yunquera_3.readFeatures(json_ocurrencias_yunquera_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ocurrencias_yunquera_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ocurrencias_yunquera_3.addFeatures(features_ocurrencias_yunquera_3);
var lyr_ocurrencias_yunquera_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ocurrencias_yunquera_3, 
                style: style_ocurrencias_yunquera_3,
                interactive: true,
                title: '<img src="styles/legend/ocurrencias_yunquera_3.png" /> ocurrencias_yunquera'
            });
var lyr_segmentation_raster_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "segmentation_raster",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/segmentation_raster_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-560007.139075, 4395471.790127, -543671.185323, 4407488.400126]
                            })
                        });
var lyr_interpoladoIDW_cortado_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "interpolado(IDW)_cortado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/interpoladoIDW_cortado_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557326.939477, 4397502.867494, -543709.834531, 4407488.400126]
                            })
                        });
var lyr_shannon_raster_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "shannon_raster",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/shannon_raster_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557278.661084, 4397503.864072, -549530.173900, 4404893.709079]
                            })
                        });
var lyr_distanciacanalescortado_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "distanciacanalescortado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/distanciacanalescortado_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-559978.280726, 4395479.670475, -547261.101405, 4406493.263498]
                            })
                        });
var lyr_exposicion_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "exposicion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/exposicion_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-559987.827731, 4395470.092271, -547257.801342, 4406502.716172]
                            })
                        });

        var lyr_GoogleSatellite_9 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_virtual_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "virtual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/virtual_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-560007.139075, 4395471.790127, -543671.185323, 4407488.400126]
                            })
                        });
var format_segmentation_vectorial_11 = new ol.format.GeoJSON();
var features_segmentation_vectorial_11 = format_segmentation_vectorial_11.readFeatures(json_segmentation_vectorial_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_segmentation_vectorial_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_segmentation_vectorial_11.addFeatures(features_segmentation_vectorial_11);
var lyr_segmentation_vectorial_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_segmentation_vectorial_11, 
                style: style_segmentation_vectorial_11,
                interactive: true,
                title: '<img src="styles/legend/segmentation_vectorial_11.png" /> segmentation_vectorial'
            });

lyr_limite_yunquera_0.setVisible(true);lyr_vegetacion_yunquera_1.setVisible(true);lyr_Shannon_yunquera_2.setVisible(true);lyr_ocurrencias_yunquera_3.setVisible(false);lyr_segmentation_raster_4.setVisible(true);lyr_interpoladoIDW_cortado_5.setVisible(true);lyr_shannon_raster_6.setVisible(true);lyr_distanciacanalescortado_7.setVisible(true);lyr_exposicion_8.setVisible(true);lyr_GoogleSatellite_9.setVisible(true);lyr_virtual_10.setVisible(true);lyr_segmentation_vectorial_11.setVisible(true);
var layersList = [lyr_limite_yunquera_0,lyr_vegetacion_yunquera_1,lyr_Shannon_yunquera_2,lyr_ocurrencias_yunquera_3,lyr_segmentation_raster_4,lyr_interpoladoIDW_cortado_5,lyr_shannon_raster_6,lyr_distanciacanalescortado_7,lyr_exposicion_8,lyr_GoogleSatellite_9,lyr_virtual_10,lyr_segmentation_vectorial_11];
lyr_limite_yunquera_0.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CODIGO_JA': 'CODIGO_JA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_vegetacion_yunquera_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_ARBO1_SP': 'D_ARBO1_SP', 'D_ARBO2_SP': 'D_ARBO2_SP', 'D_ARBO3_SP': 'D_ARBO3_SP', 'D_ARBO4_SP': 'D_ARBO4_SP', 'D_ARBO5_SP': 'D_ARBO5_SP', 'D_ARBO6_SP': 'D_ARBO6_SP', 'D_ARBO_PRE': 'D_ARBO_PRE', 'D_ARBU_PRE': 'D_ARBU_PRE', 'D_HERB_PRE': 'D_HERB_PRE', 'D_SUEL_PRE': 'D_SUEL_PRE', 'COM_1': 'COM_1', 'COM1': 'COM1', 'D_COM1': 'D_COM1', 'D_COM1_COB': 'D_COM1_COB', 'COM_2': 'COM_2', 'D_COM2': 'D_COM2', 'D_COM2_COB': 'D_COM2_COB', 'COM_3': 'COM_3', 'D_COM3': 'D_COM3', 'D_COM3_COB': 'D_COM3_COB', 'COM_4': 'COM_4', 'D_COM4': 'D_COM4', 'D_COM4_COB': 'D_COM4_COB', 'COM_5': 'COM_5', 'D_COM5': 'D_COM5', 'D_COM5_COB': 'D_COM5_COB', 'COM_6': 'COM_6', 'D_COM6': 'D_COM6', 'D_COM6_COB': 'D_COM6_COB', 'COM_7': 'COM_7', 'D_COM7': 'D_COM7', 'D_COM7_COB': 'D_COM7_COB', 'COM_8': 'COM_8', 'D_COM8': 'D_COM8', 'D_COM8_COB': 'D_COM8_COB', 'USO': 'USO', 'D_USO': 'D_USO', 'D_COMBUSTI': 'D_COMBUSTI', 'COMENTARIO': 'COMENTARIO', 'D_U_BIOGEO': 'D_U_BIOGEO', 'D_OMBROC': 'D_OMBROC', 'D_PISO': 'D_PISO', 'SERIE': 'SERIE', 'D_SERIE': 'D_SERIE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Shannon_yunquera_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_ARBO1_SP': 'D_ARBO1_SP', 'D_ARBO2_SP': 'D_ARBO2_SP', 'D_ARBO3_SP': 'D_ARBO3_SP', 'D_ARBO4_SP': 'D_ARBO4_SP', 'D_ARBO5_SP': 'D_ARBO5_SP', 'D_ARBO6_SP': 'D_ARBO6_SP', 'D_ARBO_PRE': 'D_ARBO_PRE', 'D_ARBU_PRE': 'D_ARBU_PRE', 'D_HERB_PRE': 'D_HERB_PRE', 'D_SUEL_PRE': 'D_SUEL_PRE', 'COM_1': 'COM_1', 'COM1': 'COM1', 'D_COM1': 'D_COM1', 'D_COM1_COB': 'D_COM1_COB', 'COM_2': 'COM_2', 'D_COM2': 'D_COM2', 'D_COM2_COB': 'D_COM2_COB', 'COM_3': 'COM_3', 'D_COM3': 'D_COM3', 'D_COM3_COB': 'D_COM3_COB', 'COM_4': 'COM_4', 'D_COM4': 'D_COM4', 'D_COM4_COB': 'D_COM4_COB', 'COM_5': 'COM_5', 'D_COM5': 'D_COM5', 'D_COM5_COB': 'D_COM5_COB', 'COM_6': 'COM_6', 'D_COM6': 'D_COM6', 'D_COM6_COB': 'D_COM6_COB', 'COM_7': 'COM_7', 'D_COM7': 'D_COM7', 'D_COM7_COB': 'D_COM7_COB', 'COM_8': 'COM_8', 'D_COM8': 'D_COM8', 'D_COM8_COB': 'D_COM8_COB', 'USO': 'USO', 'D_USO': 'D_USO', 'D_COMBUSTI': 'D_COMBUSTI', 'COMENTARIO': 'COMENTARIO', 'D_U_BIOGEO': 'D_U_BIOGEO', 'D_OMBROC': 'D_OMBROC', 'D_PISO': 'D_PISO', 'SERIE': 'SERIE', 'D_SERIE': 'D_SERIE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'H': 'H', });
lyr_ocurrencias_yunquera_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gbifID': 'gbifID', 'scientific': 'scientific', 'decimalLat': 'decimalLat', 'decimalLon': 'decimalLon', });
lyr_segmentation_vectorial_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_limite_yunquera_0.set('fieldImages', {'NOMBRE': '', 'CODIGO_JA': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_vegetacion_yunquera_1.set('fieldImages', {'OBJECTID': '', 'D_ARBO1_SP': '', 'D_ARBO2_SP': '', 'D_ARBO3_SP': '', 'D_ARBO4_SP': '', 'D_ARBO5_SP': '', 'D_ARBO6_SP': '', 'D_ARBO_PRE': '', 'D_ARBU_PRE': '', 'D_HERB_PRE': '', 'D_SUEL_PRE': '', 'COM_1': '', 'COM1': '', 'D_COM1': '', 'D_COM1_COB': '', 'COM_2': '', 'D_COM2': '', 'D_COM2_COB': '', 'COM_3': '', 'D_COM3': '', 'D_COM3_COB': '', 'COM_4': '', 'D_COM4': '', 'D_COM4_COB': '', 'COM_5': '', 'D_COM5': '', 'D_COM5_COB': '', 'COM_6': '', 'D_COM6': '', 'D_COM6_COB': '', 'COM_7': '', 'D_COM7': '', 'D_COM7_COB': '', 'COM_8': '', 'D_COM8': '', 'D_COM8_COB': '', 'USO': '', 'D_USO': '', 'D_COMBUSTI': '', 'COMENTARIO': '', 'D_U_BIOGEO': '', 'D_OMBROC': '', 'D_PISO': '', 'SERIE': '', 'D_SERIE': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Shannon_yunquera_2.set('fieldImages', {'OBJECTID': '', 'D_ARBO1_SP': '', 'D_ARBO2_SP': '', 'D_ARBO3_SP': '', 'D_ARBO4_SP': '', 'D_ARBO5_SP': '', 'D_ARBO6_SP': '', 'D_ARBO_PRE': '', 'D_ARBU_PRE': '', 'D_HERB_PRE': '', 'D_SUEL_PRE': '', 'COM_1': '', 'COM1': '', 'D_COM1': '', 'D_COM1_COB': '', 'COM_2': '', 'D_COM2': '', 'D_COM2_COB': '', 'COM_3': '', 'D_COM3': '', 'D_COM3_COB': '', 'COM_4': '', 'D_COM4': '', 'D_COM4_COB': '', 'COM_5': '', 'D_COM5': '', 'D_COM5_COB': '', 'COM_6': '', 'D_COM6': '', 'D_COM6_COB': '', 'COM_7': '', 'D_COM7': '', 'D_COM7_COB': '', 'COM_8': '', 'D_COM8': '', 'D_COM8_COB': '', 'USO': '', 'D_USO': '', 'D_COMBUSTI': '', 'COMENTARIO': '', 'D_U_BIOGEO': '', 'D_OMBROC': '', 'D_PISO': '', 'SERIE': '', 'D_SERIE': '', 'Shape_Leng': '', 'Shape_Area': '', 'H': '', });
lyr_ocurrencias_yunquera_3.set('fieldImages', {'OBJECTID': '', 'gbifID': '', 'scientific': '', 'decimalLat': '', 'decimalLon': '', });
lyr_segmentation_vectorial_11.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_limite_yunquera_0.set('fieldLabels', {'NOMBRE': 'no label', 'CODIGO_JA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_vegetacion_yunquera_1.set('fieldLabels', {'OBJECTID': 'no label', 'D_ARBO1_SP': 'no label', 'D_ARBO2_SP': 'no label', 'D_ARBO3_SP': 'no label', 'D_ARBO4_SP': 'no label', 'D_ARBO5_SP': 'no label', 'D_ARBO6_SP': 'no label', 'D_ARBO_PRE': 'no label', 'D_ARBU_PRE': 'no label', 'D_HERB_PRE': 'no label', 'D_SUEL_PRE': 'no label', 'COM_1': 'no label', 'COM1': 'no label', 'D_COM1': 'no label', 'D_COM1_COB': 'no label', 'COM_2': 'no label', 'D_COM2': 'no label', 'D_COM2_COB': 'no label', 'COM_3': 'no label', 'D_COM3': 'no label', 'D_COM3_COB': 'no label', 'COM_4': 'no label', 'D_COM4': 'no label', 'D_COM4_COB': 'no label', 'COM_5': 'no label', 'D_COM5': 'no label', 'D_COM5_COB': 'no label', 'COM_6': 'no label', 'D_COM6': 'no label', 'D_COM6_COB': 'no label', 'COM_7': 'no label', 'D_COM7': 'no label', 'D_COM7_COB': 'no label', 'COM_8': 'no label', 'D_COM8': 'no label', 'D_COM8_COB': 'no label', 'USO': 'no label', 'D_USO': 'no label', 'D_COMBUSTI': 'no label', 'COMENTARIO': 'no label', 'D_U_BIOGEO': 'no label', 'D_OMBROC': 'no label', 'D_PISO': 'no label', 'SERIE': 'no label', 'D_SERIE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Shannon_yunquera_2.set('fieldLabels', {'OBJECTID': 'no label', 'D_ARBO1_SP': 'no label', 'D_ARBO2_SP': 'no label', 'D_ARBO3_SP': 'no label', 'D_ARBO4_SP': 'no label', 'D_ARBO5_SP': 'no label', 'D_ARBO6_SP': 'no label', 'D_ARBO_PRE': 'no label', 'D_ARBU_PRE': 'no label', 'D_HERB_PRE': 'no label', 'D_SUEL_PRE': 'no label', 'COM_1': 'no label', 'COM1': 'no label', 'D_COM1': 'no label', 'D_COM1_COB': 'no label', 'COM_2': 'no label', 'D_COM2': 'no label', 'D_COM2_COB': 'no label', 'COM_3': 'no label', 'D_COM3': 'no label', 'D_COM3_COB': 'no label', 'COM_4': 'no label', 'D_COM4': 'no label', 'D_COM4_COB': 'no label', 'COM_5': 'no label', 'D_COM5': 'no label', 'D_COM5_COB': 'no label', 'COM_6': 'no label', 'D_COM6': 'no label', 'D_COM6_COB': 'no label', 'COM_7': 'no label', 'D_COM7': 'no label', 'D_COM7_COB': 'no label', 'COM_8': 'no label', 'D_COM8': 'no label', 'D_COM8_COB': 'no label', 'USO': 'no label', 'D_USO': 'no label', 'D_COMBUSTI': 'no label', 'COMENTARIO': 'no label', 'D_U_BIOGEO': 'no label', 'D_OMBROC': 'no label', 'D_PISO': 'no label', 'SERIE': 'no label', 'D_SERIE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'H': 'no label', });
lyr_ocurrencias_yunquera_3.set('fieldLabels', {'OBJECTID': 'no label', 'gbifID': 'no label', 'scientific': 'no label', 'decimalLat': 'no label', 'decimalLon': 'no label', });
lyr_segmentation_vectorial_11.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_segmentation_vectorial_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});