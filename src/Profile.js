import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";


const images = "https://jsonplaceholder.typicode.com/photos";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  media: {
    height: 200,
    width: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  let [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);
// using fecthApi to fetch data from extenal api souce
  const getGitHubUserWithFetch = async () => {
    const response = await fetch(images);
    let jsonData = await response.json();
    setUserData(jsonData);
  };
// looping throug an array
  let data = [];
  for (let i = 0; i < userData.length; i++) {
    // looping throug an object
    for (const property in userData[i]) {
      //pushing the url property to data array
      if (property === "url") {
        data.push(`${userData[i][property]}`);
      }
    }
  }
  // randomly selecting the picture from data array
  let randomPic = data[Math.floor(Math.random() * data.length)];

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={randomPic}
        />
      </CardActionArea>
    </Card>
  );
}
