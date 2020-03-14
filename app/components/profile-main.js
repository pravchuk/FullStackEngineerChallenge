import Component from '@ember/component';
import { set,get,computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    sessionAccount: service('session-account'),
    
    showAddReview: false,
    showAddPeer: false,
    imageFileName: computed('employee',function() {
        if(["10001","10002","10003"].includes(get(this, 'employee').id))
            return get(this, 'employee').id;
        else
            return "sample";
    }),
    hideAddReviewButton: computed('employee',function(){
        return (get(this,'employee').id === this.sessionAccount.getCurrentUser().id);
    }),
    actions:{
        addReview(){
            set(this,'showAddReview', !get(this, 'showAddReview'));
        },
        addPeer(){
            set(this, 'showAddPeer', !get(this, 'showAddPeer'));
        }
    }
});