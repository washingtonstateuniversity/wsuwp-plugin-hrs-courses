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

## 0.6.0-alpha.1 (:construction: 2019-08-29)

### Fixed

- Fix #8 Fix taxonomy description styling to better handle multiple paragraphs.
- Fix #10 Restore default link styling in the course documents lists.
- Fix #9 Remove the "Part of the Learning Program" lead-in text.

### Changed

- :truck: Move non-block styles out of the `list-courses` block style file.

## 0.5.0 (2019-08-27)

### Fixed

- :green_heart: Misidentified non-class function in `uninstall.php`.
- :pencil2: Typo in README.

### Changed

- Include build status icon link in README.

### Added

- :construction_worker: Update Travis CI build system with basic tests :white_check_mark:

## 0.4.0 (2019-08-27)

### Added

- :sparkles: Class to handle inserting inline SVG markup for icons.
- :milky_way: Content filter to make "Enroll" button links more accessible by automatically adding "... in {{ course title }}" to the link as screen-reader-accessible text.
- :art: Primary CSS files for the frontend and the editor.
- :sparkles: New block to display a dynamic list of the published courses, modeled on the core latest posts block.
- File `includes/blocks.php` to handle dynamic block registration files.
- Webpack build plugin to move block server-side rendering functions into place.
- :heavy_plus_sign: Add npm development dependencies: lodash, classnames, and the now-published @wordpress/dependency-extraction-webpack-plugin (to replace the manually installed version).
- Function to modify the archive description output on courses taxonomy pages.
- Function to remove the post date HTML element from Course posts.
- :sparkles: Function to modify the WP nav menu classes for the Course post type.
- File to handle modifying default WordPress template functions.
- :sparkles: Two new blocks: one to handle a course video link URL and the other to handle an online course link URL.
- Custom taxonomy archive page template.

### Changed

- :art: Finish initial version of the `list-courses` block styles and style variants.
- `list-courses` block: Use "(No title)" instead of "(Untitled)" when the title is missing, add a class to the course title, and remove the "Read more" link from the excerpt.
- Add SVG icons to the `course-online` and `course-video` block saved output to display on the front end.
- Use dedicated files to handle `course-online` and `course-video` block editor icons.
- Archive view: Add Learning Program(s) if assigned.
- :alembic: Switch to using `ServerSideRender` for the 'list courses' block until taxonomy queries are available in the `getEntityRecords` post query method.
- :arrow_up: wp-coding-standards/wpcs Composer package to 2.1.1.
- :arrow_up: @wordpress/babel-preset-default to 4.4.0
- :arrow_up: @wordpress/dependency-extraction-webpack-plugin to 1.1.0
- :arrow_up: @wordpress/eslint-plugin to 2.4.0.
- :arrow_up: @wordpress/jest-preset-default to 4.3.0
- :arrow_up: @wordpress/npm-package-json-lint-config to 2.1.0
- :arrow_up: copy-webpack-plugin to 5.0.4
- :arrow_up: eslint to 6.2.2
- :arrow_up: jest to 24.9.0
- :arrow_up: jest-puppeteer to 4.3.0
- :arrow_up: lodash to 4.17.15
- :arrow_up: npm-package-json-lint to 3.7.0
- :arrow_up: postcss-cli to 6.1.3
- :arrow_up: postcss-preset-env to 6.7.0
- :arrow_up: puppeteer to 1.19.0
- :arrow_up: rimraf to 3.0.0
- :arrow_up: stylelint to 10.1.0
- :arrow_up: thread-loader to 2.1.3
- :arrow_up: webpack to 4.39.3
- :arrow_up: webpack-bundle-analyzer to 3.4.1
- :arrow_up: webpack-cli to 3.3.7
- Move dynamic block server-side rendering functions into dedicated files inside the block source directories.
- :truck: Revise `/src` directory structure to better allow block CSS to live alongside other block files.
- :wrench: Expand the css lint and build tasks to include css files in any 'src' directory (to allow bundling block css with other block files).
- Move template functions from the main setup class to newly added `template-functions.php`.
- Update `.gitattributes` with another export-ignore rule to skip exporting the postCSS config file.
- Remove "private" flag from `package.json`.
- Revert meta registration function `register_courses_meta` to a more standard format.
- Update archive template filter callback to use general Courses archive template.
- :truck: Rename 'taxonomy-archive.php' to 'archive.php' and update to handle all courses archive content display.
- Add labels to dynamic blocks rendered output.
- Decouple the course URL values from the course location metadata.

### Removed

- :fire: Close #1 remove manually installed version of the `@wordpress/dependency-extraction-webpack-plugin` npm package and replace it with the now published version of the same.

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
