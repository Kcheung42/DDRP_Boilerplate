import React from 'react';

export class HelloWorld extends React.Component {
  render(){
    return(
        <div>
          <div>
            Hello World!
          </div>
          {this.props.children}
        </div>
        )
  }
}
