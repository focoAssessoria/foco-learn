"use client";
import MovieCard from "./MovieCard";

interface Props {
  title: string;
  movies: number;
  thumbs: string[];
}

const CategoryList = ({ title, movies, thumbs }: Props) => {
  return (
    <div className="category">
      <h1 className="category-title">{title}</h1>

      <div className="movie-list">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
          <MovieCard
            key={"move" + index}
            thumbs={thumbs[Math.floor(Math.random() * 4)]}
            movie={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
