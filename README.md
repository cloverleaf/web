# [Perdola](https://childishgiant.github.io/perdola/)

See the [latest patch notes here](https://github.com/ChildishGiant/perdola/releases) and the latest edits to the source [here](https://github.com/ChildishGiant/perdola/commit/master).

A smart solution to the problem of passwords. Perdola generates passwords on demand, using the name of the app you're making a password for and a master password.

## How the versioning works

We use [Semantic Versioning](http://semver.org/)

This basically amounts to MAJOR.MINOR.PATCH.

## Removed features

I have removed one feature so far and may remove more in the future for security / simplicity.

As of 09/07/2017 (Version 0.36) the ability to have your master password pre-entered, using a custom url, has been removed. This is due to the fact that your password would then show up in my google analytics. ![](http://i.imgur.com/JTd4v5x.png)

This feature was implemented in a safer fashion in v0.4, using cookies.

## To-do:

- [ ] Add a tutorial (Maybe guided using [intro.js](https://introjs.com/))
- [ ] Add Unicode characters to passwords on presets that allow them
- [ ] React rewrite

## Software used for development

Github's [atom.io](https://atom.io/) is my text editor of choice.

All minimization is done using [Prepros](https://prepros.io).

I use [GitKraken](https://www.gitkraken.com/) as my git GUI.


## Libs / tools

Thanks to [RealFaviconGenerator](https://realfavicongenerator.net) for making a glorious website that makes making favicons easy.

More thanks go out to shinnn's [isogram](https://github.com/shinnn/isogram) for the snazzy tracking code.

[GitHub Corners](https://github.com/tholman/github-corners) by Tim Holman under the MIT license

[jQuery](https://github.com/jquery/jquery) under the MIT license

[jquery Mouse Wheel Plugin](https://github.com/jquery/jquery-mousewheel) under the MIT license

[clipboard.js](https://github.com/zenorocha/clipboard.js/) under the MIT license

[seedrandom](https://github.com/davidbau/seedrandom) by David Bau under the MIT license

The [Materialize Framework](https://github.com/Dogfalo/materialize) under the MIT license

## Misc

Idea stolen from [Master Password](https://masterpasswordapp.com/). [More info](https://childishgiant.github.io/perdola/faq#remake)
