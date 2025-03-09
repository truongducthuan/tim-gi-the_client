// shared - configs
import { GATEWAY_URL } from '@/shares/configs/appConfig'

// generate host name
export const generateHost = () => GATEWAY_URL

// Generate api url
// generateApiUrl({ gateway: 'moon', endpoint: '/login' }) => /moon/api/login
export const generateApiUrl = async ({ gateway, endpoint }: { gateway: string, endpoint: string }) => {
  const hostname = generateHost()
  return `${hostname}/${gateway}/api${endpoint}`
}

export default generateApiUrl