import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships'; 

export default DS.Model.extend({
    by: DS.attr('string'),
    name: DS.attr('string'),
    status: DS.attr('string'),
    rating: DS.attr('number'),
    comment: DS.attr('string'),
    employee: belongsTo('employee')
});
