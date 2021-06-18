#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../src/games/progression.js';
import play from '../src/index.js';

play(description, getQuestionAndAnswer);
