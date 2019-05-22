# WSUWP HRS Courses Changelog

Author: Adam Turner  
Author: Washington State University  
URI: https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses

<!--
Changelog formatting (http://semver.org/):

## Major.MinorAddorDeprec.Bugfix YYYY-MM-DD

### To Do (for upcoming changes)
### Security (in case of fixed vulnerabilities)
### Fixed (for any bug fixes)
### Changed (for changes in existing functionality)
### Added (for new features)
### Deprecated (for once-stable features removed in upcoming releases)
### Removed (for deprecated features removed in this release)
-->

## 0.2.0 (2019-05-22)

### Added

- Labelling for course location meta rich-text meta block.
- Course online availability meta data (yes/no toggle for whether the course is available online and a string value for the location).
- Display handlers to print course online availability.

## 0.1.0 (2019-05-21)

### Fixed

- :bug: Fix #1 Define script dependencies in Webpack configuration using the WordPress [Dependency Extraction Webpack Plugin](https://github.com/WordPress/gutenberg/tree/master/packages/dependency-extraction-webpack-plugin).

### Added

- :sparkles: Block to handle course location (physical and online) post meta data.
- :sparkles: Block to handle course date and time post meta data.
- Primary script entry point and blocks registration handler.
- Class to handle registering the Courses custom post type and supporting methods such as registering taxonomies and enqueueing scripts.
- Uninstall file to handle plugin content removal on deletion.
- :alien: Manually include the `@wordpress/dependency-extraction-webpack-plugin` package (until published to NPM).
- :memo: Initial documentation files.
- :wrench: Initial build tool configuration and scripts files.
