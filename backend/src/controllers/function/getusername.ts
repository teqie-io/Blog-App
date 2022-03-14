import jwt from "jsonwebtoken";

export default function(token){
    let decodedJwt: any = jwt.decode(token, { complete: true })
    return decodedJwt.data.username;
}