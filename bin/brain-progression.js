#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../src/games/progression.js';
import play from '../src/index.js';

const playGame = () => {
  play(description, getQuestionAndAnswer);
};

playGame();
