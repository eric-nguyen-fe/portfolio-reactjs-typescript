import React, { forwardRef, useState } from 'react';

import Icon, { IconName, IconSize } from 'components/atoms/Icon';
// import { incrementSetPrefix } from 'store/example';
// import { useAppDispatch } from 'store/hooks';
import mapModifiers from 'utils/functions';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'borderRadius' | 'contactForm' | 'inputSearch' | 'border8' | 'boxNote' | 'searchAnimate' | 'simple';
  type?: 'text' | 'number' | 'email' | 'password' | 'date' | 'phone_number';
  error?: string;
  label?: string;
  id: string;
  iconName?: IconName;
  iconSize?: IconSize;
  handleClickIcon?: () => void;
  isPassword?: boolean;
  readOnly?: boolean;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type,
    error,
    label,
    id,
    variant,
    iconName,
    iconSize,
    handleClickIcon,
    disabled,
    isPassword,
    readOnly,
    ...props
  },
  ref,
) => {
  const [showpass, setShowPass] = useState(false);
  // const [phone, setPhone] = useState('+84');
  // const dispatch = useAppDispatch();

  // const listNumber = [
  //   { id: 1, name: 'Korea (+82)', value: '+82' },
  //   { id: 1, name: 'Malaysia (+60)', value: '+60' },
  //   { id: 1, name: 'Thailand (+66)', value: '+66' },
  //   { id: 1, name: 'Vietnam (+84)', value: '+84' },
  // ];

  // const handleClick = (option: any) => {
  //   setPhone(option.value);
  //   dispatch(incrementSetPrefix(option.value));
  // };

  return (
    <div className={mapModifiers(
      'a-input',
      variant,
      type,
      disabled && 'disabled',
      iconName && 'hasIcon',
      error && 'isError',
      readOnly && 'readOnly',
    )}
    >
      {label && (
        <label className="a-input_label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={`a-input_wrap ${type === 'phone_number' && 'a-input_wrap_phone_number'}`}>
        {/* {type === 'phone_number' && (
          <Dropdown
            optionsChild={listNumber}
            handleClick={handleClick}
            isAvatar={false}
            typeDropdown="phone_number"
            name={phone}
          />
        )} */}
        <input
          {...props}
          id={id}
          className="a-input_input"
          type={isPassword && (showpass ? 'text' : 'password') || type}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
        />
        {iconName && (
          <button
            className="a-input_icon"
            type="submit"
            onClick={() => {
              if (handleClickIcon && !disabled) handleClickIcon();
              if (isPassword) setShowPass(!showpass);
            }}
          >
            <Icon
              iconName={isPassword && (showpass ? 'showpass' : 'hidepass') || iconName}
              size={iconSize}
            />
          </button>
        )}
        {isPassword && (
          <div
            className="a-input_icon"
            onClick={() => {
              if (handleClickIcon && !disabled) handleClickIcon();
              if (isPassword) setShowPass(!showpass);
            }}
          >
            <Icon
              iconName={isPassword && (showpass ? 'showpass' : 'hidepass') || iconName}
              size={iconSize}
            />
          </div>
        )}
      </div>

      <span className="a-input_error">
        {error}
      </span>
    </div>
  );
};
const Input = forwardRef(InputRef);

Input.defaultProps = {
  type: 'text',
  iconSize: '17x17',
  variant: 'default',
  isPassword: false
};

export default Input;
