function ExpenseForm({setName, setAmount, handleSubmit}){
    return (
    <div>
      <input placeholder = "Expense name" onChange={(e) => setName(e.target.value)} />
      <input placeholder = "Amount" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleSubmit} > Add </button>
     </div>
     
    )
    
}

export default ExpenseForm