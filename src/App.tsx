import Snowflake from "./Classes/Snowflake";

function App() {
    setInterval(() => {
       new Snowflake();
    }, 200)
    return <></>;
}

export default App;
