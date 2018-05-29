import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Topbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Card, Button } from "reactstrap";

var style = {
  marginTop: "7%",
  marginLeft: "15%",
  width: "85%"
  // backgroundColor: "rgba(255,255,255,.4)"
};

export class Test extends Component {
  handleTestSubmit = event => {};

  render() {
    var active_test_class = "active";
    return (
      <div>
        <Topbar activeTest={active_test_class} />
        <Sidebar />
        <Card body style={style}>
          {this.props.questions.map((question, index) => (
            <div key={index} className="row">
              <div className="col-8">
                <ol>
                  <li>{question.title} </li>
                </ol>
              </div>
              <div className="col-4">
                <center>
                  <Link to={"/question/" + question.id}>
                    <Button id={question.id} type="submit">
                      Solve
                    </Button>
                  </Link>
                </center>
              </div>
            </div>
          ))}
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    completed: state.isCompleted,
    getPending: state.testGetPending,
    getFail: state.testGetFail,
    testData: state.testData,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Test);
