import React from "react";
import classes from "./Music.module.css";
const Music = () => {
  return (
    <div className={classes.content}>
      Music Здесь отображается музыка , это блок прописывается в дивке апп
      враппер контент по запросу (при нажатии на ссылку в навбаре ) /music.
    </div>
  );
};
export default Music;
