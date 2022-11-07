import { FunctionComponentElement } from "react";
import './index.scss';

export interface IModal {
    onClose: () => void;
    children?: React.ReactNode;
}

export default function Modal({
    onClose,
    children
}: IModal): FunctionComponentElement<void> {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                {children}
            </div>
        </div>
    );
}
