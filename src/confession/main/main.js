import React from "react";
import PostConfession from "../postConfession/postConfession";
import './main.css';
import PostConfessionButton from "../postConfessionButton/postConfessionButton";

const MainConfession = () => {
    return(
        <>
            <div className="MainConfession">
                <div className="confessionInner">
                <PostConfession/>
                <PostConfessionButton/>
                </div>
            </div>
        </>
    );
}

export default MainConfession;
