/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import sendEmail from '../utils/sendEmail'
import { ToastContainer } from 'react-toastify'
import notify from '../utils/toastMessage'

export interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const formRef = useRef<HTMLFormElement | null>(null)
  const onSubmit = async (): Promise<void> => {
    await sendEmail(formRef, notify)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={{ required: 'Your name is required' }}
          render={({ field }) => (
            <input
              {...field}
              id="name"
              type="text"
              placeholder="Full Name"
              className="w-full h-10 p-4 rounded-br-lg border-2 border-tertiary-100"
            />
          )}
        />
        <p className="text-error-600 mt-1">{errors.name?.message}</p>

        <label htmlFor="name" className="hidden">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Your email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full h-10 mt-4 p-4 rounded-br-lg border-2 border-tertiary-100"
            />
          )}
        />
        <p className="text-error-600 mt-1">{errors.email?.message}</p>

        <label htmlFor="name" className="hidden">
          Message
        </label>
        <Controller
          name="message"
          defaultValue=""
          control={control}
          rules={{ required: 'Message is required' }}
          render={({ field }) => (
            <textarea
              {...field}
              id="message"
              placeholder="Your Message"
              className="w-full h-52 mt-4 p-4 rounded-br-lg border-2 border-tertiary-100"
            />
          )}
        />
        <p className="text-error-600 mt-1">{errors.message?.message}</p>

        <motion.button
          type="submit"
          className={
            'font-bold border-2 mr-4 p-3 px-5 mt-4 bg-primary-700 text-white-200 rounded-[100px] font-openSans'
          }
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message
        </motion.button>
      </form>
      <ToastContainer theme="colored" />
    </>
  )
}

export default ContactForm
