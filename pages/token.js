import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Token = () => {
  const { getToken, userId } = useAuth();
  const [token, setToken] = useState("");
  console.log(getToken);
  const fetchToken = async () => {
    const t = await getToken({ template: "hasura" });
    console.log(t, userId);
    setToken(t);
  };
  useEffect(() => {
    fetchToken().then(r => {
    })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 1031, margin: "0 auto", flexWrap: "wrap" }}>
      <p>Token page</p>
      <p style={{ overflowWrap: "anywhere", padding: 10 }}>{JSON.stringify(token)}</p>
    </div>
  );
};

export default Token;
