# Setup

## Download and install
* [VS Code](https://code.visualstudio.com/download)
* [Git bash](https://git-scm.com/downloads)
* [node.js](https://nodejs.org/en/download/)
    * Verify that this was installed correctly by opening a git bash terminal and running `npm -v` and `node -v`
* (optional) [GitKraken](https://www.gitkraken.com/download)

## Git setup

* Create a [GitHub account](https://github.com/signup?source=login)
* Open a GitBash terminal and run the following commands
    * `mkdir /c/Work`
    * `ssh-keygen` - keep pressing enter to use default values. This will generate a pair of private & public ssh keys, `id_rsa` and `id_rsa.pub`
    * `cat ~/.ssh/id_rsa.pub` - lists the content of the public key. It should start with `ssh-rsa`
* Add the public key to GitHub
    * Click on your profile (top right), then Settings
    * Click on `SSH and GPG Keys` on the left side
    * New ssh key
        * Name doesn't matter, e.g. "Laptop" or "PC" or "Personal"
        * Type is `Authentication Key`
        * Paste the contents of the key from the terminal in GitHub. Add SSH Key.
* In the GitBash terminal, run:
    * `cd /c/Work`
    * `git clone git@github.com:BogdanRadulescu/tslab.git`
    * `cd tslab && code .`

## Typescript setup
Open a terminal and run `npm install -g typescript tsx`. A breakdown of this:
* `npm` - node package manager, useful for installing node packages
* `install` - the command that npm executes
* `-g` - flag, install these globally (as opposed to locally, just for this project). You need this to be able to compile typescript files from all folders
* `typescript tsx` - arguments for `npm install`, these are 2 packages that we want to install globally. `tsx` is useful for compiling & running typescript

## Install packages
In a terminal, opened in the project root, run `npm install`

## Verify that everything works
* Open a GitBash terminal and make sure you're in the right folder (if you open it from VS Code, you very likely are)
* Run `tsx HelloWorld.ts`
