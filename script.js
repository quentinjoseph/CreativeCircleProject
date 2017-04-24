


var radInp=document.getElementById('radius');
var Area;

// Function for Area
var getArea = function(){

  var radius=radInp.value;
  Area=((radius*radius)*Math.PI)
  console.log(Math.round(Area));
  // var circle1 =
  circle();
  showRecords();

}
var circle=function(){
  var circle1=document.getElementById('circle1');
  var cdisp =document.getElementById('areaDisp');
  var tt=document.getElementById('turntable');
  var widthCircle=Area;
  var wC=widthCircle.toString()+"px";
  var heightCircle=Area;
  var hC=heightCircle.toString()+"px";
  var bRad=Area/2;
  var bR=bRad.toString()+"px";
  circle1.style.width=wC;
  circle1.style.height=hC;
  circle1.style.borderRadius=bR;


  if (widthCircle>379){
  circle1.style.display="block";
  document.getElementById('recDisp').style.display="none";
  // tt.style.display="none";
  circle1.style.marginLeft="169px";
  circle1.style.marginTop="220px";
  // document.body.style.backgroundImage = "none";
  // document.body.style.backgroundColor = "black";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
  // document.getElementById('tunesId').style.display='none';
  // document.getElementById('nowPid').style.display='none';
  }
  else if ((widthCircle>314)&&(widthCircle<379)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="169px";
  circle1.style.marginTop="203px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>254) && (widthCircle<314)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="200px";
  circle1.style.marginTop="230px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>201)&&(widthCircle<254)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="226px";
  circle1.style.marginTop="257px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>153.9)&&(widthCircle<201)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="249px";
  circle1.style.marginTop="282px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>113)&&(widthCircle<153.9)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="269px";
  circle1.style.marginTop="303px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>78)&&(widthCircle<113)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="285.5px";
  circle1.style.marginTop="318.5px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>50)&&(widthCircle<78)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="298.5px";
  circle1.style.marginTop="332px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>28)&&(widthCircle<50)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="310.5px";
  circle1.style.marginTop="342px";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>12)&&(widthCircle<28)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="318.5px";
  circle1.style.marginTop="351.5";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}else if((widthCircle>3)&&(widthCircle<12)){
  document.getElementById('recDisp').style.display="block";
  circle1.style.display="block";
  circle1.style.marginLeft="321px";
  circle1.style.marginTop="355.5";
  cdisp.innerText="The Area is approx." + (Math.round(Area));
}
}
// var widthCircle=Area;
// var heightCircle=Area;
// var bRad=Area/2;

// var circle1 = document.getElementById('circle1');
// circle1.style.width=widthCircle;
// circle1.style.height=heightCircle;
// circle1.style.borderRadius=bRad;


// Function that shows records, changes backgrounds, and shows audio controllers
var showRecords=function(){

// hides audio controllers
  var pfunc2 = function(){
  var playClass = document.getElementsByClassName("player");
    for (i = 0; i < playClass.length; i++) {
      playClass[i].style.display = 'none';}
  }
  pfunc2();
// hides record images.
  var hideRecord = function(){
  var jvRecordPic = document.getElementsByClassName("recPic");
    for (i = 0; i < jvRecordPic.length; i++) {
      jvRecordPic[i].style.display = 'none';}
  }
  hideRecord();

// what happens after input
  if ((Math.round(Area)>=314)&&(Math.round(Area)<380)){
document.getElementById('record').style.display = 'block';
document.getElementById('record').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/mj1.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("player");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if (Math.round(Area)>=254 && Math.round(Area)<314){
document.getElementById('record9').style.display = 'block';
document.getElementById('record9').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/jb1.jpg')";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p9");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();

}
else if (Math.round(Area)>=201 && Math.round(Area)<254){
document.getElementById('record8').style.display = 'block';
document.getElementById('record8').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/prince.jpg')";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p8");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if ((Math.round(Area)>=154) && (Math.round(Area)<201) ){
document.getElementById('record07').style.display = 'block';
document.getElementById('record07').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/lz.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p7");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if (Math.round(Area)>=113 && Math.round(Area)<154){
document.getElementById('record6').style.display = 'block';
document.getElementById('record6').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/ewf.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
document.getElementById('pColor').style.color = "orange";
var pfunc = function(){
var playClass = document.getElementsByClassName("p6");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if (Math.round(Area)>=79 && Math.round(Area)<113){
document.getElementById('record5').style.display = 'block';
document.getElementById('record5').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/katg.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p5");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if (Math.round(Area)>=50 && Math.round(Area)<79){
document.getElementById('record4').style.display = 'block';
document.getElementById('record4').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/sly.jpg')";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p4");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if (Math.round(Area)>=28 && Math.round(Area)<50){
document.getElementById('record3').style.display = 'block';
document.getElementById('record3').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/ojays.jpg')";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p3");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if (Math.round(Area)>=13 && Math.round(Area)<28){
document.getElementById('record2').style.display = 'block';
document.getElementById('record2').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/whispers.jpg')";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p2");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
else if (Math.round(Area)>=3 && Math.round(Area)<13){
document.getElementById('record1').style.display = 'block';
document.getElementById('record1').style.animationName = "spin";
document.body.style.backgroundImage = "url('images/af.jpg')";
document.getElementById('pColor').style.color = "white";
var pfunc = function(){
var playClass = document.getElementsByClassName("p1");
  for (i = 0; i < playClass.length; i++) {
    playClass[i].style.display = 'block';
  }
}
pfunc();
}
}
// one song at a time
document.addEventListener('play', function(q){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != q.target){
            audios[i].pause();
        }
    }
}, true);
//


// Now Playing functions
var nowPlay10 = function(){
document.getElementById('np10').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/mj1.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
}
var nowPlay9 = function(){
document.getElementById('np9').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/jb1.jpg')";
}
var nowPlay8 = function(){
document.getElementById('np8').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/prince.jpg')";
}
var nowPlay7 = function(){
document.getElementById('np7').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/lz.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
}
var nowPlay6 = function(){
document.getElementById('np6').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/ewf.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
}
var nowPlay5 = function(){
document.getElementById('np5').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/katg.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
}
var nowPlay4 = function(){
document.getElementById('np4').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/sly.jpg')";
}
var nowPlay3 = function(){
document.getElementById('np3').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/ojays.jpg')";
}
var nowPlay2 = function(){
document.getElementById('np2').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/whispers.jpg')";
}
var nowPlay1 = function(){
document.getElementById('np1').style.display="block";
document.getElementById('nowPid').style.opacity="1";
document.body.style.backgroundImage = "url('images/af.jpg')";
}

// NowPlaying Pause Function
var nowPause10 = function(){
  document.getElementById('np10').style.display="none";
}
var nowPause9 = function(){
  document.getElementById('np9').style.display="none";
}
var nowPause8 = function(){
  document.getElementById('np8').style.display="none";
}
var nowPause7 = function(){
  document.getElementById('np7').style.display="none";
}
var nowPause6 = function(){
  document.getElementById('np6').style.display="none";
}
var nowPause5 = function(){
  document.getElementById('np5').style.display="none";
}
var nowPause4 = function(){
  document.getElementById('np4').style.display="none";
}
var nowPause3 = function(){
  document.getElementById('np3').style.display="none";
}
var nowPause2 = function(){
  document.getElementById('np2').style.display="none";
}
var nowPause1 = function(){
  document.getElementById('np1').style.display="none";
}
