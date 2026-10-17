import React, { useEffect, useRef, useState } from 'react';
import './BottomSheet.css';
import { TbX } from 'react-icons/tb';

const BottomSheet = ({ isOpen, onClose, title, children }) => {
  const bottomSheetRef = useRef(null);
  const contentRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const navLinks = document.querySelectorAll('.nav-link');
    const handleNavLinkClick = () => {
      handleClose();
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`bottom-sheet-overlay ${isClosing ? 'bottom-sheet-overlay--closing' : ''}`}
          onClick={handleBackdropClick}
          style={{ top: `${headerHeight}px` }}
        />
      )}

      {isOpen && (
        <div
          ref={bottomSheetRef}
          className={`bottom-sheet ${!isClosing ? 'bottom-sheet--open' : ''}`}
          style={{ top: `${headerHeight}px` }}
        >
          <div className="bottom-sheet-content" ref={contentRef}>
            <div className="bottom-sheet-handle">
              {title && <h2 className="bottom-sheet-title">{title}</h2>}
              <button
                className="bottom-sheet-close"
                onClick={handleClose}
                aria-label="Close"
              >
                <TbX />
              </button>
            </div>

            <div className="bottom-sheet-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomSheet;
