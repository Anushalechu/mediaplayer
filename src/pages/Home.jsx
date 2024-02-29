import React from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import Videocard from '../components/Videocard'
import { useNavigate} from 'react-router-dom'

function Home() {
  // useNavigate(): it is a hook used to navigate from one page to another page. 
  const navigateByUrl = useNavigate()
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-item-center">
        <div className='add_videos'>
          <Add/>
        </div>
        <h3 style={{fontSize:"30px", cursor:"pointer"}} onClick={()=>navigateByUrl('/watch')}>
          watch history
        </h3>
      </div>
      <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
        <div className='col-md-6 mt-5'>
          <h4>All Videos</h4>
          <View/>
        </div>
        <div className='mt-5'>
         <Category/>
        </div>
      </div>
    </>
  )
}

export default Home