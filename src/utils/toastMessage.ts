import { toast } from 'react-toastify';

const notify = (message: string, type: string): void => {
  switch (type) {
    case 'info':
      toast.info(message, { theme: 'colored' });
      break;
    case 'error':
      toast.error(message, { theme: 'colored' });
      break;
    case 'success':
      toast.success(message, { theme: 'colored' });
      break;
    case 'warning':
      toast.warning(message, { theme: 'colored' });
      break;
    default:
      toast(message, { theme: 'colored' });
  }
};

export default notify;
