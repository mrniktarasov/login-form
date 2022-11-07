import { FunctionComponentElement } from "react";
import './index.sass';

export interface ILoginInput {
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string,
    minLength?: number;
    required?: boolean;
    pattern?: string;
    size?: number;
}

export default function LoginInput({
    type,
    onChange,
    label,
    minLength = 8,
    required = false,
    pattern = '',
    size = 30,
}: ILoginInput): FunctionComponentElement<ILoginInput> {
    return (
    <label htmlFor="inp" className="inp">
        <input
            id="inp"
            placeholder="&nbsp;" 
            type={type}
            minLength={minLength}
            onChange={onChange}
            required={required}
            pattern={pattern}
            size={size}
        />
        <span className="label">{label}</span>
        <span className="focus-bg"></span>
    </label>
  );
}