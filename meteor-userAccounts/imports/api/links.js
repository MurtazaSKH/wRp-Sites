import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer){
  Meteor.publish('links',function()  {
    return Links.find({userId:this.userId});
  });
}


Meteor.methods({
    // addNumbers(a,b){
    //   if(typeof a!=='number' || typeof b!=='number'){
    //     throw new Meteor.Error('Error', 'Arguments should be Mumbers');
    //   }
    //   return a+b;
    // }
    'links.insert'(url){
      if(!this.userId){
        throw new Meteor.Error('Not Authorized');
      }

      new SimpleSchema({
        url: {
          type: String,
          regEx: SimpleSchema.RegEx.Url
        }
      }).validate({url});

      Links.insert({_id:shortid.generate(),url,userId:this.userId});
    },
    'links.setVisibility'(_id,visible){
      if(!this.userId){
        throw new Meteor.Error("Not Authorized");
      }
      new SimpleSchema({
        _id: {
          type: String,
          min: 1
        },
        visible: {
          type: Boolean
        }
      }).validate({_id,visible});

      Links.update({_id,userId:this.userId},{$set:{visible}});
    }
});
