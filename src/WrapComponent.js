import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./wrapcomponent.css";
export class WrapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: [
        { label: "Dashboard", to: "/" },
        { label: "My Posted Jobs", to: "" },
        { label: "My Profile", to: "" },
        { label: "My Jobs", to: "" },
        { label: "Clients", to: "" },
        { label: "Messages", to: "/messages" },
        { label: "Documents", to: "" },
        { label: "Invoices", to: "" },
        { label: "Job Payment Request", to: "" },
        { label: "My Earning", to: "" },
        { label: "My Cards", to: "" },
        { label: "Payment & Membership", to: "" },
        { label: "Reviews & Referrals", to: "" },
      ],
      selected: "Dashboard",
    };
  }
  render() {
    return (
      <div className="root_contain">
        <div className="sideBar">
          <div style={{ textAlign: "center" }}>
            <div className="img-container">
              <div
                className="outer-circle"
                style={{
                  borderColor: "#4D4D4D",
                  borderWidth: "3px",
                  borderRadius: "50%",
                  borderStyle: "solid",
                }}
              >
                <div className="circle">
                  <div
                    className="img-bg"
                    style={{
                      objectFit: "contain",
                      height: "92px",
                      width: "92px",
                    }}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            <p style={{ color: "#fff" }}>Jessica Pearson</p>
          </div>
          <nav>
            {this.state.nav.map((i, index) => (
              <Link
                key={index}
                to={i.to}
                onClick={() => this.setState({ selected: i.label })}
              >
                <div
                  className={
                    this.state.selected === i.label
                      ? "nav-item-active"
                      : "nav-item"
                  }
                >
                  <p style={{ paddingLeft: "30px", justifyItems: "center" }}>
                    {i.label}
                  </p>
                </div>
              </Link>
            ))}
            <div
              style={{
                width: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="custom-button">
                <p
                  style={{
                    color: "#F86137",
                    textAlign: "center",
                  }}
                >
                  POST A JOB
                </p>
              </div>
            </div>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default WrapComponent;
