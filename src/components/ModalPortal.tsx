import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import close from "../assets/svg/close.svg";
import { useScrollLock } from "../hooks/useScrollLock";

import "../styles/index.scss";

export function ModalPortal({ isOpen, onClose, closeButtonText, children }) {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  const portalContainerId = "modal-root";

  const portalContainer = document.getElementById(portalContainerId);
  if (!portalContainer) {
    return null;
  }
  const modalContent = (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="buttons-container">
          <button type="button" className="button-text" onClick={onClose}>
            {`Сховати ${closeButtonText}`}
          </button>
          <button type="button" className="button-close" onClick={onClose}>
            <img src={close} alt="close button" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, portalContainer);
}
