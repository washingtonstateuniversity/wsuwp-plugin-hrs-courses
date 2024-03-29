# WSUWP HRS Courses

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![Build Status](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/actions/workflows/coding-standards.yml/badge.svg)](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/actions) [![Release Version](https://img.shields.io/github/v/release/washingtonstateuniversity/wsuwp-plugin-hrs-courses)](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/releases/latest) ![WordPress tested up to version 6.4.2](https://img.shields.io/badge/WordPress-v6.4.2%20tested-success.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![GPLv3 License](https://img.shields.io/github/license/washingtonstateuniversity/wsuwp-plugin-hrs-courses)](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/blob/develop/LICENSE.md)

## Overview

This plugin creates a Courses custom post type with supporting custom taxonomies.

## Description

The WSUWP HRS Courses plugin -- designed originally for WSU Human Resource Services -- creates a block-based custom post type for creating and managing courses. It uses a customized archive template with integrated search and relies on several custom blocks to save, store, and retrieve Course data. It also uses a block template to manage the default layout of single and archive Course posts.

## Installation

This plugin is not in the WordPress plugins directory. You have to install it manually either with SFTP or from the WordPress plugins screen:

1. [Download the latest version from GitHub](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/archive/stable.zip) and rename the .zip file to: `wsuwp-plugin-hrs-courses.zip`.
2. From here you can either extract the files into your plugins directory via SFTP or navigate to the Plugins screen in the admin area of your site to upload it through the plugin uploader (steps 3-5).
3. Select Plugins > Add New and then select the "Upload Plugin" button.
4. Select "Browse" and locate the downloaded .zip file for the plugin (it **must** be a file in .zip format) on your computer. Select "Install Now."
5. You should receive a message that the plugin installed correctly. Select "Activate Plugin" or return to the plugins page to activate later.

### Updates

Please note that this plugin will not update automatically and will not notify of new available updates. It is your responsibility to make sure you stay up to date with the latest version. It does include a GitHub repository URL in the Update URI field, so if you have a plugin that can update from GitHub then this plugin should be compatible with that.

### Deactivating and Deleting: Plugin Data

If you deactivate the plugin it will unregister the Courses post type and custom taxonomies, but will leave the data untouched. You can reactivate any time and be right back where you started.

**If you delete (uninstall) the plugin from the WordPress plugins screen it will *trash* all of the Courses custom post types and *delete* the custom taxonomies and terms.** So make sure you have a database backup if you think you want to restore any of it. WordPress keeps posts in the Trash for 30 days by default, so you can always reinstall within that window to restore the trashed posts; but you can't get the terms back without a database import.

## For Developers

The WSUWP HRS Courses plugin development environment relies primarily on NPM and Composer. The `package.json` and `composer.json` configuration files manage necessary dependencies for testing and building the production version of the theme. The NPM scripts in `package.json` do most of the heavy lifting.

### Initial Setup

1. Clone the WSUWP HRS Courses plugin to a directory on your computer.
2. Change into that directory.
3. Install the NPM and Composer dependencies.
4. Ensure linting and coding standards checks are working -- this should exit with zero (0) errors.
5. Create a new branch for local development.

In a terminal:

~~~bash
git clone https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses.git wsuwp-plugin-hrs-courses
cd wsuwp-plugin-hrs-courses
npm install; composer install
npm test -s
git checkout -b new-branch-name
~~~

### Build Commands

The following commands will handle basic build functions. (Remove the `-s` flag to show additional debug info.)

- `npm run build -s`: Remove old compiled files such as minified CSS, lint PHP and CSS, and then compile new versions.
- `npm test -s`: Check all PHP and CSS files for coding standards compliance.
- `npm run clean -s`: Remove old compiled files such as minified CSS.
- `npm run build:styles -s`: Compile CSS.

See the scripts section of `package.json` for additional available commands.

## Support Level

**Active:** WSU HRS actively works on this plugin. We plant to continue work for the foreseeable future, adding new features, enhancing existing ones, and maintaining compatability with the latest version of WordPress. Bug reports, feature requests, questions, and pull requests are welcome.

## Changelog

All notable changes are documented in the [CHANGELOG.md](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/blob/develop/CHANGELOG.md), with dates and version numbers.

## Contributing

Please submit bugs and feature requests through [GitHub Issues](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/issues). Refer to [CONTRIBUTING.md](https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses/blob/develop/CONTRIBUTING.md) for the development workflow and details for submitting pull requests.
