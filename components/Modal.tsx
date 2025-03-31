"use client";

import { AddCircle, CancelRounded } from "@mui/icons-material";

interface Props {
  closeModal: () => void;
}

const Modal = ({ closeModal }: Props) => {
  return (
    <div className="w-full z-50 h-full fixed top-0 left-0 flex items-center justify-center">
      <div
        className="fixed top-0 left-0 h-full w-full bg-black-1 bg-opacity-60"
        onClick={closeModal}
      />
      <div className="modal">
        <button className="modal-close" onClick={closeModal}>
          <CancelRounded
            sx={{
              color: "white",
              fontSize: "35px",
              ":hover": { color: "red" },
            }}
          />
        </button>

        <iframe
          src="https://www.youtube.com/embed/LXb3EKWsInQ?si=94T9a4WZW8itThy9"
          className="modal-video"
          loading="lazy"
          allowFullScreen
        />

        <div className="modal-content">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="text-base-bold">Nome:</p>
              <p className="text-base-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-base-bold">Favoritar</p>
              <AddCircle className="cursor-pointer text-[#690A15]" />
            </div>
          </div>

          <div className="flex gap-2">
            <p className="text-base-bold">Data:</p>
            <p className="text-base-light">
              {new Date().toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>

          <p className="text-base-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="flex gap-2">
            <p className="text-base-bold">Categorias:</p>
            <p className="text-base-light">Categoria 1, Categoria 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
