
var fortune = [ "you will find true happiness", "a golden egg of opportunity falls into your lap this month", "nothing is impossible", "what is, and what is not, create each other", "you have many very attractive admirers.", "strong winds do not last all morning, hard rains do not last all day.", "A faithful friend is a strong defense.", "feeding a cow with roses, does not get extra appreciation.", "welcome change"];

document.getElementById("button-1").onclick = function () {
DisplayText();
};

function DisplayText () {
	var x = Math.random()*fortune.length;
	x=Math.floor(x);
	document.getElementById("output").innerHTML = fortune[x];
}
