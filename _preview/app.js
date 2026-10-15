/* Local, client-side design preview. No production files or remote data are used. */
(() => {
  "use strict";
  const main = document.querySelector("main");
  const themeButton = document.querySelector(".theme-toggle");
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton.textContent = theme === "light" ? "Dark" : "Light";
    themeButton.setAttribute("aria-label", "Switch to " + (theme === "light" ? "dark" : "light") + " theme");
    document.querySelector('meta[name="theme-color"]').content = theme === "light" ? "#fffaf5" : "#1b1717";
  }
  applyTheme(document.documentElement.dataset.theme || "light");
  themeButton.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("lingrui-theme", theme); } catch (_) {}
  });
  const researchToggle = document.querySelector(".research-toggle");
  const navGroup = document.querySelector(".nav-group");
  researchToggle.addEventListener("click", () => {
    const expanded = researchToggle.getAttribute("aria-expanded") !== "true";
    researchToggle.setAttribute("aria-expanded", String(expanded));
    navGroup.classList.toggle("expanded", expanded);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { navGroup.classList.remove("expanded"); researchToggle.setAttribute("aria-expanded","false"); }
  });
  const root = new URL("../", document.baseURI);
  const asset = path => new URL(path, root).href;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const out = (url, text, cls = "text-link") => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${text} <span aria-hidden="true">↗</span></a>`;
  const photo = (path, alt, cls = "", lazy = true) => `<img src="${asset(path)}" alt="${esc(alt)}" class="${cls}"${lazy ? ' loading="lazy"' : ""}>`;
  const tag = (text, gold = false) => `<span class="pill${gold ? " gold" : ""}">${text}</span>`;
  const paper = key => window.PUBLICATIONS.find(p => p.key === key);
  const paperLink = (key, text = "Read the paper") => out(paper(key).url, text);
  const sectionHead = (kicker, title, link = "", linkText = "") => `<div class="section-heading"><div><p class="eyebrow">${kicker}</p><h2>${title}</h2></div>${link ? `<a class="text-link" href="${link}">${linkText} <span aria-hidden="true">↗</span></a>` : ""}</div>`;
  const pageHead = (kicker, title, description, extra = "") => {
    const original = {
      Research: {title:"Research",excerpt:'<em><strong>The unknown</strong> is but a fog to be dispersed; <br> <strong>knowledge</strong> is the true pillar of the world.</em>'},
      Publications: {title:"Publications"},
      "Tools & visualizations": {title:"Code development"},
      Photography: {title:"Seen from the Earth",excerpt:'<em>Swipe to see more images. Stay tuned.</em>'}
    }[kicker];
    return `<div class="page-head wrap">${original?.title || title ? `<h1>${original?.title || title}</h1>` : ""}${original?.excerpt?`<p class="original-excerpt">${original.excerpt}</p>`:""}<p class="lede">${description}</p>${extra}</div>`;
  };

  function home() {
    return `<section class="home-hero">
      ${photo("fig/Sep_2025_Firenze/Firenze_DSC1415_frontpage.jpg", "Florence photographed by Lingrui Lin", "hero-scene", false)}<div class="hero-shade"></div>
      <div class="wrap hero-copy"><div class="hello-row">${photo("fig/lingrui_photo_2.png", "Lingrui Lin", "", false)}<div>Hello, I’m Lingrui.<span>Astrophysicist · Nanjing University</span></div></div>
      <h1>Welcome to my corner<br>of the Universe</h1>
      <p class="original-excerpt"><em>To know me or to define me...</em></p>
      <p>I study how cold gas moves, from molecular clouds to galaxy disks. I am curious about what connects these scales—and how that connection shapes the conditions for stars to form.</p>
      <div class="hero-actions"><a class="button outline" href="#about">About me</a><a class="button outline" href="#research">My research</a><a class="button outline" href="#gallery">My gallery</a></div></div>
      <div class="photo-caption">September 20, 2025 @ Firenze, Italy</div>
    </section>
    <div class="hero-bottom"><div class="wrap"><span><strong>Currently:</strong> PhD student at Nanjing University</span><span>Cold gas · Star formation · Galaxy dynamics</span><span>Expected PhD completion: June 2027</span></div></div>
    <section class="section wrap intro-grid"><div><p class="eyebrow">A thread through my work</p><h2>From clouds<br>to galaxies.</h2></div><div><p>Clouds assemble from the gas in a galaxy, while the stars born within them reshape their surroundings. Working on both molecular clouds and distant galaxy disks has made me increasingly interested in the physical connections between them.</p><a class="text-link" href="#research">Follow the questions <span aria-hidden="true">→</span></a></div></section>
    <section class="wrap section" style="padding-top:0">${sectionHead("Selected research", "Research", "#research", "All research")}
      <article class="research-feature"><a class="feature-image" href="#research/triceps" aria-label="Read about the TRICEPS project">${photo("assets/research/AzTEC-159-paperI-atlas.webp", "Multiwavelength observations of AzTEC-159 from TRICEPS")}</a><div class="feature-copy">${tag("Ongoing · ALMA / JWST / VLA")}
      <h3>Cold gas disks<br>in the early Universe</h3><p>I lead the kinematic analysis of TRICEPS, a survey of 16 massive star-forming galaxies at redshifts 4–5.</p><a class="text-link" href="#research/triceps">Inside TRICEPS <span aria-hidden="true">→</span></a></div></article>
      <div class="research-pair"><article class="research-teaser">${photo("fig/research/GMPMC/alpha_vir_Figure1.png", "Molecular-cloud virial parameter measurements")}<div>${tag("Nature Astronomy · 2025", true)}<h3>What supports a molecular cloud?</h3><p>Testing the balance between turbulent motions and gravity.</p><a class="text-link" href="#research/clouds">Read the story <span aria-hidden="true">→</span></a></div></article>
      <article class="research-teaser">${photo("fig/research/PKS_0529-549/CImom1_ALMAposter.jpg", "Observed atomic-carbon velocity field of PKS 0529-549")}<div>${tag("Astronomy & Astrophysics · 2025", true)}<h3>A cold disk at cosmic noon</h3><p>Resolved gas dynamics in a starburst radio galaxy.</p><a class="text-link" href="#research/cosmic-noon">Read the story <span aria-hidden="true">→</span></a></div></article></div>
    </section>
    <section class="section wrap two-col"><div><p class="eyebrow">Recently</p><h2>Recent updates</h2><div class="news-item"><time>2026</time><p>The TRICEPS survey and kinematic papers are under review at <em>Astronomy & Astrophysics</em>. <a href="#publications/review">See the manuscripts →</a></p></div><div class="news-item"><time>Oct 2026</time><p>Our coauthored study of the broad-line region in NGC 1068 has been accepted by <em>MNRAS</em>. <a href="#publications">Publication list →</a></p></div><div class="news-item"><time>Jul 2026</time><p>I shared our TRICEPS work at EAS in Lausanne and at the galaxy-dynamics workshop in Sexten.</p></div></div>
    <div><p class="eyebrow">Code development</p><h2>Tools and visualizations</h2><p class="muted" style="margin-top:24px">I build open tools for working with radio data and interactive visualizations for thinking about gas motions.</p>${photo("interactive/TRICEPS/rotvis-logo.png", "RotVis: interactive disk and merger visualization", "aside-photo")}<a class="text-link" href="#tools" style="margin-top:20px">Explore the tools <span aria-hidden="true">→</span></a></div></section>
    <section class="personal-strip"><div class="wrap personal-grid"><div><p class="eyebrow">Beyond the data</p><h2>Seen from<br>the Earth.</h2><p>A camera, a walk, a table-tennis game. There are many ways I enjoy getting to know the world, whether I am close to home or somewhere new.</p><a class="text-link" href="#gallery">Through my lens <span aria-hidden="true">↗</span></a></div><div class="personal-images"><div>${photo("fig/ganyu_seaside/A.jpeg", "The seaside in Ganyu, Lingrui's hometown")}<small>Ganyu · Home by the sea</small></div><div>${photo("fig/Aug29_2026_Rome/Rome_DSC2028 Large.jpeg", "Inside the Colosseum in Rome")}<small>Rome · August 2026</small></div></div></div></section>
    <section class="contact-section"><h2>Get in touch</h2><p>I am always happy to discuss gas dynamics, star formation, observations—or a shared curiosity.</p><div class="contact-emails"><a class="text-link" href="mailto:lingruiphd@smail.nju.edu.cn">lingruiphd@smail.nju.edu.cn <span aria-hidden="true">↗</span></a><a class="text-link" href="mailto:lingruiism@gmail.com">lingruiism@gmail.com <span aria-hidden="true">↗</span></a></div><p class="original-excerpt"><em>In the beginning, there was darkness; Until someone set themselves aflame; Only then did the Universe know light</em></p></section>`;
  }

  function research() {
    return pageHead("Research", "Following the gas<br>across scales.", "My research connects the physics of interstellar gas with the dynamics of galaxies. I use radio and millimeter observations to study molecular clouds, atomic gas, and resolved galaxy disks—from the Milky Way to the early Universe.", '<nav class="subnav" aria-label="Research projects"><a href="#research/triceps">Early galaxy disks</a><a href="#research/clouds">Molecular clouds</a><a href="#research/cosmic-noon">Cosmic noon</a><a href="#research/atomic">Atomic gas</a></nav>') + `<div class="wrap">
    <article class="project" id="project-triceps"><div class="project-grid"><div><div class="project-meta">${tag("Ongoing")}${tag("Redshift 4–5")}</div><h2>How early do<br>galaxy disks settle?</h2><p>TRICEPS—Tracing Rotation with Ionized Carbon in Early Primeval Systems—combines ALMA, JWST, and VLA observations of 16 massive galaxies at redshifts 4–5. ALMA resolves the [C II] emission and dust continuum at about 0.1 arcsecond (roughly 0.8 kpc), while JWST images trace the stars and star formation. CO observations, including VLA measurements of CO(1–0), probe the molecular gas.</p><p>I lead the analysis of the [C II] kinematics, modeling the full spectral cubes to measure rotation curves and gas velocity dispersions while accounting for the spatial and spectral resolution. This work examines how rapidly rotating gas disks formed in the early Universe and how their internal motions relate to star formation.</p><p class="role">First author of TRICEPS III; second author of the survey paper, TRICEPS I. Both manuscripts are under review at A&A. I reduced the ALMA data presented in these papers and all VLA data obtained to date.</p><div class="paper-links">${paperLink("2026arXiv260930375L", "TRICEPS I on arXiv")}<a class="text-link" href="#publications/review">Manuscripts →</a></div></div><div class="project-visual stack">${photo("assets/research/AzTEC-159-paperI-atlas.webp", "AzTEC-159 multiwavelength atlas")}${photo("assets/research/J1000-paperI-atlas.webp", "J1000+0234 multiwavelength atlas")}</div></div></article>
    <article class="project" id="project-clouds"><div class="project-grid reverse"><div><div class="project-meta">${tag("Published · 2025", true)}${tag("Milky Way & nearby dwarfs")}</div><h2>What supports<br>a molecular cloud?</h2><p>Stars form in molecular clouds, whose motions reflect the interplay of gravity, turbulence, external pressure, and magnetic fields. Understanding their dynamical state is part of understanding the conditions for star formation.</p><p>Our observations revealed inadequate turbulent support in low-metallicity molecular clouds in the outer Galaxy and nearby dwarf galaxies. The study grew from my undergraduate work through follow-up observing proposals, data reduction, and analysis.</p><p class="role">First-author study published in Nature Astronomy.</p>${paperLink("2025NatAs...9..406L")}</div><div class="project-visual">${photo("fig/research/GMPMC/alpha_vir_Figure1.png", "Cloud virial parameters from the Nature Astronomy study")}</div></div></article>
    <article class="project" id="project-cosmic-noon"><div class="project-grid"><div><div class="project-meta">${tag("Published · 2025", true)}${tag("Redshift ≈ 2.6")}</div><h2>A dynamically cold disk<br>at cosmic noon.</h2><p>PKS 0529–549 is a starburst radio galaxy with an active nucleus. I used ALMA observations of atomic carbon, [C I], to examine its gas disk, noncircular motions, rotation curve, and mass distribution.</p><p>We found a rotation-supported disk alongside coherent departures from circular motion. It shows that a dynamically cold gas disk can coexist with intense star formation and an active nucleus.</p><p class="role">First-author study published in Astronomy & Astrophysics, developed through collaborations with Carlos De Breuck and Federico Lelli.</p>${paperLink("2025A&A...693A..91L")}</div><div class="project-visual">${photo("fig/research/PKS_0529-549/PKS-plots.png", "Observed and modeled gas dynamics in PKS 0529-549")}</div></div></article>
    <article class="project" id="project-atomic"><div class="project-grid reverse"><div><div class="project-meta">${tag("Ongoing")}${tag("Galactic interstellar medium")}</div><h2>Atomic gas within<br>molecular clouds.</h2><p>H I narrow self-absorption provides a way to investigate cold atomic gas associated with molecular clouds. With FAST observations and molecular-line data, I study the atomic-to-molecular gas fraction in clouds in the Galactic outer disk.</p><p>This work brings gas dynamics and astrochemistry together. I also developed Python tools for FAST calibration and for fitting H I narrow self-absorption spectra.</p><div class="paper-links"><a class="text-link" href="#tools">Explore the pipelines →</a><a class="text-link" href="#publications">Related coauthored work →</a></div></div><div class="project-visual">${photo("fig/research/GMPMC/G37.467+2.700_HIdd.png", "H I narrow self-absorption spectral analysis")}</div></div></article>
    <section class="research-question"><p class="eyebrow">The connection I want to understand</p><h2>How does a galaxy set the conditions for its stars to form?</h2><figure class="research-banner"><a href="${asset("assets/research/galactic-dynamical-ecosystem.pdf")}" target="_blank" rel="noopener" aria-label="View the galactic dynamical ecosystem diagram at full resolution">${photo("assets/research/galactic-dynamical-ecosystem.webp","Galactic dynamical ecosystem: disk rotation, shear, and spiral or bar flows connect to gas assembly, relative cloud motions, turbulence, self-gravity, star formation, and stellar feedback.","",false)}</a></figure><p>These projects concern different systems, but they have brought me toward this common question. I am interested in how gas motions on galactic scales relate to those of smaller structures, and how those relationships connect to star formation.</p></section></div>`;
  }

  const groupNames = {first:"First-author papers",coauthor:"Coauthored papers",review:"Under review",other:"Other contributions"};
  const filterNames = {all:"All",first:"First-author",coauthor:"Coauthored",review:"Under review",other:"Other"};
  function publications(filter = "all") {
    if (!(filter in filterNames)) filter = "all";
    return pageHead("Publications", "The written record.", "Research articles, current manuscripts, and other contributions.") + `<div class="wrap"><div class="publications-top"><p class="pub-count">15 refereed / accepted papers · 3 under review</p><label><span class="sr-only">Search publications</span><input id="pub-search" class="pub-search" type="search" placeholder="Search title, author, or year…" aria-label="Search publications"></label></div><div class="filters" aria-label="Filter publications">${Object.keys(filterNames).map(k=>`<button class="filter${k===filter?" active":""}" data-pub-filter="${k}" aria-pressed="${k===filter}">${filterNames[k]}${k==="all"?"":` <span>(${window.PUBLICATIONS.filter(p=>p.group===k).length})</span>`}</button>`).join("")}</div><div id="pub-results" aria-live="polite"></div><p class="publication-note"><a class="text-link" href="${asset("CV/Lingrui_CV.pdf")}" target="_blank" rel="noopener">Download my CV ↗</a></p></div>`;
  }

  function renderPublications(filter = "all", query = "") {
    const result=document.querySelector("#pub-results"); if(!result)return;
    const filtered=window.PUBLICATIONS.filter(p=>(filter==="all"||p.group===filter)&&`${p.title} ${p.authors.join(" ")} ${p.journal} ${p.year}`.toLowerCase().includes(query.toLowerCase().trim()));
    const order=["first","coauthor","review","other"];
    result.innerHTML=filtered.length?order.map(group=>{
      const entries=filtered.filter(p=>p.group===group).sort((a,b)=>Number(b.year)-Number(a.year));if(!entries.length)return "";
      return `<section aria-label="${groupNames[group]}"><h2 class="pub-heading">${groupNames[group]}</h2>${entries.map(p=>{
        const names=p.authors.slice(0,3).map(n=>n==="Lin"?"<strong>Lin</strong>":esc(n)).join(", ")+(p.authors.length>3?" et al.":"");
        const detail=[p.volume,p.pages&&p.pages!==p.volume?p.pages:""] .filter(Boolean).join(", ");
        return `<article class="pub-row"><div class="pub-year">${esc(p.year)}</div><div><h3 class="pub-title">${esc(p.title)}</h3><p class="pub-authors">${names}</p><p class="pub-journal"><em>${esc(p.journal)}</em>${detail?`, ${esc(detail)}`:""}</p>${p.status!=="Published"?`<p class="pub-status">${esc(p.status)}</p>`:""}</div>${p.url?out(p.url,p.url.includes("arxiv.org")?"arXiv":"Paper","pub-out"):""}</article>`;
      }).join("")}</section>`;
    }).join(""):'<p class="empty">No publications match that search.</p>';
  }

  function tools() {
    const items=[
      {number:"01",type:"Interactive visualization",name:"RotVis",text:"An interactive comparison of rotating disks and mergers, with adjustable viewing geometry, beam, and velocity separation.",url:asset("interactive/TRICEPS/disk-merger-cube.html"),label:"Try RotVis",more:asset("interactive/TRICEPS/rotvis-manual.html")},
      {number:"02",type:"Interactive visualization",name:"Velocity harmonics",text:"Harmonic components of projected velocity fields, including circular rotation and radial motion.",url:asset("interactive/harmonics/index.html"),label:"Explore harmonics"},
      {number:"03",type:"Interactive visualization",name:"Power & spatial scales",text:"An interactive visualization of Fourier power, variance across spatial scales, and cumulative velocity statistics.",url:asset("interactive/power-spectrum/index.html"),label:"Explore the spectrum"},
      {number:"04",type:"Open-source data reduction",name:"FAST H I calibration",text:"My Python pipeline for calibrating FAST 19-beam H I observations, geared toward drift-scan data.",url:"https://github.com/Astronlin/NJU_FAST_ISM",label:"View on GitHub"},
      {number:"05",type:"Open-source spectral analysis",name:"HINSA fitting",text:"Tools for identifying and fitting H I narrow self-absorption with the second-derivative method and MCMC.",url:"https://github.com/Astronlin/HINSA-codes",label:"View on GitHub"}
    ];
    return pageHead("Tools & visualizations", "Ideas you can<br>interact with.", "Interactive visualizations and open-source pipelines for gas dynamics and radio astronomy.") + `<div class="wrap section"><div class="tool-spotlight">${photo("interactive/TRICEPS/rotvis-logo.png", "RotVis logo")}<div><p class="eyebrow">A place to start</p><h3>A velocity gradient is only the beginning.</h3><p>RotVis illustrates how rotating disks and interacting systems can produce similar observed velocity fields.</p>${out(items[0].url,"Open RotVis")}</div></div>${items.map(t=>`<article class="tool-row"><div class="tool-number">${t.number}</div><div><p class="tool-type">${t.type}</p><h3>${t.name}</h3><p>${t.text}</p></div><div class="tool-action">${out(t.url,t.label)}${t.more?out(t.more,"User guide"):""}</div><a class="tool-arrow" href="${esc(t.url)}" target="_blank" rel="noopener" aria-label="Open ${t.name}">↗</a></article>`).join("")}</div>`;
  }

  function about() {
    return `<div class="wrap"><section class="about-intro"><div><h1>About me</h1><p class="original-excerpt"><em>About <strong>an ever-evolving self</strong>, <br> with much left to discover...</em></p><p>你好! Hello! Ciao! Glad you're here.</p><p>I am Lingrui Lin (林令瑞), a PhD student at Nanjing University, China. I expect to complete my PhD in June 2027.</p><p>My research has taken me from molecular clouds in the Milky Way to galaxy disks in the early Universe. Although these projects concern different systems, together they have made me increasingly curious about how motions within star-forming gas connect to the galaxy as a whole. Clouds assemble from the galactic reservoir, while the stars they produce affect the surrounding gas in return.</p><p>I enjoy getting to know people and places, whether through a scientific discussion, a walk with my camera, or a game of table tennis.</p><div class="hero-actions">${out(asset("CV/Lingrui_CV.pdf"),"Download my CV","button")}<a class="text-link" href="mailto:lingruiphd@smail.nju.edu.cn">Get in touch →</a></div></div>${photo("fig/lingrui_photo_2.png","Lingrui Lin","about-portrait",false)}</section>
    <section class="section two-col" style="padding-top:15px"><div><p class="eyebrow">My academic journey</p><h2>Education and research experience</h2><div class="timeline"><div class="timeline-item"><time>2021–2027<br>expected</time><div><h3>PhD · Nanjing University</h3><p>Multiscale gas dynamics in galaxies.<br>Supervisor: Zhi-Yu Zhang.</p></div></div><div class="timeline-item"><time>2025–2026</time><div><h3>Research visit · INAF–Arcetri</h3><p>A CSC-supported visit with Federico Lelli, working on the cold-gas dynamics of TRICEPS galaxies.</p></div></div><div class="timeline-item"><time>2023 & 2026</time><div><h3>Scientific visits · ESO Garching</h3><p>A three-month Early-Career Scientific Visitor stay in 2023, hosted by Carlos De Breuck, and a return visit in May 2026.</p></div></div><div class="timeline-item"><time>2017–2021</time><div><h3>BSc · Nanjing University</h3><p>My molecular-cloud work began during my undergraduate studies. My bachelor's thesis examined atomic gas in IC 443.</p></div></div></div></div><div><p class="eyebrow">Research is a shared activity</p><h2>Beyond my own projects.</h2><ul class="service-list"><li>Organizing scientific discussions<span>Frontiers of high-redshift galaxies and the ISM · NJU, fall 2026</span></li><li>Teaching assistant<span>Interstellar Medium · spring 2024<br>Astronomical Literature—Reading and Writing · spring 2025</span></li><li>Building and sharing analysis tools<span>FAST calibration, HINSA fitting, and interactive scientific visualizations</span></li><li>Learning through collaboration<span>Research connections across Europe, East Asia, and North America</span></li></ul><a class="text-link" href="${asset("CV/Lingrui_CV.pdf")}" target="_blank" rel="noopener" style="margin-top:25px">The full academic record ↗</a></div></section>
    <section class="section two-col"><div><h2>Observing and analysis</h2><p>I have been PI of ten observing programs and have reduced spectral-line and continuum data from both single-dish telescopes and interferometers, including ALMA, VLA, NOEMA, SMA, IRAM 30-m, JCMT, SMT, GBT, FAST, and Effelsberg. My analysis includes three-dimensional disk fitting, rotation-curve mass modeling, and work with spectral cubes and velocity fields.</p><p>I reduced all ALMA data presented in TRICEPS I and III and all VLA data obtained for the project to date. I also develop and share tools for FAST H I calibration and H I narrow self-absorption fitting.</p><a class="text-link" href="#tools">Code and visualizations →</a></div><div><h2>Recent awards and training</h2><ul class="service-list"><li>Zhujian Program for Doctoral Students<span>Nanjing University · 2026–present</span></li><li>China Scholarship Council support<span>Research visit to INAF–Arcetri · September 2025–September 2026</span></li><li>National Scholarship<span>China · 2025</span></li><li>1st China Astrochemistry Summer School<span>Xiamen University · July 2025 · Poster prize</span></li><li>JWST Data and Science Summer School<span>Westlake University · July 2025 · Hands-on data-reduction training</span></li></ul></div></section>
    <section class="about-personal"><div><p class="eyebrow">Home, and the world outside</p><h2>Growing up<br>near the sea.</h2><p>I was born in Ganyu, Lianyungang, Jiangsu (江苏省连云港市赣榆区), China. Growing up near the sea meant that visits to the shore were a familiar part of being home.</p><p>I like to record the world with my camera. During my time in Florence, I also enjoyed joining a local table-tennis club. Photography and sport are parts of my life that travel with me.</p><a class="text-link" href="#gallery" style="margin-top:25px">A few things I have seen ↗</a></div><div>${photo("fig/ganyu_seaside/A.jpeg","Ganyu seaside")}<p class="about-caption">Ganyu, Jiangsu · A view from home</p></div></section></div>`;
  }

  const albums = window.GALLERY_COLLECTIONS;
  const photos = albums.flatMap(album => album.paths.map((path, index) => ({
    path, title: album.title + " · Photo " + (index + 1), place: album.title, group: album.group
  })));
  function gallery() {
    return `<section class="gallery-banner">${photo("fig/Aug29_2026_Rome/Rome_DSC2028_top.jpg","Inside the Colosseum, Rome","",false)}<div class="gallery-banner-shade"></div><div class="wrap"><h1>Seen from the Earth</h1><p><em>Swipe to see more images. Stay tuned.</em></p></div><span class="photo-caption">Inside the Colosseum (August 29, 2026, Rome)</span></section>` + pageHead("Gallery introduction", "", "Places I have lived, places I have visited, and a few moments I wanted to keep.") + `<div class="wrap"><div class="filters" aria-label="Filter photographs">${[ ["all","All"],["places","On the road"],["home","Close to home"],["sky","Looking up"],["pets","AI pets"] ].map(([k,t])=>`<button class="filter${k==="all"?" active":""}" data-gallery-filter="${k}" aria-pressed="${k==="all"}">${t}</button>`).join("")}</div><div class="gallery-albums" id="gallery-results"></div></div>`;
  }
  function petExhibition() {
    const pets = [
      {name:"Nahida", detail:"Animation showcase", file:"nahida-preview.mp4"},
      {name:"Mavuika", detail:"Walking animation showcase", file:"mavuika-walking-preview.mp4"},
      {name:"Mavuika", detail:"Motorcycle animation showcase", file:"mavuika-motorcycle-preview.mp4"}
    ];
    return `<section class="gallery-album ai-pets"><div class="album-heading"><h2>AI pets</h2></div><div class="pet-exhibitions">${pets.map(p => `<article class="pet-exhibition"><h3>${p.name}</h3><p>${p.detail}</p><video controls loop playsinline preload="metadata" aria-label="${p.name} — ${p.detail}"><source src="${asset("assets/gallery/ai-pets/" + p.file)}" type="video/mp4"></video></article>`).join("")}</div><p class="pet-credit">AI-generated fan animations · Genshin Impact character designs © HoYoverse.</p></section>`;
  }
  function renderGallery(filter="all") {
    let offset = 0;
    document.querySelector("#gallery-results").innerHTML = albums.map((album, index) => {
      const first = offset; offset += album.paths.length;
      if (filter !== "all" && album.group !== filter) return "";
      return `<section class="gallery-album"><div class="album-heading"><h2>${esc(album.title)}</h2><div class="album-controls"><button data-scroll-row="${index}" data-direction="-1" aria-label="Previous photos in ${esc(album.title)}">←</button><button data-scroll-row="${index}" data-direction="1" aria-label="Next photos in ${esc(album.title)}">→</button></div></div><div class="scroll-row" id="photo-row-${index}" tabindex="0" role="region" aria-label="${esc(album.title)} — scrollable photographs">${album.paths.map((path, i) => `<button class="scroll-photo" data-photo="${first + i}" aria-label="Enlarge ${esc(album.title)} photo ${i + 1}">${photo(path, album.title + " · Photo " + (i + 1))}</button>`).join("")}</div></section>`;
    }).join("") + (filter === "all" || filter === "pets" ? petExhibition() : "");
  }

  let currentFilter="all";
  let initial=true;
  function render() {
    const [page="home",sub=""]=(location.hash.slice(1)||"home").split("/");
    const pages={home,research,publications,tools,about,gallery};
    if(!pages[page]){main.innerHTML='<div class="wrap not-found"><h1>Page not found.</h1><p><a class="text-link" href="#home">Return home →</a></p></div>';return;}
    currentFilter=page==="publications"&&sub in filterNames?sub:"all";
    main.innerHTML=pages[page](currentFilter);
    document.title=`${page==="home"?"My corner of the Universe":page[0].toUpperCase()+page.slice(1)} — Lingrui Lin`;
    document.querySelectorAll("[data-page]").forEach(a=>{a.removeAttribute("aria-current");if(a.dataset.page===page)a.setAttribute("aria-current","page");});
    navGroup.classList.toggle("research-active", ["research","publications","tools"].includes(page));
    navGroup.classList.remove("expanded"); researchToggle.setAttribute("aria-expanded","false");
    document.querySelector("#main-nav").classList.remove("open");document.querySelector(".menu-toggle").setAttribute("aria-expanded","false");
    if(page==="publications")renderPublications(currentFilter);
    if(page==="gallery")renderGallery();
    if(!initial)main.focus({preventScroll:true});initial=false;
    window.scrollTo({top:0,behavior:"instant"});
    if(page==="research"&&sub)requestAnimationFrame(()=>document.getElementById(`project-${sub}`)?.scrollIntoView({behavior:"instant",block:"start"}));
  }
  document.querySelector(".menu-toggle").addEventListener("click",e=>{const b=e.currentTarget;const opened=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!opened));document.querySelector("#main-nav").classList.toggle("open",!opened);});
  main.addEventListener("input",e=>{if(e.target.id==="pub-search")renderPublications(currentFilter,e.target.value);});
  main.addEventListener("click",e=>{
    const filter=e.target.closest("[data-pub-filter]");
    if(filter){currentFilter=filter.dataset.pubFilter;document.querySelectorAll("[data-pub-filter]").forEach(b=>{b.classList.toggle("active",b===filter);b.setAttribute("aria-pressed",String(b===filter));});renderPublications(currentFilter,document.querySelector("#pub-search").value);}
    const galleryFilter=e.target.closest("[data-gallery-filter]");
    if(galleryFilter){document.querySelectorAll("[data-gallery-filter]").forEach(b=>{b.classList.toggle("active",b===galleryFilter);b.setAttribute("aria-pressed",String(b===galleryFilter));});renderGallery(galleryFilter.dataset.galleryFilter);}
    const scrollButton = e.target.closest("[data-scroll-row]");
    if (scrollButton) {
      const row = document.getElementById("photo-row-" + scrollButton.dataset.scrollRow);
      row.scrollBy({left: Number(scrollButton.dataset.direction) * row.clientWidth * 0.8, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
    }
    const photoButton=e.target.closest("[data-photo]");
    if(photoButton){const p=photos[Number(photoButton.dataset.photo)];const d=document.querySelector("#photo-dialog");const img=d.querySelector("img");img.src=asset(p.path);img.alt=p.title+" — "+p.place;d.querySelector("p").textContent=p.place;d.showModal();}
  });
  const dialog=document.querySelector("#photo-dialog");dialog.querySelector("button").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
  window.addEventListener("hashchange",render);render();
})();
