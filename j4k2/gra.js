function newGame ()
{
var images = ['i1.jpg','i2.jpg','i3.jpg','i4.jpg','i5.jpg'];
var answer = [1,2,3,4,5];
var score = 0;
var gameTime = 100;
var baseURL = './img/';

display = '<img src="' + baseURL + images[0] + '"/>';
document.getElementById("question").innerHTML = display;

}
