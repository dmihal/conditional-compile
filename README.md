# Meteor Conditional Compile (beta)

This package allows JavaScript files to be conditionally included in a Meteor
application depending on the configured settings.

This can be used to disable features in production or to provide different
settings for different deployments.

## Usage

1. Rename files from `filename.js` to `filename.cond.js`.
2. Add a `includeFiles` array to your `settings.json` file. For more
  information about Meteor settings, see the
  [documentation](https://docs.meteor.com/api/core.html#Meteor-settings).
