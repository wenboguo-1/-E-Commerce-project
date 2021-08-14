import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
@font-face {
  font-family: "iconfont"; /* Project id 2627816 */
  src: url('iconfont.woff2?t=1624418182750') format('woff2'),
       url('iconfont.woff?t=1624418182750') format('woff'),
       url('iconfont.ttf?t=1624418182750') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`
export default GlobalStyle