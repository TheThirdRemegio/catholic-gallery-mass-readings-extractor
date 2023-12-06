# Mass Readings Extractor

---

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE.txt)

## Description

A rudimentary HTML extractor to convert [Catholic Gallery Daily Mass Readings](https://www.catholicgallery.org/) data to grid-based table for print.

<p align="right">(Made when the author was still learning JavaScript fundamentals, so the code may be a tad messy...)</p>

## Table of Contents

- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Acknowledgements](#acknowledgements)

### Usage

It is recommended to access the "MREXT-v2" folder for the following.

1. Download webpage (not PDF) with daily mass readings, move to "rawData" folder, and transform it:
    - Find first and last ```<div>``` elements with class: **dmrnlpm**. Delete everything besides the elements between them. *Optional*:
  	  - ```Ctrl+Shift+L``` to select all instances of ```<div>``` elements with classes: **dmrday**, **dmrds**, and **dmrrs** and shift them onto separate lines.
  	  - Do the above to the ```<strong>``` and ```<a>``` tags to varying successes. (Anchor tags can appear more than once per ```<strong>``` tag and require manual editing.
  	  - ```Alt+Z``` to enable Word Wrap to avoid overflowing code.
    - Use multi-cursor editing to delete the ```<script>``` elements.
2. Copy index.html file content to new ```<div>``` element with id:"(insert month here)-(insert year here), under ```<section>``` with id: **rawData**.
3. Duplicate the "jan24Scraper.js" file and modify the new one using multi-cursor editing to change all instances of **januaryData**, **januaryComp**, and **#january-2024** to match specific month and year (or whatever id you gave your new ```<div>``` element.
4. Finally, link your script to the index.html file with defer.

### Features

- Extract the daily mass readings of a specific month from [Catholic Gallery](https://www.catholicgallery.org/).
- Create table with print layout (14px).

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

To my dear pops, doing this by hand would've been faster, but this will be more efficient for next time while encoding more content. Thanks for your patience! :relaxed:

Thanks to Catholic Gallery for the data, as well as being up-to-date with next year's readings. Data extracted from their [December 2023](https://www.catholicgallery.org/mass-reading/december-2023-download/) and [January 2024](https://www.catholicgallery.org/mass-reading/january-2024-download/) pages.

Until next time! :wave:
