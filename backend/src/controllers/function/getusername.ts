import jwt from "jsonwebtoken";

export default function getUsername(token){
    let decodedJwt: any = jwt.decode(token, { complete: true })
    return decodedJwt.payload.username;
}