<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Your Favourite Year In Music</h3>

  <p align="center">
    An app that analyzes your liked songs in spotify to determine your favourite year in music.
    <br />
    <a href="https://github.com/jakebottrall/your-favourite-year-in-music"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://yourfavouriteyearinmusic.com">View</a>
    ·
    <a href="https://github.com/jakebottrall/your-favourite-year-in-music/issues">Report Bug</a>
    ·
    <a href="https://github.com/jakebottrall/your-favourite-year-in-music/issues">Request Feature</a>
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
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A small app that determines a users favourite year in music by analyzing their liked songs in spotify.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- node
- yarn
- spotify client id

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jakebottrall/your-favourite-year-in-music.git
   ```
2. CD into the repo
   ```sh
   cd your-favourite-year-in-music
   ```
3. Install packages
   ```sh
   yarn install
   ```
4. Create a `.env`
   ```sh
   touch .env
   ```
5. Edit .env to include your spotify client id & callback uri, e.g.
   ```sh
   VITE_CLIENT_ID=your-client-id
   VITE_REDIRECT_URI=http://localhost:3000/callback
   ```
6. Run it
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GNU General Public License v3.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@jakebottrall](https://twitter.com/jakebottrall)

Project Link: [https://github.com/jakebottrall/your-favourite-year-in-music](https://github.com/jakebottrall/your-favourite-year-in-music)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jakebottrall/your-favourite-year-in-music.svg?style=for-the-badge
[contributors-url]: https://github.com/jakebottrall/your-favourite-year-in-music/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jakebottrall/your-favourite-year-in-music.svg?style=for-the-badge
[forks-url]: https://github.com/jakebottrall/your-favourite-year-in-music/network/members
[stars-shield]: https://img.shields.io/github/stars/jakebottrall/your-favourite-year-in-music.svg?style=for-the-badge
[stars-url]: https://github.com/jakebottrall/your-favourite-year-in-music/stargazers
[issues-shield]: https://img.shields.io/github/issues/jakebottrall/your-favourite-year-in-music.svg?style=for-the-badge
[issues-url]: https://github.com/jakebottrall/your-favourite-year-in-music/issues
[license-shield]: https://img.shields.io/github/license/jakebottrall/your-favourite-year-in-music.svg?style=for-the-badge
[license-url]: https://github.com/jakebottrall/your-favourite-year-in-music/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jakebottrall
