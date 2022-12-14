import React, { Component } from 'react';
import SimpleComponent from './SimpleComponent';
import PureComp from './PureComponent';
import FonctionComp from './FonctionComp';

class ParentComponent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name : 'SpiderMan',
        }
      }
      
      /* shouldComponentUpdate = (nextProps, nextState) => {
        console.log(' shouldComponentUpdate() decide true par defaut');

        console.log(this.state.name);
        console.log(nextProps);

        // if (this.state.name !==  nextState.name) {
        //     return true;
        // }
    
        return true;
      } */
    
      changeToBatman = () => {
        this.setState({
          name : 'BatMan',
        })
      }

    render() {
        console.log('%c RENDER DU COMPOSANT PARENT!','color:orange')
        return (
        <div>
             <p>
              <span className='orange'>Parent Component</span> {this.state.name}
             </p>

            <SimpleComponent  name={this.state.name} />
            <PureComp name={this.state.name} />
            <FonctionComp name={this.state.name} />
            <button onClick={this.changeToBatman}>Changer en BatMan</button>
        </div>
        )
    }
}

export default ParentComponent
