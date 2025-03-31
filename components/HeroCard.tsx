"use client";

import { Movie } from "@lib/types";
import { InfoOutlined, PlayCircleOutlineOutlined } from "@mui/icons-material";
import { useState } from "react";
import Modal from "./Modal";

const HeroCard = ({
  trendingMovie,
  randomHero,
}: {
  trendingMovie: Movie;
  randomHero: any;
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="hero">
        <div className="hero-bg">
          <img
            src="/assets/background.png"
            alt="trending-movie"
            className="hero-bg-image"
          />
          <div className="overlay"></div>
        </div>

        <h1 className="hero-title">
          {randomHero.title}
          {/* {trendingMovie?.title || trendingMovie?.name} */}
        </h1>

        <p className="hero-overview">
          {/* {trendingMovie?.overview} */}
          {randomHero.overview}
        </p>

        <div className="hero-btns">
          <button className="hero-btn" onClick={openModal}>
            <PlayCircleOutlineOutlined /> Acessar
          </button>
          <button className="hero-btn" onClick={openModal}>
            <InfoOutlined /> Saiba Mais
          </button>
        </div>
      </div>

      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default HeroCard;
