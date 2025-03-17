"use client";
import { Movie } from "@lib/types";
import MovieCard from "./MovieCard";
import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  movies: Movie[];
  thumbs: string[];
}

const CategoryList = ({ title, movies, thumbs }: Props) => {
  return (
    <div className="category">
      <h1 className="category-title">{title}</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            thumbs={thumbs[Math.floor(Math.random() * 4)]}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
