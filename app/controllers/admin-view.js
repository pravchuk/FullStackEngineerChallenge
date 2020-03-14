import Controller from '@ember/controller';
import {set, get, computed} from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    sessionAccount: service('session-account'),
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
    currentUserFullName: computed('sessionAccount.user', function(){
        if(this.sessionAccount.getCurrentUser().isAdmin)
            return this.sessionAccount.getCurrentUser().name + " (Admin)";
        else
        return this.sessionAccount.getCurrentUser().name;
    }),
    isUserAdmin: computed('sessionAccount.user',function(){
        return this.sessionAccount.getCurrentUser().isAdmin;
    }),
    init(){
        if(!this.sessionAccount.getCurrentUser()){
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
        },
        logout(){
            this.sessionAccount.setCurrentUser(null);
            this.transitionToRoute('login');
        }
    }
});
