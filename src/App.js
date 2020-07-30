import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Container from "./Container";
import { createBrowserHistory } from "history";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter History={createBrowserHistory()}>
          <header className="navBar">
            <div
              style={{
                display: "flex",
                width: "inherit",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className="logo">LOGO</p>
              <div
                style={{
                  width: "500px",
                  paddingRight: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <i
                  className="fas fa-search"
                  style={{ fontSize: "20px", paddingRight: "10px" }}
                />
                <p>Search Jobs</p>

                <p>Dashboard</p>
                <p>Hi,Jesse</p>
                <div>
                  <i
                    className="fas fa-bell"
                    style={{
                      fontSize: "30px",
                      paddingRight: "10px",
                      color: "#B5B5B5",
                      position: "relative",
                    }}
                  >
                    <i
                      className="fas fa-circle"
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: "10px",
                        color: "red",
                      }}
                    />
                  </i>
                </div>
                <i
                  className="fas fa-comment-alt"
                  style={{
                    fontSize: "30px",
                    paddingRight: "10px",
                    color: "#B5B5B5",
                  }}
                />

                <div className="circle-logo">
                  <div className="logo-img" alt="profile" />
                </div>
              </div>
            </div>
          </header>
          <Container />
          <footer className="footer_style">
            <div className="contact_info">
              <p className="bottom-logo ">LOGO</p>
              <div className="in_line">
                <p>Top Attorneys</p>
                <p>Services</p>
                <p>Pricing</p>
                <p>How it Works</p>
                <p>Attorneys Apply</p>
                <p>Articles</p>
              </div>
              <div className="in_line" style={{ width: "30%" }}>
                <p>Privacy policy</p>
                <p>Terms & Conditions</p>
              </div>
              <div className="in_line" style={{ width: "20%",marginTop:"10px" }}>
                <div className="iconLinkHolder">
                  <i className="fab fa-facebook-square customLink" />
                </div>
                <div className="iconLinkHolder">
                  <i className="fab fa-twitter customLink" />
                </div>
                <div className="iconLinkHolder">
                  <i className="fab fa-instagram customLink" />
                </div>
              </div>
            </div>
            <div className="copy_info">
              <p> © 2019 BestLegalChoice. All rights reserved.</p>
            </div>
          </footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
