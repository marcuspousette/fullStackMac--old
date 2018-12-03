import "./welcome.html";

Template.welcome.onCreated( () => {

});

Template.welcome.onRendered( () => {
  if ($(window).width() >= 1000){
    setTimeout(()=>{
      $(".welcome-text").animate({opacity: 1},"slow");
    }, 1800);
	}else{
    $(".welcome-text").animate({opacity: 1},1800);
  }

});

Template.welcome.helpers({

});

Template.welcome.events({

});
