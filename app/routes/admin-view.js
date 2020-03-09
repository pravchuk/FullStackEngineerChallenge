import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('employee',{include: 'reviews'});
    },
    actions: {
        refreshModel(){
            this.refresh();
        }
    }
});