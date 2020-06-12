const mainTypes = ["D", "BS", "SS"];

const SpikeBranch = {
  types: ["BS", "SS"],
  lower: {
    types: ["BS"],
    notes: "sell in 2 intervals",
  },
  higher: {
    types: ["SS"],
    notes: "sell next",
  },
};

/* Tree85: */
export const Tree85 = {
  types: mainTypes,
  lower: {
    types: mainTypes,
    lower: {
      types: mainTypes,
      lower: {
        types: mainTypes,
        lower: {
          types: mainTypes,
          lower: {
            types: mainTypes,
            lower: {
              types: mainTypes,
              lower: {
                types: ["D"],
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
