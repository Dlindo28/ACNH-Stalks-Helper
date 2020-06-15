/**
 * @file Builds model for tree of ratio .85+
 * @author Daniel Lindo
 */

const mainTrends = ["D", "BS", "SS"];

const SpikeBranch = {
  trends: ["BS", "SS"],
  lower: {
    trends: ["BS"],
    notes: "sell in 2 intervals",
  },
  higher: {
    trends: ["SS"],
    notes: "sell next",
  },
};

/** @const {Object.<string, *>} - ratio .85+ Tree */
export const Tree85 = {
  trends: mainTrends,
  lower: {
    trends: mainTrends,
    lower: {
      trends: mainTrends,
      lower: {
        trends: mainTrends,
        lower: {
          trends: mainTrends,
          lower: {
            trends: mainTrends,
            lower: {
              trends: mainTrends,
              lower: {
                trends: ["D"],
              },
              higher: SpikeBranch,
            },
            higher: SpikeBranch,
          },
          higher: SpikeBranch,
        },
        higher: SpikeBranch,
      },
      higher: SpikeBranch,
    },
    higher: SpikeBranch,
  },
};
