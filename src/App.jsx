import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
 
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [expenses, setExpenses] = useState([])
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  )
  
  function handleSubmit(){
    setExpenses([...expenses,
      { name , amount }

    ])
  }

  function handleDelete(index){
    setExpenses(expenses.filter((_, i) => i !== index))
  }

  
  
  return (

    <div>
      <h2>Total: {total}</h2>
      <ExpenseForm setName = {setName} setAmount={setAmount} handleSubmit={handleSubmit}/>
      {expenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        <ExpenseList
         expenses={expenses}
         handleDelete = {handleDelete}
        />
      )}
    </div>
    
  )
}

export default App
