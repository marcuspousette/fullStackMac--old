import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/about/About_.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Home_' });
  },
});

FlowRouter.route('/projects', {
  name: 'projects',
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('App_body', { main: 'About_' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
