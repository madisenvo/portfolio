import React from "react";
import Card from "../../components/Card/Card.js";
import textImg from "./assets/text-editor.png";
// import natImg from "./assets/nat-park.png";
import gopherImg from "./assets/gopher.png";
// import weatherImg from "./assets/weather.png";
// import schedulerImg from "./assets/scheduler.png";
import turnipImg from "./assets/turnip.png";
// import quizImg from "./assets/quiz.png";


const textEditor = {
  img: textImg,
  name: "Text Editor",
  github: "https://github.com/madisenvo/Text-Editor",
  deployed: "https://salty-scrubland-79160.herokuapp.com/",
};

// const nationalPark = {
//   img: natImg,
//   name: "National Park Finder",
//   github: "https://github.com/madisenvo/National-Park-Finder",
//   deployed: "https://madisenvo.github.io/National-Park-Finder/",
// };

const gopher = {
  img: gopherImg,
  name: "Gopher a Friend",
  desc: "Chatroom for students to discuss areas of interest. Allows post creation, editing, and deletion. Built using HTML, CSS, Express.js, Handlebars.js, Heroku, Javascript, Node.js, OnWebChat.",
  github: "https://github.com/madisenvo/Gopher-a-Friend",
  deployed: "https://gopher-a-friend.herokuapp.com/login",
};

// const weather = {
//   img: weatherImg,
//   name: "Weather Dashboard",
//   github: "https://github.com/madisenvo/Weather-Dashboard",
//   deployed: "https://madisenvo.github.io/Weather-Dashboard/",
// };

// const scheduler = {
//   img: schedulerImg,
//   name: "Work Day Scheduler",
//   github: "https://github.com/madisenvo/Work-Day-Scheduler",
//   deployed: "https://madisenvo.github.io/Work-Day-Scheduler/",
// };

const turnip = {
  img: turnipImg,
  name: "Turnip the Zine",
  desc: "Modern zine featuring local bands, a merch store, and a comments section where users can post, as well as edit and delete their comments. Built with Apollo, Bootstrap, CSS, GraphQL, HTML, JavaScript, Node.js, React, Redux, Stripe.",
  github: "https://github.com/madisenvo/Turnip-the-Zine",
  deployed: "https://turnip-the-zine.herokuapp.com/",
};

// const quiz = {
//   img: quizImg,
//   name: "Code Quiz",
//   github: "https://github.com/madisenvo/Code-Quiz",
//   deployed: "https://madisenvo.github.io/Code-Quiz/",
// };

const projects = [gopher, turnip];
const sort = projects.sort((a, b) => a.name.localeCompare(b.name));

export default function Portfolio() {
  return (
    <div className="container">
      {sort.map((item) => (
        <Card
          img={item.img}
          name={item.name}
          desc={item.desc}
          github={item.github}
          deployed={item.deployed}
        />
      ))}
    </div>
  );
}
