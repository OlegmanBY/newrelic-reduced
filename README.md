# newrelic-reduced
New Relic plugin that can be disabled for some users.

![New Relic](https://newrelic.com/assets/newrelic/source/NewRelic-logo-bug.svg)

## Motivation
Need to reduce costs by disabling NR browser monitoring for some users? This plugin is for you.

## How to use
Just do 2 steps:
  * Define variables:
      * `window.NRReducedID` is your NR ID.
      * `window.NRReducedKey` is your NR Key.
      * `window.NRReducedFactor` is percent integer value describing probability of NR enabling. E.g. value 50 means NR will be enabled for ~50% of users. 0 < `factor` < 100.
      * `window.NRReducedLogging` is logging boolean setting. If `true` you'll see `NR enabled` message in the console when NR script is enabled.
      * `window.NRReducedOpts` is options for original NR script. Check section *Additional options* below.
  * Import plugin:
      * Use CDN: `<script src="https://cdn.jsdelivr.net/npm/newrelic-reduced@x.x.x/lib/index.js"></script>` where `x.x.x` is [version](https://github.com/DmitryFillo/newrelic-reduced/releases).
      * Use imports: `import 'newrelic-reduced'` or `require('newrelic-reduced')`.
      * Use any other way to include it into HTML from `lib/index.js`.

**NOTES:**
  * You should define variables before import!
  * You should define NR script before any other scripts, better to place it right after `<head>`.

### Variables substitutions
Instead of defining global variables prefixied with `window.NRReduced` you can replace special placeholders in the source code:

  * `#{NRID}` is your NR ID.
  * `#{NRKey}` is your NR Key.
  * `#{NRFactor}` is percent integer value describing probability of NR enabling. E.g. value 50 means NR will be enabled for ~50% of users. 0 < `factor` < 100. Can be string value, e.g. "50".
  * `#{NRIsLoggingEnabled}` is logging boolean setting. If `true` you'll see `NR enabled` message in the console when NR script is enabled. Can be string value, e.g. "true" or "false".
  * `#{NROpts}` is options for original NR script. Can be string value, e.g. "{ ... }". Check section *Additional options* below.

## Additional options
It's some variables from native NR script, check the source code for more info.
```javascript
window.NRReducedOpts = {
    beacon: 'api.example.com',
    jsAgentPath: 'example.com/nr.js',
    errorBeacon: 'apie.example.com',
    sa: 2
};
```

