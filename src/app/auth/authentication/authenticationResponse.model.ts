export interface AuthResponse {
    idToken:string,
    email:string,
    refeshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}