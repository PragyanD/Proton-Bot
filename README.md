# Proton-Bot
A do-it-all Discord bot which performs tasks ranging from server administration to playing music

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Go to [official Node.js website](https://nodejs.org/) and download the installer.
  Ensure youhave `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! After running the following command, just open the command line again.

    $ npm install npm -g

### Installation of required modules
  After installing node, this project will need ytdl-core and ffmpeg too, so just run the following command.

      $ npm i -g discord.js

      $ npm i -g ytdl-core
      
      $ npm i -g ffmpeg
---

## Install

    $ git clone https://github.com/PragyanD/Proton-Bot
    $ cd Proton-Bot

## Discord API 
 1. Go to https://discord.com/developers/applications, and create an account
 2. Create a new application, and then create a new bot through the sidebar
 3. Retrieve the token, and assign it to the variable "token" in index.js   

## Running the project
   After completing these steps, run the following command

    $ node .




