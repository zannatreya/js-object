const student = {
    name: 'reya',
    id: 101,
    money: 5000,
    isRich: false,
    subjects: ['english', 'math'],
    bestFriend: {
        name: 'sadid',
        major: 'eee'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    },
    partyDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }

}
student.takeExam();
const remaining = student.treatDey(900, 100);
const balance = student.partyDey(800, 100);

console.log(remaining);
console.log(balance);