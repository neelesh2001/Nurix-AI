// Toast.js
import { motion } from "framer-motion";

const Toast = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white z-50
        ${type === "success" ? "bg-brand-success" : "bg-brand-error"}`}
    >
      <div className="flex items-center space-x-2">
        <span>{message}</span>
        <button onClick={onClose} className="text-white font-bold">
          ×
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;
