import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
//import FavouriteProjects from "../components/FavouriteProjects";
//import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import FavouriteProjects from "../components/FavouriteProjects";
//import getLatestRepos from "@lib/getLatestRepos";
//import userData from "@constants/data";
import { React, useState } from "react";
import { withTranslation, i18n } from "../i18n"

export default function Home({ repositories }) {

  const handleClick = (e) =>{
    language=="en"? setLanguage("zh") : setLanguage("en")
    i18n.changeLanguage(language)
  }

  const [language, setLanguage] = useState("en")

  return (
    <ContainerBlock
      title="Daria Smirnova - Developer, Designer, Creator"
      description="This is a developer portfolio that gets me a job."
    >
      <button aria-controls="simple-menu" aria-haspopup="true"  color="primary" onClick={handleClick} >
           {i18n.language=="en"? "English" : "中文"}
        </button>
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
//   console.log(process.env.GITHUB_AUTH_TOKEN);
//   let token = process.env.GITHUB_AUTH_TOKEN;

//   const repositories = await getLatestRepos(userData, token);
//   // console.log("REPOSITORIES", repositories);

//   return {
//     props: {
//       repositories,
//     },
//   };
// };