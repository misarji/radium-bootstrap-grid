import Radium from 'radium';
import React from 'react'
import { container, clearfix } from './grid';

class Container extends React.Component {

  render() {
    const { children, style, ...props } = this.props;

    const containerStyle = container(this.props.forceMobile)

    return (
      <div style={[containerStyle, style]} {...props}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}


export default Radium(Container);