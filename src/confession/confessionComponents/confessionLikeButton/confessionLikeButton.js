import React from "react";
import { ThumbsUp } from "lucide-react";

const ConfessionLikeButton = () => {
    return (
        <>
            <div className="confessionLikeButtonComponent">
                <ThumbsUp className="thumbsIconLucide" />
                <span>Like</span>
            </div>
        </>
    );
}

export default ConfessionLikeButton;
