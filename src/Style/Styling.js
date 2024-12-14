import React, { Component } from 'react';
import './Style.css';  
class Styling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false, 
    };
  }
  handleClick = () => {
    this.setState({ showResult: true });
  };

  render() {
    const subjects = [
      { id: 1, name: 'Tamil', marks: 78 },
      { id: 2, name: 'English', marks: 90 },
      { id: 3, name: 'Maths', marks: 79 },
      { id: 4, name: 'Science', marks: 94 },
    ];

    return (
      <div className="container">
        <h2>Welcome Hema</h2>
        {!this.state.showResult ? (
          <button onClick={this.handleClick} className="view-button">
            View Result
          </button>
        ) : (
          <div>
            <h3>View Result</h3>
            <ul>
              {subjects.map(subject => (
                <li key={subject.id}>
                  {subject.name} {subject.marks}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Styling;
