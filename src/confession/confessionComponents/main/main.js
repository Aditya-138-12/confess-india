import React from "react";
import "./mainCofessionComponent.css"
import ConfessionTimeComponent from "../confessionTIme/confessionTIme";
import ConfessionLikeComponent from "../confessionLikes/confessionLike";

const MainConfessionComponent = () => {
    return (
        <>
            <div className="MainConfessionComponent">
                <div className="confessionComponentTopInfo">
                    <ConfessionTimeComponent/>
                    <ConfessionLikeComponent/>
                </div>
            </div>
        </>
    );
}

export default MainConfessionComponent;
