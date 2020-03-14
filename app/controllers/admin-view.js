import Controller from '@ember/controller';
import {set, get} from '@ember/object';

export default Controller.extend({
    selectedEmployee: {},
    openModal: false,
    newEmployee: {}, 
    currentEmployee: null,
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
        if(!get(this,'currentEmployee')){
            this.transitionToRoute('login');
        }
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
            let brandNewEmployee = this.store.createRecord('employee', get(this,'newEmployee'));
            brandNewEmployee.save();
            set(this, 'newEmployee', {});
            set(this, 'openModal', false);
        }
    }
});
