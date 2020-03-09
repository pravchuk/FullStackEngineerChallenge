import Component from '@ember/component';
import {get, computed} from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    myReviews: computed('employee',function(){
        if(get(this,"employee")){
            let employeeId = get(this,"employee");
            let data =  this.store.query("review", {'employee' : employeeId})
            return data;
        }else{
            return {};
        }
    })
});
