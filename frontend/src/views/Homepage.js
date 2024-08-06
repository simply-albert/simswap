import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 15 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">IMSI Sim Swap</h1>
        <p>
        Fraudsters replace and take over the customer line.
        Identity theft can be categorized into various sections, one of them being Sim Swap Fraud.
        Fraudsters go to the extent of registering an existing number on a new SIM card in order to intercept notifications, one-time passwords, online banking profile and transactions as well as changing the account security settings.
        To avoid this disastrous activity, it is key to ensure your SIM card has an active SIM lock, use strong passwords and keep personal information off social media.
        </p>
        <p>
          {/* <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a> */}
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
         
          <p>
          If someone tries to register a new line using your ID you will receive an SMS from 707 asking you to confirm that you are registering a new line.
          
          </p>
          <p>
          </p>
        </div>
        <div className="col-md-4">
          
          <p>
          To prevent your sim being swapped without you present dial *100*100#.
          </p>
          <p>
          </p>
        </div>
        <div className="col-md-4">
          
          <p>
          To confirm the phone numbers registered in your name dial *106#{" "}
          </p>
          <p>
            
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Stima Sacco 2024</p>
  </footer>
</>

    </div>
  )
}

export default Homepage