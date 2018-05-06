# Vatom

### a shared, independent state manager for Vue

## Installation

`npm install vatom`

## Usage

    import Vatom from 'vatom'

    // create a Vatom to store the state you want to share in your app
    const todos = Vatom([{id: 1, text: "Learn Vue", completed: false}])

    // update the shared state by passing in a function (free of side-effects) to the `$swap` method along with any optional arguments
    const setCompletedToTrue = function(todos, id) {
        return todos.map(
            todo => (todo.id === id ? { ...todo, completed: true } : todo)
        );
    };

    todos.$swap(setCompletedToTrue, 0) // 0 is the id of the todo you want to set to complete

    // get a snapshot of your state by calling `$deref`
    todos.$deref()
    // set old state to entirely new state using `$reset`
    todos.$reset(["Learn Vue", "Master Vuex"]) // todos is now an array of text strings

##### Vatom is inspired by Clojure's Atom mechanism for managing state

(https://clojure.org/reference/atoms)
