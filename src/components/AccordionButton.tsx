import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ModalPortal } from "./ModalPortal";
import { Screenshots } from "./Screenshots";

import arrow from "../assets/svg/arrow.svg";

export function AccordionButton({ buttonText, link, screenshots }) {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((state) => !state);

  const handleClick = () => {
    toggleModal();
  };

  return (
    <>
      <button className="open-button" onClick={handleClick}>
        <img src={arrow} alt="arrow-up" />
        <p>{`${t("open")} ${buttonText}`}</p>
      </button>
      {isModalOpen && (
        <ModalPortal
          isOpen={isModalOpen}
          closeButtonText={buttonText}
          onClose={toggleModal}
        >
          <div className="content-container">
            <Screenshots link={link} screenshots={screenshots} />
          </div>
        </ModalPortal>
      )}
    </>
  );
}
