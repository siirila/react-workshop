# React Workshop

## Thank you!

- [Create React App](https://github.com/facebookincubator/create-react-app).
- [Matt Zabriskie](https://github.com/mzabriskie) for his [react-workshop](https://github.com/mzabriskie/react-workshop) upon which this one is based.
- [KADIRA](https://github.com/kadirahq) for their [react-storybook](https://github.com/kadirahq/react-storybook)

## Setup

You need to have the latest [`node`](https://nodejs.org/en/), [`yarn`](https://yarnpkg.com/), and [`git`](https://git-scm.com/) installed.
Then run:

```
git clone https://github.com/kentcdodds/react-workshop.git
cd react-workshop
yarn run setup
```

### Note on yarn

If you don't have `yarn` installed and don't want to use it for some reason, you can use `npm` as well. Instead of
`yarn run setup`, run `node ./scripts/install && npm run validate` and enjoy waiting (and hopefully things don't break
for you). May be a good idea to still run `node ./scripts/verify` to verify you have the right version of other things
too.

### All set up!

If you didn't get any errors running the setup scripts, you're ready to start the workshop! 🎉 🎊

If you want to explore a bit, there are a few things you can do:

1. go ahead and open `intro/exercises-final/01-js.html` in a browser (don't peak at the solution!). It should say `Hello World`. Go ahead and open the others if you like.
2. Then you can run `yarn run storybook` and open `http://localhost:9009` and poke around the storybook for our exercises :)
3. Then you could run the app with `yarn start`. This should pop open a window with a stopwatch which we'll be building.

### Any errors?

If you see any errors, read the output and try to follow any instructions. If that doesn't work, feel free to
[file an issue](https://github.com/kentcdodds/react-workshop/issues/new) to ask for help and I'll help if I can.
Good luck!

## LICENSE

MIT
