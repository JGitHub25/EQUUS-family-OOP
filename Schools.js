const levels = { primary: "primary", middle: "middle", high: "high" };

//SCHOOL
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(number) {
    if (typeof number !== "number") {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
      return;
    }
    this._numberOfStudents = number;
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNum];
  }
}

//PRIMARY
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, levels.primary, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//MIDDLE
class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, levels.middle, numberOfStudents);
  }
}

//HIGH
class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, levels.high, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    this._sportsTeams.forEach((sport) => console.log(sport));
  }
}

/* ------------INSTANCES--------*/
const lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

console.log(lorraineHansbury);
lorraineHansbury.quickFacts();
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

const alSmith = new High("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
alSmith.sportsTeams;
