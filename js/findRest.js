showRest("ThaiRest");
function showRest(name){
  $("article").hide();
  $("#"+name).show();
  $("#"+name+">div:even").addClass("left-box");
  $("#"+name+">div:odd").addClass("right-box");
}
function barShow(){
  $("#barContent").toggle();
}
