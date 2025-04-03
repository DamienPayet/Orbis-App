export interface UserInfoResponseInterfaces {
  id: string
  email: string
  username: string
  role: string
  agency : UserInfoAgencyResponse | null,
  contentCreator : UserInfoContentCreatorResponse | null,
  isReady : boolean,
  isActive: boolean
  lastLoginAt: any
}
export interface UserInfoAgencyResponse {
  id: string
  name: string
}
export interface UserInfoContentCreatorResponse {
  id: string
  name: string
}
