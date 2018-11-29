import React, { Component } from 'react';

export default class NotFound extends Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">404</h5>
                        <p className="card-text">Trang không tồn tại. Vui lòng thử lại!</p>
                        <a href="/" className="btn btn-primary">Quay lại trang chủ</a>
                    </div>
                </div>
            </div>
        );
    }
}
