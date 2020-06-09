export const Tree91 = {
  types: ["R", "BS"],
  lower: {
    types: ["R", "BS"],
    lower: {
      types: ["R", "BS"],
      lower: {
        types: ["R", "BS"],
        lower: {
          types: ["R", "BS"],
          lower: {
            types: ["R", "BS"],
            lower: {
              types: ["R", "BS"],
              lower: {
                types: ["R", "BS"],
                lower: {
                  types: ["R"],
                  lower: null,
                  higher: null,
                },
                higher: null,
              },
              higher: null,
            },
            higher: null,
          },
          higher: null,
        },
        higher: rsBranch,
      },
      higher: rsBranch,
    },
  },
  higher: {
    types: ["R"],
    lower: null,
    higher: null,
  },
};

const rsBranch = {
  types: ["R", "BS"],
  lower: {
    types: ["R", "BS"],
    lower: {
      types: ["R"],
      lower: null,
      higher: null,
    },
    higher: {
      types: ["R", "BS*"],
      lower: {
        types: ["R"],
        lower: null,
        higher: null,
      },
      higher: {
        types: ["BS"],
        lower: null,
        higher: null,
      },
    },
  },
  higher: {
    types: ["R"],
    lower: null,
    higher: null,
  },
};
