#!/usr/bin/env node

import { description, getQuestionAndAnswer } from '../src/even.js';
import play from '../engine.js';

play(description, getQuestionAndAnswer);
