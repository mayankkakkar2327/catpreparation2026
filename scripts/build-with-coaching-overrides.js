const originalCoachings = require("../data/coaching");
const coachingOverrides = require("../data/coaching-profile-overrides");

const coachingPath = require.resolve("../data/coaching");
const mergedCoachings = originalCoachings.map((coaching) => ({
  ...coaching,
  ...(coachingOverrides[coaching.id] || {}),
}));

require.cache[coachingPath] = {
  id: coachingPath,
  filename: coachingPath,
  loaded: true,
  exports: mergedCoachings,
};

require("../src/build");
