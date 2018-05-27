// @flow
import * as React from "react"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"

type DropdownButtonPropsType = {
  name: string,
  onClick: () => boolean
};

const DropdownButton = ({ name, onClick }: DropdownButtonPropsType) => (
  <Button
    variant="raised"
    color="primary"
    size="medium"
    onClick={onClick}
  > { name }
    <ExpandMore />
  </Button>
)

export default DropdownButton
