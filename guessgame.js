var guessme=Math.round(Math.random()*(99)+1);
var speech='Guess my number (from 1 to 100)';

alert("Guess the number from 1 to 100");

function process(mystery) {

	var guess=document.forms.guessquiz.guess.value;
	var speech=' "'+guess+ '" Does not make sense to me. ';
	document.forms.guessquiz.guess.value='';

		if (guess==mystery)
		{
		document.forms.guessquiz.prompt.value='Congratulations! '+mystery+' is correct!';
		alert ('Well done - the number is '+mystery+'! \n\nPress this button to reload the page for another game.');
		speech='';
		document.location=document.location;
		}

		if (mystery<guess)
		{
		speech='Less than '+ guess;
		}

		if (mystery>guess)
		{
		speech='Greater than '+ guess;
		}

		if (guess=='')
		{
		speech='You didn\'t guess anything!'
		}

	document.forms.guessquiz.prompt.value=speech; 
	document.forms.guessquiz.guess.focus();

}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('box').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}