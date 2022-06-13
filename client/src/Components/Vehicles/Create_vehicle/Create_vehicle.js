import React, { Component } from 'react';
import styled from 'styled-components';

//asign to the values using java script constructor     
    

class CreateVehicel extends Component {


    render() {
        return (   
            <CreateContainer>
                <div className="container" >
                <div className="card">
                    <div className="">
           
                  <div className="row g-0">
                    
                      <div className="col-md-11">
                          <div className="card-body">
                              <h4 className="card-title text-secondary mt-3 text-align center">Create Vehicles</h4>
                              <hr class="" />  
                              <h5> Contact Information </h5>
                              <hr class="" />  

                              <form onSubmit={(e) => this.submit(e)}>
                              <div className="mb-3">
                                      <label for="name" className="">Name :</label>
                                      <input
                                            type="text"
                                            className="form-control"

                                      />
                                  </div>
                                  
                                  <div className="mb-3">
                                      <label for="phoneNumber" className="">Phone Number:</label>
                                      <input
                                          className="form-control"
                                            type="text" 
                                      />
                                  </div>
                                  <div className="mb-3">
                                  <label for="city" className="">City:</label>
                                  <select
                                        //   value={this.state.Type}
                                        //   onChange={(e) => this.onSelectValueChange(e)}
                                          class="form-select"
                                          id="Type">
                                          <option  value={"--Select Category--"}>--Select Your City--</option>
                                          <option value="Part _ Time">Colombo</option>
                                         <option value="Full _ Time">kandy </option>
                                          <option value="Another">Another</option>
                                      </select>
                                  </div>

                                 <br/>
                                 <h5> Vehicle  Information </h5>
                                    <hr class="" />

                                    <div className="mb-3">
                                        <label for="name" className="">Vehicle Type:</label>
                                        <select
                                        //   value={this.state.Type}
                                        //   onChange={(e) => this.onSelectValueChange(e)}
                                          class="form-select"
                                          id="Type">
                                          <option  value={"--Select Category--"}>--Select Type--</option>
                                          <option value="">Car</option>
                                         <option value="">van </option>
                                          <option value="Another">Another</option>
                                      </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="name" className="">Vehicle Condition:</label>
                                        <select
                                        //   value={this.state.Type}
                                        //   onChange={(e) => this.onSelectValueChange(e)}
                                          class="form-select"
                                          id="Type">
                                          <option  value={"--Select Category--"}>--Select condition--</option>
                                          <option value="">Suspension </option>
                                         <option value="">Light </option>
                                          <option value="Another">Another</option>
                                      </select>
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="">Vehicle Make:</label>
                                        <select
                                        //   value={this.state.Type}
                                        //   onChange={(e) => this.onSelectValueChange(e)}
                                            class="form-select"
                                            id="Type">
                                            <option  value={"--Select Category--"}>--Select Your Vehicle Make--</option>
                                            <option value="">Honda</option>
                                             <option value="">Toyota </option>
                                            <option value="Another">Another</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="">Vehicle Model:</label>
                                        <input type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Vehicle Model"
                                            required
                                            />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="">Manufactured Year:</label>
                                       
                                        <select
                                        //   value={this.state.Type}
                                        //   onChange={(e) => this.onSelectValueChange(e)}
                                            class="form-select"
                                            id="Type">
                                            <option  value={"--Select Category--"}>--Select Year--</option>
                                            <option value="">2018</option>
                                             <option value="">2020 </option>
                                            <option value="Another">Another</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="">Vehicle Price :</label>
                                        <input type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Vehicle Price"
                                            required
                                            />        
                                    </div>
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                <label class="form-check-label" for="inlineCheckbox1">ongoing lese</label>
                                </div>

                                <div className="mb-3">
                                        <label for="name" className="">Select Transmission:</label>
                        
                                        <select
                                        //   value={this.state.Type}
                                        //   onChange={(e) => this.onSelectValueChange(e)}
                                            class="form-select"
                                            id="Type">
                                            <option  value={"--Select Category--"}>--Select Transmission--</option>
                                            <option value="">Manual</option>
                                             <option value="">Auto </option>
                                            <option value="Another">Another</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="name" className="">Fuel Type:</label>
                        
                                        <select
                                            class="form-select"
                                            id="Type">
                                            <option  value={"--Select Category--"}>--Select Your Fuel type--</option>
                                            <option value="">Liquid fuels</option>
                                             <option value="">Gaseous fuels </option>
                                            <option value="Another">Another</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="">Engine Capercity:</label>
                                        <input type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Engine Capercity"
                                            required
                                            />
                                    </div>
                                    <div className="mb-3">
                                        <label for="name" className="">Millage(KM):</label>
                                        <input type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Millage"
                                            required
                                            />
                                    </div>
                                    <div className="mb-3">
                                        <label for="name" className="">options:</label>
                                        <br/>

                                        <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label class="form-check-label" for="inlineCheckbox1">AIR CONDITION</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label class="form-check-label" for="inlineCheckbox1">POWER STEERING</label>
                                        </div>
                                        <br/>
                                        <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label class="form-check-label" for="inlineCheckbox1">POWER MIRROR</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label class="form-check-label" for="inlineCheckbox1">POWER WINDOW</label>
                                        </div>
                                            
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="">Description:</label>
                                        <textarea
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Description"
                                            req
                                            
                                            />
                                            <p>(put correct address and Land phone number if you own a "Car Sale")</p>
                                          
                                            (Do not post your website URL)
                                    </div>
                                    


                                            <br/>
                                    <div className="mb-3">
                                        <label for="name" className="mb-3">Upload Images:</label>
                                        <br/>

                                        <p>if you have problem uploading images in mobile Broadband.Try to uploading only one small image file</p>
                                        <br/>
                                        <label for="name" className="form-label">Main Image:</label> 
                                        <input type="file"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Description"
                                            required
                                            />
                                            <label for="name" className="form-label"> Image 1:</label> 
                                        <input type="file"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Description"
                                            required
                                            />
                                            <label for="name" className="form-label">Image 2:</label> 
                                        <input type="file"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Description"
                                            required
                                            />
                                            <label for="name" className="form-label">Image 3:</label> 
                                        <input type="file"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Description"
                                            required
                                            />
                                    </div>
                                 
                                  <div className="d-grid gap-2 mx-auto">
                                      <button type="submit" className="btn btn-primary">Create Vehicle</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      <br/>
      <br/>
        <br/>
        </div>
        </CreateContainer>
        );
    }
}


export default CreateVehicel;
const CreateContainer = styled.div`
background-color: #f5f5f5;


.card{
    background-color: #f5f5f5;
    width:700px;
    margin-top:50px;
    border: 7px solid  gray
}
     
 `;
 

 