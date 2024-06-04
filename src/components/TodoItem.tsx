'use client'
import { dateToLocalDateString } from '@/lib/utils'
import { deleteTodo, toggleTodoDone } from '@/services/todo.service'
import React, { useState, MouseEvent } from 'react'

type TProps = {
  todo: ToDo
}
export default function TodoItem({ todo }: TProps) {
  const [todoValue, setTodoValue] = useState<ToDo>(todo)

  const deleteThis = async (id: number) => {
    const result = await deleteTodo(id)
    if (!result) {
      alert('삭제에 실패했습니다.')
      return false
    }
    return true
  }

  const toggleThis = async (id: number) => {
    console.log('toggle todo', todoValue.id)
    setTodoValue((prev) => ({ ...prev, done: !prev.done }))
    toggleTodoDone(todoValue.id)
  }
  return (
    <div className='flex items-center gap-2 px-4 border-b py-2'>
      <input
        className='cursor-pointer'
        type='checkbox'
        name='done'
        checked={todoValue.done}
        onChange={() => toggleThis(todoValue.id)}
      />
      <p
        className='flex-1 cursor-pointer'
        onClick={() => toggleThis(todoValue.id)}
      >
        {todo.content}
      </p>
      <p>{dateToLocalDateString(todo.createdAt)}</p>
      <button
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault()
          console.log('delete todo', todoValue.id)
          if (confirm('정말 삭제하시겠습니까?')) {
            deleteThis(todoValue.id)
          }
        }}
        className='border rounded-lg border-red-500 text-red-500 py-1 px-2'
      >
        삭제
      </button>
    </div>
  )
}
