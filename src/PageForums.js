import {Component} from "react";
import {getTreads} from "./api";
import {withRouter} from "react-router";
import {compose} from "redux";



class PageTreads extends Component {

    constructor(props) {
        super(props)
        this.state = {treads: null}
    }

    componentDidMount() {

        const name = this.props.match.params.slug
        getTreads(name).then(
            data =>{
                this.setState({treads: data})
            }
        )

    }

    render(){

        let items = null
        if (this.state.treads != null){
             items = this.state.treads.map(
                t => <Tread id = {t.id} title = {t.title} author = {t.author}/>
            )
        }
        else {
            items = <div>SORE</div>
        }

    return <div>
        {items}
    </div>
    }
}

const Tread = (props) => {


    return <div>
        <div>
            {props.id}
        </div>
        <div>
            {props.title}
        </div>
        <div>
            {props.author}S
        </div>
    </div>
}

export default compose(
    withRouter
)(PageTreads)