import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props)      
        this.state = {
    
        }

        console.log('je suis dans le constructor() ENFANT');
    }

    componentDidMount = () => {
        console.log('je suis dans le componentDidMount() ENFANT');
    }
    

    render() {

        console.log('je suis dans le render() ENFANT');
        return (
        <div>
                Hello world

                {
                    console.log('Mise a jour du DOM ENFANT')
                }
        </div>
        )
    }
}

export default ChildComponent;
