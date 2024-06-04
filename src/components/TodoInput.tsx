'use client'
import { createTodo } from '@/services/todo.service'
import { useRef } from 'react'

export default function TodoInput() {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (formData: FormData) => {
    const content = formData.get('todoContent') as string
    if (!content) {
      return null
    }
    const result = await createTodo(content)
    if (!result) {
      alert('추가에 실패했습니다.')
      return false
    }

    formRef?.current?.reset()
    return true
  }

  return (
    <form ref={formRef} className='flex justify-center mt-4 gap-2 px-8' action={handleSubmit}>
      <input
        type='text'
        name='todoContent'
        className='flex-1 border border-gray-300 rounded-lg p-2'
        placeholder='할일을 입력하세요.'
      />
      <button className='border rounded-lg py-1 px-4 hover:border-blue-500'>
        추가
      </button>
    </form>
  )
}
