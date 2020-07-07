/**
 * @file Builds model for tree of ratio .85+
 * @author Daniel Lindo
 */

const mainTrends = ["D", "BS", "SS"];

/** @const {Object.<string, *>} - ratio .85+ Tree */
const SpikeBranch = {
  trends: ["BS", "SS"],
  lower: {
    trends: ["BS"],
    notes: 2,
  },
  higher: {
    trends: ["SS"],
    notes: 1,
  },
};

// export const Tree85 = {
//   trends: mainTrends,
//   lower: {
//     trends: mainTrends,
//     lower: {
//       trends: mainTrends,
//       lower: {
//         trends: mainTrends,
//         lower: {
//           trends: mainTrends,
//           lower: {
//             trends: mainTrends,
//             lower: {
//               trends: mainTrends,
//               lower: {
//                 trends: ["D"],
//               },
//               higher: SpikeBranch,
//             },
//             higher: SpikeBranch,
//           },
//           higher: SpikeBranch,
//         },
//         higher: SpikeBranch,
//       },
//       higher: SpikeBranch,
//     },
//     higher: SpikeBranch,
//   },
// };
export const Tree85 = {
  trends: mainTrends,
  higher: SpikeBranch,
};
