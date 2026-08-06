const originalCoachings = require("../data/coaching");
const coachingOverrides = require("../data/coaching-profile-overrides");
let extraCoachingOverrides = {};
let moreCoachingOverrides = {};

try {
  extraCoachingOverrides = require("../data/coaching-profile-overrides-extra");
} catch (error) {
  if (error.code !== "MODULE_NOT_FOUND") throw error;
}

try {
  moreCoachingOverrides = require("../data/coaching-profile-overrides-more");
} catch (error) {
  if (error.code !== "MODULE_NOT_FOUND") throw error;
}

const allCoachingOverrides = {
  ...coachingOverrides,
  ...extraCoachingOverrides,
  ...moreCoachingOverrides,
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
