import React, { Component } from "react";
import "./Home.css";
import Greetings from "./Greetings";

class Home extends Component {
  render() {
    var eyeView = document.querySelectorAll("eye-view");
    console.log(eyeView);
    window.addEventListener("mousemove", (e) => {
      const eye1 = document.querySelector(".mata-kiri");
      const eye2 = document.querySelector(".mata-kanan");
      const x = -(window.innerWidth / 2 - e.pageX) / 160;
      const y = -(window.innerHeight / 2 - e.pageY) / 160;
      eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
      eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });

    return (
      <>
        <div className="home">
          <div className="home-greetings" data-aos="fade-up">
            <Greetings />
          </div>
          <div className="home-image">
            <div className="eye-view" id="eye-view"></div>
            <svg
              width="200"
              height="200"
              viewBox="0 0 381 395"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="A4 - 1">
                <path
                  id="leher"
                  d="M143.101 245.297C145.809 238.082 148.049 193.027 148.5 179.5C174.833 177.847 226.389 179.5 230 179.5C228.646 192.576 236.996 234.625 242.414 245.297C241.767 258.836 176.268 262.865 143.101 245.297Z"
                  fill="#EBA775"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <g id="kepala">
                  <path
                    id="shadow-leher"
                    d="M186.86 230.092C146.261 228.587 147.855 185.776 147.855 185.776L227.249 188.721C227.249 188.721 227.459 231.598 186.86 230.092Z"
                    fill="#AA6C3E"
                  />
                  <path
                    id="kepala_2"
                    d="M113.13 123.029C115.163 116.967 120.348 119.235 122.687 121.127L125.003 58.9419C125.057 57.4999 145.522 41.6533 155.748 33.9102L236.392 39.6084L252.568 114.663C266.77 109.323 260.77 124.894 258.798 129.333C257.882 131.394 254.134 145.405 254.467 148.576C254.801 151.747 256.471 155.419 254.95 159.875C253.733 163.44 250.778 162.728 249.453 161.927L249.369 164.18C249.218 168.236 241.195 189.598 234.544 198.376C227.893 207.154 209.914 226.269 190.5 226C171.086 225.731 149.337 206.046 140.718 194.896C133.823 185.977 130.865 168.359 130.865 168.359C120.824 171.145 121.428 154.923 120.326 148.114C119.225 141.304 110.589 130.606 113.13 123.029Z"
                    fill="#EBA775"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <g id="rambut">
                    <g id="rambut_2">
                      <path
                        id="Vector"
                        d="M187.942 -0.42691C214.515 -3.71224 238.082 17.1392 246.543 27.9756L250.678 18.2599C253.371 22.0157 252.188 29.4797 251.261 32.7422C255.324 31.1516 261.92 33.459 264.711 34.8114L256.88 37.5568C261.89 38.5454 266.647 46.5055 268.4 50.3621L261.189 49.979C264.943 54.1526 265.16 68.7059 264.8 75.4609L261.789 72.5913C262.808 80.5937 255.043 117.093 251.402 131.652C249.425 109.418 247.725 98.9408 247.208 91.6876C246.821 86.2478 245.796 75.8064 239.252 71.3943C233.749 67.6846 230.4 53.7631 230.015 49.6782C227.679 52.8056 210.659 56.6285 202.442 58.149L208.533 51.2322C203.333 55.765 187.971 56.9655 180.356 56.976L184.904 49.3557C180.265 55.9452 155.126 64.2108 142.722 67.6221L147.59 61.1066C145.767 62.352 142.798 63.5193 139.268 64.5786C136.998 64.7591 134.602 75.7714 133.106 78.4016C131.609 81.0317 132.474 98.6904 130.503 101.747C128.925 104.192 127.917 121.932 127.394 134.549C125.736 131.751 125.818 130.22 122.731 120.302C119.645 110.383 118.357 100.65 118.098 97.0236L115.177 100.933C113.947 96.8934 115.527 88.7581 116.47 85.1953L113.122 88.6304C111.817 80.9741 114.218 71.678 115.581 67.987L111.404 70.0232C111.698 57.7551 119.764 46.0804 123.761 41.7766L114.698 42.1985C117.91 36.2272 128.87 30.7578 133.948 28.7695L128.66 26.2305C133.617 21.4358 144.853 19.2627 149.851 18.7755L142.807 15.2402C145.466 12.8524 159.132 11.4406 165.633 11.0332L158.187 6.57325C170.337 2.52183 187.385 4.36066 194.39 5.78648L187.942 -0.42691Z"
                        fill="#2F2F2F"
                      />
                      <path
                        id="Vector_2"
                        d="M246.543 27.9756C238.082 17.1392 214.515 -3.71224 187.942 -0.42691L194.39 5.78648C187.385 4.36066 170.337 2.52183 158.187 6.57325L165.633 11.0332C159.132 11.4406 145.466 12.8524 142.807 15.2402L149.851 18.7755C144.853 19.2627 133.617 21.4358 128.66 26.2305L133.948 28.7695C128.87 30.7578 117.91 36.2272 114.698 42.1985L123.761 41.7766C119.764 46.0804 111.698 57.7551 111.404 70.0232L115.581 67.987C114.218 71.678 111.817 80.9741 113.122 88.6304L116.47 85.1953C115.527 88.7581 113.947 96.8934 115.177 100.933L118.098 97.0236C118.357 100.65 119.645 110.383 122.731 120.302C125.818 130.22 125.736 131.751 127.394 134.549C127.917 121.932 128.925 104.192 130.503 101.747C132.474 98.6904 131.609 81.0317 133.106 78.4016C134.602 75.7714 136.998 64.7591 139.268 64.5786C142.798 63.5193 145.767 62.352 147.59 61.1066L142.722 67.6221C155.567 64.0893 182.07 55.3509 185.32 48.6591L180.356 56.976C188.644 56.9645 206.107 55.5437 209.66 49.9518L202.442 58.149C210.659 56.6285 227.679 52.8056 230.015 49.6782C230.4 53.7631 233.749 67.6846 239.252 71.3943C245.796 75.8064 246.821 86.2478 247.208 91.6876C247.725 98.9408 249.425 109.418 251.402 131.652C255.043 117.093 262.808 80.5937 261.789 72.5913L264.8 75.4609C265.16 68.7059 264.943 54.1526 261.189 49.979L268.4 50.3621C266.647 46.5055 261.89 38.5454 256.88 37.5568L264.711 34.8114C261.92 33.459 255.324 31.1516 251.261 32.7422C252.188 29.4797 253.371 22.0157 250.678 18.2599L246.543 27.9756Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Vector 6">
                      <path
                        id="Vector_3"
                        d="M195.296 2.89197C202.513 3.15915 219.076 7.20229 227.586 21.2374L195.296 2.89197Z"
                        fill="#FDFDFD"
                      />
                      <path
                        id="Vector_4"
                        d="M149.095 18.3248C151.395 17.206 157.787 15.3959 164.951 17.106L149.095 18.3248Z"
                        fill="#FDFDFD"
                      />
                      <path
                        id="Vector_5"
                        d="M176.408 49.1154C170.527 53.4108 157.038 62.2084 150.142 63.0363L176.408 49.1154Z"
                        fill="#FDFDFD"
                      />
                      <path
                        id="Vector_6"
                        d="M123.144 48.0424C122.992 48.175 122.834 48.3196 122.67 48.4756C120.844 50.7318 116.776 60.6578 114.804 65.7835C114.4 58.232 119.61 51.376 122.67 48.4756C122.851 48.2512 123.01 48.1028 123.144 48.0424Z"
                        fill="#FDFDFD"
                      />
                      <path
                        id="Vector_7"
                        d="M231.496 49.8095C231.902 55.0891 234.308 66.4294 240.695 69.5539C238.804 63.768 234.315 51.7189 231.496 49.8095Z"
                        fill="#FDFDFD"
                      />
                      <path
                        id="Vector_8"
                        d="M224.343 47.7375C221.853 49.9019 215.153 54.3477 208.269 54.815L224.343 47.7375Z"
                        fill="#FDFDFD"
                      />
                      <path
                        id="Vector_9"
                        d="M199.97 22.9135C189.216 20.5593 161.774 19.9646 138.032 36.4191C152.363 31.6835 184.813 22.3524 199.97 22.9135Z"
                        fill="#FDFDFD"
                      />
                      <path
                        id="Vector_10"
                        d="M217.379 28.527C216.297 33.3006 210.689 43.1717 196.909 44.4668C203.376 40.6446 216.522 32.1056 217.379 28.527Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <g id="Vector 7">
                      <path
                        id="Vector_11"
                        d="M120.082 81.7711C118.807 83.6792 116.292 88.9408 116.438 94.722C117.614 91.4562 119.988 84.2945 120.082 81.7711Z"
                        fill="white"
                      />
                      <path
                        id="Vector_12"
                        d="M143.159 56.4561C141.587 58.2031 137.541 61.754 133.919 61.9809C136.291 62.9713 141.46 63.2529 143.159 56.4561Z"
                        fill="white"
                      />
                    </g>
                    <path
                      id="Vector 5"
                      d="M257.486 42.3453C254.38 39.9517 253.527 40.4156 251.723 40.3488C255.722 42.0872 257.655 44.5687 260.687 47.5793C260.687 47.5793 260.593 44.7388 257.486 42.3453Z"
                      fill="white"
                    />
                  </g>
                </g>
                <path
                  id="hidung"
                  d="M189.146 128.961C179.666 147.449 176.055 166.838 192.306 161.878"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="mulut"
                  d="M170.637 188.482C186.105 192.928 195.165 192.42 211.717 188.482"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="baju"
                  d="M45.1422 246.199L146.261 224.104C167.929 255.217 217.585 257.021 235.642 224.104C266.64 231.469 330.802 247.371 339.469 252.061C348.136 256.75 356.623 265.437 359.783 269.195L380.097 371.553C380.097 371.553 320.961 415.742 291.167 379.218C261.373 342.694 190.5 292.553 122.787 352.614C55.0735 412.676 0.902843 379.218 0.902843 379.218C0.902843 347.203 19.5014 276.049 25.2796 265.588C31.0578 255.127 40.9289 248.303 45.1422 246.199Z"
                  fill="#373737"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="kerah-baju"
                  d="M138.135 226.358C164.769 264.686 214.877 271.45 245.122 226.358"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="shadow-baju"
                  d="M51.0107 387.785C49.7478 372.288 47.8576 346.947 46.8572 327.814M46.4964 302.563C45.9179 305.018 46.1889 315.031 46.8572 327.814M46.8572 327.814C46.7875 326.461 46.4964 320.599 41.0794 315.188M307.87 391.393C308.648 373.615 310.872 343.329 314.785 321.501M322.767 296.701C319.573 300.146 316.926 309.557 314.785 321.501M314.785 321.501C315.038 318.645 315.002 311.311 312.835 304.817M343.532 254.315C338.115 257.321 326.378 266.67 322.767 280.017M41.0794 248.453C44.3898 254.766 51.0107 269.917 51.0107 280.017"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="mata-kiri"
                  className="mata-kiri"
                  d="M159.611 129.215C161.606 129.215 163.223 127.6 163.223 125.607C163.223 123.615 161.606 122 159.611 122C157.617 122 156 123.615 156 125.607C156 127.6 157.617 129.215 159.611 129.215Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  id="mata-kanan"
                  className="mata-kanan"
                  d="M221.611 129.215C223.606 129.215 225.223 127.6 225.223 125.607C225.223 123.615 223.606 122 221.611 122C219.617 122 218 123.615 218 125.607C218 127.6 219.617 129.215 221.611 129.215Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  id="alis-kanan"
                  d="M207.447 109.608C204.901 110.11 204.83 106.472 205.113 104.589C229.556 97.0609 237.222 107.726 238 114C224.633 100.616 210.63 108.981 207.447 109.608Z"
                  fill="black"
                />
                <path
                  id="alis-kiri"
                  d="M173.553 109.608C176.099 110.11 176.17 106.472 175.887 104.589C151.444 97.0609 143.778 107.726 143 114C156.367 100.616 170.37 108.981 173.553 109.608Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>
          <div className="home-introduction">
            <div className="home-introduction-name">Saddan Bima Nagantara</div>
            <div className="home-introduction-role">Web Developer</div>
          </div>
          <div className="home-about">
            <p>
              I am Saddan Bima Nagantara, a Bachelor of informatics engineering
            </p>
            <p>
              My passion for software lies in dreaming up ideas and bringing
              them to life with elegant interfaces. I pay a lot of attention to
              the experience, architecture, and code quality of the things I
              build.
            </p>
            <p>
              I focus on web developers, creating web-based applications. The
              technologies I use to create a web-based application are php
              native, codeigniter 3 and laravel. The following are the skills
              that I have.
            </p>
          </div>
          <h4 className="tech">Tech What i Use</h4>
          <div className="mystack" data-aos="fade-up">
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/html.svg" alt="html" />
              </div>
              <div className="card-stack-discription">
                <h4>HTML</h4>
                {/* <p>expert</p> */}
              </div>
            </div>
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/css.svg" alt="css" />
              </div>
              <div className="card-stack-discription">
                <h4>CSS</h4>
                {/* <p>expert</p> */}
              </div>
            </div>
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/bootstrap.svg" alt="bootstrap" />
              </div>
              <div className="card-stack-discription">
                <h4>BOOTSTRAP</h4>
                {/* <p>expert</p> */}
              </div>
            </div>
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/js.svg" alt="Javascript" />
              </div>
              <div className="card-stack-discription">
                <h4>Javascript</h4>
                {/* <p>intermediate</p> */}
              </div>
            </div>
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/php.svg" alt="php" />
              </div>
              <div className="card-stack-discription">
                <h4>PHP</h4>
                {/* <p>expert</p> */}
              </div>
            </div>
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/codeigniter.svg" alt="codeigniter" />
              </div>
              <div className="card-stack-discription">
                <h4>Codeigniter 3</h4>
                {/* <p>expert</p> */}
              </div>
            </div>
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/laravel.svg" alt="laravel" />
              </div>
              <div className="card-stack-discription">
                <h4>Laravel</h4>
                {/* <p>Intermediate</p> */}
              </div>
            </div>
            <div className="card-stack">
              <div className="card-stack-icon">
                <img src="./images/tailwind.svg" alt="tailwind" />
              </div>
              <div className="card-stack-discription">
                <h4>Tailwind</h4>
                {/* <p>Intermediate</p> */}
              </div>
            </div>
          </div>
          <div className="home-social">
            <a href="https://twitter.com/kanggitar11">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="https://www.instagram.com/bnagantarasys/">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://github.com/saddanbimanagantara">
              <i className="ri-github-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/saddan-bima-nagantara/">
              <i className="ri-linkedin-line"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
