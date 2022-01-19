import React from 'react';
import './Toast.css'
const ToastDelete = ({showToast, setToast}) => {
    return (
        <>
        { showToast?
        <div id="toast">
            <div className="toast toast--delete">
            <div className="toast__icon">
            <i class="fas fa-exclamation-circle"></i>
            </div>
            <div className="toast__body">
                <div className="toast__msg">
                    Đã xóa khỏi danh sách
                </div>
            </div>
            <div className="toast__close">
                <i className="fas fa-times"></i>
            </div>
        </div>


        </div> : null

}
        </>
        
    );
}

export default ToastDelete;
