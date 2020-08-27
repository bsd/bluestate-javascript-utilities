# JavscriptUtilities
A collection of useful, vetted Javascript Utilities

<dl>
<dt><a href="#codeguidelines">Code Guidelines</a></dt>
<dt><a href="#naming">Naming</a></dt>
<dt><a href="#gitworkflow">Git Workflow</a></dt>
<dt><a href="#linting">Linting</a></dt>
<dt><a href="#generating">Generating documentation</a></dt>
<dt><a href="#documentation">Utilities documentation</a></dt>
</dl>

<a name="codeguidelines"></a>
## Code Guidelines
The purpose of this repository is to house useful Javascript utilities that can be easily incorporated with any project that uses Javascript. As such, the utilities should be written with the assumption that no libraries are available. Utils should be written in [ES6](http://www.ecma-international.org/ecma-262/6.0/), and each util should be treated and structured as an [ES6 module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). On a yearly basis, the maximum ES version to use should be reevaluated to match BlueState's browser support guidenlines.

<a name="naming"></a>
## Naming
Util functions should be named after the work they perform. Util names should be in all lowercase, with no non alphabeltial characters in the name. Util filenames should match the function names _unless_ a Util file contains multiple related functions (see loader.js). In that case, the filename should describe what groups the functions. Function params should be camelCase.
Class names should follow the ES6 class naming conventions, i.e. classnames should be TitleCase, with each word capitalized, with no non alphabeltial characters in the name. Functions in that class should follow the above function naming conventions. Class filenames should match the classname but in all lowercase.

<a name="gitworkflow"></a>
### Git Workflow
This site uses the Git Flow workflow as described in detail [here](https://nvie.com/posts/a-successful-git-branching-model/).

**main** always reflects what is on the live site. Only merge into `main` once a successful deployment to the live site has been completed. This merge should always happen from a release branch.

- All in progress work should branch off of the **develop** branch and make pull requests against **develop**. This will allow us to pick & choose which branches get deployed.
- All pull requests require **two** approvals to be considered mergeable.
- Branches containing work on new features should be named with the prefix `feature/` and should also contain a link to the JIRA ticket (if JIRA was used) or a brief meaningful description of the work done, along with instructions on how to test. When applicable (mostly for HTML/CSS work) screenshots of the outcome should be included with the pull request.
- Branches containing bug fixes should be named with the prefix `bugfix/` (NOTE: *not* `bug/` or `bugs/` or `fix/`) followed by either the JIRA ticket number, brief description, or in the case of multiple small fixes, the date followed by the developer initials. So: `bugfix/AD-123` *or* `bugfix/01-01-19-JPD` are both acceptable. Pull requests for bugfixes should contain links to every JIRA ticket to which the fix is responding, along with instructions on how to test. When applicable (mostly for HTML/CSS work) screenshots of the outcome should be included with the pull request.
- Branches containing hotfixes should follow the bugfix rules, but with the prefix `hotfix/`. Hotfixes are only used to merge critical defects into `main` or a release branch and require notifying lead devs and the project manager.
- Release branches should be named with the prefix `release/` and a number corresponding to the release number. New features result in a tenths-place increment. Fixes result in a hundredths-place increment. Big product changes result in a whole number increment.
- All features, and fixes must be merged by pull request *only*.
- Version number in package.json should match the current release version
- Once the version number is incremented and the release branch is merged into `main` a tag should be created named after the version number using the following pattern: `vN.NN.NN` where `N` matches the numerals of the version number.

<a name="linting"></a>
## Linting
[ESLint](https://eslint.org) is available via gulp-eslint to lint the Javascript. See `./eslintrc.js` for the specific ESLint rules, which are essentially the airbnb eslint rules with a few modificactions given BlueState's workflow and client base.

**All utilities _must_ pass linting prior to PR approval. Please lint your code _before_ committing/pushing or creating a PR.**

<a name="generating"></a>
## Generating documentation
This repository uses [jsdoc2md](https://github.com/jsdoc2md) via [gulp](https://gulpjs.com) task to output doucmentation of all utilities into this README. This requires that all utils and classes *must* have valid [JSDoc](https://jsdoc.app) commenting. **Pull requests including utils or classes that do not have valid JSDoc comments will be rejected until such commentary is added.**

To generate documentation, run either the default gulp task (e.g., `gulp`) or `gulp document`. 

The repository README is generated and overwritten when this task is run; to edit the README text above the Utilities documentation, edit the file in `./md/README.md`

<a name="documentation"></a>
# Utilities documentation
