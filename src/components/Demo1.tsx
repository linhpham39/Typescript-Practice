import { Component } from "react";

interface Demo1Props {
  name: string;
  clazz: string;
  children: string;
}

interface Demo1State {
  count: number;
}

class Demo1 extends Component<Demo1Props, Demo1State> {
  constructor(props: Demo1Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, clazz, children } = this.props;

    return (
      <>
        <h1>
          Hello {name} from {clazz}. Chào mừng bạn đến với {children}
        </h1>
        <button value={this.state.count} />
      </>
    );
  }
}

export default Demo1;
