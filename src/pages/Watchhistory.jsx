import React from 'react'
import { Link } from 'react-router-dom'

function Watchhistory() {
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h5>Watch History</h5>
      <Link to='./home' style={{textDecoration:"none",color:"white",fontSize:"15px", fontWeight:"600"}}>
        <i class="fa-solid fa-arrow-left me-3"></i>Back To Home
      </Link>
    </div>
    <table className='table container mb-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Heeriye</td>
          <td>https://youtu.be/RLzC55ai0eo?si=iT3aEbcfgw05qbmG</td>
          <td>1-1-24  01:23pm</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Heeriye</td>
          <td>https://youtu.be/RLzC55ai0eo?si=iT3aEbcfgw05qbmG</td>
          <td>1-1-24  01:23pm</td>
          <td>delete</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Watchhistory