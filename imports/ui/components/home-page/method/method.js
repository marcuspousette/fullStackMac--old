import './method.html'
import './mathod.css'
import '/imports/ui/components/Card/Card_.js'
import '/imports/ui/components/Banner/Banner_.js'
import '/imports/ui/components/Arrow/Arrow_.js'

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

let obj1 = {
  title: 'Title',
  content: 'I like ballz',
  clases: 'red',
};

let obj2 = {
  title: 'Title',
  content: 'I like ballz',
  clases: 'red',
};

let obj3 = {
  title: 'Title',
  content: 'I like ballz',
  clases: 'red',
};

let obj4 = {
  title: 'Title',
  content: 'I like ballz',
  clases: 'red',
};

const webDevelopment = {
  content: 'Full stack web development', 
};
const dataVisualization = {
  content: 'Data driven designs', 
};

const cards = [obj1, obj2, obj3, obj4];
const banners = [webDevelopment, dataVisualization];

Template.method.helpers({
  cards: () => cards,
  banners: () => banners,
  arrow_css: () => '',
});

Template.method.events({
  'click .slide-action': event => { sinkInAnimations($('#slide').hasClass('sinkIn')); },
});
