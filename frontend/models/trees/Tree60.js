/**
 * @file Builds model for tree of ratio .60+
 * @author Daniel Lindo
 */

const mainTrends = ["R", "SS"];

const spikeBranch = {
  trends: mainTrends,
  notes: "sell in two intervals",
  lower: {
    trends: ["R"],
  },
  higher: {
    trends: mainTrends,
    notes: "sell next interval",
    lower: {
      trends: ["R"],
    },
    higher: {
      trends: ["SS"],
      notes: "sell now",
    },
  },
};

/** @const {Object.<string, *>} - ratio .60+ Tree */
export const Tree60 = {
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
                trends: mainTrends,
                lower: {
                  trends: mainTrends,
                  lower: {
                    trends: ["R"],
                  },
                  higher: spikeBranch,
                },
                higher: spikeBranch,
              },
              higher: spikeBranch,
            },
            higher: spikeBranch,
          },
          higher: spikeBranch,
        },
        higher: spikeBranch,
      },
      higher: spikeBranch,
    },
    higher: spikeBranch,
  },
  higher: spikeBranch,
};
