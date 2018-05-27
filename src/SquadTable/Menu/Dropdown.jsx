// @flow
import * as React from "react"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const { Component, Fragment } = React

type StateType = {
  anchorEl: string | null
};
type PropType = {}
interface MenuInterface {
  state: StateType,
  onClick(): () => null,
  onClose(): () => null
}

const DropDown = ({  onClose,  anchorEl, id, menuData }) => (
  <>
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={onClose}
    >
      {menuData.items.map(({name}) => (
        <MenuItem onClick={onClose}>{name}</MenuItem>
      ))}
    </Menu>
  </>
)
class DropDownMenu extends Component<PropType, StateType> implements MenuInterface {
  state = {
    anchorEl: null,
  }

  onClick = () => this.setState(()=>({
    anchorEl: this.btnRef.current
  }))

  onClose = () => null

  btnRef = React.createContext()

  render(): React.Node {
    const Button = this.props.anchorButton
    return (
      <>
        <Button
          arias={this.props.arias}
          anchorEl={this.state.anchorEl  ? this.props.menuName : null}
          onClick={this.onClick}
          ref={this.brn}
        >
          {this.props.actionName}
        </Button>
        <DropDown
          id={this.props.menuName}
          anchorEl={this.state.anchorEl}
          onClose={this.onClose}
        />
      </>
    )
  }
}