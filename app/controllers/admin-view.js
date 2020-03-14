import Controller from '@ember/controller';
import {set, get} from '@ember/object';

export default Controller.extend({
    selectedEmployee: {},
    openModal: false,
    newEmployee: {}, 
    radioOptions: [
        {
          label: 'Admin',
          value: true
        },
        {
          label: 'Employee',
          value: false
        }
    ],
    init(){
        this._super(...arguments);
    },
    actions:{
        employeeClicked(employee){
            set(this,'selectedEmployee', employee);
        },
        addEmployee(){
            set(this, 'openModal', true);
        },
        submit(){
            this.store.createRecord('employee', get(this,'newEmployee'));
            set(this, 'newEmployee', {});
        }
    }
});
