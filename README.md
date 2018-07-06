# newrelic-reduced
NewRelic plugin that can be disabled for some users.

## Motivation
Maybe you need to reduce costs by disabling NR browser monitoring for some users. This plugin is for you.

## How to use
Just take code from `lib/index.js`, replace variables and include into `<head></head>` at the first position.
You need do replace for `#{NRID}`, `#{NRKey}`, `#{NRFactor}`:
  * `#{NRID}` is your NR ID.
  * `#{NRKey}` is your NR Key.
  * `#{NRFactor}` is percent integer value describing probability of NR enabling. E.g. value 50 means NR will be enabled for ~50% of users. 0 < `factor` < 100.

In the source code you can find also `isLoggingEnabled` and `opts`:
  * `isLoggingEnabled` is boolean flag allows to enable / disable logging. If enabled then you'll see "NR enabled" message in console every time NR is enabled.
  You can also set `window.NRReducedLogging` to enable logging.
  * `opts` are NR opts object. Check `index.js` for more info.
