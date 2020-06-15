/**
 * @file Builds model for tree of ratio .80+
 * @author Daniel Lindo
 */

const mainTrends = ["SS", "BS"];

const spikeBranch = {
  trends: mainTrends,
  lower: {
    trends: ["BS"],
  },
  higher: {
    trends: ["SS"],
  },
};

/** @const {Object.<string, *>} - ratio .80+ Tree */
export const Tree80 = {
  trends: mainTrends,
  higher: spikeBranch,
};
