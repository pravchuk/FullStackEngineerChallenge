import Component from '@ember/component';
import {get, computed, set} from "@ember/object";
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    classNameBindings: ['isEnabled::disabled'],
    isEnabled: false,
    justAssigned: false,
    allEmployees: computed('model','employeeTo','employeeTo.reviews','employeesAlreadyAssigned', function(){
        let employeeTo = get(this, 'employeeTo');
        let employees = get(this, 'model');
        let employeesAlreadyAssigned = get(this, 'employeesAlreadyAssigned');
        if(get(this, 'justAssigned') === false){
            this.store.query('review',{'employee': get(this, 'employeeTo').id}).then((response)=>{
                response = response.map(review => review.by);
                employeesAlreadyAssigned = response;
                set(this, 'justAssigned', true);
                set(this, 'employeesAlreadyAssigned', response);
            })
        }else{
            set(this, 'justAssigned', false);
        }
        return employees.filter(employee => {
            if(employeeTo.id != employee.id && !employeesAlreadyAssigned.includes(employee.id))
                return true
        });
    }),
    employeesAlreadyAssigned: [],
    actions:{
        clickedPeer(employee){
            let employeeTo = get(this, 'employeeTo');
            let newReview = this.store.createRecord('review',{
                by: employee.id,
                name: employee.name,
                status: "pending",
                employee: employeeTo
            });
            employeeTo.get('reviews').pushObject(newReview);
            newReview.save().then(function(){
                employeeTo.save();
            });
        }
    }
});
