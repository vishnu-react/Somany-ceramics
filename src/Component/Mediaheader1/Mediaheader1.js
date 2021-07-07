import React from 'react'
import './Mediaheader1.css'
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import logo from "../../image/SomanyLogo2.svg";


function Mediaheader1() {
    return (
        <div className="media_Head2">
        <div className="container">
          <div className="row">
            <Navbar bg="white" expand="lg" className="pt-3 mb-2">
              <div className="col-md-4 col-8 col-lg-2 ">
                <img className="cata_logo" src={logo} alt=""></img>
              </div>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="hamburg2_media"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto menus_media">
                  <Link to="/tilehome" className="media_links1">
                    <i className="fas fa-th-large"></i> Tiles |
                  </Link>
                  <Link to="/bathwarehome" className="media_links1">
                    <i className="fas fa-bath"></i> Bathware |
                  </Link>
                  <Link to="/catalogueshome" className="media_links1">
                    <i className="fas fa-download"></i> Catalogues |
                  </Link>
                  <Link to="/wtbhome" className="media_links1">
                    <i className="fas fa-map-marker-alt"></i> Where to buy |
                  </Link>
                  <Link to="/mediahome" className="media_links1">
                    <i className="fas fa-images"></i> Media Gallery |
                  </Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  {/* <Button variant="outline-success" className="search_btn btn btn-center">Search</Button> */}
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    )
}

export default Mediaheader1
