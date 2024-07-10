import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface BannerProps {
  link: string
  message: string
}

const Banner: React.FC<BannerProps> = ({ link, message }) => {
  const [isVisible, setIsVisible] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: isVisible ? 0.5 : 1,
        transition: { duration: 2.5 },
      })
      setIsVisible(!isVisible)
    }, 1000)

    return () => clearInterval(interval)
  }, [isVisible, controls])

  return (
    <motion.div
      className="text-white font-jetBrains rounded-b-md shadow-lg z-10 text-center"
      animate={controls}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold"
      >
        {message}
      </a>
    </motion.div>
  )
}

export default Banner
