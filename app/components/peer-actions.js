import Component from '@ember/component';
import { inject as service } from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
    sessionAccount: service('session-account'),
    isUserAdmin: computed('sessionAccount.user',function(){
        debugger
        return this.sessionAccount.getCurrentUser().isAdmin;
    }),
    actions:{
        clickReview(){
            this.get('addReview')();
        },
        clickPeer(){
            this.get('addPeer')();
        },
    }
});
