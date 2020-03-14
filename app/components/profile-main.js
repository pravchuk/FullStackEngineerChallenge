import Component from '@ember/component';
import { set,get,computed } from '@ember/object';

export default Component.extend({
    
    showAddReview: false,
    showAddPeer: false,
    imageFileName: computed('employee',function() {
        debugger
        if(["10001","10002","10003"].includes(get(this, 'employee').id))
            return get(this, 'employee').id;
        else
            return "sample";
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