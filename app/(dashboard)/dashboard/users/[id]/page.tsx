import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>USER PROFILE : {id}</div>;
};

export default Page;
