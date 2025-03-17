"use client";

import { baseImgUrl } from "@lib/constants";
import { Movie } from "@lib/types";
import { useState } from "react";
import Modal from "./Modal";

const MovieCard = ({ movie, thumbs }: { movie: Movie; thumbs: string }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className="movie-card"
        onClick={(e) => {
          e.preventDefault();
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
          alt={movie?.title || movie?.name}
        />
        <div className="border"></div>
      </div>

      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </>
  );
};

export default MovieCard;
