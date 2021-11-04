import React from "react";
import Link from "next/link";

import "isomorphic-fetch";

const Home = ({ repositories }) => (
  <div>
    <Link href="/blog">
      <a>Blog</a>
    </Link>

    {repositories.map((repo) => (
      <h4 key="repo.id">{repo.name}</h4>
    ))}
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/Vinicius-moura-code/repos"
  );
  const repositories = await response.json();

  return { repositories };
};

export default Home;
