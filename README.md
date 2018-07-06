# newrelic-reduced
NewRelic plugin that can be disabled for some users.

## Motivation
Maybe you need to reduce costs by disabling NR browser monitoring for some users. This plugin is for you.

## How to use #1 (replace vars and copy-paste into the head)
Just take code from `lib/index.js`, replace variables and include into `<head></head>` at the first position.

You need to do replace for `#{NRID}`, `#{NRKey}`, `#{NRFactor}`:
  * `#{NRID}` is your NR ID.
  * `#{NRKey}` is your NR Key.
  * `#{NRFactor}` is percent integer value describing probability of NR enabling. E.g. value 50 means NR will be enabled for ~50% of users. 0 < `factor` < 100.

## How to use #2 (import and set JS vars for id, key and factor)
Just import this plugin.

You need to define this variables before import:
  * `window.NRReducedID` is your NR ID.
  * `window.NRReducedKey` is your NR Key.
  * `window.NRReducedFactor` is percent integer value describing probability of NR enabling. E.g. value 50 means NR will be enabled for ~50% of users. 0 < `factor` < 100.


## Additional options
In the source code you can find also `isLoggingEnabled` and `opts`:
  * `isLoggingEnabled` is boolean flag allows to enable / disable logging. If enabled then you'll see "NR enabled" message in console every time NR is enabled.
  You can also set `window.NRReducedLogging` to enable logging.
  * `opts` are NR opts object. You can set `window.NRReducedOpts` to define opts. Check sources `index.js` for more info.
