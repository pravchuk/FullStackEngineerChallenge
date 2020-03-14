import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
    session: service(),
    store: service(),

    loadCurrentUser() {
        return new RSVP.Promise((resolve, reject) => {
        const id = this.get('session.data.authenticated.id');
        if (!Ember.isEmpty(id)) {
            return this.store.findRecord('employee', id).then((user) => {
                this.set('user', user);
                resolve();
            }, reject);
        } else {
            resolve();
        }
        });
    },
    getCurrentUser(){
        return this.get('user');
    },
    setCurrentUser(user){
        this.set('user', user);
    }
});
