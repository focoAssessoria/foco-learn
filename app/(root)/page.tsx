"use client";
import CategoryList from "@components/CategoryList";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";

const Home = () => {
  const categoryNames = [
    "Para o Pecuarista",
    "Para Gerente de Fazendas",
    "Para Colaboradores",
    "Ferramentas e Equipamentos",
    "Inteligência Artificial e Software Foco.AI",
    "Negócios e Performance Financeira",
  ];

  const thumbs = [
    {
      id: 1,
      thumbs: [
        "/assets/cat6/1.png",
        "/assets/cat6/2.png",
        "/assets/cat6/3.png",
        "/assets/cat6/4.png",
      ],
    },
    {
      id: 2,
      thumbs: [
        "/assets/cat5/1.png",
        "/assets/cat5/2.png",
        "/assets/cat5/3.png",
        "/assets/cat5/4.png",
      ],
    },
    {
      id: 3,
      thumbs: [
        "/assets/cat4/1.png",
        "/assets/cat4/2.png",
        "/assets/cat4/3.png",
        "/assets/cat4/4.png",
      ],
    },
    {
      id: 4,
      thumbs: [
        "/assets/cat2/1.png",
        "/assets/cat2/2.png",
        "/assets/cat2/3.png",
        "/assets/cat2/4.png",
      ],
    },
    {
      id: 5,
      thumbs: [
        "/assets/cat3/1.png",
        "/assets/cat3/2.png",
        "/assets/cat3/3.png",
        "/assets/cat3/4.png",
      ],
    },
    {
      id: 6,
      thumbs: [
        "/assets/cat1/1.png",
        "/assets/cat1/2.png",
        "/assets/cat1/3.png",
        "/assets/cat1/4.png",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="all-movies">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <CategoryList
            key={"genre" + index}
            title={categoryNames[index]}
            movies={index}
            thumbs={thumbs[index].thumbs}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
