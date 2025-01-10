let colorVal
// elementID and eType (element type) are both inputted as strings, e.g, randomRGB("titleFont","weight")
function randomRGB(elementID,eType) {
setInterval(function () {
    colorVal = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")"
    document.getElementById(elementID).style[eType] = colorVal
    //console.log(document.getElementById(elementID).style.eType);
    
}, 2);
};
