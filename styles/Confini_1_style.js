var size = 0;
var placement = 'point';
function categories_Confini_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Courmayeur':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,239,0,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gignod':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,239,0,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'La Salle':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,239,0,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'La Thuile':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,239,0,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Morgex':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,239,0,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Valle d\'Aosta / Vallée d\'Aoste':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Confini_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("name");
    var labelFont = "19.5px \'Open Sans\', sans-serif";
    var labelFill = "#ff0000";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    
    var style = categories_Confini_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
