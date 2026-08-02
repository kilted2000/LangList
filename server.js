const express = require('express');
const app = express();
const port = 3000;

let langList = ['javascript', 'typescript', 'java', 'golang', 'python'];

app.get('/', (req, res) => {
  //google to see if I am on the right track
  res.send("hello world again")
  document.getElementById('lang').addEventListener("click", langItem)
  function langItem(){
    for(let i = 0;i <= langList.length;i++){
     document.getElementById('list').innerHTML = `<li>${langList[i]}</li>`
     console.log("hello rag!")
  }}
});

app.post('/', (req, res) => {

  res.send('Hello World!');
});

app.delete('/', (req, res) => {
  res.send('Goodbye World!');
});

//user inputs lang name into input box
//user clicks btn to submit
//lang is displayed in OL
  //langs held in array
  //for loop maps items in array
//OL LI has edit and delete btns
//user can delete or edit entries



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});