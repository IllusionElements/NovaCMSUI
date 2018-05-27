/* @flow */

import * as React from "react"
import Table from "@material-ui/core/Table"
import SquadRows from "./SquadRow/SquadRows.jsx"
import type { RanksType } from "./SquadRow/flow-types.js"

export default (props: {
  members: Array<RanksType>
}) => (
  <Table>
    <SquadRows
      members={props.members}
    />
  </Table>
)
