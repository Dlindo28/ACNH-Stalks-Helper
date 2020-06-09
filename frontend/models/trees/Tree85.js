const mainTypes = ["D", "BS", "SS"];

const SpikeBranch = {
  types: ["BS", "SS"],
  lower: {
    types: ["BS"],
  },
  higher: {
    types: ["SS"],
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
                lower: null,
                higher: null,
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
  higher: null,
};

console.log(Tree85.higher);
