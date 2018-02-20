import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // List of orgs
  this.route('orgs');
  // Individual org
  this.route('org', {path: 'org/:id'}, function() {
    // List of repos
    this.route('repos', {});
    // Individual repo
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors', {});
      this.route('issues', {});
    });
  });

  // Catch all route 
  this.route('notfound', {path: '*path'});
});

export default Router;
