import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import Fetcher, { TOKEN_KEY } from "../ClientUtils/Fetcher";

const Loginpage = (props: Types.NO_PROPS) => {
  const nav = useNavigate();

  // in development, login as `bigwow` with pass = 1111111111
  const [password, setPassword] = useState<string>(process.env.NODE_ENV === "production" ? "" : "1111111111");
  const [password_B, setPassword_B] = useState<string>(process.env.NODE_ENV === "production" ? "" : "1111111111");
  const [username, setUsername] = useState<string>(process.env.NODE_ENV === "production" ? "" : "bigwow");

  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const handleLogin = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    //* check if the user has entered their username and password
    if (!password || !username) {
      alert(`Please enter your username and password`);
      return;
    }

    if (isNewUser && password != password_B) {
      alert(`Please check your passwords`);
      return;
    }

    // define the URL for a new user or a returning user
    const URL = isNewUser ? "/auth/register" : "/auth/login";

    //* make a post request to /register or /login based on a new or returning user
    Fetcher.POST(URL, { username, password })
      .then((data) => {
        // console.log({ data });
        console.log(`trying to login!`);

        // if the user can log in
        if (data.token) {
          // put the JWT into local storage
          localStorage.setItem(TOKEN_KEY, data.token);
          // finally navigate the user to the daily draw view
          nav("/dailydraw");
        }
      })
      .catch((error) => {
        console.log(`Login Error...\n`);
        console.error(error);
        alert(error.message);
      });
  };

  /**
   * Allows users to optionally login via enter key
   * @param e keydown event
   */
  const handleEnterLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card bg-light shadow col-md-4">
          <form className="card-body row justify-content-center">
            <h5 className="card-title text-center col-md-7">Please log in, or register as a new user</h5>
            <div className="row justify-content-center">
              <button className="btn btn-primary m-2 col-md-5" type="button" onClick={() => setIsNewUser(!isNewUser)}>
                {isNewUser ? "Registering" : "Logging in"}, {!isNewUser ? "Register" : "Log in"}?
              </button>

              <button className="btn btn-success m-2 col-md-5" type="button" onClick={(e) => handleLogin(e)}>
                {isNewUser ? "Register" : "Login"}
              </button>
            </div>
            <label>Username</label>
            <input
              id="username"
              placeholder="username"
              type="text"
              value={username}
              className="form-control col-md-7 my-1"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Password</label>
            <input
              id="password"
              placeholder="password"
              type="password"
              value={password}
              className="form-control col-md-7 mb-1"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => handleEnterLogin(e)}
            />

            {isNewUser && (
              <>
                <label>Confirm Password</label>
                <input
                  id="password"
                  placeholder="confirm password"
                  type="password"
                  value={password_B}
                  className="form-control col-md-7 mb-1"
                  onChange={(e) => setPassword_B(e.target.value)}
                  onKeyDown={(e) => handleEnterLogin(e)}
                />
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
