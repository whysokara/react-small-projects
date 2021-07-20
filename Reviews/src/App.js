import React from "react";
import { FaGit, FaGithubSquare } from "react-icons/fa";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
      <footer className="footer">Made by Kara</footer>
    </main>
  );
}

export default App;
