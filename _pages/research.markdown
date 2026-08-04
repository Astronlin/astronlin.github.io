---
layout: single
title: "Research"
# classes: wide
#excerpt: "See it and try to understand it..."
excerpt: "***The unknown** is but a fog to be dispersed; <br> **knowledge** is the true pillar of the world.*"
permalink: /research/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /fig/research/header.jpg
toc: true
toc_label: "Research"
toc_icon: "star"
toc_sticky: true
author_profile: true
---
My Ph.D. research mainly focuses on the **kinematics** (how objects move) and
**dynamics** (how motions change) of the interstellar gas across multiple
physical scales -- from molecular clouds to galaxy disks, and across cosmic time
-- from the Milky Way to early galaxies. I am also interested in the physics of
the **interstellar medium**, which is essential for proper interpretations of
the observations. You may refer to my
[ORCID](https://orcid.org/0000-0002-2231-8381) for my publications.

I have extensive experience in reducing and analyzing radio, millimeter, and
sub-millimeter observations from both single dish telescopes and
interferometers. 

<!--
<a href="#ongoing-works" class="btn btn--success"> Ongoing works </a>
<a href="#published-works" class="btn btn--primary"> Published works </a>
-->
---

# Ongoing works
{: #ongoing-works}


## Cold gas kinematics of high redshift massive galaxies

![TRICEPS](/fig/research/TRICEPS/logo.png){: .align-center width="600"}

I am currently collaborating with [Dr. Federico
Lelli](https://www.lellifederico.com/) at the Arcetri Astrophysical Observatory
(INAF) in Florence, Italy. Our TRICEPS project studies the cold gas dynamics of
massive galaxies at redshift $z=4-5$ using ALMA, VLA, and JWST observations.

We aim to understand **how galaxies form and evolve in the early Universe**, 
when the Universe was less than 10% of its current age.

**Manuscript to be submitted.** 

### Multi-wavelength atlas

![AzTEC](/fig/research/TRICEPS/AzTEC-159_atlas_multiwave.jpg){: width="48%"}
![J1000](/fig/research/TRICEPS/J1000+0234_atlas_multiwave.jpg){: width="48%"}

### Rotating disk modeling

<!--![Modeling](/fig/research/TRICEPS/J1000+0234_atlas.jpg)-->
<p> <a href="/interactive/TRICEPS/chan_maps/chan_map_gif.html" target="_blank" rel="noopener noreferrer" > See the amazing plots ↗ </a> </p>

<!--
<iframe
  src="/interactive/TRICEPS/chan_maps/chan_map_gif.html"
  title="Animated [CII] channel maps"
  loading="lazy"
  style="display:block; width:100%; height:780px; border:0; "
></iframe>
-->

### Interative: Can a merger mimic a rotating disk?

A coherent velocity gradient in a spectral cube does not uniquely demonstrate
circular rotation. Two interacting components can blend spatially and
spectrally, producing disk-like moment maps, position--velocity diagrams, and
an apparently high $V_{\rm rot}/\sigma$. Use the controls below to explore how
beam smearing and the components' velocity separation affect this degeneracy.

<p> <a href="/interactive/TRICEPS/disk-merger-cube.html" target="_blank" rel="noopener noreferrer" > Open the interactive rotating-disk versus merger comparison ↗ </a> </p>

<iframe
  src="/interactive/TRICEPS/disk-merger-cube.html"
  title="Interactive comparison of a rotating disk and a two-component merger"
  sandbox="allow-scripts"
  referrerpolicy="no-referrer"
  loading="lazy"
  scrolling="no"
  style="display:block;width:100%;height:300px;border:0;margin:1.5rem 0;"
></iframe>




## HI fraction of the Galactic outer disk molecular clouds

The HI narrow line self-absorption (HINSA) provides a powerful method for measuring the HI content in molecular
clouds. Together with molecular gas observations, we are attempting to measure
the HI/H2 fraction of low metallicity molecular clouds in the Galactic outer
disk.

![HINSA](/fig/research/GMPMC/G37.467+2.700_HIdd.png){: width="300"}

**Analysis in progress**

---

# Published works
{: #published-works}


## Inadequate turbulent support in low-metallicity molecular clouds

The dynamic properties of molecular clouds are governed by self-gravity,
turbulence, external pressure, and magnetic fields.  Using optically thin
$^{13}$CO observations of low-metallicity molecular clouds in the Galactic
outer disk, we find that cloud virial parameters decrease with metallicity,
suggesting that turbulence alone cannot support clouds against gravity.

**Highlight:**  
Evidence for metallicity-dependent star formation initial conditions.

**Implication:**  
Understanding star formation in the low-metallicity early Universe.

**Status:**  
Published in *Nature Astronomy*. [Read the paper](https://www.nature.com/articles/s41550-024-02440-3)

![Virial parameter](/fig/research/GMPMC/alpha_vir_Figure1.png)


## Gas dynamics of an AGN-host galaxy at cosmic noon

We present ALMA \[CI\] (2–1) observations of PKS 0529–549, a starburst radio
galaxy at $z\simeq2.6$. We reveal a rotation-supported gas disk with $V_{\rm
rot}/\sigma_{\rm v} = 6\pm3$ and visible non-circular motions.

**Highlight:**  
A dynamically cold gas disk in an AGN-host starburst galaxy.

**Implication:**  
Early galaxy disks can remain dynamically cold in extreme conditions.

**Status:**  
Published in *Astronomy & Astrophysics*. [Read the paper](https://www.aanda.org/articles/aa/full_html/2025/01/aa50814-24/aa50814-24.html)

![PKS](/fig/research/PKS_0529-549/PKS-plots.png)

---

# Code development 


## FAST data calibration 
- A Python-based pipeline for FAST data reduction (geared towards the Drift Scan mode). [Github](https://github.com/Astronlin/NJU_FAST_ISM)


## HINSA identification
- A Python implementation of the second-derivative method (Krčo et al. 2008) and MCMC. [Github](https://github.com/Astronlin/HINSA-codes)

---

# Other interests
- The Galactic High Velocity Clouds
- SNR IC 443
- ...
