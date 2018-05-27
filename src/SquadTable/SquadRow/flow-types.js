// @flow
import type { RosterMemberType } from '../Roster/types.js'

export type RanksType = {
  _id: string | number,
  rankName: string,
  members: Array<RosterMemberType>
};
