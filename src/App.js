import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import PageTreads from "./PageForums";

function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                </header>
                <Route path='/forums/:slug?' render={() => <PageTreads/>} />
            </div>
        </BrowserRouter>
    );
}

export default App;
