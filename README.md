# JavscriptUtilities
A collection of useful, vetted Javascript Utilities

## Code Guidelines
The purpose of this repository is to house useful Javascript utilities that can be easily incorporated with any project that uses Javascript. As such, the utilities should be written with the assumption that no libraries are available. Utils should be written in [http://www.ecma-international.org/ecma-262/6.0/](ES6), and each util should be treated and structured as an [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules](ES6 module). On a yearly basis, the maximum ES version to use should be reevaluated to match BlueState's browser support guidenlines.

### Git Workflow
This site uses the Git Flow workflow as described in detail [here](https://nvie.com/posts/a-successful-git-branching-model/).

**master** always reflects what is on the live site. Only merge into `master` once a successful deployment to the live site has been completed. This merge should always happen from a release branch.

- All in progress work should branch off of the **develop** branch and make pull requests against **develop**. This will allow us to pick & choose which branches get deployed.
- All pull requests require **two** approvals to be considered mergeable.
- Branches containing work on new features should be named with the prefix `feature/` and should also contain a link to the JIRA ticket (if JIRA was used) or a brief meaningful description of the work done, along with instructions on how to test. When applicable (mostly for HTML/CSS work) screenshots of the outcome should be included with the pull request.
- Branches containing bug fixes should be named with the prefix `bugfix/` (NOTE: *not* `bug/` or `bugs/` or `fix/`) followed by either the JIRA ticket number, brief description, or in the case of multiple small fixes, the date followed by the developer initials. So: `bugfix/AD-123` *or* `bugfix/01-01-19-JPD` are both acceptable. Pull requests for bugfixes should contain links to every JIRA ticket to which the fix is responding, along with instructions on how to test. When applicable (mostly for HTML/CSS work) screenshots of the outcome should be included with the pull request.
- Branches containing hotfixes should follow the bugfix rules, but with the prefix `hotfix/`. Hotfixes are only used to merge critical defects into `master` or a release branch and require notifying lead devs and the project manager.
- Release branches should be named with the prefix `release/` and a number corresponding to the release number. New features result in a tenths-place increment. Fixes result in a hundredths-place increment. Big product changes result in a whole number increment.
- All features, and fixes must be merged by pull request *only*.
- Version number in package.json should match the current release version
- Once the version number is incremented and the release branch is merged into `master` a tag should be created named after the version number using the following pattern: `vN.NN.NN` where `N` matches the numerals of the version number.

