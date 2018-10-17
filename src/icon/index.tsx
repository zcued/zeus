/* tslint:disable */

import * as React from 'react'
import styled from '../theme/styled-components'

interface Props {
  glyph: string
  size?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  style?: object
  className?: string
}

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case 'album':
      return (
        <g transform="translate(6.000000, 0.000000)">
          <rect fill="#FFD100" x="0" y="0" width="20" height="4" />
          <path
            d="M2,10 L2,27.8387503 L10,21.4387503 L18,27.8387503 L18,10 L2,10 Z"
            stroke="#1F1F1F"
            fill="none"
            strokeWidth="4"
          />
        </g>
      )

    case 'album-tag':
      return (
        <g transform="translate(-245.000000, -140.000000)">
          <g transform="translate(252.000000, 140.000000)">
            <path d="M18.6666667,8 L0,8 L0,5.33333333 L18.6666667,5.33333333 L18.6666667,8 Z M18.6666667,10.6666667 L18.6666667,32 L9.33333333,26.6666667 L0,32 L0,10.6666667 L18.6666667,10.6666667 Z M18.6666667,2.66666667 L0,2.66666667 L0,0 L18.6666667,0 L18.6666667,2.66666667 Z" />
          </g>
        </g>
      )

    case 'album-tag-sm':
      return (
        <g transform="translate(-163.000000, -140.000000)">
          <g transform="translate(170.000000, 140.000000)">
            <g>
              <path d="M19.2,9.6 L0,9.6 L0,6.4 L19.2,6.4 L19.2,9.6 Z M19.2,12.8 L19.2,32 L9.6,25.6 L0,32 L0,12.8 L19.2,12.8 Z M19.2,3.2 L0,3.2 L0,0 L19.2,0 L19.2,3.2 Z" />
            </g>
          </g>
        </g>
      )

    case 'angle-down':
      return (
        <g transform="translate(-81.000000, -310.000000)">
          <g transform="translate(81.000000, 316.000000)">
            <polygon points="27.4285714 0 32 4.26666667 16 19.2 0 4.26666667 4.57142857 0 16 10.6666667" />
          </g>
        </g>
      )

    case 'angle-down-light':
      return (
        <g>
          <path d="M16 20.292L29.09 7 32 9.954 16 26.2 0 9.954 2.91 7z" />
        </g>
      )

    case 'angle-down-sm':
      return (
        <g transform="translate(-163.000000, -310.000000)">
          <g transform="translate(163.000000, 319.000000)">
            <polygon points="29.3110875 0 32 3.7311153 16 13.7142857 0 3.7311153 2.68891252 0 16 8.30542842" />
          </g>
        </g>
      )

    case 'angle-right':
      return (
        <g transform="translate(-245.000000, -310.000000)">
          <g transform="translate(250.000000, 310.000000)">
            <polygon points="11.5112171 16 0 5.17183261 5.44439147 0 22.4 16 5.44439147 32 2.91038305e-12 26.8281674" />
          </g>
        </g>
      )

    case 'angle-right-light':
      return (
        <g>
          <path d="M14.504 16L0 1.477 1.475 0l15.98 16-15.98 16L0 30.523z" />
        </g>
      )

    case 'angle-left':
      return (
        <g transform="translate(-323.000000, -310.000000)">
          <g transform="translate(328.000000, 310.000000)">
            <polygon
              transform="translate(11.200000, 16.000000) rotate(-360.000000) translate(-11.200000, -16.000000) "
              points="10.8887829 16 22.4 26.8281674 16.9556085 32 0 16 16.9556085 0 22.4 5.17183261"
            />
          </g>
        </g>
      )

    case 'arrow-alt-down':
      return (
        <g transform="translate(-81.000000, -387.000000)">
          <g transform="translate(81.000000, 392.000000)">
            <polygon points="18.2857143 16.0221184 29.3110875 9.14285714 32 12.8739724 16 22.8571429 0 12.8739724 2.68891252 9.14285714 13.7142857 16.0221184 13.7142857 0 18.2857143 0" />
          </g>
        </g>
      )

    case 'arrow-down-collapse':
      return (
        <g>
          <path d="M29.311 4L32 7.731l-16 9.983L0 7.731 2.689 4 16 12.305z" />
          <path fill="#FFD100" d="M29.311 15.429L32 19.159l-16 9.984L0 19.16l2.689-3.731L16 23.734z" />
        </g>
      )

    case 'cart':
      return (
        <g fill="none">
          <rect x="0" y="0" width="32" height="32" />
          <polygon
            fill="#1F1F1F"
            points="0 7.46666667 0 3.86666667 8.12720154 3.86666667 10.6594281 20.4945964 23.6989081 20.4945964 25.6530535 11.4837565 15.2753906 11.4837565 15.2753906 7.88375651 30.1174543 7.88375651 26.6018732 24.0945964 7.56615783 24.0945964 5.03393127 7.46666667"
          />
          <polygon fill="#FFD100" points="18.3225098 12.6666667 22.3225098 12.6666667 21 19.5558268 17 19.5558268" />
          <circle fill="#1F1F1F" cx="8.5" cy="28.1666667" r="2.5" />
          <circle fill="#1F1F1F" cx="25.5" cy="28.1666667" r="2.5" />
        </g>
      )

    case 'list':
      return (
        <g transform="translate(-819.000000, -225.000000)">
          <g transform="translate(822.000000, 225.000000)">
            <g>
              <circle cx="12.8" cy="11.2" r="3.2" />
              <rect fill="#FFD100" x="6.4" y="20.8" width="12.8" height="3.2" />
              <rect fill="none" stroke="#1F1F1F" strokeWidth="3.2" x="1.6" y="1.6" width="22.4" height="28.8" />
            </g>
          </g>
        </g>
      )

    case 'hf-play':
      return (
        <g transform="translate(-292.000000, -2504.000000)">
          <g transform="translate(292.000000, 2504.000000)">
            <g>
              <path d="M22.2486785,30.7339599 C16.4240913,33.2018412 9.43434037,32.0617574 4.6862915,27.3137085 C-1.56209717,21.0653198 -1.56209717,10.9346802 4.6862915,4.6862915 C10.9346802,-1.56209717 21.0653198,-1.56209717 27.3137085,4.6862915 C32.5854425,9.9580255 33.4094411,17.993228 29.7857044,24.1288501 L26.8308798,21.1740256 C28.9616923,16.7135146 28.1798261,11.2092634 24.4852814,7.51471863 C19.7989899,2.82842712 12.2010101,2.82842712 7.51471863,7.51471863 C2.82842712,12.2010101 2.82842712,19.7989899 7.51471863,24.4852814 C10.6554707,27.6260334 15.1040596,28.6618538 19.1074611,27.5927425 L22.2486785,30.7339599 Z M24.1288501,29.7857044 L21.1740256,26.8308798 C21.7896482,26.5367933 22.3853892,26.1872247 22.9537469,25.782174 L25.8119639,28.6403911 C25.2704744,29.0618079 24.7081284,29.443579 24.1288501,29.7857044 Z M28.6403911,25.8119639 C28.2348741,26.3330234 27.7926466,26.8347704 27.3137085,27.3137085 L24.4852814,24.4852814 C24.9671212,24.0034415 25.3994187,23.4908201 25.782174,22.9537469 L28.6403911,25.8119639 Z" />
              <path d="M14.0050473,11.1361389 L21.0173745,15.1807534 C21.4880002,15.4522039 21.6406072,16.0390149 21.3582318,16.4914324 C21.2743089,16.6258924 21.157246,16.7384262 21.0173745,16.8191022 L14.0050473,20.8637167 C13.5344216,21.1351672 12.9239935,20.9884645 12.641618,20.536047 C12.5489505,20.3875766 12.5,20.2176871 12.5,20.0445423 L12.5,11.9553133 C12.5,11.4277083 12.9449221,11 13.4937613,11 C13.6738746,11 13.8506015,11.0470567 14.0050473,11.1361389 Z" />
            </g>
          </g>
        </g>
      )

    case 'hf-pause':
      return (
        <g transform="translate(7.000000, 5.000000)">
          <path d="M13,0 L16,0 C16.5522847,0 17,0.590984154 17,1.32000005 L17,20.6799999 C17,21.4090158 16.5522847,22 16,22 L13,22 C12.4477153,22 12,21.4090158 12,20.6799999 L12,1.32000005 C12,0.590984154 12.4477153,0 13,0 Z" />
          <path d="M1.00000004,0 L3.99999996,0 C4.55228473,0 5,0.590984154 5,1.32000005 L5,20.6799999 C5,21.4090158 4.55228473,22 3.99999996,22 L1.00000004,22 C0.447715268,22 0,21.4090158 0,20.6799999 L0,1.32000005 C0,0.590984154 0.447715268,0 1.00000004,0 Z" />
        </g>
      )

    case 'close':
      return (
        <g>
          <polygon points="16 12.4444444 28.4444444 0 32 3.55555556 19.5555556 16 32 28.4444444 28.4444444 32 16 19.5555556 3.55555556 32 0 28.4444444 12.4444444 16 0 3.55555556 3.55555556 0" />
        </g>
      )

    case 'check':
      return (
        <g>
          <path d="M26.146 1.344c.996-1.402 2.989-1.766 4.452-.812 1.463.955 1.842 2.866.847 4.268L16.298 30.656c-1.188 1.674-3.712 1.808-5.085.269L.77 19.215c-1.15-1.29-.992-3.228.353-4.331 1.345-1.103 3.367-.952 4.517.338l7.72 8.654L26.145 1.344z" />
        </g>
      )
    case 'hf-check':
      return (
        <g transform="translate(8.000000, 8.000000)">
          <path d="M6.18 8.57L12.56.738l3.101 2.526-8.929 10.966-6.609-5.49 2.556-3.077z" />
        </g>
      )
    case 'collect':
      return (
        <g>
          <path
            d="M15.2169043,26.0977775 L5.81234022,30.7220497 L7.30411434,20.3487991 L0,12.8335059 L10.3265311,11.0467566 L15.2169043,1.77777778 L20.1072774,11.0467566 L30.4338085,12.8335059 L23.1296942,20.3487991 L24.6214683,30.7220497 L15.2169043,26.0977775 Z M15.2169043,22.1356473 L20.1428496,24.5577598 L19.3614845,19.1244335 L23.1872512,15.1880551 L17.7783957,14.2521872 L15.2169043,9.39725909 L12.6554128,14.2521872 L7.24655735,15.1880551 L11.072324,19.1244335 L10.290959,24.5577598 L15.2169043,22.1356473 Z"
            fill="#1F1F1F"
          />
          <polygon
            fill="#FFD100"
            points="32 5.02865865 32 8.88888889 23.1175377 7.0820304 19.5555556 0 23.3697824 0 25.4448974 3.90310377"
          />
          <rect fillOpacity="0" fill="#FFFFFF" x="0" y="0" width="32" height="32" />
        </g>
      )

    case 'collected':
      return (
        <g>
          <polygon points="15.2169043 26.0977775 5.81234022 30.7220497 7.30411434 20.3487991 0 12.8335059 10.3265311 11.0467566 15.2169043 1.77777778 20.1072774 11.0467566 30.4338085 12.8335059 23.1296942 20.3487991 24.6214683 30.7220497" />
          <polygon
            fill="#FFD100"
            points="15.2169043 22.1356473 20.1428496 24.5577598 19.3614845 19.1244335 23.1872512 15.1880551 17.7783957 14.2521872 15.2169043 9.39725909 12.6554128 14.2521872 7.24655735 15.1880551 11.072324 19.1244335 10.290959 24.5577598"
          />
          <polygon
            fill="#FFD100"
            points="32 5.02865865 32 8.88888889 23.1175377 7.0820304 19.5555556 0 23.3697824 0 25.4448974 3.90310377"
          />
        </g>
      )

    case 'copy':
      return (
        <g transform="translate(2.000000, 0.000000)">
          <path d="M4,12 L4,28 L16,28 L16,12 L4,12 Z M0,8 L20,8 L20,32 L0,32 L0,8 Z" />
          <polygon fill="#FFD100" points="8 4.23084853 8 0 28 0 28 24 23.6 24 23.6 4.23084853" />
        </g>
      )

    case 'delete':
      return (
        <g fill="none">
          <g transform="translate(4.000000, 2.666667)">
            <polygon
              fill="#1F1F1F"
              points="10.7472727 1.66666667 10.7472727 0 13.6745455 0 13.6745455 1.66666667 23.92 1.66666667 23.92 5 0.501818182 5 0.501818182 1.66666667"
            />
            <path
              d="M3.43014092,8.3030303 L4.62492523,25.030303 L20.1487261,25.030303 L21.3435104,8.3030303 L3.43014092,8.3030303 Z"
              stroke="#1F1F1F"
              strokeWidth="3.27272727"
            />
            <polygon
              fill="#FFD100"
              points="6.69090909 11.6666667 10.0363636 11.6666667 10.8727273 21.6666667 7.52727273 21.6666667"
            />
          </g>
          <rect x="0" y="0" width="32" height="32" />
        </g>
      )

    case 'design':
      return (
        <g transform="translate(4.000000, 0.000000)">
          <path
            d="M8,22 L16,22 L16,21.2410308 L16.9985481,20.6634019 C20.0700304,18.8866453 22,15.6125215 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,15.6125215 3.92996957,18.8866453 7.00145191,20.6634019 L8,21.2410308 L8,22 Z"
            stroke="#1F1F1F"
            strokeWidth="4"
            fill="none"
          />
          <rect fill="#FFD100" x="6" y="28" width="12" height="4" />
        </g>
      )

    case 'download':
      return (
        <g stroke="none" strokeWidth="1" fill="none">
          <g transform="translate(5.000000, 3.000000)">
            <polygon
              fill="#282828"
              points="12.8333333 14.7176471 16.8235294 10.8 22 10.8 11 21.6 0 10.8 5.17647059 10.8 9.16666667 14.7176471 9.16666667 0 12.8333333 0"
            />
            <polygon fill="#FFD100" points="0 23.4 22 23.4 22 27 0 27" />
          </g>
        </g>
      )

    case 'edit':
      return (
        <g>
          <path
            d="M20.8249744,22.0275317 L29.2609933,6.84710403 L22.5657376,2.83111633 L14.1764773,17.9274029 L15.6084661,23.4797041 L20.8249744,22.0275317 Z"
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="4.07576846"
          />
          <rect fill="#FFD100" x="0" y="28" width="20" height="4" />
        </g>
      )

    case 'grow':
      return (
        <g transform="translate(-81.000000, -140.000000)">
          <g transform="translate(87.000000, 140.000000)">
            <path d="M14.5454545,10.1818182 L14.5454545,18.9090909 L5.81818182,18.9090909 L5.81818182,10.1818182 L0,10.1818182 L10.1818182,0 L20.3636364,10.1818182 L14.5454545,10.1818182 Z M5.81818182,21.8181818 L14.5454545,21.8181818 L14.5454545,24.7272727 L5.81818182,24.7272727 L5.81818182,21.8181818 Z M5.81818182,27.6363636 L14.5454545,27.6363636 L14.5454545,32 L5.81818182,32 L5.81818182,27.6363636 Z" />
          </g>
        </g>
      )

    case 'like':
      return (
        <g>
          <path d="M16,5.29554907 C18.2096373,1.76518302 20.8672685,0 23.9728938,0 C28.6479213,0 35.9451682,6.53157552 29.3884811,16.6754557 C26.1380498,21.7042127 21.6852341,26.7961106 16.0300341,31.9511496 C10.3147659,26.7961106 5.86195022,21.7042127 2.6115189,16.6754557 C-3.9451682,6.53157552 3.35207867,0 8.02710623,0 C11.1327315,0 13.7903627,1.76518302 16,5.29554907 Z" />
        </g>
      )

    case 'more':
      return (
        <g transform="translate(-81.000000, -225.000000)">
          <g transform="translate(81.000000, 227.000000)">
            <g>
              <rect x="0" y="0" width="5.81818182" height="5.81818182" />
              <rect x="0" y="11.6363636" width="5.81818182" height="5.81818182" />
              <rect x="0" y="23.2727273" width="5.81818182" height="5.81818182" />
              <rect fill="#FFD100" x="8.72727273" y="0" width="23.2727273" height="5.81818182" />
              <rect fill="#FFD100" x="8.72727273" y="11.6363636" width="23.2727273" height="5.81818182" />
              <rect fill="#FFD100" x="8.72727273" y="23.2727273" width="23.2727273" height="5.81818182" />
            </g>
          </g>
        </g>
      )

    case 'pause':
      return (
        <g>
          <path d="M16,30.2222222 C23.8547164,30.2222222 30.2222222,23.8547164 30.2222222,16 C30.2222222,8.14528356 23.8547164,1.77777778 16,1.77777778 C8.14528356,1.77777778 1.77777778,8.14528356 1.77777778,16 C1.77777778,23.8547164 8.14528356,30.2222222 16,30.2222222 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M11.5555556,10.6666667 L11.5555556,21.3333333 L13.3333333,21.3333333 L13.3333333,10.6666667 L11.5555556,10.6666667 Z M18.6666667,10.6666667 L18.6666667,21.3333333 L20.4444444,21.3333333 L20.4444444,10.6666667 L18.6666667,10.6666667 Z" />
        </g>
      )

    case 'play':
      return (
        <g>
          <path d="M16,30.2222222 C23.8547164,30.2222222 30.2222222,23.8547164 30.2222222,16 C30.2222222,8.14528356 23.8547164,1.77777778 16,1.77777778 C8.14528356,1.77777778 1.77777778,8.14528356 1.77777778,16 C1.77777778,23.8547164 8.14528356,30.2222222 16,30.2222222 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M10.6666667,23.1111111 L23.1111111,16 L10.6666667,8.88888889 L10.6666667,23.1111111 Z M12.4105471,11.8800152 L19.6205205,16 L12.4105471,20.1199848 L12.4105471,11.8800152 Z" />
        </g>
      )

    case 'plus':
      return (
        <g>
          <path d="M12.8,12.8 L12.8,0 L19.2,0 L19.2,12.8 L32,12.8 L32,19.2 L19.2,19.2 L19.2,32 L12.8,32 L12.8,19.2 L0,19.2 L0,12.8 L12.8,12.8 Z" />
        </g>
      )

    case 'minus':
      return (
        <g>
          <path d="M0 12.8h32v6.4H0z" />
        </g>
      )

    case 'enter':
      return (
        <g>
          <path d="M8.22 15.133h19.647V3H32v16.177H7.46l6.937 6.937-2.922 2.922L.035 17.597l11.69-11.689 2.86 2.86z" />
        </g>
      )

    case 'question':
      return (
        <g>
          <path d="M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M15.8215103,22.7307692 C15.3546911,22.7307692 14.9702517,22.8681319 14.6407323,23.1978022 C14.3112128,23.5 14.173913,23.8846154 14.173913,24.3516484 C14.173913,24.8186813 14.3112128,25.2032967 14.6407323,25.532967 C14.9702517,25.8351648 15.3546911,26 15.8215103,26 C16.2883295,26 16.6727689,25.8351648 17.0022883,25.532967 C17.3318078,25.2307692 17.4965675,24.8461538 17.4965675,24.3516484 C17.4965675,23.8846154 17.3318078,23.5 17.0297483,23.1978022 C16.7002288,22.8681319 16.2883295,22.7307692 15.8215103,22.7307692 Z M16.2334096,6 C14.2562929,6 12.7185355,6.6043956 11.6201373,7.81318681 C10.5217391,8.96703297 10,10.5054945 10,12.4285714 L12.1693364,12.4285714 C12.1693364,11.0824176 12.4713959,10.0384615 13.0755149,9.26923077 C13.7345538,8.36263736 14.7505721,7.92307692 16.1235698,7.92307692 C17.2768879,7.92307692 18.1830664,8.22527473 18.8146453,8.88461538 C19.4187643,9.48901099 19.7482838,10.3406593 19.7482838,11.4395604 C19.7482838,12.2087912 19.4736842,12.9230769 18.9244851,13.6098901 C18.7597254,13.8296703 18.4302059,14.1593407 17.9908467,14.5989011 C16.5080092,15.9175824 15.6018307,16.9615385 15.2173913,17.7857143 C14.8878719,18.4725275 14.7231121,19.2692308 14.7231121,20.1758242 L14.7231121,20.8076923 L16.9199085,20.8076923 L16.9199085,20.1758242 C16.9199085,19.4340659 17.0846682,18.7747253 17.4416476,18.1703297 C17.7162471,17.6758242 18.1281465,17.1813187 18.7322654,16.6593407 C19.9405034,15.5879121 20.6819222,14.8736264 20.9565217,14.543956 C21.6430206,13.6373626 22,12.5659341 22,11.3296703 C22,9.68131868 21.4782609,8.39010989 20.4622426,7.45604396 C19.3913043,6.46703297 17.9908467,6 16.2334096,6 Z" />
        </g>
      )

    case 'refresh':
      return (
        <g>
          <path
            d="M5.55839329,23.1111111 C7.88481814,25.8107841 11.2943356,27.4304287 14.9859843,27.4304287 C21.8588612,27.4304287 27.4304287,21.8588612 27.4304287,14.9859843 L30.9859843,14.9859843 C30.9859843,23.8225403 23.8225403,30.9859843 14.9859843,30.9859843 C10.5939426,30.9859843 6.51008758,29.2007561 3.55555556,26.1838115 L3.55555556,28.4444444 L-1.77635684e-15,28.4444444 L0,19.5555556 L8.88888889,19.5555556 L8.88888889,23.1111111 L5.55839329,23.1111111 Z"
            fill="#FFD100"
          />
          <path d="M26.2145935,8.88888889 C23.9156043,5.58921258 20.1361041,3.55555556 16,3.55555556 C9.12712311,3.55555556 3.55555556,9.12712311 3.55555556,16 L0,16 C0,7.163444 7.163444,0 16,0 C20.9225481,0 25.4548269,2.24284256 28.4444444,5.94099632 L28.4444444,3.55555556 L32,3.55555556 L32,12.4444444 L23.1111111,12.4444444 L23.1111111,8.88888889 L26.2145935,8.88888889 Z" />
        </g>
      )

    case 'tag-close':
      return (
        <g>
          <path d="M0,0 L17,0 C17.5522847,-1.01453063e-16 18,0.44771525 18,1 L18,18 C8.0588745,18 1.21743675e-15,9.9411255 0,2.20436424e-15 Z M11,5.4 L8.6,3 L7,4.6 L9.4,7 L7,9.4 L8.6,11 L11,8.6 L13.4,11 L15,9.4 L12.6,7 L15,4.6 L13.4,3 L11,5.4 Z" />
        </g>
      )

    case 'search':
      return (
        <g>
          <path d="M12.076 20.126a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1zm0 4.026C5.406 24.152 0 18.745 0 12.076 0 5.406 5.407 0 12.076 0c6.67 0 12.076 5.407 12.076 12.076 0 6.67-5.407 12.076-12.076 12.076zm12.808-4.96L32 26.307l-1.423 1.424-7.116-7.116 1.423-1.423zm-4.27 4.27l7.117 7.115L26.307 32l-7.115-7.116 1.423-1.423z" />
        </g>
      )

    case 'top':
      return (
        <g transform="translate(-655.000000, -225.000000)">
          <g transform="translate(655.000000, 227.000000)">
            <g>
              <polygon fillRule="nonzero" points="5.33333333 14 0 14 16 0 32 14 26.6666667 14 16 5.05192362" />
              <rect fill="#FFD100" x="8" y="24" width="16" height="4" />
            </g>
          </g>
        </g>
      )

    case 'warning':
      return (
        <g>
          <path d="M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M13.6774194,5.33333333 L14.5376344,19.7759104 L17.4623656,19.7759104 L18.3225806,5.33333333 L13.6774194,5.33333333 Z M15.9827957,21.5910364 C15.2258065,21.5910364 14.6064516,21.8263305 14.1247312,22.2969188 C13.5741935,22.767507 13.3333333,23.372549 13.3333333,24.1120448 C13.3333333,24.8515406 13.5741935,25.4565826 14.1247312,25.9271709 C14.6064516,26.3977591 15.2258065,26.6666667 15.9827957,26.6666667 C16.7397849,26.6666667 17.3591398,26.4313725 17.9096774,25.9607843 C18.3913978,25.4901961 18.6666667,24.8515406 18.6666667,24.1120448 C18.6666667,23.372549 18.3913978,22.767507 17.9096774,22.2969188 C17.3935484,21.8263305 16.7397849,21.5910364 15.9827957,21.5910364 Z" />
        </g>
      )

    case 'zoom-in':
      return (
        <g>
          <circle
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="4.36363636"
            cx="13.0909091"
            cy="13.0909091"
            r="10.9090909"
          />
          <path
            d="M11.6363636,11.6363636 L11.6363636,7.27272727 L14.5454545,7.27272727 L14.5454545,11.6363636 L18.9090909,11.6363636 L18.9090909,14.5454545 L14.5454545,14.5454545 L14.5454545,18.9090909 L11.6363636,18.9090909 L11.6363636,14.5454545 L7.27272727,14.5454545 L7.27272727,11.6363636 L11.6363636,11.6363636 Z"
            fill="#FFD100"
          />
          <polygon points="26.1818182 23.2727273 32 29.0909091 29.0909091 32 23.2727273 26.1818182" />
        </g>
      )

    case 'rmb':
      return (
        <g>
          <path d="M16 12.702L23.45 0 27 2.018 18.8 16h-5.6L5 2.018 8.55 0 16 12.702zM6 18h20v2H6v-2zm0 4h20v2H6v-2zm8 4h4v6h-4v-6z" />
        </g>
      )

    case 'invoice':
      return (
        <g>
          <path d="M5 8v20H1V4h30v24h-4V8H5zm2 4h12v2H7v-2zm0 5h18v2H7v-2zm0 5h18v2H7v-2z" />
        </g>
      )

    case 'download-image':
      return (
        <g>
          <path d="M18 16.97L22.97 12l2.829 2.828-9.9 9.9L6 14.828 8.828 12 14 17.172V0h4v16.97zM29 22v6H3v-6h2v4h22v-4h2zM3 30h26v2H3v-2z" />
        </g>
      )

    case 'certificate':
      return (
        <g>
          <path d="M16.5 17.299c3.933 0 7.121-3.168 7.121-7.077 0-3.908-3.188-7.077-7.121-7.077-3.933 0-7.121 3.169-7.121 7.077 0 3.909 3.188 7.077 7.121 7.077zm0 3.145c-5.68 0-10.286-4.576-10.286-10.222C6.214 4.577 10.82 0 16.5 0c5.68 0 10.286 4.577 10.286 10.222 0 5.646-4.605 10.222-10.286 10.222zm.53 2.598l3.384 5.825 2.296-3.912 4.556-.02-3.384-5.825 1.37-.786L30 26.496l-6.379.028L20.407 32 16.5 25.275 12.593 32 9.38 26.524 3 26.496l4.747-8.172 1.37.786-3.383 5.825 4.556.02 2.296 3.912 3.384-5.825h1.06z" />
        </g>
      )

    case 'download-plus':
      return (
        <g>
          <path d="M17.636 19.976l5.091-5.43 2.182 2.327-8.727 9.309-8.727-9.31 2.181-2.327 5.091 5.43V0h2.91v19.976zM6 29.09h20.364V32H6v-2.91z" />
        </g>
      )

    case 'manage-plus':
      return (
        <g>
          <path d="M3 2.667L16.333 0l13.334 2.667v16.321c0 3.377-1.423 5.265-3.92 7.539-2.671 2.432-5.809 4.257-9.414 5.473-3.604-1.216-6.742-3.04-9.413-5.473C4.423 24.253 3 22.365 3 18.988V2.667zm2.667 16.321c0 2.2.69 3.42 3.048 5.567 2.184 1.989 4.717 3.525 7.618 4.615 2.901-1.09 5.435-2.626 7.618-4.615C26.31 22.408 27 21.188 27 18.988V4.853L16.333 2.719 5.667 4.853v14.135zm4.18-9.006l2.161 1.563A5.302 5.302 0 0 0 11 14.667a5.333 5.333 0 0 0 8.547 4.256l1.609 2.127a7.968 7.968 0 0 1-4.822 1.616A8 8 0 0 1 9.847 9.983zm13.717 8.111l-2.409-1.143a5.333 5.333 0 0 0-6.816-7.231l-.998-2.474a8 8 0 0 1 10.223 10.848z" />
        </g>
      )

    case 'share-plus':
      return (
        <g>
          <path d="M14.545 11.182H8.727V1h14.546v10.182h-5.818v4.363H29.09v5.819H32v8.727h-8.727v-8.727h2.909v-2.91H5.818v2.91h2.91v8.727H0v-8.727h2.91v-5.819h11.635v-4.363zm-2.909-7.273v4.364h8.728V3.909h-8.728zm14.546 20.364v2.909h2.909v-2.91h-2.91zm-23.273 0v2.909h2.91v-2.91h-2.91z" />
        </g>
      )

    case 'location':
      return (
        <g transform="translate(4)">
          <path
            d="M11.975 27.177C19.05 22.047 22.5 16.977 22.5 12c0-.359-.018-.715-.053-1.067C21.909 5.599 17.402 1.5 12 1.5c-5.392 0-9.893 4.084-10.444 9.405-.037.362-.056.727-.056 1.095 0 5.292 3.43 10.35 10.475 15.177z"
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="3"
          />
          <circle fill="none" stroke="#1F1F1F" strokeWidth="3" cx="12" cy="11" r="4.5" />
          <path fill="#FFD100" d="M0 29h24v3H0z" />
        </g>
      )

    case 'share':
      return (
        <g>
          <circle fill="none" stroke="#1F1F1F" strokeWidth="3" cx="26" cy="22" r="4.5" />
          <circle fill="none" stroke="#1F1F1F" strokeWidth="3" cx="6" cy="26" r="4.5" />
          <path d="M10.806 23.757L21.972 21.9v2.736l-11.166 1.856zM7.487 8.104h2.736L8 21.514H5.264z" />
          <circle fill="none" stroke="#FFD100" strokeWidth="3" cx="9" cy="5" r="3.5" />
        </g>
      )

    case 'add':
      return (
        <g>
          <circle fill="none" stroke="#1F1F1F" strokeWidth="2.667" cx="16" cy="16" r="14.667" />
          <path d="M14.667 14.667v-4h2.666v4h4v2.666h-4v4h-2.666v-4h-4v-2.666h4z" fill="#FFD100" />
        </g>
      )

    case 'move':
      return (
        <g>
          <path d="M17.96 12H13.97V4.818l-2.942 2.941-1.41-1.41L15.964 0l6.348 6.348-1.411 1.411-2.942-2.941V12zM20 13.969h7.182l-2.941-2.942 1.41-1.41L32 15.964l-6.348 6.348-1.411-1.411 2.941-2.942H20V13.97zM17.96 20v7.253l3.013-3.012 1.41 1.41L16.036 32l-6.348-6.348 1.411-1.411 2.871 2.87V20h3.991zM12 17.96H4.747l3.012 3.013-1.41 1.41L0 16.036l6.348-6.348 1.411 1.411-2.87 2.871H12v3.991z" />
          <circle fill="#FFD100" cx="16" cy="16" r="2" />
        </g>
      )

    case 'move-folder':
      return (
        <g>
          <g transform="translate(2.666667, 4.000000)">
            <polygon
              fill="#FFD100"
              transform="translate(13.333333, 14.666667) rotate(-90.000000) translate(-13.333333, -14.666667) "
              points="14.7164525 16.4371026 16.8042328 14.4349176 18.6666667 16.2201426 13.3333333 21.3333333 8 16.2201426 9.86243386 14.4349176 12.0825733 16.5639746 12.0825733 8 14.7164525 8"
            />
            <path
              d="M3.33333333,5 L14.7041426,5 L13.6110949,3.33333333 L3.33333333,3.33333333 L3.33333333,5 Z M3.33333333,8.33333333 L3.33333333,22 L23.3333333,22 L23.3333333,8.32248264 L17.3483073,8.32248264 L17.3483073,8.33333333 L3.33333333,8.33333333 Z M6.07514039e-13,-6.05737682e-13 L15.4112413,-6.05737682e-13 L18.6832682,4.98914931 L26.6666667,4.98914931 L26.6666667,25.3333333 L6.07514039e-13,25.3333333 L6.07514039e-13,-6.05737682e-13 Z"
              fill="#1F1F1F"
            />
          </g>
        </g>
      )

    case 'similar':
      return (
        <g>
          <path d="M16 27.58l12-1.2V5.62l-12-1.2v23.16zM12 0l20 2v28l-20 2V0zM11 .5v4.02l-1-.1v23.16l1-.1v4.02L6 32V0l5 .5zM5 .5v4.02l-1-.1v23.16l1-.1v4.02L0 32V0l5 .5z" />
          <path fill="#FFD100" d="M18 7l8 1v3h-8z" />
        </g>
      )

    case 'link':
      return (
        <g>
          <path d="M13.349 21.706l1.516-2.944a4.139 4.139 0 0 0 2.659-2.137l3.875-7.523c1.07-2.078.306-4.657-1.707-5.762-2.012-1.104-4.511-.316-5.581 1.762l-3.875 7.523a4.373 4.373 0 0 0-.23 3.47L8.49 19.04a7.29 7.29 0 0 1-.683-7.747l3.875-7.524C13.465.306 17.63-1.008 20.984.833c3.354 1.84 4.628 6.14 2.844 9.602l-3.875 7.524c-1.324 2.57-3.961 3.957-6.604 3.747zm4.404-8.551a4.139 4.139 0 0 0-2.659 2.137l-3.875 7.523c-1.07 2.077-.306 4.657 1.707 5.762 2.012 1.104 4.511.316 5.581-1.762l3.875-7.523a4.373 4.373 0 0 0 .23-3.47l1.516-2.944a7.29 7.29 0 0 1 .684 7.747l-3.875 7.523c-1.784 3.463-5.949 4.777-9.303 2.936-3.354-1.84-4.627-6.14-2.844-9.602l3.875-7.524c1.324-2.57 3.961-3.957 6.605-3.747l-1.517 2.944z" />
        </g>
      )

    case 'wechat':
      return (
        <g>
          <path fill="none" d="M0 0h32v32H0z" />
          <path d="M22.01 10.509h-.048c-5.594 0-10.13 3.81-10.13 8.509 0 1.038.222 2.033.627 2.953a12.216 12.216 0 0 1-4.476-.555c-.585-.188-2.72 2.03-3.25 1.762-.316-.16.953-2.783.66-2.969-2.625-1.663-4.326-4.334-4.326-7.346 0-5.042 4.768-9.13 10.65-9.13 4.932 0 9.081 2.874 10.292 6.776zm-13.998.574c.768 0 1.39-.617 1.39-1.378 0-.761-.622-1.378-1.39-1.378-.767 0-1.389.617-1.389 1.378 0 .76.622 1.378 1.39 1.378zm7.41 0c.766 0 1.388-.617 1.388-1.378 0-.761-.622-1.378-1.389-1.378s-1.389.617-1.389 1.378c0 .76.622 1.378 1.39 1.378zm6.54 15.465c-4.955 0-8.972-3.333-8.972-7.446 0-4.112 4.017-7.445 8.972-7.445 4.955 0 8.971 3.333 8.971 7.445 0 2.48-1.46 4.678-3.708 6.03-.423.256.916 2.405.442 2.596-.292.118-2.384-1.701-2.693-1.61-.942.279-1.956.43-3.012.43zm-3.184-8.575c.64 0 1.158-.515 1.158-1.149s-.518-1.148-1.158-1.148c-.639 0-1.157.514-1.157 1.148 0 .634.518 1.149 1.157 1.149zm6.367 0c.64 0 1.158-.515 1.158-1.149s-.518-1.148-1.158-1.148c-.64 0-1.157.514-1.157 1.148 0 .634.518 1.149 1.157 1.149z" />
        </g>
      )

    case 'qq':
      return (
        <g>
          <path fill="none" d="M0 0h32v32H0z" />
          <path d="M6.946 13.203c-.135.362.062.592 0 1.972-.017.372-1.59 2.052-2.213 3.798-.619 1.731-.704 3.54.251 4.251.956.711 1.845-2.366 1.962-1.919.05.196.114.399.19.608.305.838.819 1.767 1.563 2.635.151.176-.92.5-1.563 1.614-.643 1.113.184 3.138 3.38 3.138 4.123 0 5.045-1.477 5.13-1.47.306.023.327 0 .653 0 .398 0 .233.032.603 0 .2-.018 2.204 1.767 4.979 1.47 4.727-.506 4.004-2.12 3.633-3.138-.387-1.063-1.757-1.56-1.696-1.629 1.132-1.274 1.311-2.057 1.696-3.228.158-.48 1.255 2.648 2.1 1.92.351-.305 1.055-1.57.351-4.252-.704-2.683-2.065-3.295-2.035-3.798.061-1.047.026-1.782-.026-1.972-.252-.922-.777-.719-.777-.922 0-5.31-3.92-9.614-8.756-9.614S7.614 6.97 7.614 12.28c0 .421-.367.11-.668.922z" />
        </g>
      )

    case 'sina':
      return (
        <g>
          <path fill="none" d="M0 0h32v32H0z" />
          <path d="M14.343 28.158c-7.566 0-13.7-3.904-13.7-8.72 0-4.814 9.186-12.417 12.7-12.417 1.474 0 4.365 1.083 2.342 4.516-.141.24 4.562-1.996 7.134-.525 2.571 1.47 0 3.834 0 4.096 0 .263 5.164.263 5.164 4.33 0 4.816-6.074 8.72-13.64 8.72zm1.06-1.513c4.834-.68 8.4-3.742 7.964-6.842-.436-3.1-4.708-5.061-9.541-4.382-4.834.68-8.4 3.743-7.964 6.842.436 3.1 4.708 5.061 9.541 4.382zm-.862-1.084c-2.874.558-5.577-.904-6.037-3.268-.46-2.363 1.499-4.732 4.374-5.291 2.875-.559 5.578.904 6.037 3.267.46 2.364-1.499 4.733-4.374 5.292zm-1.017-4.989c.28 0 .507-.224.507-.501a.504.504 0 0 0-.507-.501.504.504 0 0 0-.507.501c0 .277.227.501.507.501zm-1.274 2.342c.885-.413 1.355-1.278 1.05-1.932-.306-.655-1.27-.851-2.155-.439-.885.413-1.355 1.278-1.05 1.933.306.654 1.27.85 2.155.438z" />
          <path d="M26.173 8.911c.939.834 1.257 2.13.954 3.89a.882.882 0 0 1-.87.732h-.217a.677.677 0 0 1-.656-.847c.269-1.041.177-1.827-.276-2.357-.479-.56-1.325-.823-2.538-.786a.694.694 0 0 1-.715-.694c0-.449.335-.827.78-.881 1.452-.177 2.63.138 3.538.943z" />
          <path d="M29.154 6.075c1.751 1.634 2.431 4.098 2.04 7.394a1.323 1.323 0 0 1-1.313 1.167h-.035a.978.978 0 0 1-.968-1.112c.302-2.19-.05-3.996-1.055-5.42-1.036-1.467-2.945-2.166-5.725-2.095a1.1 1.1 0 0 1-1.127-1.099c0-.669.54-1.212 1.209-1.216 2.928-.018 5.253.776 6.974 2.381z" />
        </g>
      )
    case 'calendar':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <rect stroke="#1F1F1F" strokeWidth="4" x="2" y="6" width="28" height="24" />
            <rect fill="#1F1F1F" fillRule="evenodd" x="8" y="0" width="4" height="12" />
            <rect fill="#1F1F1F" fillRule="evenodd" x="20" y="0" width="4" height="12" />
            <rect fill="#FFD100" fillRule="evenodd" x="8" y="14" width="16" height="4" />
            <rect fill="#FFD100" fillRule="evenodd" x="8" y="20" width="16" height="4" />
          </g>
        </g>
      )

    case 'open-eye':
      return (
        <g transform="translate(0 2)" strokeWidth="4" fill="none">
          <path d="M16 0v8M2 4l4 6.928M30.262 4.745l-4 6.928" stroke="#FFD100" />
          <path
            d="M16 26c7.088 0 14-4.778 14-8 0-3.222-6.912-8-14-8-7.08 0-14 4.79-14 8s6.92 8 14 8z"
            stroke="#1F1F1F"
          />
          <circle stroke="#1F1F1F" cx="16" cy="18" r="6" />
        </g>
      )

    case 'close-eye':
      return (
        <g fill="none">
          <path d="M16 30v-8M2 26l4-6.928M30.262 25.255l-4-6.928" stroke="#FFD100" strokeWidth="4" />
          <path
            d="M32 12.75c0-1.105-.495-1.863-1.664-2-.634-.074-1.26.368-1.696.984-.366.519-.58 1.177-.723 1.587C27 15.945 21.658 19.5 16 19.5c-4.79 0-9.49-2.554-11.262-4.931-.474-.637-.76-1.401-.888-1.819-.336-1.096-1.07-2.082-2.128-2-1.057.082-1.722.895-1.722 2C0 17.986 7.966 23.5 16 23.5c8.041 0 16-5.502 16-10.75z"
            fill="#1F1F1F"
          />
        </g>
      )

    case 'account':
      return (
        <g>
          <path d="M0 32c0-8.837 7.163-16 16-16s16 7.163 16 16h-4c0-6.627-5.373-12-12-12S4 25.373 4 32H0z" />
          <circle fill="none" stroke="#1F1F1F" strokeWidth="4" cx="16" cy="10" r="8" />
          <path fill="#FFD100" d="M20 24h4l-8 8-8-8h4l4 4z" />
        </g>
      )

    case 'import':
      return (
        <g>
          <path d="M24 22v-2h6V8H2v12h4v2H0V6h32v16h-8z" />
          <circle fill="#FFD100" cx="26" cy="12" r="2" />
          <path fill="none" stroke="#1F1F1F" strokeWidth="2" d="M7 1h18v6H7zM7 17h18v14H7z" />
          <path fill="#FFD100" d="M14 26h8v2h-8z" />
        </g>
      )

    case 'statistics':
      return (
        <g>
          <path d="M2 30h30v2H0V0h2v30z" />
          <path d="M6 12h2v16H6zM12 18h2v10h-2z" />
          <path fill="#FFD100" d="M12 10h2v6h-2zM24 4h2v4h-2z" />
          <path d="M18 14h2v14h-2zM24 10h2v18h-2z" />
        </g>
      )

    case 'manage':
      return (
        <g fill="none">
          <path stroke="#1F1F1F" strokeWidth="4" d="M2 10h28v20H2zM8 2h16v8H8z" />
          <path fill="#1F1F1F" d="M2 16h28v4H2z" />
          <path fill="#FFD100" d="M8 14h4v8H8zM20 14h4v8h-4z" />
        </g>
      )

    case 'email':
      return (
        <g strokeWidth="4" fill="none">
          <path d="M30 12.002l-28 .03v.848l14 8.76 14-8.76v-.878z" stroke="#FFD100" />
          <path stroke="#1F1F1F" d="M2 4h28v24H2z" />
        </g>
      )

    case 'invoice-multiple':
      return (
        <g transform="translate(2)" fill="none">
          <path stroke="#1F1F1F" strokeWidth="2" d="M7 7h20v24H7z" />
          <path fill="#1F1F1F" d="M22 4h-2V2H2v24H0V0h22z" />
          <path fill="#FFD100" d="M10 12h14v2H10zM10 16h8v2h-8z" />
          <circle fill="#FFD100" cx="22" cy="26" r="2" />
        </g>
      )

    case 'customer-service':
      return (
        <g transform="translate(4)">
          <path d="M20.813 21.333H19.81a3.048 3.048 0 0 1-3.048-3.047v-4.572a3.048 3.048 0 0 1 3.048-3.047h1.397c-.726-4.324-4.486-7.62-9.017-7.62-4.53 0-8.29 3.296-9.016 7.62h1.397a3.048 3.048 0 0 1 3.048 3.047v4.572a3.048 3.048 0 0 1-3.048 3.047H3.048A3.048 3.048 0 0 1 0 18.286V12.19C0 5.458 5.458 0 12.19 0c6.733 0 12.191 5.458 12.191 12.19v6.096c0 6.732-5.458 12.19-12.19 12.19V27.43a9.147 9.147 0 0 0 8.622-6.096zM3.048 13.714v4.572H4.57v-4.572H3.048zm16.762 0v4.572h1.523v-4.572H19.81z" />
          <circle fill="#FFD100" cx="12.19" cy="28.952" r="3.048" />
        </g>
      )

    case 'camera':
      return (
        <g fill="none">
          <path stroke="#1F1F1F" strokeWidth="4" d="M2 10h28v20H2z" />
          <path fill="#1F1F1F" d="M13 0h11v4H13z" />
          <path fill="#FFD100" d="M8 14h4v3H8z" />
          <circle stroke="#1F1F1F" strokeWidth="3" cx="19" cy="20" r="4" />
        </g>
      )

    case 'crop':
      return (
        <g fill="none">
          <path fill="#1F1F1F" d="M14.373 21.462H7.8v-13.5h13.6v6.75l3.4 1.706V4.578H4.4v20.269h11.193z" />
          <path fill="#FFD100" d="M19.882 31.103h.001l11.032-9.196-16.315-8.19z" />
          <g fill="#1F1F1F">
            <path d="M6 1.296a4 4 0 1 1 0 8 4 4 0 0 1 0-8M23 1.296a4 4 0 1 1 0 8 4 4 0 0 1 0-8M6 20.296a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
          </g>
        </g>
      )

    default:
      return null
  }
}

const computedSize = ({ size }) => (size || 32) + 'px'

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${computedSize};
  width: ${computedSize};
  height: ${computedSize};
  min-width: ${computedSize};
  min-height: ${computedSize};
  position: relative;
  color: inherit;
  vertical-align: middle;
`

const Icon: React.SFC<Props> = ({ glyph, size, ...rest }) => (
  <SvgWrapper data-icon={true} size={size} {...rest}>
    <InlineSvg
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id={glyph}
    >
      <Glyph glyph={glyph} />
    </InlineSvg>
  </SvgWrapper>
)

export default Icon
