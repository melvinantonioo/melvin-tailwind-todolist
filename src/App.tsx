// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Kegiatan from './components/Kegiatan'
import InputList from './components/InputList'

function App() {
  const [count, setCount] = useState<number>(0)

  const question = [
    'Create Guest Experience mobile check-in',
    'Document current CI/CD process',
    'Perform Code Review for final Pillow-talk release',
    'implement new color palette from design team',
    'fix image uploading process for guest check in',
    'provide on-boarding documentation'
  ]

  const [todoState, setTodoState] = useState<any[]>([])

  useEffect(() => {
    axios.get("http://localhost:2000/todos")
      .then((response) => setTodoState(response.data))
      .catch((error) => {
        console.log(error);
        alert('Gagal Mendapatkan data');
      })
      
  }, [])

  const hapusList = (id: number) => {
    axios.delete(`http://localhost:2000/todos/${id}`)
      .then(() => {
        setTodoState(todoState.filter(todo => todo.id !== id))
        alert("berhasil menghapus list")
      })
  }

  const tambahList = (newList: string) => {
    const todo = { task: newList, completed: false }

    axios.post("http://localhost:2000/todos", todo)
      .then((response) => {
        setTodoState([...todoState, response.data])
        alert("Berhasil Menambahkan List!")
      })
  }


  return (
    <div className="bg-[#1a202c] text-white">

      {/* Judul */}
      <div className="text-center p-[2em]">
        <h1 className='text-xl font-bold'>Chores ToDo List</h1>
      </div>
      <Kegiatan
        todos={todoState}
        hapusList={hapusList}
      />

      {/* Underline */}
      <hr className='mt-[2em]'></hr>

      {/* Count */}
      <div className="text-center p-[2em]">
        <h2>Amount List : {count}</h2>
        <h2>Done : 0</h2>
      </div>

      <InputList
        tambahList={tambahList}
      />

    </div>
  )
}

export default App
