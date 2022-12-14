import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { createPortal } from "react-dom";
import { IModalProps } from '@/types/types';


const Modal = ({children}: IModalProps) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const current = el.current;
    current.setAttribute('id', 'Modal__Root')
    document.body!.appendChild(current);
    return () => void document.body!.removeChild(current);
  }, [])

  return (
    createPortal(
      <div className="Modal__Wrapper">
        {children}
      </div>
    , el.current)
  )
};
export { Modal };