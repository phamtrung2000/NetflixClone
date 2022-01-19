import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__icon">
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                    <FontAwesomeIcon icon={['fab', 'instagram-square']} />
                    <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                    <FontAwesomeIcon icon={['fab', 'youtube-square']} />
                </div>
                <div className="footer__middle">
                    <div className="first__column">
                        <a href="" className="column__item">
                            <span>Âm thanh và phụ đề</span>
                        </a>
                        <a href="" className="column__item">
                            <span>
                            Trung tâm đa phương tiện
                            </span>
                        </a>
                        <a href="" className="column__item">
                            <span>Quyền riêng tư</span>
                        </a>
                        <a href="" className="column__item">
                            <span>Liên hệ với chúng tôi</span>
                        </a>
                    </div>
                    <div className="second__column">
                        <a href="" className="column__item">
                            <span>Mô tả âm thanh</span>
                        </a>
                        <a href="" className="column__item">
                            <span>Quan hệ với nhà đầu tư</span>
                        </a>
                        <a href="" className="column__item">
                            <span>Thông báo pháp lý</span>
                        </a>
                    </div>
                    <div className="third__column">
                        <a href="" className="column__item">
                            <span>Trung tập trợ giúp</span>
                        </a>
                        <a href="" className="column__item">
                            <span>Việc làm</span>
                        </a>
                        <a href="" className="column__item">
                            <span>Tuỳ chọn cookie</span>
                        </a>
                    </div>
                    <div className="last__column">
                        <a href="" className="column__item">
                            <span>Thẻ quà tặng</span>
                        </a>
                        <a href="" className="column__item">
                            <span>Điều khoản sử dụng</span>
                        </a>
                        <a href="" className="column__item">
                            <span>Thông tin doanh nghiệp</span>
                        </a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span className="footer__bottom-code">Mã dịch vụ</span>
                    <br></br>
                    <span className="footer__bottom-year">
                    © 1997-2021 Netflix, Inc.{'{'}eee6be18-a3cf-438b-8396-c3a1f5691a40{'}'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
