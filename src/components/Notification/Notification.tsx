import { toast } from "react-toastify";

interface IPorps {
  message: string;
  type: "success" | "error";
}
const Notification = ({ message, type }: IPorps) => {
  const displayNotification = () => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <button onClick={displayNotification}>Show Notification</button>
    </div>
  );
};

export default Notification;
