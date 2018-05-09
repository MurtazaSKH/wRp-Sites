import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Links} from '../api/links';
import LinksList from './linkslist';
import PrivateHeader from './privateHeader';
import AddLink from './addlink';

// export default class Lnk extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <h1>Your Links</h1>
//         <button onClick={this.onLogout.bind(this)}>Logout</button> */}
//         <PrivateHeader title="Your Links"/>
//         <LinksList/>
//         <AddLink/>
//       </div>
//     );
//   }
// }

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <LinksList/>
      <AddLink/>
  </div>);
}
