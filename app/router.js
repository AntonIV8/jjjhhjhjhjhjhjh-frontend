import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-jjjhhjhjhjhjhjh-animal-l');
  this.route('i-i-s-jjjhhjhjhjhjhjh-animal-e',
  { path: 'i-i-s-jjjhhjhjhjhjhjh-animal-e/:id' });
  this.route('i-i-s-jjjhhjhjhjhjhjh-animal-e.new',
  { path: 'i-i-s-jjjhhjhjhjhjhjh-animal-e/new' });
  this.route('i-i-s-jjjhhjhjhjhjhjh-cat-l');
  this.route('i-i-s-jjjhhjhjhjhjhjh-cat-e',
  { path: 'i-i-s-jjjhhjhjhjhjhjh-cat-e/:id' });
  this.route('i-i-s-jjjhhjhjhjhjhjh-cat-e.new',
  { path: 'i-i-s-jjjhhjhjhjhjhjh-cat-e/new' });
  this.route('i-i-s-jjjhhjhjhjhjhjh-dog-l');
  this.route('i-i-s-jjjhhjhjhjhjhjh-dog-e',
  { path: 'i-i-s-jjjhhjhjhjhjhjh-dog-e/:id' });
  this.route('i-i-s-jjjhhjhjhjhjhjh-dog-e.new',
  { path: 'i-i-s-jjjhhjhjhjhjhjh-dog-e/new' });
});

export default Router;
