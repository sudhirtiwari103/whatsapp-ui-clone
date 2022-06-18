// var clicked =0;
$("#menu").on("click", function () {
	// clicked =0;
  document.querySelector(".show-menu").style.display = "block";
  // clicked++;
});
// if(cliked!=0){
// 	$("#menu").on("click", function () {
	
//   document.querySelector(".show-menu").style.display = "none";
// });
// }

//  if(document.getElementById('menu').clicked == true)
// {
   
// $("#menu").on("click", function () {
	
//   document.querySelector(".show-menu").style.display = "none";
// });
 if(document.getElementById('menu').clicked == true)
{
   
$("body").on("click", function () {
	
  document.querySelector(".show-menu").style.display = "none";
});

}