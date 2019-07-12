import "./welcome.html";
import "./welcome.css";


Template.welcome.onCreated( () => {
});

Template.welcome.onRendered( () => {
  var template = Template.instance();
  template.scrollValue = new ReactiveVar(1);

  if ($(window).width() >= 1000){
    setTimeout(()=>{
      $(".welcome-text").animate({opacity: 1},"slow");
    }, 1800);
	}else{
    $(".welcome-text").animate({opacity: 1},1800);
  }


});

Template.welcome.helpers({
  scrollValue: function(){
    return Template.instance().scrollValue.get();
  },
});

Template.welcome.events({
  'mousewheel': function(event, template) {
    var st;
    $(window).on('scroll', () => {
      st = $(window).scrollTop();
      template.scrollValue.set(st);
      $("#welcome-box").css({
        opacity: 1 - st/600,
      });
      $("#welcome-box").css('transform', 'scale('+ (1 - st/600) +')');
    });
  }
});
