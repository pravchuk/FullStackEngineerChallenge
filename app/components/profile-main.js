import Component from '@ember/component';
import { set,get } from '@ember/object';

export default Component.extend({
    
    showAddReview: false,
    actions:{
        addReview(){
            set(this,'showAddReview', !get(this, 'showAddReview'));
        }
    },
    init(){
        this._super(...arguments);
    }
});