// @flow
import type { RanksType } from "../SquadRow/flow-types.js"

export interface SquadProps {
  onClick(): boolean,
  onChange(): boolean
  // render(): React.Node
}

export type SquadPropsType = {
  members: Array<RanksType>
};
