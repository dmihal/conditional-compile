# Meteor Conditional Compile (beta)

This package allows JavaScript files to be conditionally included in a Meteor
application depending a configuration file.

This can be used to disable features in production or to provide different
settings for different deployments.

## Usage

1. Rename files from `filename.js` to `filename.cond.js`.
2. Create a file called `conditional-include.txt` in the root of your Meteor
   project. This file should include all file prefixes to support.

## Example

If the following `conditional-include.txt` file is used, any file named
`feature1.cond.js` will be included. Any other file with the extension
`.cond.js` will not be included.

```feature1
```

# Limitations
At the moment, the extension only supports JavaScript files and does not
support additional compile steps like ecmascript or coffeescript.
