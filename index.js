
window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        fun1();
    }
}


function reloadP()
{
  sessionStorage.setItem("reloading", "true");
  document.location.reload();

}
function fun1(){
  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1*6) + 1;

  var randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2*6) + 1;

  var name1 = "dice"+randomNumber1+".png";
  var name2 = "dice"+randomNumber2+".png";

  document.querySelector(".Player1").setAttribute("src",name1);
  document.querySelector(".Player2").setAttribute("src",name2);

  if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 1 Wins 🎉";
  }
  else if(randomNumber1<randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 2 Wins 🎉";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!!";
  }
}
