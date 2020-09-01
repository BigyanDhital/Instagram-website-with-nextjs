import React from "react";

export default function PostPage() {
  return (
    <div className="container">
      <h1>Post page</h1>
    </div>
  );
}

function getStaticProps(req) {
  console.log(req);
}
