/* @flow */
export type MembersType = {
  gamertag: string,
  rankID: number,
  recruits: [string | number],
  recruiter: string | number,
  dateAdded: string | Date,
  roster: {
    division: string,
    squad: string
  }
};

