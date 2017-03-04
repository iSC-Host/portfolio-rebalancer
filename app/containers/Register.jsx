import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames/bind';
import { emailTextFieldChange, passwordTextFieldChange, passwordConfirmationTextFieldChange, toggleAuthenticationMode } from '../actions/authentications';
import { register } from '../actions/users';
import EmailTextField from '../components/authentication/EmailTextField';
import PasswordTextField from '../components/authentication/PasswordTextField';
import { getAuthenticationSelect } from '../selectors/index';
import styles from '../css/containers/authentication';

const cx = classNames.bind( styles );

class Register extends React.Component {
  constructor( props ) {
    super( props );
    this.handleOnRegister = this.handleOnRegister.bind( this );
  }

  handleOnRegister( event ) {
    event.preventDefault();
    this.props.register();
  }

  render() {
    return (
    <div>
      <div className={ cx( 'google-login-button-container' ) }>
        <RaisedButton
                      href="/auth/google"
                      label="LOG IN WITH GOOGLE"
                      primary
                      fullWidth
                      icon={ <FontAwesome
                                          name="google"
                                          className={ cx( 'google-icon' ) } /> } />
      </div>
      <p className={ cx( 'or-prompt' ) }>
        OR
      </p>
      <Card className={ cx( 'card' ) }>
        <div className={cx('card-insides')}>
        <form onSubmit={ this.handleOnRegister }>
          Register with email
          <EmailTextField
                          value={ this.props.authentication.emailTextField.value }
                          errorText={ this.props.authenticationSelect.emailTextFieldSelect.errorText }
                          onChange={ this.props.emailTextFieldChange } />
          <PasswordTextField
                             value={ this.props.authentication.passwordTextField.value }
                             errorText={ this.props.authenticationSelect.passwordTextFieldSelect.errorText }
                             onChange={ this.props.passwordTextFieldChange }
                             label="Password" />
          <PasswordTextField
                                         value={ this.props.authentication.passwordConfirmationTextField.value }
                                         errorText={ this.props.authenticationSelect.passwordConfirmationTextFieldSelect.errorText }
                                         onChange={ this.props.passwordConfirmationTextFieldChange }
                                         label="Confirm password" />
          <p className={ cx( 'message', {
                           'message-show': this.props.user.message && this.props.user.message.length > 0
                         } ) }>
            { this.props.user.message }
          </p>
          <RaisedButton
                        disabled={ this.props.authenticationSelect.registerButtonVisibility === 'disabled' }
                        label="Register"
                        fullWidth
                        primary
                        disabled={ this.props.authenticationSelect.registerButtonVisibility === 'disabled' }
                        type="submit"
                        className={ cx( 'submit-button' ) } />
        </form>
                  </div>
      </Card>
    </div>
    );
  }
}

Register.propTypes = {
  user: PropTypes.object.isRequired,
  authentication: PropTypes.object.isRequired,
  authenticationSelect: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  emailTextFieldChange: PropTypes.func.isRequired,
  passwordTextFieldChange: PropTypes.func.isRequired,
  passwordConfirmationTextFieldChange: PropTypes.func.isRequired,
  toggleAuthenticationMode: PropTypes.func.isRequired,
};

function mapStateToProps( state ) {
  return {
    user: state.user,
    authentication: state.authentication,
    authenticationSelect: getAuthenticationSelect( state )
  };
}

export default connect( mapStateToProps, {
  register,
  emailTextFieldChange,
  passwordTextFieldChange,
  passwordConfirmationTextFieldChange,
  toggleAuthenticationMode
} )( Register );
