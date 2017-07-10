<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Submit the 401 Way
===

Submit an assignment the 401 way!

## Basic steps for all assignments

1. Fork this repository _to your own github account_
1. Clone your forked repo locally (`git clone ...`)
1. Start a branch (`git checkout -b dev`)
1. Essentials
    * `.eslintrc`

    ```json
    {
      "env": {
        "node": true,
        "mocha": true,
        "es6": true
      },
      "extends": "eslint:recommended",
      "rules": {
        "no-console": "warn",
        "indent": [
          "error",
          4
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "quotes": [
          "error",
          "single"
        ],
        "semi": [
          "error",
          "always"
        ]
      }
    }
    ```

    * `.gitignore`

    ```
    node_modules
    DS_Store
    ```

    * `package.json`

    ```
    > npm init
    ```

    Add `test` and `start` `script`!

    * `.travis.yml`

    ```yaml
    language: node_js
    node_js:
      - "8"
    ```

1. Repeat until done:
    * Do work
      * Write a test
      * Make it pass
      * Commit
      * Improve Code
      * Commit
    * Repeat
    * Push to your github fork
    * Repeat

1. Submit PR from `<your repo>/<your branch>` to `<class repo>/<branch-with-your-username>`
1. Verify that PR passes Travis CI
1. Submit PR Url and (**These are not optional!!!**):
  * reflection (what happened? how was it?)
  * questions and follow-on interest

### For this assignment

Submit your modularized, tested math library:

1. Library with basic math functions: `add`, `subtract`, `multiple`, `divide`.
1. throw an error `throw new Error('your message')` when attempting to divide by 0
