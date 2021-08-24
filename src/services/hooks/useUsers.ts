import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users')
    
    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleString()
      }
    })

    return users;
}

export function useUsers() {
  return useQuery('users', getUsers)
}