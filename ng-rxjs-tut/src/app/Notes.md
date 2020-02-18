# [RxJs Subjects: A Tutorial](https://blog.angulartraining.com/rxjs-subjects-a-tutorial-4dcce0e9637f)

- Subjects are observables and observers
	- this means that subjects can emit data as well as being subscribed to.
	
- Subjects are multicast
	- this means that they support multiple subscriptions
	- they mantain a registry of many listeners
	- do not expose the Subject object directly to your compoents but return an Observable.
	
- Behavior Subjects
	- this will give you the last emitted value right away.
	- Requires a first value
	- doesn't matter when you subscribe you will always get the latest value
	
- Replay Subjects
	- keep a given number of historical values so that those values can be replayed to new subscribers