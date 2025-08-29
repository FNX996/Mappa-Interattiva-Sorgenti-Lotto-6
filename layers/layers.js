var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Confini_1 = new ol.format.GeoJSON();
var features_Confini_1 = format_Confini_1.readFeatures(json_Confini_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confini_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confini_1.addFeatures(features_Confini_1);
var lyr_Confini_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Confini_1, 
                style: style_Confini_1,
                popuplayertitle: 'Confini',
                interactive: false,
    title: 'Confini<br />\
    <img src="styles/legend/Confini_1_0.png" /> Courmayeur<br />\
    <img src="styles/legend/Confini_1_1.png" /> Gignod<br />\
    <img src="styles/legend/Confini_1_2.png" /> La Salle<br />\
    <img src="styles/legend/Confini_1_3.png" /> La Thuile<br />\
    <img src="styles/legend/Confini_1_4.png" /> Morgex<br />\
    <img src="styles/legend/Confini_1_5.png" /> Valle d\'Aosta / Vallée d\'Aoste<br />' });
var format_BacinoDora_2 = new ol.format.GeoJSON();
var features_BacinoDora_2 = format_BacinoDora_2.readFeatures(json_BacinoDora_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BacinoDora_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BacinoDora_2.addFeatures(features_BacinoDora_2);
var lyr_BacinoDora_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BacinoDora_2, 
                style: style_BacinoDora_2,
                popuplayertitle: 'Bacino Dora',
                interactive: true,
                title: '<img src="styles/legend/BacinoDora_2.png" /> Bacino Dora'
            });
var format_BaciniSecondari_3 = new ol.format.GeoJSON();
var features_BaciniSecondari_3 = format_BaciniSecondari_3.readFeatures(json_BaciniSecondari_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciniSecondari_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciniSecondari_3.addFeatures(features_BaciniSecondari_3);
var lyr_BaciniSecondari_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciniSecondari_3, 
                style: style_BaciniSecondari_3,
                popuplayertitle: 'Bacini Secondari',
                interactive: true,
                title: '<img src="styles/legend/BaciniSecondari_3.png" /> Bacini Secondari'
            });
var format_BaciniPrincipali_4 = new ol.format.GeoJSON();
var features_BaciniPrincipali_4 = format_BaciniPrincipali_4.readFeatures(json_BaciniPrincipali_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciniPrincipali_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciniPrincipali_4.addFeatures(features_BaciniPrincipali_4);
var lyr_BaciniPrincipali_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciniPrincipali_4, 
                style: style_BaciniPrincipali_4,
                popuplayertitle: 'Bacini Principali',
                interactive: true,
                title: '<img src="styles/legend/BaciniPrincipali_4.png" /> Bacini Principali'
            });
var format_Laghi_5 = new ol.format.GeoJSON();
var features_Laghi_5 = format_Laghi_5.readFeatures(json_Laghi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laghi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laghi_5.addFeatures(features_Laghi_5);
var lyr_Laghi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laghi_5, 
                style: style_Laghi_5,
                popuplayertitle: 'Laghi',
                interactive: true,
    title: 'Laghi<br />\
    <img src="styles/legend/Laghi_5_0.png" /> Laghi attuali<br />\
    <img src="styles/legend/Laghi_5_1.png" /> Laghi storici<br />' });
var format_IdrografiaLineare_6 = new ol.format.GeoJSON();
var features_IdrografiaLineare_6 = format_IdrografiaLineare_6.readFeatures(json_IdrografiaLineare_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdrografiaLineare_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdrografiaLineare_6.addFeatures(features_IdrografiaLineare_6);
var lyr_IdrografiaLineare_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdrografiaLineare_6, 
                style: style_IdrografiaLineare_6,
                popuplayertitle: 'Idrografia Lineare',
                interactive: true,
    title: 'Idrografia Lineare<br />\
    <img src="styles/legend/IdrografiaLineare_6_0.png" /> Principale<br />\
    <img src="styles/legend/IdrografiaLineare_6_1.png" /> Secondaria<br />' });
var format_TutelaCaptazioni_7 = new ol.format.GeoJSON();
var features_TutelaCaptazioni_7 = format_TutelaCaptazioni_7.readFeatures(json_TutelaCaptazioni_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TutelaCaptazioni_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TutelaCaptazioni_7.addFeatures(features_TutelaCaptazioni_7);
var lyr_TutelaCaptazioni_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TutelaCaptazioni_7,
maxResolution:28.004746196923488,
 
                style: style_TutelaCaptazioni_7,
                popuplayertitle: 'Tutela Captazioni',
                interactive: true,
    title: 'Tutela Captazioni<br />\
    <img src="styles/legend/TutelaCaptazioni_7_0.png" /> ZP - zone di protezione<br />\
    <img src="styles/legend/TutelaCaptazioni_7_1.png" /> ZR - zone di rispetto<br />\
    <img src="styles/legend/TutelaCaptazioni_7_2.png" /> ZTA - zone di tutela assoluta<br />' });
var format_Sorgenti_8 = new ol.format.GeoJSON();
var features_Sorgenti_8 = format_Sorgenti_8.readFeatures(json_Sorgenti_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sorgenti_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sorgenti_8.addFeatures(features_Sorgenti_8);
cluster_Sorgenti_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Sorgenti_8
});
var lyr_Sorgenti_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Sorgenti_8, 
                style: style_Sorgenti_8,
                popuplayertitle: 'Sorgenti',
                interactive: true,
    title: 'Sorgenti<br />\
    <img src="styles/legend/Sorgenti_8_0.png" /> Courmayeur<br />\
    <img src="styles/legend/Sorgenti_8_1.png" /> Gignod<br />\
    <img src="styles/legend/Sorgenti_8_2.png" /> La Salle<br />\
    <img src="styles/legend/Sorgenti_8_3.png" /> La Thuile<br />\
    <img src="styles/legend/Sorgenti_8_4.png" /> Morgex<br />' });
var group_Idrografia = new ol.layer.Group({
                                layers: [lyr_BacinoDora_2,lyr_BaciniSecondari_3,lyr_BaciniPrincipali_4,lyr_Laghi_5,lyr_IdrografiaLineare_6,],
                                fold: 'open',
                                title: 'Idrografia'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Confini_1.setVisible(true);lyr_BacinoDora_2.setVisible(true);lyr_BaciniSecondari_3.setVisible(true);lyr_BaciniPrincipali_4.setVisible(true);lyr_Laghi_5.setVisible(true);lyr_IdrografiaLineare_6.setVisible(true);lyr_TutelaCaptazioni_7.setVisible(true);lyr_Sorgenti_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Confini_1,group_Idrografia,lyr_TutelaCaptazioni_7,lyr_Sorgenti_8];
lyr_Confini_1.set('fieldAliases', {'ISO3166-2': 'ISO3166-2', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'name': 'name', 'name_ar': 'name_ar', 'name_azb': 'name_azb', 'name_br': 'name_br', 'name_ca': 'name_ca', 'name_cs': 'name_cs', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fa': 'name_fa', 'name_fi': 'name_fi', 'name_fr': 'name_fr', 'name_hu': 'name_hu', 'name_is': 'name_is', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ks': 'name_ks', 'name_mzn': 'name_mzn', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pnb': 'name_pnb', 'name_ro': 'name_ro', 'name_ru': 'name_ru', 'name_sc': 'name_sc', 'name_scn': 'name_scn', 'name_sl': 'name_sl', 'name_ur': 'name_ur', 'note': 'note', 'official_n': 'official_n', 'official_1': 'official_1', 'population': 'population', 'populati_1': 'populati_1', 'ref_ISTAT': 'ref_ISTAT', 'ref_nuts': 'ref_nuts', 'ref_nuts_2': 'ref_nuts_2', 'ref_nuts_3': 'ref_nuts_3', 'short_name': 'short_name', 'source_nam': 'source_nam', 'type': 'type', 'wikidata': 'wikidata', 'wikimedia_': 'wikimedia_', 'wikipedia': 'wikipedia', 'name_frp': 'name_frp', 'ref_catast': 'ref_catast', });
lyr_BacinoDora_2.set('fieldAliases', {'Id': 'Id', });
lyr_BaciniSecondari_3.set('fieldAliases', {'c_bacino': 'c_bacino', 'c_sbacino': 'c_sbacino', 'descriz': 'descriz', 'h_media': 'h_media', 'h_chiusura': 'h_chiusura', 'q_nat': 'q_nat', 'v_nat': 'v_nat', 'sup_tot': 'sup_tot', 'sup_glaci': 'sup_glaci', 'sup_irrig': 'sup_irrig', 'mista': 'mista', 'pascolo': 'pascolo', 'prato': 'prato', 'istrut': 'istrut', 'perimetro': 'perimetro', });
lyr_BaciniPrincipali_4.set('fieldAliases', {'descriz': 'descriz', 'c_bacino': 'c_bacino', 'perimetro': 'perimetro', });
lyr_Laghi_5.set('fieldAliases', {'objectid': 'objectid', 'codcom': 'codcom', 'nome_sct': 'nome_sct', 'tipo_lago': 'tipo_lago', 'quota': 'quota', 'origine_sc': 'origine_sc', 'fonte': 'fonte', 'storico': 'storico', 'data': 'data', 'codice_arp': 'codice_arp', 'comune': 'comune', 'nome_arpa': 'nome_arpa', 'data_arpa': 'data_arpa', 'tavoletta': 'tavoletta', 'area_reale': 'area_reale', 'bacino_imb': 'bacino_imb', 'immissario': 'immissario', 'emissario': 'emissario', 'origine_ar': 'origine_ar', 'vegetazion': 'vegetazion', 'fauna': 'fauna', 'note': 'note', 'orientamen': 'orientamen', });
lyr_IdrografiaLineare_6.set('fieldAliases', {'ordine': 'ordine', 'tipol': 'tipol', 'dir_flusso': 'dir_flusso', 'cod_sibapo': 'cod_sibapo', 'llpp': 'llpp', 'codice': 'codice', 'cod_siba_1': 'cod_siba_1', 'z_ini': 'z_ini', 'z_fin': 'z_fin', 'nome': 'nome', 'num_archi': 'num_archi', 'lung_tot': 'lung_tot', 'tratto': 'tratto', 'pendenz_m': 'pendenz_m', 'denbacpri': 'denbacpri', 'codbacpri': 'codbacpri', 'denbacsec': 'denbacsec', 'codbacsec': 'codbacsec', 'principale': 'principale', 'lung_geom': 'lung_geom', 'st_length_': 'st_length_', });
lyr_TutelaCaptazioni_7.set('fieldAliases', {'codcom': 'codcom', 'tipo': 'tipo', 'num_dgr': 'num_dgr', 'num_dcc': 'num_dcc', 'data_dgr': 'data_dgr', 'data_dcc': 'data_dcc', 'variante': 'variante', 'belfiore': 'belfiore', 'valutazion': 'valutazion', 'idsct': 'idsct', 'num_var': 'num_var', 'data_var': 'data_var', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Sorgenti_8.set('fieldAliases', {'Comune': 'Comune', 'Ambito': 'Ambito', 'Denominazi': 'Denominazi', 'Localit�': 'Localit�', 'X': 'X', 'Y': 'Y', 'Altitudine': 'Altitudine', 'Foto': 'Foto', });
lyr_Confini_1.set('fieldImages', {'ISO3166-2': 'TextEdit', 'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_azb': 'TextEdit', 'name_br': 'TextEdit', 'name_ca': 'TextEdit', 'name_cs': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fa': 'TextEdit', 'name_fi': 'TextEdit', 'name_fr': 'TextEdit', 'name_hu': 'TextEdit', 'name_is': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ks': 'TextEdit', 'name_mzn': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pnb': 'TextEdit', 'name_ro': 'TextEdit', 'name_ru': 'TextEdit', 'name_sc': 'TextEdit', 'name_scn': 'TextEdit', 'name_sl': 'TextEdit', 'name_ur': 'TextEdit', 'note': 'TextEdit', 'official_n': 'TextEdit', 'official_1': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'ref_ISTAT': 'TextEdit', 'ref_nuts': 'TextEdit', 'ref_nuts_2': 'TextEdit', 'ref_nuts_3': 'TextEdit', 'short_name': 'TextEdit', 'source_nam': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikipedia': 'TextEdit', 'name_frp': 'TextEdit', 'ref_catast': 'TextEdit', });
lyr_BacinoDora_2.set('fieldImages', {'Id': '', });
lyr_BaciniSecondari_3.set('fieldImages', {'c_bacino': '', 'c_sbacino': '', 'descriz': '', 'h_media': '', 'h_chiusura': '', 'q_nat': '', 'v_nat': '', 'sup_tot': '', 'sup_glaci': '', 'sup_irrig': '', 'mista': '', 'pascolo': '', 'prato': '', 'istrut': '', 'perimetro': '', });
lyr_BaciniPrincipali_4.set('fieldImages', {'descriz': '', 'c_bacino': '', 'perimetro': '', });
lyr_Laghi_5.set('fieldImages', {'objectid': 'Range', 'codcom': 'TextEdit', 'nome_sct': 'TextEdit', 'tipo_lago': 'TextEdit', 'quota': 'TextEdit', 'origine_sc': 'TextEdit', 'fonte': 'TextEdit', 'storico': 'TextEdit', 'data': 'TextEdit', 'codice_arp': 'TextEdit', 'comune': 'TextEdit', 'nome_arpa': 'TextEdit', 'data_arpa': 'TextEdit', 'tavoletta': 'TextEdit', 'area_reale': 'TextEdit', 'bacino_imb': 'TextEdit', 'immissario': 'TextEdit', 'emissario': 'TextEdit', 'origine_ar': 'TextEdit', 'vegetazion': 'TextEdit', 'fauna': 'TextEdit', 'note': 'TextEdit', 'orientamen': 'TextEdit', });
lyr_IdrografiaLineare_6.set('fieldImages', {'ordine': 'Range', 'tipol': 'Range', 'dir_flusso': 'Range', 'cod_sibapo': 'TextEdit', 'llpp': 'Range', 'codice': 'TextEdit', 'cod_siba_1': 'TextEdit', 'z_ini': 'TextEdit', 'z_fin': 'TextEdit', 'nome': 'TextEdit', 'num_archi': 'TextEdit', 'lung_tot': 'TextEdit', 'tratto': 'TextEdit', 'pendenz_m': 'TextEdit', 'denbacpri': 'TextEdit', 'codbacpri': 'TextEdit', 'denbacsec': 'TextEdit', 'codbacsec': 'TextEdit', 'principale': 'Range', 'lung_geom': '', 'st_length_': '', });
lyr_TutelaCaptazioni_7.set('fieldImages', {'codcom': 'TextEdit', 'tipo': 'TextEdit', 'num_dgr': 'TextEdit', 'num_dcc': 'TextEdit', 'data_dgr': 'TextEdit', 'data_dcc': 'TextEdit', 'variante': 'TextEdit', 'belfiore': 'TextEdit', 'valutazion': 'TextEdit', 'idsct': 'TextEdit', 'num_var': 'TextEdit', 'data_var': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Sorgenti_8.set('fieldImages', {'Comune': 'TextEdit', 'Ambito': 'TextEdit', 'Denominazi': 'TextEdit', 'Localit�': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Altitudine': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Confini_1.set('fieldLabels', {'ISO3166-2': 'hidden field', 'admin_leve': 'hidden field', 'boundary': 'hidden field', 'name': 'hidden field', 'name_ar': 'hidden field', 'name_azb': 'hidden field', 'name_br': 'hidden field', 'name_ca': 'hidden field', 'name_cs': 'hidden field', 'name_de': 'hidden field', 'name_en': 'hidden field', 'name_es': 'hidden field', 'name_fa': 'hidden field', 'name_fi': 'hidden field', 'name_fr': 'hidden field', 'name_hu': 'hidden field', 'name_is': 'hidden field', 'name_it': 'hidden field', 'name_ja': 'hidden field', 'name_ks': 'hidden field', 'name_mzn': 'hidden field', 'name_nl': 'hidden field', 'name_pl': 'hidden field', 'name_pnb': 'hidden field', 'name_ro': 'hidden field', 'name_ru': 'hidden field', 'name_sc': 'hidden field', 'name_scn': 'hidden field', 'name_sl': 'hidden field', 'name_ur': 'hidden field', 'note': 'hidden field', 'official_n': 'hidden field', 'official_1': 'hidden field', 'population': 'hidden field', 'populati_1': 'hidden field', 'ref_ISTAT': 'hidden field', 'ref_nuts': 'hidden field', 'ref_nuts_2': 'hidden field', 'ref_nuts_3': 'hidden field', 'short_name': 'hidden field', 'source_nam': 'hidden field', 'type': 'hidden field', 'wikidata': 'hidden field', 'wikimedia_': 'hidden field', 'wikipedia': 'hidden field', 'name_frp': 'hidden field', 'ref_catast': 'hidden field', });
lyr_BacinoDora_2.set('fieldLabels', {'Id': 'hidden field', });
lyr_BaciniSecondari_3.set('fieldLabels', {'c_bacino': 'hidden field', 'c_sbacino': 'hidden field', 'descriz': 'header label - visible with data', 'h_media': 'hidden field', 'h_chiusura': 'hidden field', 'q_nat': 'hidden field', 'v_nat': 'hidden field', 'sup_tot': 'hidden field', 'sup_glaci': 'hidden field', 'sup_irrig': 'hidden field', 'mista': 'hidden field', 'pascolo': 'hidden field', 'prato': 'hidden field', 'istrut': 'hidden field', 'perimetro': 'hidden field', });
lyr_BaciniPrincipali_4.set('fieldLabels', {'descriz': 'header label - visible with data', 'c_bacino': 'hidden field', 'perimetro': 'hidden field', });
lyr_Laghi_5.set('fieldLabels', {'objectid': 'hidden field', 'codcom': 'hidden field', 'nome_sct': 'header label - visible with data', 'tipo_lago': 'hidden field', 'quota': 'hidden field', 'origine_sc': 'hidden field', 'fonte': 'hidden field', 'storico': 'hidden field', 'data': 'hidden field', 'codice_arp': 'hidden field', 'comune': 'hidden field', 'nome_arpa': 'hidden field', 'data_arpa': 'hidden field', 'tavoletta': 'hidden field', 'area_reale': 'hidden field', 'bacino_imb': 'hidden field', 'immissario': 'hidden field', 'emissario': 'hidden field', 'origine_ar': 'hidden field', 'vegetazion': 'hidden field', 'fauna': 'hidden field', 'note': 'hidden field', 'orientamen': 'hidden field', });
lyr_IdrografiaLineare_6.set('fieldLabels', {'ordine': 'hidden field', 'tipol': 'hidden field', 'dir_flusso': 'hidden field', 'cod_sibapo': 'hidden field', 'llpp': 'hidden field', 'codice': 'hidden field', 'cod_siba_1': 'hidden field', 'z_ini': 'hidden field', 'z_fin': 'hidden field', 'nome': 'header label - visible with data', 'num_archi': 'hidden field', 'lung_tot': 'hidden field', 'tratto': 'hidden field', 'pendenz_m': 'hidden field', 'denbacpri': 'hidden field', 'codbacpri': 'hidden field', 'denbacsec': 'hidden field', 'codbacsec': 'hidden field', 'principale': 'hidden field', 'lung_geom': 'hidden field', 'st_length_': 'hidden field', });
lyr_TutelaCaptazioni_7.set('fieldLabels', {'codcom': 'hidden field', 'tipo': 'header label - visible with data', 'num_dgr': 'hidden field', 'num_dcc': 'hidden field', 'data_dgr': 'hidden field', 'data_dcc': 'hidden field', 'variante': 'hidden field', 'belfiore': 'hidden field', 'valutazion': 'hidden field', 'idsct': 'hidden field', 'num_var': 'hidden field', 'data_var': 'hidden field', 'st_area_sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_Sorgenti_8.set('fieldLabels', {'Comune': 'header label - visible with data', 'Ambito': 'hidden field', 'Denominazi': 'header label - visible with data', 'Localit�': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Altitudine': 'hidden field', 'Foto': 'header label - visible with data', });
lyr_Sorgenti_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});