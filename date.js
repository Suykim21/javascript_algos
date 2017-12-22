function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    console.log(Date.now());
    console.log(this.birthday.getTime());
    const diff = Date.now() - this.birthday.getTime()
    console.log(diff);
    // console.log(new Date());
    const ageDate = new Date(diff);
    console.log(ageDate);
    console.log(Math.abs(ageDate.getUTCFullYear()));
    console.log(Math.abs(ageDate.getUTCFullYear()) -1970);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());