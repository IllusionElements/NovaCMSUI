// @flow
import * as React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const { Component, Fragment } = React

type StateType = {
  open: boolean
};

type PropsType = {
  name: string
};

interface MenuContainerInterface {
  onChange: () => boolean
}

const MenuItems = ({ onClick }: {onClick: ()=>boolean}) => (
  <>
    <MenuItem onClick={onClick}>Delete Member</MenuItem>
    <MenuItem onClick={onClick}>Edit Rank</MenuItem>
    <MenuItem onClick={onClick}>Edit Member</MenuItem>
  </>
)

class MenuContainer extends Component<PropsType, StateType> implements MenuContainerInterface {
  state = {
    open: false,
  }
  onChange = () => false

  render(): React.Node {
    return (
      <Fragment>
        <Button />
        <Menu
          open={this.state.open}
          close={this.props.name}
        >
          <MenuItems
            onClick={this.onChange}
          />
        </Menu>
      </Fragment>
    )
  }
}

export default MenuContainer
