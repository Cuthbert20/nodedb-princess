import React, {Component} from 'react'

export default class UpdatePrincess extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render(){
        //Don't try to change props if you need to manipulate props you need to use a passed down function.
        //also remeber you can pass down props to a stateless function. props as a param you just don't have state. Which is fine if you don't need it
        let everyPrincess = this.props.disney.map(val => {
            return <main>
                <div className="princess-card" key={val.id} >
                    {val.name}
                    <article className="img-map">
                        <img  className="imgs" src={val.img} alt=""/>
                    </article>
                </div>
            </main>
        })
        return(
            <div id="every-princess">
                <p>Update Princess Component</p>
                <p>{everyPrincess}</p>
            </div>
        )
    }
}