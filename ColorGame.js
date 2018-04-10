var arrCol = [
" rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var randomColor = randomSelectColor();

document.querySelector("#spanCol").textContent = randomColor;
var msg = document.querySelector("#msg");


for(var i = 0; i < squares.length; i++ )
{
    squares[i].style.background = arrCol[i];
    squares[i].addEventListener("click",function(){
      var pickedCol = this.style.background;
    
      if(pickedCol === randomColor)
      {
          alert("Correct");
          changeSquareColors();
      }
      else{
        msg.textContent = "Try Again!"
        this.style.background = "#232323";
      }
    }); 
}

function changeSquareColors()
{
   for(var i = 0; i< squares.length; i++)
   { 
      squares[i].style.background = randomColor;
   }
}

function randomSelectColor(){

     return arrCol[Math.floor(Math.random() * arrCol.length )];
}

//Generate color array
function generateColorArray(val){
    var arr = [];
    for(var i = 0; i<val; i++)
    {
      arr[i] = randomColGen();

    }
    return arr;
}

function randomColGen(){
    //r
    var r = Math.floor(Math.random() * 256);
    //g
    var g = Math.floor(Math.random() * 256);
    //b
    var b = Math.floor(Math.random() * 256);
} 