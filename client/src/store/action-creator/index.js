import * as CellsActionCreator from "./cell";
import * as UserActionCreator from "./user"
import * as SocketActionCreator from "./socket"
export default {
    ...SocketActionCreator,
    ...CellsActionCreator,
    ...UserActionCreator

}