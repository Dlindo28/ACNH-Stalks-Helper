/**
 * @file Builds model for tree of ratio 0+
 * @author Daniel Lindo
 */

/** @const {Object.<string, *>} - ratio 0+ Tree */
export const Tree0 = {
  trends: ["SS"],
  lower: null,
  higher: {
    trends: ["SS"],
    notes: 2,
    lower: {
      trends: ["R"],
    },
    higher: {
      trends: ["SS"],
      notes: 1,
    },
  },
};
