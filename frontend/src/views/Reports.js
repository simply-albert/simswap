import React, {useState, useEffect} from 'react'
import useAxios from "../utils/useAxios"
import { jwtDecode } from 'jwt-decode';
// import jwt_decode from 'jwt-decode';


function Reports() {

    const [res, setRes] = useState("")
    const api = useAxios();
    const token = localStorage.getItem("authTokens")

    if (token){
      const decode = jwtDecode(token)
      var user_id = decode.user_id
      var username = decode.username
      var full_name = decode.full_name
      var image = decode.image

    }

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try{
    //       const response = await api.get("/test/")
    //       setRes(response.data.response)
    //     } catch (error) {
    //       console.log(error);
    //       setRes("Something went wrong while connecting to the DB")
    //     }
    //   }
    //   fetchData()
    // }, [])

    
    // useEffect(() => {
    //   const fetchPostData = async () => {
    //     try{
    //       const response = await api.post("/test/")
    //       setRes(response.data.response)
    //     } catch (error) {
    //       console.log(error);
    //       setRes("Something went wrong")
    //     }
    //   }
    //   fetchPostData()
    // }, [])


  return (
    <div>
      <>
  <div className="container-fluid" style={{ paddingTop: "50px" }}>
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-4">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            
           
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                <span data-feather="bar-chart-2" />
                Sim Checker
              </a>
            </li>

            
            <li className="nav-item">
              <a className="nav-link" href="/Bulkupload">
                <span data-feather="layers" />
                BulK SIM Checker 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/Reports" >
                <span data-feather="home" />
                Reports<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          
        </div>

      </nav>



      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h3 className="h2">Reports</h3>
          <span>Hello {full_name}!</span>
          
        </div>
        {/* <div className='alert alert-success'>
          <strong>{res}</strong>
        </div> */}


      </main>
    </div>
  </div>
 
      </>

    </div>
  )
}





export default Reports