# Write Right Now

## [Demo on Heroku](http://writerightnow.herokuapp.com/)

Distraction-free writing app that motivates users to meet their writing goal.

It works like a fitness app: user sets a daily word count goal, and failure to meet said goal has grave consequences.

(Well, not really. The app'll just lock away an entry for every day that the user skipped. Relax.)

## Key Features:

- Minimalistic writing interface

- List for quick overview of writing progress

- Dashboard of writing statistics with rich graphics


## To run:

In the wrn-api directory:

1. `bundle install`

2. `bundle exec bin/rails server`

In the wrn-angular directory:

1. Run `grunt` for building.

2. `grunt serve` which opens to `http://localhost:9000` in your default browser.

