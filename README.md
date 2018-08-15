# [Perdola](https://childishgiant.github.io/perdola/)

## We now have a [keybase team](https://keybase.io/team/perdola.public)

See the [latest patch notes here](https://github.com/ChildishGiant/perdola/commit/master).

A smart solution to the problem of passwords. Perdola generates passwords on demand, using the name of the app you're making a password for and a master password.

## Version Notes

### 1.35.0 (Would have been 6.9.0)

#### Versioning

In version 1.35.0 I *finally* got around to fixing the versioning of Perdola. The issue is that I've been using the format of [Semantic versioning](https://semver.org/) but failing to actually follow how that works. Up until this version I had the following in this readme:

> ## How the versioning works
> MAJOR.MINOR.PATCH
>
> MAJOR does not have to be breaking. It's really when I feel that a feature changes the way a user uses the site.

The issue is that using Semantic versioning MAJOR **does** mean breaking and being at v6 gives off the wrong impressions about the stability of the software. Due to this I've gone through and rebased all the versioning (This can be viewed [here](https://gist.github.com/ChildishGiant/6be1d1d7fe23d1b32c504929c38aad11)). This means that each commit is no longer a bundle of updates, but a singular update. If I want to give a version to a commit, I'll use a [tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

#### On the topic of performance:

In 6.8.0 on average `process()` took 0.035520000008400526ms with a sample size of 50000 and a standard deviation of 0.28365177531926283

In 1.35.0 (*6.9.0*) on average `process()` took 0.026179999995511027ms with a sample size of 50000 and a standard deviation of 0.22444288276023364

This is all on a high end PC so will help lower end devices much more. Most of this difference is thanks to the removal of jQuery from the codebase.

## Removed features

I have removed one feature so far and may remove more in the future for security / simplicity.

As of 09/07/2017 (Version 0.36) the ability to have your master password pre-entered, using a custom url, has been removed. This is due to the fact that your password would then show up in my google analytics.

This is also no longer an issue as, as of Version 6.8.0, Perdola no longer uses google analytics.

This feature was implemented in a safer fashion in v0.4, using cookies.

## Software used for development

Microsoft's [VS Code](https://code.visualstudio.com/) is my text editor of choice.

All minimization is done using [Prepros](https://prepros.io).

I use [GitKraken](https://www.gitkraken.com/) as my git GUI.

## Libs / tools

Thanks to [RealFaviconGenerator](https://realfavicongenerator.net) for making a glorious website that makes making favicons easy.

[GitHub Corners](https://github.com/tholman/github-corners) by Tim Holman under the MIT license

[clipboard.js](https://github.com/zenorocha/clipboard.js/) under the MIT license

[seedrandom](https://github.com/davidbau/seedrandom) by David Bau under the MIT license

The [Materialize Framework](https://github.com/Dogfalo/materialize) under the MIT license

noppa's [text-security](https://github.com/noppa/text-security) font under the MIT license

[js-sha3](https://github.com/emn178/js-sha3) under the MIT license

## Misc

Idea stolen from [Master Password](https://masterpasswordapp.com/). [More info](https://childishgiant.github.io/perdola/faq#remake)
