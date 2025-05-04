import React from "react";
import "./mainCofessionComponent.css"
import ConfessionTimeComponent from "../confessionTIme/confessionTIme";
import ConfessionLikeComponent from "../confessionLikes/confessionLike";
import ConfessionContentComponent from "../confessContent/confessionContent";
import ConfessionLikeButton from "../confessionLikeButton/confessionLikeButton";
import ConfessionCommentButton from "../confessionComment/confessionComment";
import ConfessionReportButton from "../ConfessionReport/confessionReport";

const MainConfessionComponent = () => {
    return (
        <>
            <div className="MainConfessionComponent">
                <div className="confessionComponentTopInfo">
                    <ConfessionTimeComponent/>
                    <ConfessionLikeComponent/>
                </div>
                <div className="confessionComponentContent">
                    <ConfessionContentComponent/>
                </div>
                <div className="confessionComponentInteract">
                    <ConfessionLikeButton/>
                    <ConfessionCommentButton/>
                    <ConfessionReportButton/>
                </div>
            </div>
        </>
    );
}

export default MainConfessionComponent;
