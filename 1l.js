// $(document).ready(function(){
//     $(".p1").hide();
//     $("#menu").hide();
// });
//
//
// $(".p1").click(function(){
//     $(this).hide();
// });
//
// $("#btn").click(function(){
//   $("p").show();
// });
//
// $("#menuBtn").click(function(){
//     $("#menu").slideToggle();
// });
var cuvint,numarul;
$("#txt").click(function(){
  cuvint = $("#input1").val();
  numarul = $("#input2").val();
  var stringu='';
  for(var i=0;i<=numarul;i++){
    stringu+="<h3>"+cuvint+"</h3>";
  }
  alert(stringu);
  $("#txt").html(stringu);
});
