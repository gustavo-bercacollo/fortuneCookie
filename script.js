let listLuck = [
  "When someone is too weary to offer a smile, gift them one of yours",
  "If someone is so exhausted they cant share a smile, share yours with them.",
  "If someone is too fatigued to give a smile, offer them one of your own.",
  "When someone is too worn out to smile, lend them a smile of your own.",
  "If someone is too drained to give a smile, provide them with one from your heart",
];

let index = 0;

function reloadPage (){
  location.reload();
}

function optionNot (){
  document.querySelector(".container h2").innerText = `ok, see you tomorrow!`;

}

function openCookie() {
  //change the h1
  document.querySelector(".container h1").innerText = `here it is your luck today`;
  //change the h2
  document.querySelector(".container h2").innerText = listLuck[index];
  index++;
  //change the img
  document.querySelector('.container img').src = "./assets/opened-cookie.png";

  //show the button
  if(index == listLuck.length){
    document.querySelector(".container h2").innerText = "today's sentences are over, would you like to continue? :)"
    document.querySelector('.buttonYesNot').classList.remove('buttonYesNot')
    document.querySelector(".container h1").innerText = ``;
  }
}
