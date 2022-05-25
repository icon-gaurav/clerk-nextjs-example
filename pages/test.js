import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

const Test = () => {
  const { getToken } = useAuth();
  console.log(getToken);
  const fetchToken = async () => {
    const token = await getToken({ template: "hasura" });
    console.log(token);
  };
  useEffect(() => {
    fetchToken().then(r => {
    });
  }, []);

  return (
    <div>
      <p>Test page</p>
    </div>
  );
};

export default Test;
