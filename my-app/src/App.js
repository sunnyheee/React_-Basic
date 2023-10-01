import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <>
        <textarea
          type="text"
          vlaue={this.state.text}
          onChange={this.handleChange}
        />
        <p>{this.state.text}</p>
      </>
    );
  }
}

export default App;
