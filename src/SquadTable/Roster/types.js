// @flow

type IdType = {
  _id: string
};

type RecruitsType = {
  recruits: string[]
};

type RecruitsAmountType = {
  recruitsAmount: number
};

type MemberPropType = {
  gamertag: string,
  recruiter: string,
  dateAdded: string,
  description: string
};

export type MemberType = MemberPropType & RecruitsAmountType;

export type RosterMemberType = IdType & RecruitsType & MemberPropType;
