import React, { useState, useEffect } from "react";
import "./App.css";

const data = "https://jsonplaceholder.typicode.com/photos";

function App() {
  let [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(data);
        let jsonData = await response.json();
        setUserData(jsonData);
       
        
       };
      //   console.log(userData)
      // let useData = [];
      //   for ( let i=0; i<userData.length; i++ )
      //   {
         
      //     for (const property in userData[i]) {
            
      //       useData.push(`${property}: ${userData[i][property]}`);
            
      //         const result = words.filter(word => word.length > 6);
      //       }
      //     }
         
      //    }
    // console.log(useData)
    //  var randomPic = useData[Math.floor(Math.random()*useData.length)]
    //  console.log(randomPic)
    let useData = [];
for (let i = 0; i < userData.length; i++) {

  for (let property in userData[i]) {
            
          useData.push(`${property}: ${userData[i][property]}`);
        
        
          }
       let d = []
          for ( let i=0; i <useData.length; i++){
            if (userData[i].url) {
              d.push(userData[i])
              console.log(d)
            }

          }

   
}
console.log(useData);
  return (
    <div className="App">
      <div className="user-container">
{/*        
        <h5 className="info-item">{userData}</h5> */}
      </div>
    </div>
  );
}

export default App;

