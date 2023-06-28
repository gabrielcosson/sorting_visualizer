import { Component } from "react";
import "./SortingVisualizer.css";
import bubbleSort from "../Algorithms/bubbleSort";

const ANIMATION_SPEED = 10;
const NUMBER_OF_BARS = 100;

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
    const max = 900;
    const min = 5;
    for (let i = 0; i <= NUMBER_OF_BARS; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array });
  }

  bubbleSort() {
    const animations = bubbleSort(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const [barOneIndex, barTwoIndex] = animations[i].indexes;
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;

      if (animations[i].step === "compare") {
        setTimeout(() => {
          barOneStyle.backgroundColor = "red";
          barTwoStyle.backgroundColor = "red";
        }, i * ANIMATION_SPEED);
      } else if (animations[i].step === "swap") {
        setTimeout(() => {
          barOneStyle.height = `${animations[i].values[1]}px`;
          barTwoStyle.height = `${animations[i].values[0]}px`;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = "turquoise";
          barTwoStyle.backgroundColor = "turquoise";
        }, i * ANIMATION_SPEED);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <>
        <button onClick={() => this.resetArray()}>New Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <div className="array-container">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={`bar-${index}`}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}
