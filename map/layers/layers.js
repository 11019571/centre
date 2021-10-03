var wms_layers = [];

var format_roadsegmenteditable2_0 = new ol.format.GeoJSON();
var features_roadsegmenteditable2_0 = format_roadsegmenteditable2_0.readFeatures(json_roadsegmenteditable2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadsegmenteditable2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadsegmenteditable2_0.addFeatures(features_roadsegmenteditable2_0);
var lyr_roadsegmenteditable2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roadsegmenteditable2_0, 
                style: style_roadsegmenteditable2_0,
                interactive: true,
                title: '<img src="styles/legend/roadsegmenteditable2_0.png" /> road segment editable 2'
            });
var format_waterfeaturecorridoreditable2_1 = new ol.format.GeoJSON();
var features_waterfeaturecorridoreditable2_1 = format_waterfeaturecorridoreditable2_1.readFeatures(json_waterfeaturecorridoreditable2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterfeaturecorridoreditable2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterfeaturecorridoreditable2_1.addFeatures(features_waterfeaturecorridoreditable2_1);
var lyr_waterfeaturecorridoreditable2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterfeaturecorridoreditable2_1, 
                style: style_waterfeaturecorridoreditable2_1,
                interactive: true,
                title: '<img src="styles/legend/waterfeaturecorridoreditable2_1.png" /> water feature corridor editable 2'
            });
var format_Railwayeditable2_2 = new ol.format.GeoJSON();
var features_Railwayeditable2_2 = format_Railwayeditable2_2.readFeatures(json_Railwayeditable2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railwayeditable2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railwayeditable2_2.addFeatures(features_Railwayeditable2_2);
var lyr_Railwayeditable2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railwayeditable2_2, 
                style: style_Railwayeditable2_2,
                interactive: true,
                title: '<img src="styles/legend/Railwayeditable2_2.png" /> Railway editable 2'
            });
var format_DPlines20210905_3 = new ol.format.GeoJSON();
var features_DPlines20210905_3 = format_DPlines20210905_3.readFeatures(json_DPlines20210905_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPlines20210905_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPlines20210905_3.addFeatures(features_DPlines20210905_3);
var lyr_DPlines20210905_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPlines20210905_3, 
                style: style_DPlines20210905_3,
                interactive: true,
    title: 'DP lines 2021.09.05<br />\
    <img src="styles/legend/DPlines20210905_3_0.png" /> 1330<br />\
    <img src="styles/legend/DPlines20210905_3_1.png" /> 1340<br />\
    <img src="styles/legend/DPlines20210905_3_2.png" /> 1350<br />\
    <img src="styles/legend/DPlines20210905_3_3.png" /> 1360<br />\
    <img src="styles/legend/DPlines20210905_3_4.png" /> 1370<br />\
    <img src="styles/legend/DPlines20210905_3_5.png" /> 3430<br />\
    <img src="styles/legend/DPlines20210905_3_6.png" /> 3440<br />\
    <img src="styles/legend/DPlines20210905_3_7.png" /> 3450<br />\
    <img src="styles/legend/DPlines20210905_3_8.png" /> 3460<br />\
    <img src="styles/legend/DPlines20210905_3_9.png" /> 3470<br />\
    <img src="styles/legend/DPlines20210905_3_10.png" /> 3480<br />\
    <img src="styles/legend/DPlines20210905_3_11.png" /> 3490<br />\
    <img src="styles/legend/DPlines20210905_3_12.png" /> 3500<br />\
    <img src="styles/legend/DPlines20210905_3_13.png" /> 3510<br />\
    <img src="styles/legend/DPlines20210905_3_14.png" /> 3520<br />\
    <img src="styles/legend/DPlines20210905_3_15.png" /> 3530<br />\
    <img src="styles/legend/DPlines20210905_3_16.png" /> 3540<br />\
    <img src="styles/legend/DPlines20210905_3_17.png" /> 6000<br />\
    <img src="styles/legend/DPlines20210905_3_18.png" /> 6020<br />\
    <img src="styles/legend/DPlines20210905_3_19.png" /> 6030<br />\
    <img src="styles/legend/DPlines20210905_3_20.png" /> 6040<br />\
    <img src="styles/legend/DPlines20210905_3_21.png" /> 6050<br />\
    <img src="styles/legend/DPlines20210905_3_22.png" /> 6060<br />\
    <img src="styles/legend/DPlines20210905_3_23.png" /> 6070<br />\
    <img src="styles/legend/DPlines20210905_3_24.png" /> 6080<br />\
    <img src="styles/legend/DPlines20210905_3_25.png" /> 6090<br />\
    <img src="styles/legend/DPlines20210905_3_26.png" /> 6100<br />\
    <img src="styles/legend/DPlines20210905_3_27.png" /> 6110<br />\
    <img src="styles/legend/DPlines20210905_3_28.png" /> 6120<br />\
    <img src="styles/legend/DPlines20210905_3_29.png" /> 6210<br />\
    <img src="styles/legend/DPlines20210905_3_30.png" /> 6220<br />\
    <img src="styles/legend/DPlines20210905_3_31.png" /> 6230<br />\
    <img src="styles/legend/DPlines20210905_3_32.png" /> 6240<br />\
    <img src="styles/legend/DPlines20210905_3_33.png" /> 6250<br />\
    <img src="styles/legend/DPlines20210905_3_34.png" /> 6260<br />\
    <img src="styles/legend/DPlines20210905_3_35.png" /> 6270<br />\
    <img src="styles/legend/DPlines20210905_3_36.png" /> 6280<br />\
    <img src="styles/legend/DPlines20210905_3_37.png" /> 6290<br />\
    <img src="styles/legend/DPlines20210905_3_38.png" /> 6300<br />\
    <img src="styles/legend/DPlines20210905_3_39.png" /> 7010<br />\
    <img src="styles/legend/DPlines20210905_3_40.png" /> 7020<br />\
    <img src="styles/legend/DPlines20210905_3_41.png" /> 7030<br />\
    <img src="styles/legend/DPlines20210905_3_42.png" /> 7040<br />\
    <img src="styles/legend/DPlines20210905_3_43.png" /> 7050<br />\
    <img src="styles/legend/DPlines20210905_3_44.png" /> 7060<br />\
    <img src="styles/legend/DPlines20210905_3_45.png" /> 7070<br />\
    <img src="styles/legend/DPlines20210905_3_46.png" /> 7080<br />\
    <img src="styles/legend/DPlines20210905_3_47.png" /> 7090<br />\
    <img src="styles/legend/DPlines20210905_3_48.png" /> 7100<br />\
    <img src="styles/legend/DPlines20210905_3_49.png" /> 7110<br />\
    <img src="styles/legend/DPlines20210905_3_50.png" /> 7120<br />\
    <img src="styles/legend/DPlines20210905_3_51.png" /> 7130<br />\
    <img src="styles/legend/DPlines20210905_3_52.png" /> 7200<br />\
    <img src="styles/legend/DPlines20210905_3_53.png" /> 7210<br />\
    <img src="styles/legend/DPlines20210905_3_54.png" /> 7220<br />\
    <img src="styles/legend/DPlines20210905_3_55.png" /> 7230<br />\
    <img src="styles/legend/DPlines20210905_3_56.png" /> 7240<br />\
    <img src="styles/legend/DPlines20210905_3_57.png" /> 7250<br />\
    <img src="styles/legend/DPlines20210905_3_58.png" /> 7260<br />\
    <img src="styles/legend/DPlines20210905_3_59.png" /> 7270<br />\
    <img src="styles/legend/DPlines20210905_3_60.png" /> 7280<br />\
    <img src="styles/legend/DPlines20210905_3_61.png" /> 7290<br />\
    <img src="styles/legend/DPlines20210905_3_62.png" /> 7300<br />\
    <img src="styles/legend/DPlines20210905_3_63.png" /> 7410<br />\
    <img src="styles/legend/DPlines20210905_3_64.png" /> 7420<br />\
    <img src="styles/legend/DPlines20210905_3_65.png" /> 7430<br />\
    <img src="styles/legend/DPlines20210905_3_66.png" /> 7440<br />\
    <img src="styles/legend/DPlines20210905_3_67.png" /> 7450<br />\
    <img src="styles/legend/DPlines20210905_3_68.png" /> 7460<br />\
    <img src="styles/legend/DPlines20210905_3_69.png" /> 7470<br />\
    <img src="styles/legend/DPlines20210905_3_70.png" /> 7480<br />\
    <img src="styles/legend/DPlines20210905_3_71.png" /> 7490<br />\
    <img src="styles/legend/DPlines20210905_3_72.png" /> 7610<br />\
    <img src="styles/legend/DPlines20210905_3_73.png" /> 7620<br />\
    <img src="styles/legend/DPlines20210905_3_74.png" /> 7630<br />\
    <img src="styles/legend/DPlines20210905_3_75.png" /> 7640<br />\
    <img src="styles/legend/DPlines20210905_3_76.png" /> 7650<br />\
    <img src="styles/legend/DPlines20210905_3_77.png" /> 7660<br />\
    <img src="styles/legend/DPlines20210905_3_78.png" /> 7670<br />\
    <img src="styles/legend/DPlines20210905_3_79.png" /> 7680<br />\
    <img src="styles/legend/DPlines20210905_3_80.png" /> 7690<br />\
    <img src="styles/legend/DPlines20210905_3_81.png" /> 7700<br />\
    <img src="styles/legend/DPlines20210905_3_82.png" /> 7710<br />\
    <img src="styles/legend/DPlines20210905_3_83.png" /> 7720<br />\
    <img src="styles/legend/DPlines20210905_3_84.png" /> 7730<br />\
    <img src="styles/legend/DPlines20210905_3_85.png" /> 7740<br />\
    <img src="styles/legend/DPlines20210905_3_86.png" /> <br />'
        });

lyr_roadsegmenteditable2_0.setVisible(true);lyr_waterfeaturecorridoreditable2_1.setVisible(true);lyr_Railwayeditable2_2.setVisible(true);lyr_DPlines20210905_3.setVisible(true);
var layersList = [lyr_roadsegmenteditable2_0,lyr_waterfeaturecorridoreditable2_1,lyr_Railwayeditable2_2,lyr_DPlines20210905_3];
lyr_roadsegmenteditable2_0.set('fieldAliases', {'topoid': 'topoid', 'objectmodd': 'objectmodd', 'featuremod': 'featuremod', 'classsubty': 'classsubty', 'featurerel': 'featurerel', 'attributer': 'attributer', 'capturesou': 'capturesou', 'capturemet': 'capturemet', 'planimetri': 'planimetri', 'verticalac': 'verticalac', 'operationa': 'operationa', 'roadnameoi': 'roadnameoi', 'roadnameba': 'roadnameba', 'roadnamety': 'roadnamety', 'roadnamesu': 'roadnamesu', 'functionhi': 'functionhi', 'roadontype': 'roadontype', 'surface': 'surface', 'lanecount': 'lanecount', 'roadnameex': 'roadnameex', 'relevance': 'relevance', 'startdate': 'startdate', 'enddate': 'enddate', 'lastupdate': 'lastupdate', 'msoid': 'msoid', 'centroidid': 'centroidid', 'shapeuuid': 'shapeuuid', 'changetype': 'changetype', 'processsta': 'processsta', 'urbanity': 'urbanity', 'Shape__Len': 'Shape__Len', 'cadid': 'cadid', 'createdate': 'createdate', 'modifiedda': 'modifiedda', 'lganame': 'lganame', 'councilnam': 'councilnam', 'abscode': 'abscode', 'ltocode': 'ltocode', 'vgcode': 'vgcode', 'wbcode': 'wbcode', });
lyr_waterfeaturecorridoreditable2_1.set('fieldAliases', {'rid': 'rid', 'msoid': 'msoid', 'waterfeatu': 'waterfeatu', 'waterfea00': 'waterfea00', 'classsubty': 'classsubty', 'startdate': 'startdate', 'enddate': 'enddate', 'lastupdate': 'lastupdate', 'lastupda00': 'lastupda00', 'centroidid': 'centroidid', 'changetype': 'changetype', 'processsta': 'processsta', 'shapeuuid': 'shapeuuid', 'urbanity': 'urbanity', 'Shape__Len': 'Shape__Len', 'Shape__Are': 'Shape__Are', 'cadid': 'cadid', 'createdate': 'createdate', 'modifiedda': 'modifiedda', 'lganame': 'lganame', 'councilnam': 'councilnam', 'abscode': 'abscode', 'ltocode': 'ltocode', 'vgcode': 'vgcode', 'wbcode': 'wbcode', });
lyr_Railwayeditable2_2.set('fieldAliases', {'topoid': 'topoid', 'objectmodd': 'objectmodd', 'featuremod': 'featuremod', 'classsubty': 'classsubty', 'featurerel': 'featurerel', 'attributer': 'attributer', 'capturesou': 'capturesou', 'capturemet': 'capturemet', 'planimetri': 'planimetri', 'verticalac': 'verticalac', 'operationa': 'operationa', 'gauge': 'gauge', 'railwaynam': 'railwaynam', 'railontype': 'railontype', 'railwayn00': 'railwayn00', 'relevance': 'relevance', 'startdate': 'startdate', 'enddate': 'enddate', 'lastupdate': 'lastupdate', 'msoid': 'msoid', 'centroidid': 'centroidid', 'shapeuuid': 'shapeuuid', 'changetype': 'changetype', 'processsta': 'processsta', 'urbanity': 'urbanity', 'Shape__Len': 'Shape__Len', 'cadid': 'cadid', 'createdate': 'createdate', 'modifiedda': 'modifiedda', 'lganame': 'lganame', 'councilnam': 'councilnam', 'abscode': 'abscode', 'ltocode': 'ltocode', 'vgcode': 'vgcode', 'wbcode': 'wbcode', });
lyr_DPlines20210905_3.set('fieldAliases', {'fid': 'fid', 'From': 'From', 'To': 'To', 'DP count': 'DP count', 'round': 'round', 'layer': 'layer', 'path': 'path', 'length': 'length', 'Maher': 'Maher', });
lyr_roadsegmenteditable2_0.set('fieldImages', {'topoid': 'TextEdit', 'objectmodd': 'TextEdit', 'featuremod': 'TextEdit', 'classsubty': 'TextEdit', 'featurerel': 'TextEdit', 'attributer': 'TextEdit', 'capturesou': 'Range', 'capturemet': 'Range', 'planimetri': 'TextEdit', 'verticalac': 'TextEdit', 'operationa': 'Range', 'roadnameoi': 'TextEdit', 'roadnameba': 'TextEdit', 'roadnamety': 'TextEdit', 'roadnamesu': 'TextEdit', 'functionhi': 'Range', 'roadontype': 'Range', 'surface': 'Range', 'lanecount': 'Range', 'roadnameex': 'TextEdit', 'relevance': 'Range', 'startdate': 'TextEdit', 'enddate': 'TextEdit', 'lastupdate': 'TextEdit', 'msoid': 'TextEdit', 'centroidid': 'TextEdit', 'shapeuuid': 'TextEdit', 'changetype': 'TextEdit', 'processsta': 'TextEdit', 'urbanity': 'TextEdit', 'Shape__Len': 'TextEdit', 'cadid': 'TextEdit', 'createdate': 'TextEdit', 'modifiedda': 'TextEdit', 'lganame': 'TextEdit', 'councilnam': 'TextEdit', 'abscode': 'TextEdit', 'ltocode': 'TextEdit', 'vgcode': 'TextEdit', 'wbcode': 'TextEdit', });
lyr_waterfeaturecorridoreditable2_1.set('fieldImages', {'rid': 'TextEdit', 'msoid': 'TextEdit', 'waterfeatu': 'TextEdit', 'waterfea00': 'TextEdit', 'classsubty': 'TextEdit', 'startdate': 'TextEdit', 'enddate': 'TextEdit', 'lastupdate': 'TextEdit', 'lastupda00': 'TextEdit', 'centroidid': 'TextEdit', 'changetype': 'TextEdit', 'processsta': 'TextEdit', 'shapeuuid': 'TextEdit', 'urbanity': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape__Are': 'TextEdit', 'cadid': 'TextEdit', 'createdate': 'TextEdit', 'modifiedda': 'TextEdit', 'lganame': 'TextEdit', 'councilnam': 'TextEdit', 'abscode': 'TextEdit', 'ltocode': 'TextEdit', 'vgcode': 'TextEdit', 'wbcode': 'TextEdit', });
lyr_Railwayeditable2_2.set('fieldImages', {'topoid': 'TextEdit', 'objectmodd': 'TextEdit', 'featuremod': 'TextEdit', 'classsubty': 'TextEdit', 'featurerel': 'TextEdit', 'attributer': 'TextEdit', 'capturesou': 'Range', 'capturemet': 'Range', 'planimetri': 'TextEdit', 'verticalac': 'TextEdit', 'operationa': 'Range', 'gauge': 'Range', 'railwaynam': 'TextEdit', 'railontype': 'Range', 'railwayn00': 'TextEdit', 'relevance': 'Range', 'startdate': 'TextEdit', 'enddate': 'TextEdit', 'lastupdate': 'TextEdit', 'msoid': 'TextEdit', 'centroidid': 'TextEdit', 'shapeuuid': 'TextEdit', 'changetype': 'TextEdit', 'processsta': 'TextEdit', 'urbanity': 'TextEdit', 'Shape__Len': 'TextEdit', 'cadid': 'TextEdit', 'createdate': 'TextEdit', 'modifiedda': 'TextEdit', 'lganame': 'TextEdit', 'councilnam': 'TextEdit', 'abscode': 'TextEdit', 'ltocode': 'TextEdit', 'vgcode': 'TextEdit', 'wbcode': 'TextEdit', });
lyr_DPlines20210905_3.set('fieldImages', {'fid': 'TextEdit', 'From': 'TextEdit', 'To': 'TextEdit', 'DP count': 'TextEdit', 'round': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'length': 'TextEdit', 'Maher': 'TextEdit', });
lyr_roadsegmenteditable2_0.set('fieldLabels', {'topoid': 'no label', 'objectmodd': 'no label', 'featuremod': 'no label', 'classsubty': 'no label', 'featurerel': 'no label', 'attributer': 'no label', 'capturesou': 'no label', 'capturemet': 'no label', 'planimetri': 'no label', 'verticalac': 'no label', 'operationa': 'no label', 'roadnameoi': 'no label', 'roadnameba': 'no label', 'roadnamety': 'no label', 'roadnamesu': 'no label', 'functionhi': 'no label', 'roadontype': 'no label', 'surface': 'no label', 'lanecount': 'no label', 'roadnameex': 'no label', 'relevance': 'no label', 'startdate': 'no label', 'enddate': 'no label', 'lastupdate': 'no label', 'msoid': 'no label', 'centroidid': 'no label', 'shapeuuid': 'no label', 'changetype': 'no label', 'processsta': 'no label', 'urbanity': 'no label', 'Shape__Len': 'no label', 'cadid': 'no label', 'createdate': 'no label', 'modifiedda': 'no label', 'lganame': 'no label', 'councilnam': 'no label', 'abscode': 'no label', 'ltocode': 'no label', 'vgcode': 'no label', 'wbcode': 'no label', });
lyr_waterfeaturecorridoreditable2_1.set('fieldLabels', {'rid': 'no label', 'msoid': 'no label', 'waterfeatu': 'no label', 'waterfea00': 'no label', 'classsubty': 'no label', 'startdate': 'no label', 'enddate': 'no label', 'lastupdate': 'no label', 'lastupda00': 'no label', 'centroidid': 'no label', 'changetype': 'no label', 'processsta': 'no label', 'shapeuuid': 'no label', 'urbanity': 'no label', 'Shape__Len': 'no label', 'Shape__Are': 'no label', 'cadid': 'no label', 'createdate': 'no label', 'modifiedda': 'no label', 'lganame': 'no label', 'councilnam': 'no label', 'abscode': 'no label', 'ltocode': 'no label', 'vgcode': 'no label', 'wbcode': 'no label', });
lyr_Railwayeditable2_2.set('fieldLabels', {'topoid': 'no label', 'objectmodd': 'no label', 'featuremod': 'no label', 'classsubty': 'no label', 'featurerel': 'no label', 'attributer': 'no label', 'capturesou': 'no label', 'capturemet': 'no label', 'planimetri': 'no label', 'verticalac': 'no label', 'operationa': 'no label', 'gauge': 'no label', 'railwaynam': 'no label', 'railontype': 'no label', 'railwayn00': 'no label', 'relevance': 'no label', 'startdate': 'no label', 'enddate': 'no label', 'lastupdate': 'no label', 'msoid': 'no label', 'centroidid': 'no label', 'shapeuuid': 'no label', 'changetype': 'no label', 'processsta': 'no label', 'urbanity': 'no label', 'Shape__Len': 'no label', 'cadid': 'no label', 'createdate': 'no label', 'modifiedda': 'no label', 'lganame': 'no label', 'councilnam': 'no label', 'abscode': 'no label', 'ltocode': 'no label', 'vgcode': 'no label', 'wbcode': 'no label', });
lyr_DPlines20210905_3.set('fieldLabels', {'fid': 'no label', 'From': 'no label', 'To': 'no label', 'DP count': 'no label', 'round': 'no label', 'layer': 'no label', 'path': 'no label', 'length': 'no label', 'Maher': 'no label', });
lyr_DPlines20210905_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});