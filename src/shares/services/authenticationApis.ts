import { POST } from './index'

const authApis = {
  login: ({ email, password }: { email: string, password: string }) => POST('/login', { body: { email, password } }),
  signup: ({ name, email, password }: { name: string, email: string, password: string }) => POST('/signup', { body: { name, email, password } }),
  logout: () => POST('/logout')
}

export default authApis