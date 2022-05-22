// create your App component here
import React, { useState, useEffect } from "react";

function App() {

    const [dogs, setDogs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // console.log('dogs', dogs)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogs(data);
                setIsLoaded(true);
            });
    }, []);

    // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <p>Loading...</p>;
    //useEffect runs AFTER the component loads, so the code runs this 'if' statement, and when it returns 'false'
    //loads the components, then runs useEffect, which updates state at the end of its function call, setting to 'true'
    //No loading indicator displays henceforth

    return (


       <img src={dogs.message} alt="A Random Dog"/>



    )

}






export default App 