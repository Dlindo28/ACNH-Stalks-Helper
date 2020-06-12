const mainTypes = ["R", "SS"];

const spikeBranch = {
  types: mainTypes,
  notes: "sell in two intervals",
  lower: {
    types: ["R"],
  },
  higher: {
    types: mainTypes,
    notes: "sell next interval",
    lower: {
      types: ["R"],
    },
    higher: {
      types: ["SS"],
      notes: "sell now",
    },
  },
};

export const Tree60 = {
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
                types: mainTypes,
                lower: {
                  types: mainTypes,
                  lower: {
                    types: ["R"],
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
