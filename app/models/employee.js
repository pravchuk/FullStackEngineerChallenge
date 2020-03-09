import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    role: DS.attr('string'),
    team: DS.attr('string'),
    isAdmin: DS.attr('boolean'),
    username: DS.attr('string'),
    password: DS.attr('string'),
    reviews: DS.hasMany('review')
});
