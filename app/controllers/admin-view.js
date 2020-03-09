import Controller from '@ember/controller';
import {set, computed} from '@ember/object';

export default Controller.extend({
    selectedEmployee: {},
    actions:{
        employeeClicked(employee){
            set(this,'selectedEmployee', employee);
        },
        refreshModel(){
            debugger
            this.send('refreshModel');
        }
    }
});
