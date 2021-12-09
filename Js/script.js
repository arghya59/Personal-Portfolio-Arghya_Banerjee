$(document).ready(function(){

    //Scroll Functions
    $(window).scroll(function () {
        if (this.scrollY > 20) {
           $('.navbar').addClass("sticky") ;
        }
        else{
            $('.navbar').removeClass("sticky") ;
        }
        if (this.scrollY > 500) {
            $('.arrow').addClass("show") ;
        }
        else{
            $('.arrow').removeClass("show") ;
        }
    })

    //Slide up Button                         
    $('.arrow').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //Hamburger Menu
$('.hamburger-menu').click(function () {
    $('#nav-menu').toggleClass("active");
    $('.hamburger-menu i').toggleClass("active");
});

//Sliding Text 1
    var typed = new Typed(".Typing",{
        strings : ["Web Developer" , "Programmer", "Youtuber" , "Guitarist" , "Designer" , "Gamer" , "Freelancer"],
        typeSpeed : 70,
        backSpeed : 50,
        loop : true
    });    
//Sliding Text 2
var typed = new Typed(".Typing-2",{
    strings : ["Web Developer" , "Programmer", "Youtuber" , "Gamer" , "Designer" , "Guitarist" , "Freelancer"],
    typeSpeed : 70,
    backSpeed : 50,
    loop : true
});

//Hiring Department
$('#HireMe').click(function(){
         window.prompt("Thank You for Hiring me , Please Enter Your Ph No.");
         window.alert("Thank you , I'll reach you very soon");
})
//Slide More Part
$('#Slidemore').click(function(){
   
    $('#slide-toggle-read-more').slideDown("slow");
        $('#Slidemore').hide();
        $('#Slideless').show("slow");
    
        
})

$('#Slideless').click(function(){
    $('#slide-toggle-read-more').slideUp("slow");
    $('#Slideless').hide();
    $('#Slidemore').show("slow");

});

//For scale in gallery section...
/*
    $('.img-card1').click(function(){
        $('.img-card1').addClass("scale")
    })
*/


//Footer year for copyright
function ownerName() {
    let ownname = "Arghya Banerjee"
    document.getElementById("OwnerName").innerHTML = ownname
}
ownerName()



function dateforFooter () {
    let date = new Date();
    let year = date.getFullYear();
    //console.log(year)
    document.getElementById("footerDate").innerHTML = year;
    
}
dateforFooter()



   
//validation For Submit
function validation() {

    var inputFirstname = document.forms['form1']['text1'].value
    console.log(inputFirstname)
    var inputSecondname = document.forms['form1']['text2'].value
    console.log(inputSecondname)
    var inputEmail = document.forms['form1']['Email'].value
    console.log(inputEmail)

    if (inputFirstname=="" && inputSecondname=="" && inputEmail==""){
        window.alert("Please Enter the necessary values")
        return false
    } 
    
    else{
       
        window.alert("Thank you for your Valuable Feedback")
        return true
        
    }
      
}




});


