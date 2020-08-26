# JavscriptUtilities
A collection of useful, vetted Javascript Utilities

<dl>
<dt><a href="#codeguidelines">Code Guidelines</a></dt>
<dt><a href="#gitworkflow">Git Workflow</a></dt>
<dt><a href="#generating">Generating documentation</a></dt>
<dt><a href="#documentation">Utilities documentation</a></dt>
</dl>

<a name="codeguidelines"></a>
## Code Guidelines
The purpose of this repository is to house useful Javascript utilities that can be easily incorporated with any project that uses Javascript. As such, the utilities should be written with the assumption that no libraries are available. Utils should be written in [ES6](http://www.ecma-international.org/ecma-262/6.0/), and each util should be treated and structured as an [ES6 module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). On a yearly basis, the maximum ES version to use should be reevaluated to match BlueState's browser support guidenlines.

<a name="gitworkflow"></a>
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
## Classes

<dl>
<dt><a href="#MessageBus">MessageBus</a></dt>
<dd><p>A class which helps sending messages accoss modules via a DOM node</p>
</dd>
<dt><a href="#SocialShare">SocialShare</a></dt>
<dd></dd>
<dt><a href="#Validation">Validation</a></dt>
<dd><p>A class which handles field validations</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#alphabetizearray">alphabetizearray(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Alphabetizes array by value</p>
</dd>
<dt><a href="#closest">closest(elem, selector)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Looks for ancestor elemnt with given selector</p>
</dd>
<dt><a href="#convertdate">convertdate(ISO)</a> ⇒ <code>String</code></dt>
<dd><p>Convert date to human readable</p>
</dd>
<dt><a href="#getcookie">getcookie(name)</a> ⇒ <code>String</code></dt>
<dd><p>Given a cookie name, returns value of that cookie</p>
</dd>
<dt><a href="#setcookie">setcookie(name, value, expire)</a></dt>
<dd><p>Create and set a cookie</p>
</dd>
<dt><a href="#debounce">debounce(func, wait, immediate)</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function, that, as long as it continues to be invoked, will not
be triggered. The function will be called after it stops being called for
N milliseconds. If <code>immediate</code> is passed, trigger the function on the
leading edge, instead of the trailing.</p>
</dd>
<dt><a href="#decodehtml">decodehtml(data)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Parse to HTML</p>
</dd>
<dt><a href="#generaterandominteger">generaterandominteger(max)</a> ⇒ <code>Number</code></dt>
<dd><p>Returns a random number</p>
</dd>
<dt><a href="#getuserlangauge">getuserlangauge(uniform)</a></dt>
<dd><p>Returns user&#39;s first langauge preference in the browser</p>
</dd>
<dt><a href="#getyoutubeidfromurl">getyoutubeidfromurl(url)</a></dt>
<dd><p>Returns YouTube ID from a YouTube URL</p>
</dd>
<dt><a href="#hashover">hashover()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns a Boolean corrsponding to whether or not the device/browser
in use is capable of hover events</p>
</dd>
<dt><a href="#hextorgb">hextorgb(hex)</a> ⇒ <code>String</code></dt>
<dd><p>Convert HEX color to RGB</p>
</dd>
<dt><a href="#interpolatenumbers">interpolatenumbers(from, to, by)</a> ⇒ <code>Integer</code></dt>
<dd><p>A function which moves from one value to another by a certain percent</p>
</dd>
<dt><a href="#isie">isie()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if user is running Internet Explorer</p>
</dd>
<dt><a href="#isobjectempty">isobjectempty(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if object exists and is populated</p>
</dd>
<dt><a href="#isscrolledintoview">isscrolledintoview(elem)</a> ⇒ <code>Boolean</code></dt>
<dd><p>A function which measures the elements position on the page in
relation to the what the user can currently see on their screen
and returns a boolean value with <code>true</code> being that the element
is visible and <code>false</code> being that it is not visible.</p>
</dd>
<dt><a href="#createloader">createloader(element)</a></dt>
<dd><p>Add DOM element for loading graphic to passed-in element</p>
</dd>
<dt><a href="#removeloader">removeloader(element)</a></dt>
<dd><p>Remove DOM element for loading graphic from passed-in element</p>
</dd>
<dt><a href="#numbertoarray">numbertoarray(number)</a> ⇒ <code>Array</code></dt>
<dd><p>Given a number, creates an aray and populates the array
with numbers from 0 to given number</p>
</dd>
<dt><a href="#objectcontains">objectcontains(obj, value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if object contains value</p>
</dd>
<dt><a href="#objectfromformdata">objectfromformdata(formdata)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Converts FormData object to regular object</p>
</dd>
<dt><a href="#openpopup">openpopup(url, windowName, w, h)</a> ⇒ <code>Object</code></dt>
<dd><p>A function which opens a popup window</p>
</dd>
<dt><a href="#parsequery">parsequery(queryString)</a> ⇒ <code>object</code></dt>
<dd><p>Converts search string from url into an object</p>
</dd>
<dt><a href="#removeintegers">removeintegers(string)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Remove integers from a string</p>
</dd>
<dt><a href="#removequerystring">removequerystring()</a></dt>
<dd><p>Removes query string from URI via history.pushState</p>
</dd>
<dt><a href="#serialize">serialize(object)</a> ⇒ <code>String</code></dt>
<dd><p>A function which serializes data</p>
</dd>
<dt><a href="#spacetohyphen">spacetohyphen(string)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Converts spaces in a string to a hyphen</p>
</dd>
<dt><a href="#striphtml">striphtml(html)</a> ⇒ <code>String</code></dt>
<dd><p>Given an HTML string, eturns a string of plain text</p>
</dd>
<dt><a href="#truncatetext">truncatetext(string, maxLength, useWordBoundary, ellipsis)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Truncates text to desired character length, optinally includes ellipsis and trunactes to wro boundary</p>
</dd>
<dt><a href="#urlencoder">urlencoder(requestdata)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a URL encoded string for use in submission to Tools API</p>
</dd>
</dl>

<a name="MessageBus"></a>

## MessageBus
A class which helps sending messages accoss modules via a DOM node

**Kind**: global class  
<a name="MessageBus+sendEvent"></a>

### messageBus.sendEvent(eventName, options, element)
sendEvent

A function which lets you dispatch a custom event on
a Node. If the element is passed, it uses the element
available on the current `this` context.

**Kind**: instance method of [<code>MessageBus</code>](#MessageBus)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | Name of the custom event that is being triggered |
| options | <code>Object</code> | Object which should be passed in the message |
| element | <code>Object</code> | DOM node which the event should be attached to |

<a name="SocialShare"></a>

## SocialShare
**Kind**: global class  

* [SocialShare](#SocialShare)
    * [new SocialShare()](#new_SocialShare_new)
    * [.getOGData()](#SocialShare+getOGData) ⇒ <code>Object</code>
    * [.facebookShare()](#SocialShare+facebookShare)
    * [.twitterShare()](#SocialShare+twitterShare)

<a name="new_SocialShare_new"></a>

### new SocialShare()
A SocialShare module which handles Facebook and Twitter social share buttons

<a name="SocialShare+getOGData"></a>

### socialShare.getOGData() ⇒ <code>Object</code>
Get OG data from page's OG tags
Set defaults if no tags available

**Kind**: instance method of [<code>SocialShare</code>](#SocialShare)  
**Chainable**  
**Returns**: <code>Object</code> - SocialShare A reference to the instance of the class  
<a name="SocialShare+facebookShare"></a>

### socialShare.facebookShare()
Facebook share

**Kind**: instance method of [<code>SocialShare</code>](#SocialShare)  
<a name="SocialShare+twitterShare"></a>

### socialShare.twitterShare()
Twitter share

**Kind**: instance method of [<code>SocialShare</code>](#SocialShare)  
<a name="Validation"></a>

## Validation
A class which handles field validations

**Kind**: global class  
<a name="Validation+validate"></a>

### validation.validate([fieldvalue], [fieldtype], [rules], [type])
validate

A function which processes validations
NOTE: this could be expanded and reused

**Kind**: instance method of [<code>Validation</code>](#Validation)  

| Param | Type | Description |
| --- | --- | --- |
| [fieldvalue] | <code>String</code> | tthe value of the field to be validated |
| [fieldtype] | <code>String</code> | type of field to be validated |
| [rules] | <code>Object</code> | validation rules |
| [type] | <code>String</code> | are we matching or testing? Default = match |

<a name="alphabetizearray"></a>

## alphabetizearray(array) ⇒ <code>Array</code>
Alphabetizes array by value

**Kind**: global function  
**Returns**: <code>Array</code> - the sorted array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | the array to sort |

<a name="closest"></a>

## closest(elem, selector) ⇒ <code>HTMLElement</code>
Looks for ancestor elemnt with given selector

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - element The closest element  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>HTMLElement</code> | the elemnt to test |
| selector | <code>String</code> | the selector you're looking for |

<a name="convertdate"></a>

## convertdate(ISO) ⇒ <code>String</code>
Convert date to human readable

**Kind**: global function  
**Returns**: <code>String</code> - human readable date  

| Param | Type | Description |
| --- | --- | --- |
| ISO | <code>String</code> | an ISO date string |

<a name="getcookie"></a>

## getcookie(name) ⇒ <code>String</code>
Given a cookie name, returns value of that cookie

**Kind**: global function  
**Returns**: <code>String</code> - the value of the cookie  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the name of the cookie |

<a name="setcookie"></a>

## setcookie(name, value, expire)
Create and set a cookie

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the name of the cookie |
| value | <code>String</code> | the value of the cookie |
| expire | <code>Number</code> | the number of days after which the cookie will expire |

<a name="debounce"></a>

## debounce(func, wait, immediate) ⇒ <code>function</code>
Returns a function, that, as long as it continues to be invoked, will not
be triggered. The function will be called after it stops being called for
N milliseconds. If `immediate` is passed, trigger the function on the
leading edge, instead of the trailing.

**Kind**: global function  
**Returns**: <code>function</code> - A function, that, as long as it continues to be invoked, will not be triggered  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | A function to call after N milliseconds |
| wait | <code>number</code> | The number of milliseconds to wait |
| immediate | <code>boolean</code> | Trigger the function on the leading edge instead of the trailing |

<a name="decodehtml"></a>

## decodehtml(data) ⇒ <code>HTMLElement</code>
Parse to HTML

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - HTML  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | data to parse into HTML |

<a name="generaterandominteger"></a>

## generaterandominteger(max) ⇒ <code>Number</code>
Returns a random number

**Kind**: global function  
**Returns**: <code>Number</code> - the rnadom number  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>Number</code> | the highest number the random number can be |

<a name="getuserlangauge"></a>

## getuserlangauge(uniform)
Returns user's first langauge preference in the browser

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| uniform | <code>Boolean</code> | true if a given langauge isn't localized per country (e.g. en-US va en-GB), false if it is |

<a name="getyoutubeidfromurl"></a>

## getyoutubeidfromurl(url)
Returns YouTube ID from a YouTube URL

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | a URL with a YouTube ID in it |

<a name="hashover"></a>

## hashover() ⇒ <code>Boolean</code>
Returns a Boolean corrsponding to whether or not the device/browser
in use is capable of hover events

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if device is hover event-capable; false if not  
<a name="hextorgb"></a>

## hextorgb(hex) ⇒ <code>String</code>
Convert HEX color to RGB

**Kind**: global function  
**Returns**: <code>String</code> - A CSS rgb color value  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>String</code> | a hex color |

<a name="interpolatenumbers"></a>

## interpolatenumbers(from, to, by) ⇒ <code>Integer</code>
A function which moves from one value to another by a certain percent

**Kind**: global function  
**Returns**: <code>Integer</code> - the changed amount, rounded to the nearest integer  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Integer</code> | the starting number |
| to | <code>Integer</code> | the destination number |
| by | <code>Float</code> | percentage by which to change |

<a name="isie"></a>

## isie() ⇒ <code>Boolean</code>
Checks if user is running Internet Explorer

**Kind**: global function  
**Returns**: <code>Boolean</code> - true is IE, false if not  
<a name="isobjectempty"></a>

## isobjectempty(obj) ⇒ <code>Boolean</code>
Checks if object exists and is populated

**Kind**: global function  
**Returns**: <code>Boolean</code> - true is empty, false if not  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the object to test |

<a name="isscrolledintoview"></a>

## isscrolledintoview(elem) ⇒ <code>Boolean</code>
A function which measures the elements position on the page in
relation to the what the user can currently see on their screen
and returns a boolean value with `true` being that the element
is visible and `false` being that it is not visible.

**Kind**: global function  
**Returns**: <code>Boolean</code> - isVisible A boolean value with `true` representing that the element is visible  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Object</code> | A DOM element |

<a name="createloader"></a>

## createloader(element)
Add DOM element for loading graphic to passed-in element

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | the element to which to add the loader |

<a name="removeloader"></a>

## removeloader(element)
Remove DOM element for loading graphic from passed-in element

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | the element from which to remove the loader |

<a name="numbertoarray"></a>

## numbertoarray(number) ⇒ <code>Array</code>
Given a number, creates an aray and populates the array
with numbers from 0 to given number

**Kind**: global function  
**Returns**: <code>Array</code> - the array of numbers  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | the number |

<a name="objectcontains"></a>

## objectcontains(obj, value) ⇒ <code>Boolean</code>
Checks if object contains value

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if value exists in obj, false if not  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the object to test |
| value | <code>String</code> | the value to test for |

<a name="objectfromformdata"></a>

## objectfromformdata(formdata) ⇒ <code>Boolean</code>
Converts FormData object to regular object

**Kind**: global function  
**Returns**: <code>Boolean</code> - a regualar old object  

| Param | Type | Description |
| --- | --- | --- |
| formdata | <code>Object</code> | a FormData object |

<a name="openpopup"></a>

## openpopup(url, windowName, w, h) ⇒ <code>Object</code>
A function which opens a popup window

**Kind**: global function  
**Returns**: <code>Object</code> - an object the popup function is bound to  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the url to open in the popup |
| windowName | <code>String</code> | a unique name for the popup |
| w | <code>Integer</code> | the desired width of the popup |
| h | <code>Integer</code> | the desired height of the popup |

<a name="parsequery"></a>

## parsequery(queryString) ⇒ <code>object</code>
Converts search string from url into an object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| queryString | <code>String</code> | the string with the query |

<a name="removeintegers"></a>

## removeintegers(string) ⇒ <code>Boolean</code>
Remove integers from a string

**Kind**: global function  
**Returns**: <code>Boolean</code> - the converted string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string with the integer in need of conversion |

<a name="removequerystring"></a>

## removequerystring()
Removes query string from URI via history.pushState

**Kind**: global function  
<a name="serialize"></a>

## serialize(object) ⇒ <code>String</code>
A function which serializes data

**Kind**: global function  
**Returns**: <code>String</code> - the serialized string  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | the object to be serialized |

<a name="spacetohyphen"></a>

## spacetohyphen(string) ⇒ <code>Boolean</code>
Converts spaces in a string to a hyphen

**Kind**: global function  
**Returns**: <code>Boolean</code> - the converted string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string with spaces in need of conversion |

<a name="striphtml"></a>

## striphtml(html) ⇒ <code>String</code>
Given an HTML string, eturns a string of plain text

**Kind**: global function  
**Returns**: <code>String</code> - A plain text string  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>Object</code> | string of html to strip |

<a name="truncatetext"></a>

## truncatetext(string, maxLength, useWordBoundary, ellipsis) ⇒ <code>Boolean</code>
Truncates text to desired character length, optinally includes ellipsis and trunactes to wro boundary

**Kind**: global function  
**Returns**: <code>Boolean</code> - the truncated string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | the string in need of truncating |
| maxLength | <code>Number</code> | the length of the desired text string |
| useWordBoundary | <code>Boolean</code> | should anything be appeneded to the end? Defaults to true |
| ellipsis | <code>String</code> | the string to append, if so; defaults to '...' |

<a name="urlencoder"></a>

## urlencoder(requestdata) ⇒ <code>String</code>
Returns a URL encoded string for use in submission to Tools API

**Kind**: global function  
**Returns**: <code>String</code> - A URLEncoded string  

| Param | Type | Description |
| --- | --- | --- |
| requestdata | <code>Object</code> | JSON to return as URL Encoded string |

