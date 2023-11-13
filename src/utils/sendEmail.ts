import emailjs from '@emailjs/browser';
import { type RefObject } from 'react';

const sendEmail = async (
  formRef: RefObject<HTMLFormElement>,
  notify: (message: string, type: string) => void,
): Promise<void> => {
  if (formRef.current != null) {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_KEY,
        process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
        formRef.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          notify('Message sent successfully', 'success');
        },
        () => {
          notify('Something went wrong, Please Retry', 'error');
        },
      );
  }
};

export default sendEmail;
