# [Perdola](https://childishgiant.github.io/perdola/)

See the [latest patch notes here](https://github.com/ChildishGiant/perdola/commit/master).

A smart solution to the problem of passwords. Perdola generates passwords on demand, using the name of the app you're making a password for and a master password.

## How the versioning works

All versions will take the form of XYZ

**X** is the **major version** number. This is for feature updates. An example of one of this kind of update would be introducing the "presets" feature. Major features are defined as updates that change the way one uses the service. The number will take the form of A.B. EG: 1.0 or 0.1

**Y** is the **patch** number. This is for content updates / minor features. An example of this would be adding more presets.

**Z** is for number for **bug fixes**.

So Version 1.456 would be the 14th major update (We started at Version 0.00), the 5th patch and the 6th bug fix for that patch.

## Removed features

I have removed one feature so far and may remove more in the future for security / simplicity.

As of 09/07/2017 (Version 0.36) the ability to have your master password pre-entered, using a custom url, has been removed. This is due to the fact that your password would then show up in my google analytics. ![](http://i.imgur.com/JTd4v5x.png)

This feature may rear its head in the future if it can be implemented so that the user's security remains the top priority. (See to-do #3)

## To-do:

- Add a tutorial (Maybe guided using [intro.js](https://introjs.com/))
- Add tumblr/yahoo preset (Warning system to say that they use the same account.)
- Saving and automagically loading passwords with cookies

## Tools used for development

Github's [atom.io](https://atom.io/) is my text editor of choice.

All minimization is done using [Prepros](https://prepros.io).

Thanks to [RealFaviconGenerator](https://realfavicongenerator.net) for making a glorious website that makes making favicons easy.

More thanks go out to shinnn's [isogram](https://github.com/shinnn/isogram) for the snazzy tracking code.

## Misc

Idea stolen from [Master Password](https://masterpasswordapp.com/). [More info](https://childishgiant.github.io/perdola/faq#remake)

[GitHub Corners](https://github.com/tholman/github-corners) by Tim Holman under the MIT license
