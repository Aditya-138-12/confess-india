import React from "react";
import { Flag } from "lucide-react"

const ConfessionReportButton = () => {
    return (
        <>
            <div className="confessionReportButtonComponent">
                <Flag className="ReportIconLucide" />
                <span>Report</span>
            </div>
        </>
    );
}

export default ConfessionReportButton;
