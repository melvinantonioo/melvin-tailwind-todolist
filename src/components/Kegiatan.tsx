// import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface ITodos {
    todos: any[],
    hapusList: (id: number) => void
}

const Kegiatan: React.FC<ITodos> = ({ todos, hapusList }) => {
    return (
        <div>

            {todos.map((kegiatan, index) => (
                <div
                    key={index}
                    className="flex flex-row p-4"
                >

                    <div className="basis-[10%]">
                        <input
                            type="checkbox"
                            className="w-5 h-5 border-2 border-green-500 text-green-500 rounded accent-green-500 focus:outline-none"
                        />
                    </div>

                    <div className="basis-[90%]">
                        <p>{kegiatan.task}</p>
                    </div>

                    <div className="basis-[10%]">
                        <button
                            onClick={() => hapusList(kegiatan.id)}
                            className="bg-transparent text-red-300 border border-red-300 py-1 px-2 rounded-md hover:bg-red-300 hover:text-white">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default Kegiatan