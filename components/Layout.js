import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  const head = () => (
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
  );
  const nav = () => (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-dark"> Home </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login">
          <a className="nav-link text-dark">Login</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link text-dark"> Register </a>
        </Link>
      </li>
    </ul>
  );
  return (
    <React.Fragment>
      {head()}
      {nav()}
      <div className="container pt-5 pb-5"> {children} </div>
    </React.Fragment>
  );
};
export default Layout;
