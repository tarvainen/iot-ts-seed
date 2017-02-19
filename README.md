# iot-ts-seed

Simple TypeScript seed project for IOT projects. This seed utilizes the popular
Johnny-Five JavaScript robotics framework (http://johnny-five.io/) to handle
communication between the host computer and IOT platform like Arduino or any other
similar IOT board.

## Installation

Installation is pretty simple and it's more like "no installation" because there
is no such a thing like installation here. Let's take an Arduino Uno as an example.

### Arduino Setup

Flash your Arduino board with proper firmware. The right choise here is Firmata or one
of it's modified versions like AdvancedFirmata or ConfigurableFirmata. These firmwares
allow the communication and board control between the host machine and the
board, "slave", to be written in JavaScript for example. This method requires ongoing
connection between the board and the host machine so this won't be suitable for
independent IOT projects laying down there somewhere with nothing connection to the
outer world.

Read more of Firmata from the Arduino official page (https://www.arduino.cc/en/Reference/Firmata).

Firmata may be flashed to the Arduino using the Arduino IDE (Firmata can be found from the example projects in the IDE itself).

### Development setup

Development may be done with any text editor or IDE - there is no need for any fancy tools.
By following the described steps below you will get started with all of this:

1. Install Node.js (please use the latest stable one), follow instructions here (https://nodejs.org/en/download/)
2. Install nodemon globally `npm install -g nodemon` (this allows the automatic code run on every change)
3. Clone this repository `git clone https://gitlab.com/tarvainen/iot-ts-seed`
4. Run `npm install`
5. Run `npm start`

package.json contains pre-defined commands for build and watchers, so:

* `npm run build` - build the code
* `npm run build:live` - build and watch the changes
* `npm start` - runs the build:live

## Contributing

This is just a project base so I won't get too much into it. If you have something to add here please
make your changes in your own branch and create a pull request. There is no guarantee that I have time
to look about those requests immediately so please be patient.

## License

MIT
