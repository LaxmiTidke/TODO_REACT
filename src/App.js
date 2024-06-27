import React , {useState} from 'react'  
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
function App() {
    // we want the list to apper so for that we are creating here a list
    const [listTodo , setListToDo] = useState ([]); //created a black array and listToDo is for holding the currrent state of variable and setListToDo is for updating the list which will be storing into the empty array
    
   let addList = (inputText)=>{
    setListToDo([...listTodo,inputText]);
   }

   const deleteListItem = (key) => {
    let newListTodo = [...listTodo]
    newListTodo.splice(key,1)
    setListToDo ([...newListTodo])
   }
   // "..." is spread operator adhiche elememnt ale pahij mg nntrch add sathi inputText
   return (
   <div className="main-container">
    <div className="centre-container">
    
    <TodoInput addList={addList}/>
    {/* <TodoList/> */}
    <h1>TODO</h1>
    <hr/>
    {listTodo.map ((listItem,i)=> {
        return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
         )

    })}
    </div>
   </div>
  )
  
}

export default App
//8th line function banvlay ....child component here is todoinput and parent component is app.js so now,, we have too pass the data from child component to parent component for that we have to use the method called prop

// map function : EXAMPLE:
//  const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]
