const mainTypes = ["SS", "BS"];

const spikeBranch = {
  types: mainTypes,
  lower: {
    types: ["BS"],
  },
  higher: {
    types: ["SS"],
  },
};

export const Tree80 = {
  types: mainTypes,
  higher: spikeBranch,
};
