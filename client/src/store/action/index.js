import axios from 'axios'
export const FETCH_CERVEZAS = "FETCH_CERVEZAS"



export default  function getCervezas() {
    return function(dispatch) {
        axios.get('http://localhost:3001/')
        .then((cervezas) => {
            dispatch({
                type:FETCH_CERVEZAS,
                payload: cervezas
            })
        })
    }
}
export function postCervezas(payload){
    console.log(payload)
    return async function(dispatch) {
        const response = await axios.post('http://localhost:3001/', payload)
        return response 
    }
}