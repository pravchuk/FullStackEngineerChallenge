import Component from '@ember/component';
import {get, computed, set} from "@ember/object";
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    classNameBindings: ['isEnabled::disabled'],
    isEnabled: false,
    allEmployees: computed('model','employeeTo','employeesAlreadyAssigned', function(){
        debugger
        let employeeTo = get(this, 'employeeTo');
        let employees = get(this, 'model');
        let employeesAlreadyAssigned = get(this, 'employeesAlreadyAssigned');
        return employees.filter(employee => {
            if(employeeTo.id != employee.id && !employeesAlreadyAssigned.includes(employee.id))
                return true
        });
    }),
    employeesAlreadyAssigned: [],
    init(){
        this.store.query('review',{'employee': get(this, 'employeeTo').id}).then((response)=>{
            response = response.map(review => review.by);
            set(this, 'employeesAlreadyAssigned', response);
        })
        this._super(...arguments);
    }
});
