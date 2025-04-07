import React from "react";

// componente criado com classe
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
    };
  }

  componentDidMount() {
    console.log("é executado quando o usuario acessa pela primeira vez");
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
