import './App.css';
import React, {Component} from "react"
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import PageTreads from "./PageForums";
import PageThread from "./PageThread";
import {} from "./forums.css"
import { Redirect } from 'react-router';
import {withRouter} from "react-router";


class App extends Component {


    render (){
        return <BrowserRouter>
            <div>
                <HeaderRout/>
                <Route path='/forums/:slug?' render={() => <PageTreads/>} />
                <Route path='/thread/:id?' render={() => <PageThread/>} />
                <Route path='/home' render={() => <Home/>} />
            </div>
        </BrowserRouter>
    }
}

const Home = (props) => {
    return <div className="card">

        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>Для того чтобы перейти к форуму, введите его идентификатор.</p>


            </blockquote>
        </div>
    </div>

}

const Header = (props) => {

    let inputRef = React.createRef()

    let redirect = () => {
        console.log(inputRef.current.value)
        props.history.push('/forums/' + inputRef.current.value);
    }

        return (<div>
                <nav className="navbar navbar-light justify-content-between">
                    <NavLink to='/home' className="navbar-brand">Forums</NavLink>
                    <div className="form-inline">
                        <input ref={inputRef} className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>

                        <button onClick={redirect} className="btn btn-outline-success my-2 my-sm-0"
                                type="submit">Search
                        </button>
                    </div>
                </nav>
            </div>)

}

const HeaderRout = withRouter(Header)


export default App;
