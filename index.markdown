---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: splash
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /fig/zurich.jpeg
---
<style>
  .intro-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .intro-container h1 {
    font-family: Papyrus, sans-serif;
    font-weight: bold;
    color: #ff1493;
  }

  .intro {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap; 
    margin-bottom: 30px;
  }

  .intro figure {
    margin: 0;
    text-align: center;
    flex: 0 0 500px; 
  }

  .intro img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .intro figcaption {
    font-size: 14px;
    color: #555;
    margin-top: 5px;
  }

  .intro .text {
    flex: 1;
    font-size: 20px;
    line-height: 1.6;
  }

  .more-links {
    text-align: left;
    margin-top: 20px;
  }

  .more-links a {
    display: block;
    font-size: 38px;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .more-links a.orcid {
    color: #A6CE39;
  }

  .more-links a.bilibili {
    color: #00A1D6;
  }
</style>

<div class="intro-container">
  <h1>你好! Hello! Ciao!</h1>

  <div class="intro">
    <figure>
      <img src="/fig/galileo_museum.jpg" alt="Galileo Museum">
      <figcaption>A "colleague" and me [Galileo Museum @ Florence]</figcaption>
    </figure>
    <div class="text">
      <p>
        I am <b>Lingrui Lin (林令瑞)</b>.  
        I am a Ph.D. student from the <i>School of Astronomy and Space Science</i> in Nanjing University.
      </p>
    </div>
  </div>
  <h1 style="text-align: left;">More about me:</h1>
  <div class="more-links">
    <p>
      <a href="https://orcid.org/0000-0002-2231-8381" class="orcid" style="display: inline-block; margin-right: 20px;">ORCID</a>
      <a href="https://space.bilibili.com/399381595?spm_id_from=333.1007.0.0" class="bilibili" style="display: inline-block;">Bilibili</a>
    </p>

  </div>
</div>

