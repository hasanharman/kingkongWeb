import { Component } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'kingkong';
	direction = '';

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
	}

	onSwipe(event: any) {
		const x = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';
		const y = Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? 'Down' : 'Up') : '';

		this.direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;
	}
}
