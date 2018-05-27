// @flow
import * as React from "react"

type ClockStateType = {
  currentTime: string
};
type ClockPropsType = {
  styles: {}
};


export default class Clock extends React.Component<ClockPropsType, ClockStateType> {
  state = {
    currentTime: `${new Date().getHours()}:${`${new Date().getMinutes()}`.padStart(2, "0")}:${`${new Date().getSeconds()}`.padStart(2, "0")}`,
  }

  componentDidMount() {
    setInterval(() => this.setState(() => ({
      currentTime: `${new Date().getHours()}:${`${new Date().getMinutes()}`.padStart(2, "0")}:${`${new Date().getSeconds()}`.padStart(2, "0")}`,
    })), 1000)
  }

  render(): React.Node {
    return (
      <h1 className="red-text darken-1  center-align" style={this.props.styles}>{this.state.currentTime}</h1>
    )
  }
}
