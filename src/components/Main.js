import React, {Component} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import UpdatePrincess from './UpdatePrincess'

export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            disney: []
        }
    }
    componentDidMount(){
        axios.get('/api/princess').then(res => this.setState({disney: res.data}))
    }
    render(){
        return(
            <div>
            <Navbar />
            <UpdatePrincess disney={this.state.disney} />
            </div>
        )
    }
}