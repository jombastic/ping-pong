# Ping Pong

#### A program that allows users to input a number and show all the numbers leading up to it. 09.02.2018

#### By **Slavcho Mitrov**

## Description

A webpage created with HTML, CSS and JavaScript where a user can submit a number. After that the page displays all the numbers leading up to it. Every number that is divisible by 3 is displayed as "PING", every number divisible by 5 as "PONG" and every number divisible by 5 AND 3 as "PING PONG".
The files are bundled with webpack and several dependencies, including eslint for syntax checking, live development server, jasmine and karma used for code testing and istanbul for code coverage.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Display a list of every number leading up to the inputted number** | 10 | 10,9,8,7,6,5,4,3,2,1 |
| **Replace any number divisible by 3 with 'PING'** | 10 | 10,ping,8,7,ping,5,4,ping,2,1 |
| **Replace any number divisible by 5 with 'pong'**| 10 |  pong,ping,8,7,ping,pong,4,ping,2,1 |
| **Replace any number divisible by 5 and 3 with 'ping pong'**| 15 | ping pong,14,13,ping,11,pong,ping,8,7,ping,pong,4,ping,2,1 |
| **Display a warning box if the user enters a number greater than 250**| 260 | "Entering a number bigger than 250 may cause the page to crash. Are you sure you want to continue?" |

## Setup/Installation Requirements

* To open the webpage in your browser visit this [link](https://jombastic.github.io/ping-pong/)
* To download the code click **clone or download** button on Github or enter the command "git clone https://github.com/jombastic/ping-pong" in your shell

## Known Bugs
* No known bugs at this time.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Slavcho Mitrov}_**
