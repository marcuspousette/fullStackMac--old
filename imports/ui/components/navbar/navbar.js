import './navbar.html';


Template.navbar.onCreated( () => {

});

Template.navbar.onRendered( () => {
  $('.sidenav').sidenav();
});

Template.navbar.helpers({

});

Template.navbar.events({
  'click .home-link': () => FlowRouter.go('App.home'),
  'click .showcase-link': () => FlowRouter.go('projects'),
  'click .about-link': () => FlowRouter.go('about'),
  'click .contact-link': () => FlowRouter.go(''),
});
