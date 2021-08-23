import { Add_To_list } from '../constants'
import { inputTyped } from '../constants'

export const AddToList = (data) => {
    return {
        type: Add_To_list,
        data: data
    }

}
export const Input = (data) => {

    return {
        type: inputTyped,
        data: data
    }

}
