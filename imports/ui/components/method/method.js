import "./method.html";

Template.method.onCreated( () => {

});

Template.method.onRendered( () => {

});

Template.method.helpers({

});

Template.method.events({
  "click #slide": (event) => {
    let isOpen = $('#slide').hasClass('sinkIn');
    isOpen ? $('#slide').removeClass('sinkIn') : $('#slide').addClass('sinkIn');
  },

});
