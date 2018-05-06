import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 100,
  //   },
  //   age : {
  //     type: Number,
  //     min: 0
  //   }
  // });

  Accounts.validateNewUser ((user)=>{
    console.log('A new user',user);
    return true;
  })

  const employeeSchema = new SimpleSchema ({
    name: {
      type: String,
      min: 1,
      max: 200
    },
    hourlyWage : {
      type: Number,
      min: 0
    },
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  });

  // employeeSchema.validate ({
  //   name: 'Mike',
  //   hourlyWage: 35,
  //   email: 'hashmi+plus@gmail.com'
  // })
});
