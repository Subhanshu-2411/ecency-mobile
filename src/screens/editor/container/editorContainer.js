import React, { Component } from 'react';
import { connect } from 'react-redux';

// Services and Actions
import { postContent } from '../../../providers/steem/dsteem';
import { getUserData } from '../../../realm/realm';
import { getDigitPinCode } from '../../../providers/steem/auth';

// Middleware

// Constants
import { default as ROUTES } from '../../../constants/routeNames';

// Utilities
import { generatePermlink } from '../../../utils/editor';
import { decryptKey } from '../../../utils/crypto';

// Component
import { EditorScreen } from '../screen/editorScreen';

/*
  *            Props Name        Description                                     Value
  *@props -->  props name here   description here                                Value Type Here
  *
  */

class ExampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions

  // Component Functions

  _submitPost = async (form) => {
    const { navigation } = this.props;
    let userData;
    let postingKey;
    const title = form.formFields['title-area'].content;
    const permlink = generatePermlink(title);

    const digitPinCode = await getDigitPinCode();

    await getUserData().then((res) => {
      userData = res && Array.from(res)[0];

      postingKey = decryptKey(userData.postingKey, digitPinCode);
    });

    if (userData) {
      const post = {
        body: form.formFields['text-area'].content,
        title,
        author: userData.username,
        permlink: permlink && permlink,
        tags: form.tags,
      };

      postContent(post, postingKey)
        .then((result) => {
          alert('Your post succesfully shared');
          navigation.navigate(ROUTES.SCREENS.HOME);
        })
        .catch((error) => {
          alert(`Opps! there is a problem${error}`);
        });
    }
  };

  _handleSubmit = (form) => {
    this._submitPost(form);
  };

  render() {
    const { isLoggedIn } = this.props;

    return <EditorScreen isLoggedIn={isLoggedIn} handleOnSubmit={this._handleSubmit} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.application.isLoggedIn,
});

export default connect(mapStateToProps)(ExampleContainer);