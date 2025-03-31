"use client";

import { Genre, Movie, Video } from "@lib/types";
import { AddCircle, CancelRounded, RemoveCircle } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

interface Props {
  movie: Movie;
  closeModal: () => void;
}

interface User {
  email: string;
  username: string;
  favorites: number[];
}

const Modal = ({ movie, closeModal }: Props) => {
  const router = useRouter();

  const [video, setVideo] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const { data: session } = useSession();

  console.log("entrou");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  };

  const getMovieDetails = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`,
        options
      );
      const data = await res.json();

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (video: Video) => video.type === "Trailer"
        );
        setVideo(data.videos.results[index].key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    } catch (err) {
      console.log("Error fetching movie details", err);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [movie]);

  // HANDLE MY LIST
  const getUser = async () => {
    try {
      const res = await fetch(`/api/user/${session?.user?.email}`);
      const data = await res.json();
      console.log("data: ", data);
      setUser(data);
      setIsFavorite(data.favorites.find((item: number) => item === movie.id));
      setLoading(false);
    } catch (err) {
      console.log("Error fetching user", err);
    }
  };

  useEffect(() => {
    if (session) getUser();
  }, [session]);

  const handleMyList = async () => {
    try {
      const res = await fetch(`/api/user/${session?.user?.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId: movie.id }),
      });
      const data = await res.json();
      setUser(data);
      setIsFavorite(data.favorites.find((item: number) => item === movie.id));
      router.refresh();
    } catch (err) {
      console.log("Failed to handle my list", err);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="modal">
      <button className="modal-close" onClick={closeModal}>
        <CancelRounded
          sx={{ color: "white", fontSize: "35px", ":hover": { color: "red" } }}
        />
      </button>

      <iframe
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1`}
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
            {isFavorite ? (
              <RemoveCircle
                className="cursor-pointer text-[#690A15]"
                onClick={handleMyList}
              />
            ) : (
              <AddCircle
                className="cursor-pointer text-[#690A15]"
                onClick={handleMyList}
              />
            )}
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex gap-2">
          <p className="text-base-bold">Categorias:</p>
          <p className="text-base-light">Categoria 1, Categoria 2</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
