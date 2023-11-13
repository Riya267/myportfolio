import React from 'react';
import ContactForm from './ContactForm';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const darkModeStyles = 'bg-primary-500 text-white-100 shadow-white';
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black';

  return (
    <section
      id="contact"
      className={`${isDarkMode ? darkModeStyles : lightModeStyles} py-40`}
    >
      <div className="container font-montserrat flex flex-col items-center">
        <p className="mb-6 text-xl border-b-2 border-primary-700">CONTACT</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4">
            <p
              className={`text-2xl lg:text-3xl font-bold ${
                isDarkMode ? 'text-tertiary-200' : 'text-primary-200'
              }`}
            >
              If Not Now, When? <br /> Lets Work Together!
            </p>
            <p
              className={`font-bold lg:w-96 mt-8 ${
                isDarkMode ? 'text-white-300' : 'text-tertiary-400'
              }`}
            >
              Ready to elevate your digital presence? I'm a full stack developer
              specializing in dynamic web solutions that merge technology with
              design. Let's bring your vision to life – contact me today.
            </p>
          </div>
          <div className="p-4 text-black-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
