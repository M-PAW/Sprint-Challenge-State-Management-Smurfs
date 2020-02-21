1. What problem does the context API help solve?

Used for passing global data globally between componenets, and helping to manage state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 

actions are triggers, 
reducers contain the functionality to work with actions,
store is like a bank

Why is the store known as a 'single source of truth' in a redux application?

It keeps all of your state and reducers.

1. What is the difference between Application state and Component state? When would be a good time to use one over the 
other?

application is global, component is local

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

a funciton returned by another funciton, that delays the action comming from the reducer / action-creator

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context, because currently I find it simpler than redux - which I currently don't feel confortable with or understant well.
