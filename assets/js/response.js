const messageBox = document.querySelector(".message")

const searchUrl = location.search;

const searchParams = new URLSearchParams(searchUrl);

const userName = searchParams.get('name');

document.querySelector("body").style.backgroundColor = "lightgreen"

messageBox.textContent = `Welcome, ${userName}! You have signed in successfuly`


