import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      );
    } else {
      return null;
    }
  }
}

// Alternative solution:

// export default class ColorBox extends Component {

//   render() {
//     return (
//       <div className="color-box" style={{opacity: this.props.opacity}}>
//         {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
//       </div>
//     )
//   }

// }

// import React, { Component } from 'react';

// export default class ColorBox extends Component {

//   render() {
//     // Note: you can make variables here and use them in your render() JSX below!
//     const newOpacity = this.props.opacity - .1
//     return (
//       <div className="color-box" style={{opacity: this.props.opacity}}>
//         {this.props.opacity < 0 ? null : <ColorBox opacity={newOpacity} />}
//       </div>
//     );
//   }

// }