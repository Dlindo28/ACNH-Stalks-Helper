const mainTypes = ["R", "BS"];

const spikeBranch = {
  types: mainTypes,
  lower: {
    types: mainTypes,
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
        types: ["BS"],
        notes: "sell now",
      },
    },
  },
  higher: {
    types: ["R"],
  },
};

export const Tree91 = {
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
};
