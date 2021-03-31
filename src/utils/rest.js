import {useReducer, useEffect} from 'react'
import axios from "axios";

const INITIAL_STATE = {
    loading: true,
    data: {}
}
const reducer = (state, action) => {
    if (action.type === 'REQUEST') {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type === 'SUCCESS') {
        return {
            ...state,
            loading: false,
            data: action.data
        }
    }
    return state
}

const init = baseURL => {

    const useGet = resource => {
        let data, dispatch;
        [data, dispatch] = useReducer(reducer, INITIAL_STATE);
        useEffect(() => {
            dispatch({type: 'REQUEST'})
            axios
                .get(baseURL + resource + '.json')
                .then(r => {
                    dispatch({type: 'SUCCESS', data: r.data})
                })
        }, [])
        return data
    }

    const usePost = resource => {
        let data, dispatch;
        [data, dispatch] = useReducer(reducer, INITIAL_STATE);
        const post = data => {
            dispatch({type: 'REQUEST'})
            axios
                .post(baseURL + resource + '.json', data)
                .then(r => {
                    dispatch({
                        type: 'SUCCESS',
                        data: r.data
                    })
                })
        }
        return [data, post]
    }

    const useDelete = () => {
        let data, dispatch;
        [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        const remove = resource => {
            dispatch({type: 'REQUEST'})
            axios
                .delete(baseURL + resource + '.json')
                .then(() => {
                    dispatch({
                        type: 'SUCCESS',
                    })
                })
        }
        return [data, remove]
    }

    return {
        useGet,
        usePost,
        useDelete
    }
}

export default init;