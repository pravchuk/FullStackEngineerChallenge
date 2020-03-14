import Controller from '@ember/controller';
import { get,set } from "@ember/object";
import { inject as service } from '@ember/service';

export default Controller.extend({
    store: service(),
    currentEmployee: null,

    actions:{
        login(){
            let username = get(this, 'username');
            let password = get(this, 'password');
            if(!username || !password){
                alert("Please enter valid credentials");
            }
           this.store.queryRecord('employee',{
               "username": username,
               "password": password
           }).then((response) => {
               if(response){
                    set(this, 'currentEmployee', response);
                    this.transitionToRoute('admin-view').then((newRoute) => {
                        newRoute.set('controller.currentEmployee', response);
                    });
                }else{
                    alert("enter valid credentials")
                }
            });
        }
    }
});
