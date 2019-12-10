import React, { Suspense } from "react";
import { useQuery } from "@apollo/react-hooks";
import { IS_USER_LOGGED_IN } from "./graphql/queries";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import Loading from "./components/loading/loading";
const HomePage = React.lazy(() =>
  import("./pages/home-page/home-page.component")
);
const LoginPage = React.lazy(() =>
  import("./pages/login-page/login-page.component")
);
const ProfilePage = React.lazy(() =>
  import("./pages/profile-page/profile-page.component")
);
const PostPage = React.lazy(() =>
  import("./pages/post-page/post-page.component")
);
const PostsCards = React.lazy(() => import("./components/posts-cards"));

export default () => {
  const { data } = useQuery(IS_USER_LOGGED_IN);
  const { isLoggedIn } = data;
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path="/" component={PostsCards} />
          <Route path="/home" component={HomePage} />
          <Route path="/profile/:userId" component={ProfilePage} />
          <Route
            path="/post/:postId"
            component={PostPage}
            isLoggedIn={isLoggedIn}
          />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Redirect to="/" /> : <LoginPage />)}
          />
          {/* <Route exact={true} path="*">
            <h1>Page not found</h1>
          </Route> */}
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};
