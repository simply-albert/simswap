import React, {useState, useEffect} from 'react'
import useAxios from "../utils/useAxios"
import { jwtDecode } from 'jwt-decode';
// import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

function Dashboard() {

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
              <a className="nav-link active" href="/dashboard" >
                <span data-feather="home" />
                Sim Checker <span className="sr-only">(current)</span>
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="/Bulkupload">
                <span data-feather="bar-chart-2" />
                BulK SIM Checker
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Reports">
                <span data-feather="layers" />
                Reports
              </a>
            </li>
          </ul>
          
        </div>

      </nav>



      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h3 className="h2">My Dashboard</h3>
          <span>Hello {full_name}!</span>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-outline-secondary">
                Export
              </button>
            </div>
          </div>
        </div>
        {/* <div className='alert alert-success'>
          <strong>{res}</strong>
        </div> */}

        <div className="input-group mb-2">
          <input type="text" className="form-control" placeholder="Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Search</button>
              </div>
          </div>                  
              
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-2 border-bottom" style={{ paddingTop: "25px" }}>
          <h4>Previous Checks</h4>
        </div>

        <div className="input-group mb-2">
            <input
              type="text" className="form-control" placeholder="Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"
            />
            {/* <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div> */}
          </div>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>ResponseCode</th>
                <th>ResponseDesc</th>
                <th>LastSwapDate</th>
                <th>CustomerNumber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>200</td>
                <td>Success</td>
                <td>01-01-1900</td>
                <td>254718635418</td>
              </tr>
              <tr>
                <td>200</td>
                <td>Success</td>
                <td>01-01-1900</td>
                <td>254718635418</td>
              </tr>
              <tr>
                <td>200</td>
                <td>Success</td>
                <td>01-01-1900</td>
                <td>254718635418</td>
              </tr>
              <tr>
                <td>200</td>
                <td>Success</td>
                <td>01-01-1900</td>
                <td>254718635418</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
 
      </>

    </div>
  )
}





export default Dashboard