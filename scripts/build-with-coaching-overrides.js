const originalCoachings = require("../data/coaching");
const coachingOverrides = require("../data/coaching-profile-overrides");
let extraCoachingOverrides = {};

try {
  extraCoachingOverrides = require("../data/coaching-profile-overrides-extra");
} catch (error) {
  if (error.code !== "MODULE_NOT_FOUND") throw error;
}

const allCoachingOverrides = {
  ...coachingOverrides,
  ...extraCoachingOverrides,
};

const coachingPath = require.resolve("../data/coaching");
const mergedCoachings = originalCoachings.map((coaching) => ({
  ...coaching,
  ...(allCoachingOverrides[coaching.id] || {}),
}));

require.cache[coachingPath] = {
  id: coachingPath,
  filename: coachingPath,
  loaded: true,
  exports: mergedCoachings,
};

require("../src/build");
