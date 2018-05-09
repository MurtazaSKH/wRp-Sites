import {Meteor} from 'meteor/meteor'
import React from 'react';
import PropTypes from 'prop-types';
import ClipBoard from 'clipboard';

export default class LinksListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      justCopied: false
    };
  }
  componentDidMount () {
    this.clipboard=new ClipBoard(this.refs.copy);

    this.clipboard.on('success',() => {
      this.setState({justCopied:true});
      setTimeout(() => {
        this.setState({justCopied:false});
      },1000);
    }).on('error',() => {
      alert ('unable to copy, please copy manually');
    })
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <div>
      <p>{this.props.url}</p>
      <p>{this.props.shortUrl}</p>
      <p>{this.props.visible.toString()}</p>
      <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied?'Copied':'Copy'}</button>
      <button onClick={ ()=> {Meteor.call('links.setVisibility',this.props._id,!this.props.visible)}}>{this.props.visible?'Hide':"UnHide"}</button>
    </div>);
  }
};

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  visible:PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired
}
