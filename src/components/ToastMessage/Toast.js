import React from 'react';
import './Toast.css'
const Toast = ({showToast, setToast}) => {
    return (
        <>
        { showToast?
        <div id="toast">
            <div className="toast toast--success">
            <div className="toast__icon">
                <i className="fas fa-check-circle"></i>
            </div>
            <div className="toast__body">
                <div className="toast__msg">
                    Đã thêm vào danh sách thành công
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

export default Toast;
