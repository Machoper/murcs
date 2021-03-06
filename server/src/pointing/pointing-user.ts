import { generateUid } from "../common/utils"

export enum PointingUserType {
    PLAYER = 'player',
    OBSERVER = 'observer'
}

export default class PointingUser {
    id: string
    name: string
    type: PointingUserType
    vote?: number

    constructor(name: string, type: PointingUserType) {
        // this.id = id
        this.id = generateUid()
        this.name = name
        this.type = type
    }
}