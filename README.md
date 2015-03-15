# Point B Website #

## Folder Structure

    |--boilerplate
        |-- node_modules (not in repo)
        |-- scripts
        |-- styles
        |-- favicon.ico
        |-- humans.txt
        |-- index.html
        |-- package.json
        |-- references.md

`|-- node_modules` all modules required for Grunt (this is added when setting up)

`|-- scripts` contains our javascript files for this project.

`|-- styles` contains all assets used in styling the site; CSS, SASS, SVG, images etc.

`|-- favicon.ico` is the basic favicon for the site - **don't forget it**.

`|-- humans.txt` tells us who has worked on the project, who helped, and what technologies were used.

`|-- index.html` is the basic page markup (distilled from the HTML5 Boilerplate).

`|-- references.md` is a list of links researched to inform this template


Note: Please view README.md files within each folder for more info


## Setting up the project

|-- package.json is set to install the latest module versions compatible with grunt~0.4.1.

*Run (in this directory):*

    npm install

This will install all the node modules you require.

*Run (in this directory):*

    bower install

This will install all the required library dependencies.

*To begin working on the project run:*

    grunt

## Installing new packages

**For new Grunt modules run:**

	npm install <package name> --save-dev

The flag `--save-dev` will save the version number to package.json so that everyone has the same versions.

## To do / Ideas

**Filterable patches (auto complete and checkboxes)

**svg cutout shape for patterned bg that moves left on scroll

**collection of photography related to the album