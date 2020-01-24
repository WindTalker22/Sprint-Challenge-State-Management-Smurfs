import React, { useState } from "react"
import { connect } from "react-redux"
import { fetchSmurfs, postSmurfs } from "../actions/index"

const Smurfs = () => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" })

  return <div></div>
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(Smurfs)
