import "./method.html";

Template.method.onCreated( () => {

});

Template.method.onRendered( () => {

});

Template.method.helpers({

});

Template.method.events({
  "click #slide": (event) => {
    $("#slide").css({
      'transform': 'scale(0.8) translate(40vw)'
    });

    console.log("hi");
  },

});
