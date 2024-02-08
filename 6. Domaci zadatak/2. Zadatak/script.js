
let title = document.getElementById("myTitle");
title.innerHTML = "This is new Title";

let div = document.getElementsByTagName("div");
let div2 = div[div.length - 1];
let text = document.querySelector("text");
text.innerHTML = "This is some new Text";
let h1 = div2.querySelector("h1");
h1.innerHTML = "This is new H1";
let h3 = div2.querySelector("h3");
h3.innerHTML = "This is new h3";

let paragraphs = document.getElementsByClassName("paragraph");
let firstParagraph = paragraphs[0];
firstParagraph.innerHTML = "This is new firs Paragraph";
let secondParagraph = paragraphs[1];
secondParagraph.innerHTML = "This is new second Paragraph";

