purgatory
=========

A single-page application that calculates for you the remaining time before your next holidays.

I. How can I use this project?
==============================

@todo

II. How can I work on this project?
================================

1. What tools?
--------------

You will need the following tools (given versions are the one installed on my machine, older versions might fit just as well):

* nodejs (version 0.10.31)
* npm (version 1.4.23)
* globally installed node module 'grunt-cli' (version 0.1.13)

2. Fresh install
----------------

For a fresh install:

1. clone the project on your machine
2. from the root of the repository, run : "sudo npm install && grunt dev"
3. you should now be able to run successfully "http://my-server/purgatory/src/index.html"

3. Local development process
----------------------------

Here is the development process one should follow for a happy development time:

1. run "grunt watch"
2. do your magics
3. wait a little for grunt tasks to finish running
4. test it at "http://my-server/purgatory/dst/index.html"
5. eventually, debug it at "http://my-server/purgatory/src/index.html"

You could also get rid of "grunt watch" and simply run manually "grunt build" for test and "grunt dev" for debug.

4. Git rules
------------

Here are a few git rules one should follow for a happy commit time:

* always, i said **always**, create a new specific branch for your work
* every branch should be named respecting the "underscores" convention
* every branch should be prefixed with "feature_" for a new feature and with "bugfix_" for a debug
* after committing on your branch, you **must**: "pull --ff-only" on master, then "rebase master" on feature_my_feature, and finally "merge feature_my_feature --no-ff" on master

5. Quality rules
----------------

Here are a few conventions one should follow for a happy quality time:

* every identifier and file name should respect camel case
* the name of every JavaScript file that returns a class should start with a capital letter
* every JavaScript file should pass the JsLint test