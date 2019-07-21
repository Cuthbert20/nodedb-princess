import React, {Component} from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default class Main extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render(){
        return(
            <Navbar />
        )
    }
}