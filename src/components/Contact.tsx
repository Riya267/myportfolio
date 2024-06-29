import React from 'react'
import ContactForm from './ContactForm'

const Contact: React.FC = () => { 
  return (
    <section
      id="contact"
      className="py-5 font-light flex items-center"
    >
      <div className="container font-montserrat">
        <p className="mb-6 text-xl border-b-2 border-orange-500 text-orange-200 w-fit">
          CONTACT <span className="text-orange-500">ME</span>
        </p>
        <div className="grid grid-cols-1 gap-4">
          <p className="text-2xl lg:text-3xl font-light">
            If Not Now, When? <br /> Let's Work Together!
          </p>
          <div className="text-gray-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
