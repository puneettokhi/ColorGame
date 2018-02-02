// var colors = ["rgb(255, 0, 0)",
// 			"rgb(255, 255, 0)",
// 			"rgb(0, 255, 0)",
// 			"rgb(0, 255, 255)",
// 			"rgb(0, 0, 255)",
// 			"rgb(255, 0, 255)"
// 	]

var numSquares  = 6;

// var colors = generateRandomColors(6);
var colors = [];
var h1 = document.querySelector("h1");
// var pickedColor = pickColor();

var pickedColor;

var squares = document.querySelectorAll(".square");


var colorDisplay = document.getElementById("colorDisplay");

var messageDisplayed = document.querySelector("#message");

var resetButton = document.querySelector("#reset");

// var easyBtn = document.querySelector("#easyBtn");

// var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	// mode buttons event listeners

	setUpmodeButtons()

	setupSqueares();

	reset();
}



function reset(){
	
	// var send = new Audio("wow.mp3");
	// send.play();


	messageDisplayed.textContent = "";
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();

	// change color display to match picked color

	colorDisplay.textContent = pickedColor;


	for(var i =0; i< squares.length; i++){

		if(colors[i]){

		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];

		}
		else{

		squares[i].style.display = "none";

		}
	}


	h1.style.backgroundColor = "steelblue";
}

// var numSquares = 6;
// easyBtn.addEventListener("click",function(){

// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i =0; i < squares.length; i++){

// 		if(colors[i]){
// 		squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// })

// hardBtn.addEventListener("click",function(){

// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// 	numSquares = 6

// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i =0; i < squares.length; i++){

// 		squares[i].style.backgroundColor = colors[i];

// 		squares[i].style.display = "block";
// 	}
	
// })






resetButton.addEventListener("click",function(){

	reset();
})


colorDisplay.textContent = pickedColor;

function setupSqueares(){

	for(var i =0; i< squares.length; i++){


	// add initial colors to squares
//	squares[i].style.backgroundColor = colors[i];


	// add click listeners to squares
	
	squares[i].addEventListener("click",function(){


		var clickedColor = this.style.backgroundColor;
		

			if(clickedColor === pickedColor){

				messageDisplayed.textContent = "Correct";
				changeColors(clickedColor);

				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";


			} 
			else{
				this.style.backgroundColor = "#232323";
				messageDisplayed.textContent = "Try Again";
			}

		});

	}

}

function setUpmodeButtons(){

	
	for(var i = 0; i < modeButtons.length;i++){

		modeButtons[i].addEventListener("click",function(){

		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		
		reset();


		});
	}

}


function changeColors(color){

for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = color;

	}
}

function pickColor(){

	var random = Math.floor(Math.random() * colors.length);

	return colors[random];

}

function generateRandomColors(num){
	// make an array
	var arr = [];

	// repeat num times
	for(var i = 0; i < num; i++){

		arr[i] = randomColor();
		// arr.push(randomColor());
	}	
	// return the array
	return arr;
}

function randomColor(){

	// pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);

	// pick a green from 0 to 255
	var green = Math.floor(Math.random() * 256);

	// pick a green from 0 to 255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

