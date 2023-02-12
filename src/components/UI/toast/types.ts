type position =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';
type theme = 'light' | 'dark' | 'colored';

interface IToast {
  position: position;
  theme: theme;
  autoClose?: 5000;
  hideProgressBar?: false;
  newestOnTop?: false;
  closeOnClick?: true;
  rtl?: false;
  pauseOnFocusLoss?: true;
  draggable?: true;
  pauseOnHover?: true;
}

type NotifyMessageProps = { message: string; type: 'info' | 'success' | 'warning' | 'error' };

export { IToast, NotifyMessageProps };
