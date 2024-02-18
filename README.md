# Setup

## Download and install
* [VS Code](https://code.visualstudio.com/download)
* [Git bash](https://git-scm.com/downloads)
* [node.js](https://nodejs.org/en/download/)
    * Verify that this was installed correctly by opening a git bash terminal and running `npm -v` and `node -v`
* (optional) [GitKraken](https://www.gitkraken.com/download)

## Typescript setup
Open a terminal and run `npm install -g typescript tsx`. A breakdown of this:
* `npm` - node package manager, useful for installing node packages
* `install` - the command that npm executes
* `-g` - flag, install these globally (as opposed to locally, just for this project). You need this to be able to compile typescript files from all folders
* `typescript tsx` - arguments for `npm install`, these are 2 packages that we want to install globally. `tsx` is useful for compiling & running typescript

## Verify that everything works
* Open a GitBash terminal and make sure you're in the right folder (if you open it from VS Code, you very likely are)
* Run `tsx HelloWorld.ts`
