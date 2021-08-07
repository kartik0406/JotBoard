import React from "react";

function Heading() {
    const date=new Date().getFullYear();
    return <footer><p>Copyright &copy; {date}</p></footer>;
}
export default Heading;
