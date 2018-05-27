// @flow
import React from "react"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import type { RosterMemberType } from "./types.js"
import RosterMember from "./Member.jsx"

const Roster = (props: {
  rank: string,
  members: Array<RosterMemberType>
}) => (
  <TableRow>
    <TableCell>{props.rank}</TableCell>
    {props.members.map(({
      _id,
      gamertag,
      recruits,
      recruiter,
      dateAdded,
      description,
    }: RosterMemberType) => (
      <RosterMember
        key={_id}
        gamertag={gamertag}
        recruitsAmount={recruits.length}
        recruiter={recruiter}
        dateAdded={dateAdded}
        description={description}
      />
    ))}
  </TableRow>
)

export default Roster
