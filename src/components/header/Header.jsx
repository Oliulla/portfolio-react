import React, { useEffect, useState } from "react";
import Action from "./Action";
// import Me from "../../assets/my-img-1.jpg";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
import Typewriter from "typewriter-effect";
import axios from "axios";
import Loading from "../Loader/Loading";

const Header = () => {
  const [dailyQuote, setDailyQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const url = process.env.REACT_APP_ROOT_API_URL;
  useEffect(() => {
    setIsLoading(true);

    async function getDailyQuote() {
      const res = await axios.get(`${url}/daily-quote`);
      const data = res.data?.data;
      setDailyQuote(data);
    }

    getDailyQuote()
      .catch((error) => console.log("Error:", error))
      .finally(() => setIsLoading(false));
  });

  return (
    <header>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container header_container">
          <h5 className="greeting">Hello, I am</h5>
          <h1 className="my_name">Mohammad Oliullah</h1>
          <Typewriter
            options={{
              strings: `MERN Stack Developer`,
              autoStart: true,
              loop: true,
              delay: 150,
              pauseFor: 100000,
              deleteSpeed: 200,
              deleteChars: 5,
            }}
          />
          <Action />

          <HeaderSocials />

          <div className="quote" data-aos="zoom-in-down">
            <article>
              <Typewriter
                options={{
                  strings: `${dailyQuote?.quote}  -${dailyQuote?.author}`,
                  autoStart: true,
                  loop: false,
                }}
              />
            </article>

            {/* <img src="https://i.ibb.co/hmXFHww/me-portfolio.png" alt="me" /> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
