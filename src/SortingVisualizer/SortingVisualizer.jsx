import { Component } from "react";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    const max = 1000;
    const min = 5;
    for (let i = 0; i <= 100; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <>
        {array.map((value, index) => (
          <div className="array-bar" key={index}>
            {value}
          </div>
        ))}
      </>
    );
  }
}
