import React from "react";

export default function LoadingSpinner({ isLoading }) {
    return (
        <>
        { isLoading ? (
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        ) : ""}
        </>
    )
}