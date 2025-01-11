let colorVal
// elementID and eType (element type) are both inputted as strings, tick is the time in ms between each color frame and should be an integer, e.g, randomRGB("titleFont","weight",10)
function randomRGB(elementID,eType,tick) {
setInterval(function () {
    colorVal = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")"
    document.getElementById(elementID).style[eType] = colorVal
    //console.log(document.getElementById(elementID).style.eType);
    
}, tick);
};
