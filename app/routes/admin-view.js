import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('employee',{include: 'reviews'});
    },
    afterModel: function(model) {
        return this.controllerFor('admin-view').set('selectedEmployee', model.firstObject);
    }
});
