//HOC => Higher order Component
//HOF => Higher order Funtion


import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ModalHoc(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
    // cách 2 sử dụng theo kiểu component => truyền props
    return <>
        <a className='nav-link' onClick={showModal}>
            {props.lbButton}
        </a>
        <Modal open={isModalOpen} onCancel={handleCancel}>

            {props.Component}
        </Modal>
    </>

    // cách 1 sử dụng theo kiểu function => truyền tham số
    // return function () {
    //     return <>
    //         <a className='nav-link' onClick={showModal}>{lbButton}</a>
    //         <Modal open={isModalOpen} onCancel={handleCancel}>

    //             {Component}
    //         </Modal>
    //     </>

    // }



}
