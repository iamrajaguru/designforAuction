import React, { Component } from "react";
import "./message.css";
import ImageIcon from "./woman-sitting.png";
export class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "steve", img: ImageIcon },
        { name: "rose", img: ImageIcon },
        { name: "jessica", img: ImageIcon },
        { name: "elsa", img: ImageIcon },
        { name: "tony", img: ImageIcon },
        { name: "scarlet", img: ImageIcon },
        { name: "lucy", img: ImageIcon },
      ],
      seletedUser: "jessica",
      conversation: [
        {
          username: "tony",
          time: "08:00 AM",
          message: "Hi",
        },
      ],
      text: "",
    };
  }
  sendMessage = () => {
    let temp = this.state.conversation;

    let now =
      (new Date().getHours() > 12
        ? new Date().getHours() - 12
        : new Date().getHours()) +
      ":" +
      new Date().getMinutes() +
      (new Date().getHours() > 12 ? " PM" : " AM");
    if (this.state.text)
      temp.push({
        username: this.state.seletedUser,
        time: now,
        message: this.state.text,
      });
    this.setState({ conversation: temp, text: "" });
  };
  render() {
    return (
      <div
        style={{
          margin: "50px",
          display: "flex",
        }}
      >
        <div className="list_user">
          <div className="searchItem">
            <i
              className="fas fa-search"
              style={{ color: "#fff", fontSize: "30px" }}
            />
          </div>
          {this.state.users.map((u, index) => (
            <div
              key={index}
              className={
                this.state.seletedUser === u.name
                  ? "activeContainer"
                  : "userContainer"
              }
              onClick={() => this.setState({ seletedUser: u.name })}
            >
              <img className="userIcon" src={u.img} alt="no-img" />
            </div>
          ))}
        </div>
        <div className="message_container">
          <div className="conversation_holder">
            {this.state.conversation.map((i, index) => (
              <div
                key={index}
                className={
                  this.state.seletedUser === i.username
                    ? "active_rowContainer"
                    : "row_container"
                }
              >
                {this.state.seletedUser === i.username && (
                  <label style={{ color: "#E5E5E5", fontSize: "10px" }}>
                    {i.time}
                  </label>
                )}
                <div
                  className={
                    this.state.seletedUser === i.username
                      ? "convo_active"
                      : "convo_text"
                  }
                >
                  {i.message}
                </div>
                {this.state.seletedUser !== i.username && (
                  <label style={{ color: "#E5E5E5", fontSize: "10px" }}>
                    {i.time}
                  </label>
                )}
              </div>
            ))}
          </div>
          <div className="message_box">
            <div className="clip_container">
              <i
                className="ic fas fa-paperclip"
                style={{ color: "#646464", fontSize: "24px" }}
              />
            </div>
            <div className="seperator" />
            <input
              className="input_container"
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
              placeholder="Type a message..."
            />

            <div className="seperator" />
            <div onClick={this.sendMessage}>
              <i
                className="fas fa-paper-plane"
                style={{ color: "#009DF6", fontSize: "24px" }}
              />
            </div>
          </div>
        </div>
        <div className="admin_container">
          <div className="profile_container">
            <div className="outline">
              <div className="profile-img" />
            </div>
            <div className="flexAlign">
              <p
                className="fchange"
              >
                Stephen Griffin
              </p>
            </div>
          </div>
          <div>
            <div className="flexAlign">
              <i className="fas fa-user-clock block-icon" />
              <p className="containerText">Joined on</p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                March 25<sup>th</sup>, 2019
              </p>
            </div>
            <div className="flexAlign">
              <i className="fas fa-stopwatch block-icon" />
              <p className="containerText">Avg.response time</p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                08 hrs
              </p>
            </div>
            <div className="flexAlign">
              <i className="fas fa-map-marker-alt block-icon" />
              <p className="containerText"> Location </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                California,US
              </p>
            </div>
            <div className="flexAlign">
              <i className="fas fa-list-ul block-icon" />
              <p className="containerText"> Jobs hired </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                25
              </p>
            </div>
            <div
              style={{
                width: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="custom-button"
                style={{ background: "transparent" }}
              >
                <p
                  style={{
                    color: "#F86137",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  VIEW RECENT JOB POSTINGS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
