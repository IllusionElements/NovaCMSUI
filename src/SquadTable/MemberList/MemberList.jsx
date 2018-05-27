// @flow
import * as React from "react"
import Paper from "@material-ui/core/Paper"
// import { withStyles } from "@material-ui/core/styles"
import { withQuery } from "../../modules/withQuery"
import data from "../../modules/data.js"
import SquadTable from "../SquadTable.jsx"
import type {
  SquadProps,
  SquadPropsType,
} from "./types.js"


class SquadTableContainer extends React.Component<SquadPropsType> implements SquadProps {
  onClick = () => true

  onChange = () => true

  render(): React.Node {
    return (
      <Paper>
        <SquadTable
          members={this.props.members}
        />
      </Paper>
    )
  }
}

export default withQuery((props: { data: string }) => {
  const query = JSON.parse(props.data)
  return {
    members: query,
  }
}, {
  props: {
    data,
  },
})(SquadTableContainer)

// const SquadTable = (props: TableProps) => (
//   <Table />
// )
