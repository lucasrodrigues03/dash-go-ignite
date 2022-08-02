import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { api } from '../api'

interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

export async function getUsers(page: number) {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return {
    users,
    totalCount,
  }
}

export function useUsers(page: number, options: UseQueryOptions) {
  const query = useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 min
    ...options,
  })

  return query as unknown as {
    data: { users: User[]; totalCount: number }
    isFetching: boolean
    isLoading: boolean
    error: any
  }
}
