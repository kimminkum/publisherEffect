import React, { useEffect } from "react";
import { ToastProps } from "../../types";
import "./Toast.css";

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  position = "top-right",
  onClose,
  showCloseButton = true
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
      default:
        return "ⓘ";
    }
  };

  return (
    <div className={`toast toast-${type} toast-${position}`}>
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-message">{message}</div>
      {showCloseButton && (
        <button className="toast-close" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};

// Toast Manager Hook
export const useToast = () => {
  const [toasts, setToasts] = React.useState<
    Array<ToastProps & { id: string }>
  >([]);

  const showToast = (toast: Omit<ToastProps, "onClose">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [
      ...prev,
      { ...toast, id, onClose: () => removeToast(id) }
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, showToast, removeToast };
};
