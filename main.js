import { ToyReact, Component } from "./ToyReact";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClic={() => this.setState({value: "X"})}>
          {this.state.value ? this.setState.value : ""}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div classname="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div classname="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div classname="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class MyComponent extends Component {
  render() {
    return <div>
        <span>hello</span>
        <span>world!</span>
        <div>
          {true}
          {this.children}
        </div>
    </div>
  }
}

let a = <Board name="a" id="ida">
  <div>123</div>
  </Board>

if(!document.body) {
  document.body = document.createElement('body');
}
ToyReact.render(
  a,
  document.body
)