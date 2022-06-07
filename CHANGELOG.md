# WSUWP HRS Courses Changelog

Author: Adam Turner  
Author: Washington State University  
URI: https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses

<!--
Changelog formatting (https://keepachangelog.com/en/1.0.0/):

## Major.MinorAddorDeprec.Bugfix (YYYY-MM-DD)

### Added (for new features)
### Changed (for changes in existing functionality)
### Deprecated (for once-stable features removed in upcoming releases)
### Removed (for deprecated features removed in this release)
### Fixed (for any bug fixes)
### Security (in case of fixed vulnerabilities)
-->

## 2.1.1 (2022-06-07)

- Bump WP tested-to to 6.0.0.

## 2.1.0 (2022-03-16)

### Changed

- Bump WordPress tested-to to 5.9.2.
- Upgrade npm-package-json-lint from 5.4.2 to 6.0.3. (c929695)
- Upgrade stylelint from 13.13.1 to 14.6.0. (de93132, a926bfe)
- Upgrade @wordpress/stylelint-config from 19.1.0 to 20.0.2. (de93132)
- Upgrade @wordpress/eslint-plugin from 9.3.0 to 11.0.1. (7754dea)
- Update eslint from 8.3.0 to 8.11.0. (7754dea)
- Update postcss-preset-env from 7.0.1 to 7.4.2. (dc2762e)
- Update postcss-cli from 9.0.2 to 9.1.0. (dc2762e)
- Update cssnano from 5.0.12 to 5.1.4. (967872a)
- Update @wordpress/babel-preset-default from 6.4.1 to 6.6.1. (8d24b22)
- Update @babel/core from 7.16.02 to 7.17.7. (49ff9dd)
- Update @babel/runtime from 7.16.3 to 7.17.7. (49ff9dd)
- Update @wordpress/dependency-extraction-webpack-plugin from 3.2.1 to 3.4.1. (a041486)
- Update copy-webpack-plugin from 10.0.0 to 10.2.4. (2237c61)
- Update webpack from 5.64.4 to 5.70.0. (24249e8)
- Update roave/security-advisories dev-master from 8092d4a to 86b842d. (4281e1a)

### Fixed

- Fix archive template search button size. (27f999a)
- Add `has-background` class for core columns block compliance. (cd1391f)

### Security

- Bump squizlabs/php_codesniffer from 3.6.1 to 3.6.2. (5c03521)
- Bump sirbrillig/phpcs-variable-analysis from 2.11.2 to 2.11.3. (893bd9a)
- Bump dealerdirect/phpcodesniffer-composer-installer from 0.7.1 to 0.7.2. (f9b14cb)
- Bump @wordpress/npm-package-json-lint-config from 4.1.0 to 4.1.2. (c929695)
- Bump postcss from 8.4.4 to 8.4.12. (dc2762e, 7778a5f)
- Bump source-map-loader from 3.0.0 to 3.0.1. (c7f868d)
- Bump webpack-cli from 4.9.1 to 4.9.2. (dee18dd)
- Bump nanoid from 3.1.30 to 3.2.0. (b1d0116)

## 2.0.1 (2021-12-03)

### Fixed

- Fix menu button css specificity overide from theme. (57cddf8)

## 2.0.0 (2021-12-02)

### Added

- Add GitHub releases API URL as Update URI. (1e0c9b4)
- Add stylelint-a11y package along with css a11y linting rules. (3e667ad)
- Add Babel parser options to eslint config. (3f0a4d3)

### Changed

- Change post date to modified date, close #13. (3ab36b1)
- Replace typography variables with theme values, close #71. (0285a7f)
- Update colors for WSU brand updates using theme vars, close #72. (b6b2f38)
- Update courses archive tags menu styles. (b70e659)
- Consolidate menu scripts and styles to their own component directory. (3dedddb)
- Move archive template into src directory. (5458f14)
- Reorganize src directory. (2129861)
- Upgrade eslint from 7.30.0 to 8.3.0. (3f0a4d3)
- Upgrade resolve-bin from 0.4.1 to 1.0.0. (d20f19c)
- Upgrade copy-webpack-plugin from 9.0.1 to 10.0.0. (7f9b960)
- Upgrade postcss-preset-env from 6.7.0 to 7.0.1. (dd1baec)
- Update postcss from 8.3.5 to 8.4.4. (dd1baec)
- Upgrade postcss-cli from 8.3.1 to 9.0.2. (dd1baec)
- Update @wordpress/stylelint-config from 19.0.5 to 19.1.0. (507225d)
- Update @wordpress/eslint-plugin from 9.0.6 to 9.3.0. (3f0a4d3)
- Update webpack from 5.44.0 to 5.64.4. (7f9b960)
- Update webpack-cli from 4.7.2 to 4.9.1. (7f9b960)
- Update webpack-bundle-analyzer from 4.4.2 to 4.5.0. (7f9b960)
- Update @wordpress/dependency-extraction-webpack-plugin from 3.1.4 to 3.2.1. (7f9b960)
- Update @babel/core from 7.14.6 to 7.16.0. (f422ad4)
- Update @babel/runtime from 7.14.6 to 7.16.3. (f422ad4)
- Update @wordpress/babel-preset-default from 6.2.0 to 6.4.1. (f422ad4)
- Update npm-package-json-lint from 5.1.0 to 5.4.2. (db3a303)
- Update @wordpress/npm-package-json-lint-config from 4.0.5 to 4.1.0. (db3a303)
- Update browserlist db. (d1723ca)
- Update squizlabs/php_codesniffer from 3.5.6 to 3.6.1. (9757425)
- Update roave/security-advisories from dev-master 88c4d97 to 8092d4a. (9757425)

### Removed

- Remove deprecated List Courses block. (2d25236)
- Remove `selector-class-pattern` rules from stylelint config. (3e667ad)

### Fixed

- Fix #70 add taxonomy list separater character. (240c652)
- Fix #68 Use p tag for menu title. (e055611)

### Security

- Bump ansi-regex from 5.0.0 to 5.0.1. (f301f81)
- Bump cssnano from 5.0.6 to 5.0.12. (bae955e)
- Bump nth-check from 2.0.0 to 2.0.1. (95c9a18)
- Bump path-parse from 1.0.6 to 1.0.7. (80d796c)
- Bump babel-loader from 8.2.2 to 8.2.3. (f422ad4)

## 1.6.0 (2021-07-14)

### Added

- Create a contributing guide in `CONTRIBUTING.md`. (ba7a561)

### Changed

- Update course meta styles in block editor. (9265613)
- Replace the GPL v2 license with a GPL v3 license. (7678b6e, d19147b)
- Update issue and pull request templates. (ba7a561)
- Update status badges in `README.md` and add contributing guide info. (ba7a561)
- Upgrade copy-webpack-plugin from 8.1.1 to 9.0.1. (ef2a454)
- Upgrade @wordpress/babel-preset-default from 5.2.2 to 6.2.0. (a56bf25)
- Upgrade source-map-loader from 2.0.1 to 3.0.0. (ef2a454)
- Update webpack from 5.37.0 to 5.44.0. (ef2a454)
- Update postcss from 8.2.15 to 8.3.5. (b8d00d6)
- Update eslint from 7.26.0 to 7.30.0. (8c2ab99)

### Fixed

- Fix #64 remove keepPlaceholderOnFocus. (3dc662b)

### Security

- Bump sirbrillig/phpcs-variable-analysis from 2.11.0 to 2.11.2. (13017ba)
- Bump @wordpress/npm-package-json-lint-config from 4.0.3 to 4.0.5. (8c2ab99)
- Bump @wordpress/stylelint-config from 19.0.3 to 19.0.5. (8c2ab99)
- Bump @wordpress/eslint-plugin from 9.0.4 to 9.0.6. (8c2ab99)
- Bump cssnano from 5.0.2 to 5.0.6. (b8d00d6)
- Bump @babel/core from 7.14.2 to 7.14.6. (a56bf25)
- Bump @babel/runtime from 7.14.0 to 7.14.6. (a56bf25)
- Bump webpack-cli from 4.7.0 to 4.7.2. (ef2a454)
- Bump webpack-bundle-analyzer from 4.4.1 to 4.4.2. (ef2a454)
- Bump resolve-bin from 0.4.0 to 0.4.1. (ef2a454)
- Bump @wordpress/dependency-extraction-webpack-plugin from 3.1.2 to 3.1.4. (ef2a454)
- Bump hosted-git-info from 2.7.1 to 2.8.9. (b6ae01e)
- Bump trim-newlines from 3.0.0 to 3.0.1. (e6dd241)

## 1.5.0 (2021-05-13)

### Changed

- Bump WordPress "tested to" to 5.7.2.
- Update npm and Composer build tools.
- Add CSS nesting support flag for the PostCSS Preset Env plugin.

### Added

- Courses List block to generate lists of Course CPTs with custom taxonomy filtering and various layout options. This replaces the List Courses block, which couldn't handle taxonomy filtering on the HRS Courses custom taxonomies.

### Deprecated

- List Courses block, in favor of the new Courses List block.

## 1.4.0 (2020-10-01)

### Fixed

- 🐛 Fix #36 replace archive page footer. (7c894f6)
- Fix #23 set up dependency checks. (77c3ac8)
- Fix archive page search button margins. (9b7bdd6)

### Changed

- :arrow_up: Update Composer PHP_CodeSniffer Standards Composer Installer plugin.
- :arrow_up: Update linting dependencies. (34f9586)
- :arrow_up: Upgrade `postcss-cli` to latest version. (54b31ad)
- :arrow_up: Upgrade `lodash` to latest version. (a45228d)
- :arrow_up: Upgrade Copy Webpack Plugin to v6+ and correct Webpack config file. (7f4705e)
- :arrow_up: Upgrade Webpack dependencies. (39fb7e4)
- 💚 Update Travis config to use jobs and clean up install processes. (71eaf49)
- Hide the Courses meta blocks from the block inserter. (d90b6f7)

### Removed

- ➖ Remove unused Jest dependencies. (5806269)
- ➖ Remove unused Puppeteer dependency. (35e37c2)

## 1.3.3 (2020-06-11)

### Changed

- Rename "master" branch to "stable." See the Internet Engineering Task Force (IEFT), [Terminology, Power and Oppressive Language](https://tools.ietf.org/id/draft-knodel-terminology-00.html#rfc.section.1.1.1).
- :arrow_up: postcss-cli => 7.1.1
- :arrow_up: webpack => 4.43.0

## 1.3.2 (2020-04-07)

### Fixed

- Ignore `.prettierrc.js` on export.

## 1.3.1 (2020-04-07)

### Changed

- Switch from old Sidebar namespace `hrs-wsu-edu/sidebar` to new version `hrswp/sidebar` in Courses template.

## 1.3.0 (2020-02-20)

### Fixed

- Fix #25 add `os` key in Travis config to specify linux.
- Fix #26 deprecated `sudo` key in Travis config.

### Changed

- Close #22, fetch and render a reusuable block by name at the start of the courses archive template to provide a space for an optional notice that can be modified from the WP admin area.
- :arrow_up: @wordpress/eslint-plugin => 4.0.0
- :arrow_up: rimraf => 3.0.2
- :arrow_up: stylelint => 13.2.0
- :arrow_up: webpack => 4.41.6
- :arrow_up: webpack-cli => 3.3.11
- :arrow_up: sirbrillig/phpcs-variable-analysis => 2.8.1

### Added

- :wrench: config file for Prettier package.
- :wrench: npm `fix` script to auto-fix linting issues.
- :heavy_plus_sign: prettier@npm:wp-prettier@1.19.1

### Removed

- Old workaround from Travis.ci config.

## 1.2.0 (2020-02-06)

### Changed

- Change courses archive title to "All WSU Courses".
- Fix #20, modify Courses taxonomy archive pages to match main Courses archive (display all and order by title).
- :arrow_up: @wordpress/babel-preset-default => 4.10.0
- :arrow_up: @wordpress/dependency-extraction-webpack-plugin => 2.2.0
- :arrow_up: @wordpress/eslint-plugin => 3.4.1
- :arrow_up: @wordpress/jest-preset-default => 5.4.0
- :arrow_up: @wordpress/npm-package-json-lint-config => 2.2.0
- :arrow_up: jest => 25.1.0
- :arrow_up: npm-package-json-lint => 4.6.0
- :arrow_up: puppeteer => 2.1.1
- :arrow_up: rimraf => 3.0.1
- :arrow_up: dealerdirect/phpcodesniffer-composer-installer => 0.6.2
- :arrow_up: squizlabs/php_codesniffer => 3.5.4
- :arrow_up: wp-coding-standards/wpcs => 2.2.1

## 1.1.0 (2020-01-16)

### Fixed

- :warning: Fix phpcs linter errors following rules update.
- :art: Adjust breaking on long inline list items to improve readability.

### Changed

- :wrench: Update phpcs linting rules
- :arrow_up: wp-coding-standards/wpcs
- :arrow_up: @wordpress/babel-preset-default
- :arrow_up: postcss-cli
- :arrow_up: stylelint

### Added

- :art: Styles and icons to handle expanding and contracting expandable lists.
- :sparkles: JavaScript class for converting long lists into expandable lists.
- :heavy_plus_sign: phpcompatibility/php-compatibility Composer dev dependency.
- :heavy_plus_sign: squizlabs/php_codesniffer Composer dev dependency.
- :heavy_plus_sign: sirbrillig/phpcs-variable-analysis Composer dev dependency to sniff unused variables.
- :heavy_plus_sign: roave/security-advisories Composer dev dependency to monitor Composer dependency security.

## 1.0.1 (2020-01-06)

### Changed

- Increment "tested up to" to WordPress 5.2.3.
- Update stylelint config to ignore underscore errors because the block editor uses them.
- :arrow_up: squizlabs/php_codesniffer
- :arrow_up: wp-coding-standards/wpcs
- :arrow_up: @wordpress/babel-preset-default
- :arrow_up: @wordpress/dependency-extraction-webpack-plugin
- :arrow_up: @wordpress/eslint-plugin
- :arrow_up: @wordpress/jest-preset-default
- :arrow_up: copy-webpack-plugin
- :arrow_up: eslint
- :arrow_up: jest-puppeteer
- :arrow_up: npm-package-json-lint
- :arrow_up: puppeteer
- :arrow_up: stylelint
- :arrow_up: stylelint-config-wordpress
- :arrow_up: webpack
- :arrow_up: webpack-bundle-analyzer
- :arrow_up: webpack-cli

## 1.0.0 (2019-09-20)

### Fixed

- :bug: Use 'html' instead of 'text' as source attribute for `course-presenter` and `course-location` blocks to allow saving formatting markup.
- Fix #12 Convert dynamic blocks that are children of a dynamic block into static blocks so they display in parent block.
- :bug: Don't exit early out of dynamic block registration loop if an individual file isn't found, continue processing the rest.
- Fix output of `list-courses` full content display option to match the standard archive display. The `wp_kses_post` function was stripping out SVG icons. Switch to a set of custom filters instead.
- :art: Handle default state (without a "has style" modifier) of the `list-courses` block.
- Fix #8 Fix taxonomy description styling to better handle multiple paragraphs.
- Fix #10 Restore default link styling in the course documents lists.
- Fix #9 Remove the "Part of the Learning Program" lead-in text.

### Changed

- :memo: Close #16 Completed README file with description, installation and management instructions, and developer info.
- Use `$wpdb` methods to trash Courses CPTs on uninstall instead of `get_posts()` and `wp_trash_post()`. The get posts -> trash posts approach can use a lot of memory if there are a lot of posts and cause a significant slowdown.
- Move uninstall methods from a dedicated file into a class method hooked to `register_uninstall_hook`.
- Modify the archive template to handle display of search results as well as the standard archive and taxonomy archive display.
- Move "Enroll" button in the single Course block template outside the sidebar block so that it will always be last in the DOM order.
- Add frontmatter to the courses archive template to either contain the taxonomy description or display a "find a course" section with features to help users search/browse for courses. Uses the new `\the_taxonomy_nav_list` function.
- Filter the HRS Courses post type archive query to display all courses on the main archive page and sort them alphabetically starting with 'A'.
- Modify `course-datetime`, `course-location`, and `course-presenter` blocks to save the block values as both post meta and post content to avoid the need for server-side rendering. This helps to address #12.
- Restore `.gitignore` to version control.
- :truck: Move non-block styles out of the `list-courses` block style file.
- :arrow_up: @wordpress/babel-preset-default 4.4.0 -> 4.6.0
- :arrow_up: @wordpress/eslint-plugin 3.0.0 -> 3.1.0
- :arrow_up: @wordpress/dependency-extraction-webpack-plugin 1.1.0 -> 2.0.0
- :arrow_up: @wordpress/eslint-plugin 2.4.0 -> 3.0.0
- :arrow_up: @wordpress/jest-preset-default 4.3.0 -> 5.1.0
- :arrow_up: eslint 6.2.2 -> 6.4.0
- :arrow_up: puppeteer 1.19.0 -> 1.20.0
- :arrow_up: stylelint 10.1.0 -> 11.0.0
- :arrow_up: webpack 4.39.3 -> 4.40.2
- :arrow_up: webpack-bundle-analyzer 3.5.0 -> 3.5.1
- :arrow_up: webpack-cli 3.3.7 -> 3.3.9

### Added

- :white_check_mark: Github issue and pull request templates.
- Uninstall method to remove all Courses custom taxonomies and terms.
- :sparkles: Close #11 Allow searching all courses with custom search form and results page.
- Function to display a list of all the terms with attached posts for a given taxonomy, formatted as an unordered list with a heading.
- Custom filter 'wsuwp_hrs_courses_enroll_link' to allow modifying the "Enroll" link HTML.
- Custom filter 'wsuwp_hrs_courses_documents_list' to allow modifying the course document list HTML.

### Removed

- :construction_worker: Drop support for PHP versions less than 7.0 and update CI tests to match.
- :fire: Server-side render methods for the `course-datetime`, `course-location`, and `course-presenter` blocks.

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
