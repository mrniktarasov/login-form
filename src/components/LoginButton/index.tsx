import { FunctionComponentElement } from "react";

export interface ILoginButton {
    onClick: () => void;
}

export function LoginButton({
    onClick
}: ILoginButton): FunctionComponentElement<ILoginButton> {
    return <button type='button' onClick={onClick} className="button-1">Login</button>;
}
