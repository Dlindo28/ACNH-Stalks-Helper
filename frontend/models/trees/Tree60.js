/**
 * @file Builds model for tree of ratio .60+
 * @author Daniel Lindo
 */

const mainTrends = ["R", "SS"];

const spikeBranch = {
  trends: mainTrends,
  notes: 2,
  lower: {
    trends: ["R"],
  },
  higher: {
    trends: mainTrends,
    notes: 1,
    lower: {
      trends: ["R"],
    },
    higher: {
      trends: ["SS"],
      notes: 0,
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
