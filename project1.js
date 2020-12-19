var list = ["ali","baba","da","marat","write code","marat"];
var content="";

list.forEach((item, i) => {
  content+="<li>"+item+"</li>";
});


var olList = document.getElementById('listName');
olList.innerHTML += content;

function createTable() {
  var  x = document.getElementById('columns').value;
    alert(x);
}
