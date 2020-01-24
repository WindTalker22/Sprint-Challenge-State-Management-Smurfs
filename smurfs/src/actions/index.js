import axios from "axios"

export const FETCHING_SMURF_START = "FETCHING_SMURF_START"
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE"

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: "FETCHING_SMURF_START" })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log("Hi from the fetSmurf req", res.data)
      dispatch({ type: "FETCHING_SMURF_SUCCESS", payload: res.data })
    })
    .catch(err => {
      console.log("Hi from the fetch catch", err)
      dispatch({ typr: "FETCHING_SMURF_FAILURE" })
    })
    .finally(() => {
      console.log("Axios fetch call complete ")
    })
}

export const postSmurfs = () => dispatch => {
  dispatch({ type: "POST_SMURF_START" })
  axios
    .post(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log("Hi from the postSmurf req", res.data)
      dispatch({ type: "POST_SMURF_SUCCESS", payload: res.data })
    })
    .catch(err => {
      console.log("Hi from the post catch", err)
      dispatch({ type: "POST_SMURF_FAILURE" })
    })
    .finally(() => {
      console.log("Axios post call complete")
    })
}
