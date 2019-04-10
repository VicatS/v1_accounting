export interface JwtResponseI {
    dataUser: {
        id: number,
        username: string,
        accessToken: string,
        expiresIn: string
    }
}
