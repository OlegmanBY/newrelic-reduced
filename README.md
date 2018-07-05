# newrelic-reduced
NewRelic plugin that can be disabled for some users.

## Motivation
Maybe you need to reduce costs by disabling NR browser monitoring for some users. This plugin is for you.

## How to use
Just copy-paste code from `index.js` to your head script tag. 
Self-invoking function receives `id`, `key`, `factor`, `logging` params:
  * `id` is your NR ID.
  * `key` is your NR Key.
  * `factor` is percent int value describing probability of NR enabling. E.g. value 50 means that NR will be enabled  for 50% of users. 0 < `factor` < 100.
  * `logging` is boolean flag allows to enable / disable logging. If enabled then you'll see "NR is enabled" message in console if NR will be enabled.
  
## Developing flow
Use `npm install` then `npm run build` to build index.html with script included to <head>. You may also use `npm run webserver` to run local webserver with testing page.
