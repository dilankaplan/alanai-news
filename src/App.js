import React, {useState , useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards";
import classNames from "classnames";

import useStyles from "./styles"
const alanKey ='99ecbe618ae3f294c55d7bdce66fcc552e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const[newArticles , setNewsArticles] = useState([]);
  const classes= useStyles();
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command, articles})=>{
        if(command === 'newHeadlines'){
          console.log(articles);
        }
      }
    })
  },[])
  return (
    <div>
      <div className={classes.logoContainer}>
      <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards  articles={newArticles} />
     
    </div>
  );
};

export default App;
