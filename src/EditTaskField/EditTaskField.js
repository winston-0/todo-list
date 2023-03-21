export default function EditTaskField({ onEdit, editingValue, id, editTask, changeInputValue }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onEdit(editingValue, id)
        editTask()
      }}
    >
      <input onChange={(e) => changeInputValue(e)} value={editingValue} type="text" className="edit"></input>
    </form>
  )
}
