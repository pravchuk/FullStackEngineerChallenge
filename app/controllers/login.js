import Controller from '@ember/controller';
import { get } from "@ember/object";
import { inject as service } from '@ember/service';

export default Controller.extend({
    store: service(),
    sessionAccount: service('session-account'),

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
                    this.sessionAccount.setCurrentUser(response);
                    this.transitionToRoute('admin-view')
                }else{
                    alert("enter valid credentials")
                }
            });
        }
    }
});
