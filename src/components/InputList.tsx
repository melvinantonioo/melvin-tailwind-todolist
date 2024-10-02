// import React from 'react'

import { useState } from "react"

interface IInput {
    tambahList: (newList: string) => void
}

const InputList: React.FC<IInput> = ({ tambahList }) => {
    const [newList, setnewList] = useState('')

    const handleInput = (e: React.FormEvent) => {
        e.preventDefault();
        if (newList.trim()) {
            tambahList(newList);
            setnewList('')
        } else {
            alert('Input tidak boleh kosong')
        }
    }

    return (
        <div className="container mx-auto pb-[2em]">
            <div>

                <div className="p-2">
                    <label>Add To Do</label>
                </div>

                <div>
                    <form onSubmit={handleInput}>
                        <div>
                            <input
                                type="text"
                                value={newList}
                                onChange={(e) => setnewList(e.target.value)}
                                placeholder="Tambahkan List Baru"
                                className="border rounded w-[100%] bg-transparent h-[2em]"
                            />

                        </div>

                        <div className="p-2">
                            <button
                                type="submit"
                                className="bg-blue-400 text-black py-2 px-3 rounded-md">
                                Add To Do
                            </button>
                        </div>
                    </form>

                </div>



            </div>
        </div>
    )
}

export default InputList