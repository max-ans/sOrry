import { connect } from 'react-redux';
import Contact from 'src/components/Contact/Contact';

import {
  updateInputValue,
  emailFormatWrong,
  emailFormatGood,
  toggleCheckbox,
  sendContactForm,
} from 'src/actions/contact';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.contact.email,
  text: state.contact.text,
  checkbox: state.contact.checkbox,
  emailFormatAlert: state.contact.emailFormatAlert,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
