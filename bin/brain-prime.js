#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../src/games/prime.js';
import play from '../src/index.js';

const playGame = () => {
  play(description, getQuestionAndAnswer);
};

playGame();
