import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    vertical-align: top;
    box-sizing: border-box;
	}

	html {
    width: 100%;
    height: 100%;
    font-size: 0.625em;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
	}

	body {
    width: 100%;
    height: 100%;
    position: relative;
    font-family: "Noto Sans KR", sans-serif;
    color: #222;
    overflow: hidden;
	}

	#root {
    width: 100%;
    height: 100%;
	}

	ul {
    list-style-type: none;
	}

	a {
    text-decoration: none;
    background-color: transparent;
	}

	img {
    border: none;
	}
`;
