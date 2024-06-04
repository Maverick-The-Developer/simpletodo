import TodoInput from '@/components/TodoInput'
import TodoItem from '@/components/TodoItem'
import { getAllTodos } from '@/services/todo.service'
import React from 'react'

export default async function TodoApp() {
  const todoList = await getAllTodos()
  return (
    <div className='mx-auto mt-8'>
      <h1 className='text-center text-3xl mb-4'>Todo App</h1>
      <hr />
      <TodoInput />
      <div className='my-4 p-4'>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}
