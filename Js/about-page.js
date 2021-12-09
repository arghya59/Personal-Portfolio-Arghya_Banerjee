$(document).ready(function(){

//about page (hobbie)
$('#hob1').hover(function(){
    $('.hob-prop1').hide("1000");
})
$('#hob2').hover(function(){
    $('.hob-prop2').hide("1000");
})
$('#hob3').hover(function(){
    $('.hob-prop3').hide("1000");
})




$('#hob1').mouseout(function(){
    $('.hob-prop1').show("1000");
})
$('#hob2').mouseout(function(){
    $('.hob-prop2').show("1000");
})

$('#hob3').mouseout(function(){
    $('.hob-prop3').show("1000");
})





//Footer year for copyright
function ownerName() {
    let ownname = "Arghya Banerjee"
    document.getElementById("OwnerName").innerHTML = ownname
}
ownerName()



function dateforFooter () {
    let date = new Date();
    let year = date.getFullYear();
    console.log(year)
    document.getElementById("footerDate").innerHTML = year;
    
}
dateforFooter()

});