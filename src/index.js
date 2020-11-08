import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App/> <-- 컴포넌트 라고 불립니다 컴포넌트는 HTML을 반환하는 함수입니다. App.js App함수 참조
// JS와 HTML 사이의 이러한 코드 조합을 JSX라고 부릅니다.
ReactDOM.render(<App />, document.getElementById("root"));

