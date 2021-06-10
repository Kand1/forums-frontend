import {Component} from "react";
import {getForumInfo, getTreads} from "./api";
import {withRouter} from "react-router";
import {compose} from "redux";
import {} from "./forums.css"
import {NavLink} from "react-router-dom";


class PageTreads extends Component {

    constructor(props) {
        super(props)
        this.state = {treads: null, forumInfo: null}
    }

    componentDidMount() {

        const name = this.props.match.params.slug
        getTreads(name).then(
            data =>{
                this.setState({...this.state, treads: data})
            }
        )

        getForumInfo(name).then(
            data =>{

                this.setState({...this.state, forumInfo: data})
            }
        )

    }

    render(){

        let items = null
        if (this.state.treads != null){
             items = this.state.treads.map(
                t => <Tread

                    message = {t.message} id = {t.id} title = {t.title} author = {t.author}/>
            )
        }
        else {
            items = <div>SORE</div>
        }

    return <div>
        <ForumInfo forumInfo = {this.state.forumInfo}/>
        {items}
    </div>
    }
}

const ForumInfo = (props) => {
    let forumInf = <div>Wait Plz</div>
    if (props.forumInfo){
        forumInf = <div className="card border-dark mb-3" >
            <div className="card-header">Форум "{props.forumInfo.title}"</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Автор: {props.forumInfo.user}</h5>
                <p className="card-text">Количество веток: {props.forumInfo.threads}; Постов: {props.forumInfo.posts}</p>
            </div>
        </div>
    }
    return <div>
        {forumInf}
    </div>
}

const Tread = (props) => {


    return <div className="card">
        <NavLink to = {'/thread/' + props.id} className="card-header">
            {props.title}
        </NavLink>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{props.message}</p>
                <footer className="blockquote-footer">{props.author} <cite title="Source Title">-Author</cite>
                </footer>
            </blockquote>
        </div>
    </div>
}

export default compose(
    withRouter
)(PageTreads)