"use server"
import prisma from '@/prisma/prisma'
import { revalidatePath } from 'next/cache'

export async function getAllTodos() {
  return prisma.todo.findMany(
    {
      orderBy: {
        createdAt: 'desc'
      }
    }
  )
}

export async function toggleTodoDone(todoId: number) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: todoId
    }
  })

  if (!todo) {
    return null
  }

  return prisma.todo.update({
    where: {
      id: todoId
    },
    data: {
      done: !todo.done
    }
  })
}

export async function createTodo(
  content: string,
) {
  const result = await prisma.todo.create({
    data: {
      content
    }
  })
  if (!result) {
    return null
  }
  revalidatePath('/')
  return result
}

export async function deleteTodo(
  todoId: number
) {
  const result = await prisma.todo.delete({
    where: {
      id: todoId
    }
  })
  if (!result) {
    return null
  }
  revalidatePath('/')
  return true
}