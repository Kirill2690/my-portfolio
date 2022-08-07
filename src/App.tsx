import './App.css'
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Form/Footer";

export default function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

