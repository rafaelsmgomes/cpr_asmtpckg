import 'jquery';
import 'cpr_pathpackage'; 

import Dial from './models/Dial';
import Likert from './models/Likert';

import {panels} from './views/panels';

const question_length = panels.length-2;

const state = {
	dials: [], //0.1.0
	likerts: [], // 0.2.0
	checkbox: [], // 0.4.0
	sliders: [], // 0.5.0
};

state.qLen = question_length;
state.white = '#fff';

/*** App path Ctrl ***/ 

	$('.pathfinder').build({
		'panels': panels,
		'timing': 1500,
		'spacing': 400,
		'delay': 1,
	});

/*** Dial Ctrl ***/ 

	const dial0 = new Dial([
		'not rasdfaseady',
		'trasdfsadfying',
		'doinasdf'
	]);

	const dial1 = new Dial([
		'not',
		'try',
	]);

	[dial0,dial1]

	state.dials.push(dial0);
	state.dials.push(dial1);

	$(".dial-tracker").cprDial({
		'thickness': .12,
		'height': '200%',
		'bgColor': '#56504b',
		'fgColor': state.white,
		'state': state,		
	});

/*** Likert Ctrl ***/ 

	const likert0 = new Likert([
		'Strongly Disagree',
		'Disagree',
		'Neutral',
	]);

	const likert1 = new Likert([
		'hello',
		'hi',
		'bye',
		'goodbye'
	]);	

	state.likerts.push(likert0);	
	state.likerts.push(likert1);	

	$('.likert__form').cprLikert({
		'vertical': false,
		'state': state,
		'size': .10,
	});

window.statetete = state;


