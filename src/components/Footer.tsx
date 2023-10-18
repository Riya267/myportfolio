import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

interface FooterProps {
  isDarkMode: boolean;
}

const labels = {
  heading: "Let's explore the next big thing.",
  contactMeButton: "Contact Me"
}

const contactInfo = [
  { label: 'Contact', info: '+91 6239550341' },
  { label: 'Address', info: 'Punjab, India' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: <BsLinkedin />, url: 'https://www.linkedin.com/in/riya-dhawan-592ab921a' },
  { name: 'Twitter', icon: <BsTwitter />, url: 'https://twitter.com/riyacec05' },
  { name: 'GitHub', icon: <BsGithub />, url: 'https://github.com/Riya267' },
];

const socialInfo = [
  { label: 'Email', info: 'riyacec05@gmail.com', list: null },
  { label: 'Follow', info: null, list: socialLinks },
]


const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const darkModeStyles = 'bg-primary-500 text-white-100 mt-12';
  const lightModeStyles = 'bg-white-200 text-black-200 mt-12';
  const genericStyles = 'container flex justify-between flex-wrap p-4';

  const renderContactInfo = contactInfo.map((item, index) => (
    <div key={index} className={`lg:border-r p-2 lg:p-4 ${index % 2 === 1 ? 'mt-6' : ''}`}>
      <p className='font-bold font-petitFormal'>{item.label}</p>
      <p className='text-tertiary-300'>{item.info}</p>
    </div>
  ));

  const renderSocialLinks = socialLinks.map((link, index) => (
    <li key={index} className='mr-3'>
      <a href={link.url} target='_blank'>
        {link.icon}
      </a>
    </li>
  ));

  return (
    <footer className={`${isDarkMode ? darkModeStyles : lightModeStyles} font-inter`}>
      <div className={`${genericStyles}`}>
        <div className='bg-red'>
          <p className="text-2xl font-auto font-bold">{labels.heading}</p>
          <motion.button className={`border-2 p-3 px-5 mt-4 ${isDarkMode ? 'border-primary-200': 'border-primary-500'} rounded-[100px] font-russonOne`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            {labels.contactMeButton}
          </motion.button>
        </div>
        <div className="flex justify-between flex-wrap mt-4 lg:w-[50%]">
          <div className="p-2 lg:p-4 pl-0 lg:pl-0 lg:w-[50%]">
            {renderContactInfo}
          </div>
          <div className="p-2 lg:p-4">
              {socialInfo.map((item, index) => {
                return <div className={`p-2 lg:p-4 ${index % 2 === 1 ? 'mt-6' : ''}`}>
                  <p className='font-bold font-petitFormal'>{item.label}</p>
                  {item?.info && <p>{item.info}</p>}
                  {item?.list && <ul className='flex mt-1 text-tertiary-300'>{renderSocialLinks}</ul>}
               </div>
              })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
