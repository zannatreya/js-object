const kibria = {
    id: 101,
    money: 5000,
    name: 'kibria',
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        console.log('here', this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'hero balam'
}
kibria.treatDey(200, 300);
kibria.treatDey.call(heroBalam, 100, 100);
kibria.treatDey.apply(heroBalam, [200, 100]);
// heroTreatDey(500);
// heroTreatDey(200);
// heroTreatDey(300);
// kibria.treatDey(200)