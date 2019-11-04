import * as comp from './components';

export const panels = [
	`<div class="panel panel--0">
		
		<div class="btn__progress btn__progress--0" data-id='0'></div>
	</div>`,
	`<div class="panel panel--1">			
		${comp.createLikert(0)}		
		<div class="btn__progress btn__progress--1" data-id='1'></div>
	</div>`,
	`<div class="panel panel--2">			
		${comp.createDial(1)}		
		<div class="btn__progress btn__progress--2" data-id='2'></div>
	</div>`,
	// `<div class="panel panel--3">
	// 	${comp.createDial(1)}
	// 	<div class="btn__progress btn__progress--3" data-id='3'></div>
	// </div>`,
	// `<div class="panel panel--4">
	// 	foth
	// 	<div class="btn__progress btn__progress--4" data-id='4'></div>
	// </div>`,
	// `<div class="panel panel--5">
	// 	fifth
	// 	<div class="btn__progress btn__progress--5" data-id='5'></div>
	// </div>`,
];



/*** THIS IS TEMPLATE FOR PANEL
	`<div class="panel panel--0">

		<div class="btn__progress btn__progress--0" data-id='0'></div>
	</div>`
***/
