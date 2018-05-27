/* @flow */
import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import Roster from '../Roster/roster.jsx'
import type { RanksType } from './flow-types.js'

export default (props: {
  members: Array<RanksType>
}) => (
  <TableBody>
    {props.members.map(({
      _id,
      rankName,
      members,
    }: RanksType) => (
      <Roster
        key={_id}
        rank={rankName}
        members={members}
      />
    ))}
  </TableBody>
)
