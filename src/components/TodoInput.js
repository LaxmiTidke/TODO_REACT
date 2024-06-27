import React,{useState} from 'react'

function TodoInput(props) {
    const [inputText ,setInputText ] = useState('');

  return (
     <div className="input-container">

        <input 
        type= "text" 
        className='input-box-todo' 
        placeholder='Plse Enter your todo'
        value ={inputText}
        onChange ={e=>{
            setInputText(e.target.value)
               }} 
            />

        <button className="add-btn"

        onClick={()=>{
            props.addList(inputText)
            setInputText("") //add button wr click kela li adhich text gela pahij to jo adhi type kelay
        }}> + </button>

        {/* the task we entered is working or getting added or not for that we will ..  */}
        {/* <div>
            {inputText}
        </div> */} 


    </div>

  )
}

export default TodoInput