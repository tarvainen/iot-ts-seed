import { Board } from 'johnny-five';
import { App } from './src/app';

let board = new Board();

board.on('ready', () => {
  let app = new App();

  app.run();
});
