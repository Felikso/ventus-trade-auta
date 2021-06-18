import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { IoIosArrowDropupCircle } from "@react-icons/all-files/io/IoIosArrowDropupCircle";

const ScrollBtn = ({

    showBelow
}) => {


    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll, { passive: true })
            return () => window.removeEventListener(`scroll`, handleScroll, { passive: true })
        }
    })

    return (
        <div>
            {show &&
                <ScrollButton onClick={handleClick} aria-label="to top">
                    <IoIosArrowDropupCircle />
                </ScrollButton>
            }
        </div>
    )
}
export default ScrollBtn

const ShowScroll = keyframes`
from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`

const ScrollButton = styled.button`
            z-index: 2;
            position: fixed;
            bottom: 2vh;
            right: 2vh;
            background-color: transparent;
            border: none;
            font-size: 50px;
            color: ${({ theme }) => theme.colors.scrollBtn};
            cursor: pointer;
            transition: 0.8s;
            animation: ${ShowScroll} .5s ease-in-out normal forwards;
            animation-iteration-count: 1;
            transition: all .2s ease-in-out;

        &:hover {
            transition: 0.5s;
            color: ${({ theme }) => theme.colors.scrollBtnHover};
        }
`