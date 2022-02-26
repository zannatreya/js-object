const kibria = {
    id: 101,
    money: 5000,
    name: 'kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here', this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'hero balam'
}
kibria.treatDey(200);
const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(200);
heroTreatDey(300);
kibria.treatDey(200)