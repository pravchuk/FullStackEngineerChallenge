import Component from '@ember/component';
import {get} from "@ember/object";
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    classNameBindings: ['isEnabled::disabled'],
    isEnabled: false,
    rating: 3,
    comment: "excellent work",
    actions: {
        submitReview(){
            let rating = get(this, 'rating');
            let comment = get(this, 'comment');
            let newReview = this.store.createRecord('review',{
                by: "10002",
                name: "Praveen",
                status: "done",
                rating: rating,
                comment: comment,
                employee: get(this, 'employeeTo')
            });
            let employeeTo = get(this, 'employeeTo');
            employeeTo.get('reviews').pushObject(newReview);
            newReview.save().then(function(){
                employeeTo.save();
            });
        }
    }
});
