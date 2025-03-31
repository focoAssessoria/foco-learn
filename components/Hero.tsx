import HeroCard from "./HeroCard";

const Hero = async () => {
  const heroData = [
    {
      title: "Tecnologias Aplicadas à Produção",
      overview:
        "O campo evoluiu, e quem não acompanha fica para trás. Descubra como a tecnologia pode melhorar seus resultados, reduzir desperdícios e garantir um manejo mais eficiente. Veja na prática quais ferramentas fazem diferença no dia a dia da fazenda.",
    },
    {
      title: "Gestão de Grandes Propriedades",
      overview:
        "Administrar uma fazenda de grande porte exige controle, estratégia e boas decisões. Aprenda como gerenciar custos, aumentar a produtividade e tornar seu negócio mais rentável. Técnicas e ferramentas para facilitar a rotina e melhorar os resultados.",
    },
    {
      title: "Liderança e Gestão de Equipe",
      overview:
        "Uma fazenda só funciona bem com uma equipe alinhada e motivada. Aprenda a liderar com eficiência, melhorar o desempenho dos funcionários e criar um ambiente produtivo. Torne-se um gestor respeitado e conquiste melhores resultados no campo.",
    },
    {
      title: "Rotinas Diárias na Fazenda",
      overview:
        "A organização da rotina é essencial para garantir uma fazenda produtiva e sem prejuízos. Saiba como estruturar tarefas, otimizar processos e garantir o bem-estar dos animais e trabalhadores. Tudo o que você precisa para um dia a dia mais eficiente.",
    },
    {
      title: "Estratégias de Investimento e Escalabilidade",
      overview:
        "Fazenda lucrativa é fazenda bem planejada. Descubra como investir com inteligência, reduzir custos e expandir sua produção sem comprometer a rentabilidade. Estratégias práticas para quem quer crescer de forma sustentável.",
    },
    {
      title: "Implementação de Ferramentas Modernas",
      overview:
        "O agro não para de evoluir! Conheça as máquinas, equipamentos e novas tecnologias que podem transformar sua produção. Aumente a eficiência, reduza custos e melhore o desempenho da sua fazenda com as ferramentas certas.",
    },
    {
      title: "Treinamento Completo do Software Foco",
      overview:
        "Não perca tempo tentando adivinhar como funciona! Aprenda a usar o Software Foco de forma simples e prática, aproveitando ao máximo todas as ferramentas para gestão da sua fazenda. Mais controle, mais produtividade e menos dor de cabeça.",
    },
    {
      title: "Como Utilizar Dados para Otimização",
      overview:
        "Quem tem informação, tem poder! Descubra como os dados podem ajudar na tomada de decisões estratégicas, melhorar a produtividade e reduzir custos. Use a tecnologia a seu favor e leve sua fazenda para outro nível.",
    },
  ];

  const randomHero = Math.floor(Math.random() * heroData.length);

  return (
    <div>
      <HeroCard randomHero={heroData[randomHero]} />
    </div>
  );
};

export default Hero;
