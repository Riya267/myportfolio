import React from 'react'
import { socialLinks } from '../constants/index'

const SocialLinksWrapper: React.FC = () => {
  return (
    <div className="social-links my-2">
      <ul className="flex text-white-200">
        {socialLinks.map((link, index) => {
          return (
            <li
              key={`${link.url}_${index}`}
              className={`mr-3 p-2 bg-transparent`}
              style={{ borderColor: `var(--${link.name})` }}
            >
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SocialLinksWrapper
