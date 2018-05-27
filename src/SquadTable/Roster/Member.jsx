// @flow

import React from "react"
import moment from "moment"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import type { MemberType } from "./types.js"

const Member = ({
  gamertag,
  recruitsAmount,
  recruiter,
  dateAdded,
  description,
}: MemberType) => (
  <TableRow>
    <TableCell>{gamertag}</TableCell>
    <TableCell>Actions</TableCell>
    <TableCell>{recruiter}</TableCell>
    <TableCell>{recruitsAmount}</TableCell>
    <TableCell>{moment(dateAdded).format("l")}</TableCell>
    <TableCell>{description}</TableCell>
  </TableRow>
)

export default Member
