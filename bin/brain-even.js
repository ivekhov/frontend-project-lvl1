#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../src/games/even.js';
import play from '../src/index.js';

const playGame = () => {
  play(description, getQuestionAndAnswer);
};

playGame();
