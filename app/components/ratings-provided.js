import Component from '@ember/component';
import {get, computed} from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    employeeId: computed('employee.id', function(){
        return get(this, 'employee').id;
    }),
    myReviews: computed('employee.reviews',function(){
        if(get(this,"employee.reviews").firstObject){
            let data =  this.store.query("review", {'employee' : get(this, 'employeeId')});
            if(data)
                return data;
            else
                return [];
        }else{
            return [];
        }
    })
});
