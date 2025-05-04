import React from "react";
import { MessageCircle } from "lucide-react"

const ConfessionCommentButton = () => {
    return (
        <>
            <div className="confessionCommentButtonComponent">
                <MessageCircle className="CommentIconLucide" />
                <span>Comment</span>
            </div>
        </>
    );
}

export default ConfessionCommentButton;
