import { ToyReact, Component } from "./ToyReact";

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

let a = <MyComponent name="a" id="ida">
  <div>123</div>
  </MyComponent>

if(!document.body) {
  document.body = document.createElement('body');
}
ToyReact.render(
  a,
  document.body
)