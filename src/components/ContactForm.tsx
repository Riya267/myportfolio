import React, { useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import sendEmail from '../utils/SendEmail'
import { ToastContainer } from 'react-toastify'
import notify from '../utils/ToastMessage'
import { motion } from 'framer-motion'

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={(el) => (formRef.current = el)}
        className="grid grid-cols-1 gap-4 mt-4"
      >
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={{ required: 'Your name is required' }}
          render={({ field }) => (
            <input
              {...field}
              autoComplete="true"
              id="name"
              type="text"
              placeholder="Full Name"
              className="w-full h-10 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary-500"
            />
          )}
        />
        <p className="text-error-600 mt-1">{errors.name?.message}</p>

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
              autoComplete="true"
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full h-10 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary-500"
            />
          )}
        />
        <p className="text-error-600 mt-1">{errors.email?.message}</p>

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
              rows={5}
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary-500"
            />
          )}
        />
        <p className="text-error-600 mt-1">{errors.message?.message}</p>

        <motion.button
          type="submit"
          className="w-fit font-bold border-2 p-3 px-5 mt-4 rounded-[100px] font-jetBrains text-white inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
      <ToastContainer theme="colored" />
    </>
  )
}

export default ContactForm
