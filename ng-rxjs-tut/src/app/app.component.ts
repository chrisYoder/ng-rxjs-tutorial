import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-rxjs-tut';
	
	ngOnInit(): void {
		const squareof2 = of(1, 2, 3, 4, 5, 6)
			.pipe(
				filter(num => num % 2 === 0), 
				map(num => num * num)				
			);
		
		squareof2.subscribe( num => console.log(num));
		
		let ob$ = Observable.create( observer => {
			observer.next('A new value');
		});
		
		let observer = {
			next: data => console.log('Data received: ', data),
			complete: data => console.log('Completed')
		}
		
		let subscription = ob$.subscribe(observer);
		
		// <!-- RxJs Subjects Tutorial --> 
		
		// First feature: data emission
		let subject = new Subject<string>();
		subject.subscribe( data => {
			console.log(`Subscriber got data >>>>> ${data}`);
		});
		
		subject.next('Eureka'); // <-- the .next() method handles data emission for a Subject
		
		// Second Feature: multicast
		let subject2 = new Subject<string>();
		
		subject2.subscribe( data => {
			console.log(`Subscriber 1 got data >>>> ${data}`);
		});
		
		subject2.subscribe( data => {
			console.log(`Subscriber 2 got data >>>> ${data}`);
		});
		
		subject2.next('This is an example of multicasting');
		
		// Third Feature: Behavior Subjects
		let subject3 = new BehaviorSubject<string>('First Value');
		
		subject3.asObservable().subscribe( data => {
			console.log(`Behavioral subject subscriber got data >>>> ${data}`); 
		});
		
		subject3.next('Second Value');
		
		// Fourth Feature: Replay Subjects
		let subject4 = new ReplaySubject<string>(2); // we must specify how many values are to be kept in the history
		
		subject4.next('First Replay Value');
		subject4.next('Second Replay Value');
		subject4.next('Third Replay Value');
		
		subject4.asObservable().subscribe( data => {
			console.log(`Subscriber got data >>>> ${data}`);
		});
		
		subject4.next('Fourth Replay Value');
	}
}
