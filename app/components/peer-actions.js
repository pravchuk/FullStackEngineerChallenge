import Component from '@ember/component';


export default Component.extend({
    actions:{
        clickReview(){
            this.get('addReview')();
        },
        clickPeer(){
            this.get('addPeer')();
        },
    }
});
