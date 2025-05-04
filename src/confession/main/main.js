import React from "react";
import PostConfession from "../postConfession/postConfession";
import './main.css';
import PostConfessionButton from "../postConfessionButton/postConfessionButton";
import MainConfessionComponent from "../confessionComponents/main/main";

const MainConfession = () => {
    return(
        <>
            <div className="MainConfession">
                <div className="confessionInner">
                <PostConfession/>
                <PostConfessionButton/>
                </div>
                <MainConfessionComponent/>
            </div>
        </>
    );
}

export default MainConfession;
