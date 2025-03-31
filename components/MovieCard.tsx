"use client";

import { useState } from "react";
import Modal from "./Modal";

const MovieCard = ({ movie, thumbs }: { movie: any; thumbs: string }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className="movie-card"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
      >
        <img
          src={
            thumbs
            // movie?.backdrop_path || movie?.poster_path
            //   ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
            //   : "/assets/no-image.png"
          }
          className="thumbnail"
          alt={""}
        />
        <div className="border"></div>
      </div>

      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default MovieCard;
