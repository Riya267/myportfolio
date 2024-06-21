import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          inline-flex items-center rounded-full p-3 shadow-sm transition-opacity
      `}
      >
        <BiArrowFromBottom className={`h-6 w-6 text-white-200`} aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop;