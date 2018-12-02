import "./method.html";

Template.method.onCreated( () => {

});

Template.method.onRendered( () => {

});

Template.method.helpers({

});

Template.method.events({
  "click #slide": (event) => {
    $("#slide").css('transform', 'rotateY(75deg)');
    console.log("hi");
  },

});
