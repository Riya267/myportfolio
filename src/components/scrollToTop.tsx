import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
import { useTheme } from '../contexts/themeProvider';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { isDarkMode } = useTheme();

  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={
          `${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isDarkMode ? 'bg-primary-200': 'bg-primary-500'}
          inline-flex items-center rounded-full p-3 shadow-sm transition-opacity
      `}
      >
        <BiArrowFromBottom className={`h-6 w-6 text-white-200`} aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop;