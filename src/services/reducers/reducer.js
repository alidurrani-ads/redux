import { Add_To_list } from "../constants"
import { inputTyped } from '../constants'

const initialstate = {
    listdata :[],
    name:''

}
export default function ListItem(initialstate, action) {
    switch (action.type) {
        case Add_To_list:
            return {
                ...state,
                listdata: action.data
            };
            break
        default:
            return state
    }
}


//function setInput(initialstate, action) {
//    switch (action.type) {
//        case inputTyped:
//            return {
//                ...state,
//                name: action.data
//            }
//            break
//        default:
//            return state
//    }
//}