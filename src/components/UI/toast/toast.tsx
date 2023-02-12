import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IToast, NotifyMessageProps } from './types';

export const notifyMessage = (props: NotifyMessageProps) => {
  const { info, success, warning, error } = toast;
  const { message, type } = props;

  switch (type) {
    case 'success':
      success(message);
      break;
    case 'warning':
      warning(message);
      break;
    case 'error':
      error(message);
      break;
    default:
      info(message);
  }
};

const Toast = (props: IToast) => {
  const {
    position,
    theme,
    autoClose,
    hideProgressBar,
    newestOnTop,
    closeOnClick,
    rtl,
    pauseOnFocusLoss,
    draggable,
    pauseOnHover,
  } = props;

  return (
    <div>
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        closeOnClick={closeOnClick}
        rtl={rtl}
        pauseOnFocusLoss={pauseOnFocusLoss}
        draggable={draggable}
        pauseOnHover={pauseOnHover}
        theme={theme}
      />
    </div>
  );
};

export default Toast;
