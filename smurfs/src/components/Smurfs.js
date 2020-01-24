import React, { useState } from "react"
import { connect } from "react-redux"
import { fetchSmurfs, postSmurfs } from "../actions/index"
import Loader from "react-loader-spinner"

const Smurfs = props => {
  console.log("Hi from Smurfs Comp", props)
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" })

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.postSmurfs(newSmurf)
    props.fetchSmurfs()
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" onChange={handleChange} />

        <label htmlFor="age">Age:</label>
        <input name="age" type="text" onChange={handleChange} />

        <label htmlFor="height">height:</label>
        <input name="height" type="text" onChange={handleChange} />
        <button>Add Smurf</button>
      </form>
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <button onClick={props.fetchSmurfs}>Fetch Smurfs</button>
      {props.smurfs.map(smurf => (
        <div>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
    </section>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(Smurfs)
