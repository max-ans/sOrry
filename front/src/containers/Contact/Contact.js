import { connect } from 'react-redux';
import Contact from 'src/components/Contact/Contact';

import {
  updateInputValue,
  emailFormatWrong,
  emailFormatGood,
  toggleCheckbox,
  sendContactForm,
} from 'src/actions/contact';

import {
  closeHeaderMenu,
} from 'src/actions/header';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.contact.email,
  text: state.contact.text,
  checkbox: state.contact.checkbox,
  emailFormatAlert: state.contact.emailFormatAlert,
  formSent: state.contact.formSent,
  formError: state.contact.formError,
  sending: state.contact.sending,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateInputValue: (value, field) => {
    dispatch(updateInputValue(value, field));
  },
  emailFormatWrong: () => {
    dispatch(emailFormatWrong());
  },
  emailFormatGood: () => {
    dispatch(emailFormatGood());
  },
  toggleCheckbox: () => {
    dispatch(toggleCheckbox());
  },
  sendContactForm: () => {
    dispatch(sendContactForm());
  },
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
