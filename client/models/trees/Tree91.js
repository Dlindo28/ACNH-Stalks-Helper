/**
 * @file Builds model for tree of ratio .91+
 * @author Daniel Lindo
 */

const mainTrends = ["R", "BS"];

const spikeBranch = {
  trends: mainTrends,
  lower: {
    trends: mainTrends,
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
        trends: ["BS"],
        notes: 0,
      },
    },
  },
  higher: {
    trends: ["R"],
  },
};

/** @const {Object.<string, *>} - ratio .90+ Tree */
export const Tree91 = {
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
};
