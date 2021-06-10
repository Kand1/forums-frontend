import {Component} from "react";
import {getForumInfo, getPosts, getThread, getTreads} from "./api";
import {compose} from "redux";
import {withRouter} from "react-router";
import {} from "./forums.css"

class PageThread extends Component {

    constructor(props) {
        super(props)
        this.state = {thread: null, posts: null}
    }

    componentDidMount() {

        const id = this.props.match.params.id
        getThread(id).then(
            data => {
                this.setState({...this.state, thread: data})
            }
        )
        getPosts(id).then(
            data => {
                this.setState({...this.state, posts: data})
            }
        )


    }

    render() {
        let items = null
        if (this.state.posts != null){
            items = this.state.posts.map(
                t => <Post
                    info = {t}
                    />
            )
        }
        else {
            items = <div>SORE</div>
        }
        return <div>
            <ThreadInfo thread = {this.state.thread}/>
            <hr className='hrr'/>
            {items}
        </div>
    }


}

const ThreadInfo = (props) => {
    let forumInf = <div>Wait Plz</div>
    if (props.thread){
        forumInf = <div className="card border-dark mb-3" >
            <div className="card-header">Ветка "{props.thread.title}"</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Автор: {props.thread.author}</h5>
                <p className="card-text">Сообщение: {props.thread.message}</p>
            </div>
        </div>

    }
    return <div>
        {forumInf}
    </div>
}

const Post = (props) => {


    return <div className="card">
        <div className="card-header">
            {props.info.author}
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{props.info.message}</p>
                <footer className="blockquote-footer">{props.info.created} <cite title="Source Title">---</cite>
                </footer>
            </blockquote>
        </div>
    </div>
}

export default compose(
    withRouter
)(PageThread)