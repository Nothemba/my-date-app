// import React, { useState, useEffect } from "react";
// import "./App.css";

// const data = "https://jsonplaceholder.typicode.com/photos";

// export default function App() {
//   let [userData, setUserData] = useState({});

//   useEffect(() => {
//     getGitHubUserWithFetch();
//   }, []);

//   const getGitHubUserWithFetch = async () => {
//     const response = await fetch(data);
//     let jsonData = await response.json();
//     setUserData(jsonData);
//   };

//   let useData = [];
//   for (let i = 0; i < userData.length; i++) {
//     for (const property in userData[i]) {
//       if (property == "url") {
//         useData.push(`${userData[i][property]}`);
//       }
//     }
//   }
// }
//   let randomPic = useData[Math.floor(Math.random() * useData.length)];
//   console.log(randomPic);
  

//   return (
//     <div className="App">
//       <div className="user-container">     
//       <h5 className="info-item">{randomPic}</h5>
//       </div>
//     </div>
//   );
// }

// export default App;

  
      

// function profileDisplay(props) {
//   return <Profile profile={data} />;
// }

// export default profileDisplay;