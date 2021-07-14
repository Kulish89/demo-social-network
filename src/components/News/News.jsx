import React from "react";
import classes from "./News.module.css";
const News = () => {
  return (
    <div className={classes.content}>
      News Здесь отображаются новости, это блок прописывается в дивке апп
      враппер контент по запросу (при нажатии на ссылку в навбаре ) /news.
    </div>
  );
};
export default News;
