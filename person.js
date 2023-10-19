class Person {
    constructor(firstName, lastName, age,country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }
  const person1 = new Person('Pavithra', 'Loganathan', 21, 'India','Ranipet')
  person1.setScore = 50
  person1.setSkill = 'HTML'
  person1.setSkill = 'CSS'
  person1.setSkill = 'JavaScript'
  console.log(person1)
  console.log(person1.getFullName())
   console.log(person1.score)
   console.log(person1.skills)
   