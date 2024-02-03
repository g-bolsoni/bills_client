import { toast, Zoom } from 'react-toastify';

interface INotify {
  text: string;
  typeToast: string;
}


const notify = ({ text = "", typeToast = "" }: INotify) => {
  switch (typeToast) {
    case "success":
      toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      break;
    case "info":
      toast.info(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    case "warn":
      toast.warn(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    case "error":
      toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });

    default:
      toast(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      break;
  }



}

export default notify;