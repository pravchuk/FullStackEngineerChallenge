import Component from '@ember/component';
import {get} from "@ember/object";
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    sessionAccount: service('session-account'),
    classNameBindings: ['isEnabled::disabled'],
    isEnabled: false,
    rating: 3,
    comment: "excellent work",
    actions: {
        submitReview(){
            let rating = get(this, 'rating');
            let comment = get(this, 'comment');
            //check if any reviews are pending for this user
            let employeeTo = get(this, 'employeeTo');
            this.store.queryRecord('review', {
                "employee": employeeTo.id,
                "by": this.sessionAccount.getCurrentUser().id
            }).then(function(review){
                if(review){
                    review.deleteRecord();
                    review.save().then(function(){
                        this.sendReviewToServer(rating, comment, employeeTo).bind(this);
                    }.bind(this));
                }else{
                    this.sendReviewToServer(rating, comment, employeeTo).bind(this);
                }
            }.bind(this));
        }
    },
    sendReviewToServer(rating, comment, employeeTo){
        let newReview = this.store.createRecord('review',{
            by: this.sessionAccount.getCurrentUser().id,
            name: this.sessionAccount.getCurrentUser().name,
            status: "done",
            rating: rating,
            comment: comment,
            employee: employeeTo
        });
        employeeTo.get('reviews').pushObject(newReview);
        newReview.save().then(function(){
            employeeTo.save();
            get(this, 'afterAddingReview')();
        }.bind(this));
    }
});
