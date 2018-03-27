import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() =>{
  class Person {
    constructor (name='anonymous',age=0){
      this.name=name;
      this.age=age;
    }
    getGreeting() {
      // getAge();
      return 'Hi I am '+this.name+'';
    }
    getPersonDescription(){
      return ''+this.name+' is '+this.age+' years old';
    }
  }

  class Employee extends Person {
    constructor (name, age,title) {
      super(name,age);
      this.title=title;
    }
    getGreeting () {
      if(this.title) {
        return ''+this.name+' is '+this.age+' years old and this is my job title '+this.title+'';
      }
      else {
        return super.getGreeting();
      }
    }
    hasJob (){
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor (name,age,language ="assembly"){
      super(name,age);
      this.language=language;
    }
    getGreeting () {
      return 'Hi i am '+this.name+' and i am a '+this.language+' Programmer. ';
    }
  }

  let person = new Programmer('Emma',32,'C#');
  console.log(person.getGreeting());
});
