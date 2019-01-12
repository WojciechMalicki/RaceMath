function newGame()
{
var images = ['a1.jpg', 'I2.png', 'I3.png', 'I4.png', 'I5.png'];
var answer = [1, 2, 3, 4, 5];
var score = 0;
var gameTime = 100;
var baseURL = './zzp/';

	display = '<img src="' + baseURL + images[0] + '"/>';
	document.getElementById("question").innerHTML = display;
	console.log(display);
}
