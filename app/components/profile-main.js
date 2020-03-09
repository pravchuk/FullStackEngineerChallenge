import Component from '@ember/component';
import { set,get } from '@ember/object';

export default Component.extend({
    
    showAddReview: false,
    showAddPeer: false,
    actions:{
        addReview(){
            set(this,'showAddReview', !get(this, 'showAddReview'));
        },
        addPeer(){
            set(this, 'showAddPeer', !get(this, 'showAddPeer'));
        }
    },
    init(){
        this._super(...arguments);
    }
});