<div align="center">
<h2>Frontend Mentor Challenge</h2>
</div>





<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/astragenius/planet-facts-site">
    <img src="/DOC/imgs/logo-desktop.svg" alt="Logo" width="500" height="80">
  </a>

<h1 align="center">Tic Tac Toe Challenge</h1>
<div align="center">
    <img src="/DOC/imgs/challenge-sceenshot.png">
   
</div>

  <p align="center">
    <a href="https://www.frontendmentor.io/challenges?difficulties=3"><img src="https://img.shields.io/badge/Difficulty-Intermediate-C99703?style=for-the-badge&logo=frontendmentor" alt="Difficulty - Intermediate"></a>
    <br />
    <br />
    <a href="https://planet-facts-site-alpha.vercel.app/">View Demo</a>
    ·
    <a href=https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v>Link to the Challenge</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project




<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
<div align="center">


| Editor      |                                             Language                                                                           |    Hosting   | 
| -----------                                               | -----------                                                                         | ----- |
| ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)| ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
|                | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)|
|             | ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)       |

</div>

<p align="right">(<a href="#top">back to top</a>)</p>

### Tools that i Use
![Es-lint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) 
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)


## Feature's

- [x] App layout optimized for Mobile(375px), Tablet(768px) and Desktop(1440px)
- [x] You can play solo against the Computer
- [x] You can play in multiplayer against another person
- [x] You can choose the symbols before you start the game
- [x] Different modal states for each player and symbol



    

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Screenshot
| Mobile | Tablet | Desktop |
|--------|--------|---------|
|   ![mobile](/DOC/screenshot/tic-tac-toe-mobile.png)     |  ![tablet](/DOC/screenshot/tic-tac-toe-tablet.png)     |    ![desktop](/DOC/screenshot/tic-tac-toe-desktop.png)     |

## Animation 

![animation](/DOC/animation/fem-tic-tac-toe-mobile-animation.gif)
![animation](/DOC/animation/fem-tic-tac-toe-desktop-animation.gif)


<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgment

#### Checkbox Custom Design with CSS

For this Toggle-switch I have used the "input" element

You can't style the default checkbox itself with CSS. That's why the actual switch get styled with the pseudo element ":before" and ":after".

First, we set the checkbox "position: absolute" so we get the checkbox out of the document flow.

Afterward, we set the width and height to 100% so that the checkbox occupies the entire space of the container.
With "appearance: none" we don't see the checkbox anymore, but we can still interact with the checkbox. In contrast, with "display: none" you can't interact with the element anymore. 

```scss

.checkbox {
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

```


#### Changing SVG fill color by clicking the Toggle

```scss
.checkbox:checked  ~ .toggle-symbol-o .fill-symbol-o {
    fill: #A8BFC9;
}

.checkbox:checked ~ .toggle-symbol-x .fill-symbol-x {
    fill: #1A2A33;
}
```

![screenshot](/DOC/animation/fem-toggle-switch-finished.gif)



<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Matthias - [@AstraKarl](https://twitter.com/AstraKarl)
Frontend Mentor Profile - [@Astragenius](https://www.frontendmentor.io/profile/astragenius)

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png