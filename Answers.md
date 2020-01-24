1. What problem does the context API help solve?

Answer : The problem contextAPI solves is that you no longer need to prop drill through components to pass data.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Answer : Actions are like bundles of information that contain an action type and associated data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Answer: Application state is global state and should be used when you need to pass data to multiple components.
Component state is state that is only needed locally which does not need to be accessed by other components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Answer: Thunk allows us to make our flow asynchronous and make API calls from our actions which I have implented in this project.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Answer: At first I liked contextAPI but then after learning redux and it still being fresh in my brain that is what I chose to go with for this sprint. I think I like redux a little better because there is more on screen feedback and makes it easier for me to understand what is happening.
