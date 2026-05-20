function ExpenseList({expenses, handleDelete}) {
    return (
    <div className="expense-list">
        {expenses.map((expense, index) => (
        <p className="expense" key={index}>
          <span className="meta">{expense.name} - {expense.amount}</span>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </p>
      ))}
    </div>
    )

}

export default ExpenseList