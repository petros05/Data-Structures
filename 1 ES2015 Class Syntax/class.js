// Calss syntax

class Student {
  constructor(firstName, lastName, grede) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greade = grede;
    this.tardies = 0;
    this.score = [];
    this.gpa = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies++;
    if (this.tardies > 3) {
      return "YOU ARE EXPELLED!!!!!!!!!!";
    }
    return `You have been late ${this.tardies} times`;
  }
  addScore(score) {
    this.score.push(score);
    return this.score;
  }
  calculateAverage() {
    let total = 0;
    for (let i = 0; i < this.score.length; i++) {
      total += this.score[i];
    }
    let average = total / this.score.length;
    return average.toFixed(2);
  }
  calculateGPA() {
    for (let i = 0; i < this.score.length; i++) {
      let score = this.score[i];
      if (score > 90) {
        this.gpa.push(4.0);
      } else if (score >= 90) {
        this.gpa.push(3.7);
      } else if (score >= 87) {
        this.gpa.push(3.3);
      } else if (score >= 83) {
        this.gpa.push(3.0);
      } else if (score >= 80) {
        this.gpa.push(2.7);
      } else if (score >= 77) {
        this.gpa.push(2.3);
      } else if (score >= 70) {
        this.gpa.push(1.7);
      } else if (score >= 67) {
        this.gpa.push(1.3);
      } else if (score >= 65) {
        this.gpa.push(1.0);
      } else {
        this.gpa.push(0.0);
      }
    }
    console.log(this.gpa);
    let total = 0;
    for (let i = 0; i < this.gpa.length; i++) {
      total += this.gpa[i];
    }
    return (total / this.gpa.length).toFixed(1);
  }
}

const firstName = new Student("Abit", "Dawit", 3.5);
const secondName = new Student("Seko", "Berhe", 3.9);

console.log(firstName.addScore(98));
console.log(firstName.addScore(60));
console.log(firstName.addScore(90));
console.log(firstName.calculateAverage());
console.log(firstName.calculateGPA());



