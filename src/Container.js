import React, { Component, lazy, Suspense } from "react";
import WrapComponent from "./WrapComponent";
import { Route, Switch } from "react-router-dom";
const Dashboard = lazy(() => import("./Dashboard"));
const Messages = lazy(() => import("./Messages"));
export class Container extends Component {
  render() {
    return (
      <WrapComponent>
        <Suspense fallback={<label>error</label>}>
          <Switch>
            <Route exact={true} path={"/"} component={Dashboard} />
            <Route exact={true} path={"/messages"} component={Messages} />
          </Switch>
        </Suspense>
      </WrapComponent>
    );
  }
}

export default Container;
