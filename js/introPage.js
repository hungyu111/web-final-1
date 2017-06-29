function barShow(){
  $("#barContent").toggle();
}
var config = {
  apiKey: "AIzaSyBQglfoljxESExPGE3aCB6qmqTp9_x9Yt0",
  authDomain: "web12345-58ddd.firebaseapp.com",
  databaseURL: "https://web12345-58ddd.firebaseio.com",
  projectId: "web12345-58ddd",
  storageBucket: "web12345-58ddd.appspot.com",
  messagingSenderId: "1010091396509"
};
firebase.initializeApp(config);

var db = firebase.database();
var rootRef = db.ref();
var ansNum = [];
var queNum = 1;
var queTotal;

function getQ(name, key) {
  var ref = db.ref(name).orderByKey();
  ref.once("value")
    .then(function(childSnapShot) {
      var content = childSnapShot.child(key).val().content;
      var que = childSnapShot.child(key).val().que;
      var ans = childSnapShot.child(key).val().ans;
      var a = childSnapShot.child(key).val().a;
      var b = childSnapShot.child(key).val().b;
      var c = childSnapShot.child(key).val().c;
      var d = childSnapShot.child(key).val().d;

      console.log(queTotal);

      $("#que>h3").html("Q:" + que)
      $("#A").html(a);
      $("#B").html(b);
      $("#C").html(c);
      $("#D").html(d);
      $("#content>p").html("正解:" + content);

      ansNum.push(ans);
      console.log(ansNum);
    })
}

function next(name) {
  queNum++;
  getQ(name, queNum);
  $("#next, #content").hide();
}

function checkAns(name,num) {
  $("#content").hide();
  $("#wrong").hide();
  console.log(ansNum[ansNum.length - 1]);
  if (ansNum[ansNum.length - 1] == num) {
    $("#content").show();
    nextORnot(name,queNum);
  } else {
    $("#wrong").show();
  }
}

function nextORnot(name, queNum) {
  var ref = db.ref(name).orderByKey();
  ref.once("value")
    .then(function(childSnapShot) {
      queTotal = childSnapShot.val().length - 1;
      console.log(queTotal);
      if (queNum < queTotal) {
        $("#next").show();
      }
    })
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

function changeName(name) {
  $("#foodname").html(name)

}
