import React from 'react';
import Header from "./components/Header";
import PersonCards from "./components/PersonCards";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <PersonCards/>
            <Footer/>
        </div>
    );
}

export default App;
