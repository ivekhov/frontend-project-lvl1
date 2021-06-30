#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../src/games/gcd.js';
import play from '../src/index.js';

const playGame = () => {
  play(description, getQuestionAndAnswer);
};

playGame();
