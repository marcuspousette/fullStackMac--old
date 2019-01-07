import "./method.html";

const sinkInAnimations = isOpen => {
  if(isOpen){
    $('#slide').removeClass('sinkIn');
    $('#method-innovate').removeClass('left-sinkin');
    $('#method-elevate').removeClass('left-sinkin');
  }else{
    $('#slide').addClass('sinkIn');
    $('#method-innovate').addClass('left-sinkin');
    $('#method-elevate').addClass('left-sinkin');
  }
}

Template.method.onCreated( () => {

});

Template.method.onRendered( () => {

});

Template.method.helpers({

});

Template.method.events({
  "click #slide": event => {
    sinkInAnimations($('#slide').hasClass('sinkIn'));
  },
});
