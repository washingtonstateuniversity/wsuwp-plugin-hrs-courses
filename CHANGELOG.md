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

## 0.4.0-beta2 (:construction: WIP 2019-05-30)

### Added

- :sparkles: Two new blocks: one to handle a course video link URL and the other to handle an online course link URL.
- Custom taxonomy archive page template.

### Changed

- Update `.gitattributes` with another export-ignore rule to skip exporting the postCSS config file.
- Remove "private" flag from `package.json`.
- Revert meta registration function `register_courses_meta` to a more standard format.
- Update archive template filter callback to use general Courses archive template.
- :truck: Rename 'taxonomy-archive.php' to 'archive.php' and update to handle all courses archive content display.
- Add labels to dynamic blocks rendered output.
- Decouple the course URL values from the course location metadata.

## 0.3.0 (2019-05-28)

### Added

- Rendering calling function for the course presenter(s) block.
- :sparkles: Block to handle course presenter(s) post meta data.
- File to handle rendering and formatting functions for Course custom post data.

### Changed

- Make the post meta registration method use an array and add new 'hrscourses/course-presenter' block.
- Move template definition into a separate variable for readability.
- Use a rich-text field for the Course date-time meta value instead of a plain-text field.
- :recycle: Move rendering functions from the setup class to the new `render-functions.php` file.
- Register `render_callback` functions for all Course dynamic blocks to handle displaying content on the front end.

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
