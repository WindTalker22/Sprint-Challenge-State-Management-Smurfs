import React, { useState } from "react"
import { connect } from "react-redux"
import { fetchSmurfs, postSmurfs } from "../actions/index"

const Smurfs = props => {
  console.log("Hi from Smurfs Comp", props)
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" })

  return (
    <section>
      <form>
        <input />
        <input />
        <input />
      </form>
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
