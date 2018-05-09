import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';
import {WebApp} from 'meteor/webapp';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req,res,next)=>{
    const _id=req.url.slice(1);
    const link=Links.findOne({_id});

    if(link){
      res.statusCode=302;
      res.setHeader('Location',link.url);
      res.end();
    } else {
      next();
    }


  });

  // WebApp.connectHandlers.use((req,res,next)=>{
  //   console.log('this is my custom middleware');
  //   console.log(req.url,req.method,req.headers,req.query);
  //   res.statusCode=404;
  //   res.setHeader('Ny-Custom-Header','Dev At Work');
  //   res.end();
  //   next();
  // });
});
