/* Chinese edition: write naturally for Chinese readers, not sentence by sentence.
   English keys locate source text; Chinese prose may use a different narrative order.
   Preserve scientific qualifications, publication titles, and original game quotations. */
(() => {
  "use strict";
  const zh = {
    "Skip to content":"跳转到正文", "Main navigation":"主导航", "Home":"首页", "Research":"科研", "Overview":"研究概览", "Publications":"论文", "Tools":"工具", "About":"关于我", "Gallery":"相册", "Menu":"菜单", "Show research menu":"展开科研菜单", "CV":"简历", "Email":"邮箱", "Nanjing, China":"中国南京", "Dark":"深色", "Light":"浅色", "Switch to dark theme":"切换为深色主题", "Switch to light theme":"切换为浅色主题",
    "Hello, I’m Lingrui.":"你好，我是林令瑞。", "Astrophysicist · Nanjing University":"天文学博士生 · 南京大学", "Welcome to my corner":"欢迎来到我的", "of the Universe":"宇宙一隅", "To know me or to define me...":"认识我，或是定义我……", "About me":"关于我", "My research":"我的研究", "My gallery":"我的相册", "September 20, 2025 @ Firenze, Italy":"2025年9月20日 · 意大利佛罗伦萨", "Currently:":"目前：", "PhD student at Nanjing University":"南京大学博士研究生", "Cold gas · Star formation · Galaxy dynamics":"冷气体 · 恒星形成 · 星系动力学", "Expected PhD completion: June 2027":"预计于2027年6月博士毕业",
    "I study how cold gas moves, from molecular clouds to galaxy disks. I am curious about what connects these scales — and how that connection shapes the conditions for stars to form.":"我主要研究星系中的冷气体运动。我想知道，从分子云到整个星系盘，不同尺度上的气体运动如何相互关联，又怎样影响恒星形成。",
    "A thread through my work":"贯穿研究的一条线索", "From clouds":"从分子云", "to galaxies.":"到星系", "Follow the questions":"沿着问题继续", "Selected research":"研究选摘", "All research":"全部研究", "Ongoing · ALMA / JWST / VLA":"进行中 · ALMA / JWST / VLA", "Cold gas disks":"早期宇宙中的", "in the early Universe":"冷气体盘", "Inside TRICEPS":"走近 TRICEPS", "What supports a molecular cloud?":"是什么支撑着分子云？", "Read the story":"了解这项研究", "A cold disk at cosmic noon":"宇宙正午的冷气体盘", "Resolved gas dynamics in a starburst radio galaxy.":"研究一个恒星暴射电星系中气体的运动。", "Examining the balance between turbulent motions and gravity.":"研究湍流运动与引力之间的平衡。",
    "Clouds assemble from the gas in a galaxy, while the stars born within them reshape their surroundings. Working on both molecular clouds and distant galaxy disks has made me increasingly interested in the physical connections between them.":"恒星在分子云中诞生。分子云由星系中的气体汇聚而成，新生恒星又会影响周围的气体。从银河系中的分子云到遥远的星系盘，研究这些不同的天体让我越来越想了解它们之间的联系。",
    "I lead the kinematic analysis of TRICEPS, a survey of 16 massive star-forming galaxies at redshifts 4–5.":"TRICEPS 巡天观测了16个红移为4–5、恒星形成活跃的大质量星系。我负责研究这些星系中气体的运动。",
    "Recently":"近况", "Recent updates":"最近动态", "Oct 2026":"2026年10月", "Jul 2026":"2026年7月", "The TRICEPS survey and kinematic papers are under review at":"TRICEPS 巡天论文和运动学论文正在", ".":"。", "See the manuscripts →":"查看稿件 →", "Our coauthored study of the broad-line region in NGC 1068 has been published in":"我参与的 NGC 1068 宽线区研究已发表于", "Publication list →":"论文列表 →", "I shared our TRICEPS work at EAS in Lausanne and at the galaxy-dynamics workshop in Sexten.":"我在洛桑的欧洲天文学年会（EAS）和塞斯托的星系动力学研讨会上介绍了 TRICEPS 的研究。",
    "Code development":"代码开发", "Tools and visualizations":"工具与可视化", "Explore the tools":"查看工具", "Beyond academia":"科研之外", "Seen from":"从地球", "the Earth.":"看世界", "Through my lens":"透过我的镜头", "Ganyu · Home by the sea":"赣榆 · 海边的家乡", "Rome · August 2026":"罗马 · 2026年8月", "A camera, a walk. There are many ways I enjoy getting to know the world, whether I am close to home or somewhere new.":"带着相机，四处走走。无论是在家附近，还是来到陌生的地方，我都喜欢用自己的方式认识这个世界。", "Get in touch":"联系我", "I am always happy to discuss research or share a curiosity.":"很乐意与你交流，聊聊我们共同好奇的事情。",
    // Genshin Impact, Natlan Archon Quest: 当一切镌刻成碑.
    // https://wiki.biligame.com/ys/当一切镌刻成碑
    "In the beginning, there was darkness; Until someone set themselves aflame; Only then did the Universe know light":"星海幽暗，孤寂无垠，直到有人点燃了自我，宇宙才拥有最初的光。",
    // Genshin Impact, Sandrone: retain the Chinese game wording, not a back-translation.
    // https://www.bilibili.com/opus/1113997972678377490
    "The unknown":"未知", "is but a fog to be dispersed;":"不过是挥之而去的迷雾，而", "knowledge":"知识", "is the true pillar of the world.":"才是世界的基石。",
    "My research connects the physics of interstellar gas with the dynamics of galaxies. I use radio and (sub-)millimeter observations to study molecular clouds, atomic gas, and resolved galaxy disks—from the Milky Way to the early Universe.":"我主要利用射电、毫米和亚毫米波观测，研究星际气体和星系动力学。我的研究对象包括银河系中的分子云和原子气体，也包括早期宇宙中的星系盘。我想了解不同尺度上的气体运动，以及它们与恒星形成的关系。",
    "Research projects":"研究课题", "Early galaxy disks":"早期星系盘", "Molecular clouds":"分子云", "Cosmic noon":"宇宙正午", "Atomic gas":"原子气体", "Ongoing":"进行中", "Redshift 4–5":"红移4–5", "How early do":"星系盘在多早", "galaxy disks settle?":"就能形成有序运动？",
    "TRICEPS — Tracing Resolved Ionized Carbon Emission in Primeval Systems — combines ALMA, JWST, and VLA observations of 16 massive galaxies at redshifts 4–5. ALMA resolves the [C II] emission and dust continuum at about 0.8 kpc, while multi-band JWST images trace the stars and star formation. CO observations, including VLA measurements of CO(1–0), probe the molecular gas.":"TRICEPS 巡天结合 ALMA、JWST 和 VLA 的观测，研究16个红移为4–5的大质量星系。ALMA 观测的 [C II] 谱线和尘埃连续谱可以分辨约0.8千秒差距的结构；JWST 图像揭示恒星分布和恒星形成活动；CO 谱线则帮助我们研究分子气体，其中包括 VLA 观测的 CO(1–0) 谱线。TRICEPS 的全称是 Tracing Resolved Ionized Carbon Emission in Primeval Systems。",
    "The survey reveals rotating gas disks throughout the sample, including galaxies with signs of tidal interaction. I lead the kinematic analysis, which finds that rotation provides most of the support against gravity despite the galaxies’ intense star formation. Their high rotation speeds and central mass concentrations suggest that the inner structures of massive galaxies were already established within the first 1.5 billion years of cosmic history.":"我们在样本中的所有星系里都发现了旋转的气体盘，其中一些星系还有潮汐相互作用的迹象。我负责的运动学分析表明，尽管这些星系的恒星形成十分剧烈，气体盘仍主要由旋转支撑。较高的旋转速度和集中的中心质量分布表明，这些大质量星系的内部结构可能在宇宙最初的15亿年里就已建立。",
    "We also find relationships between gas velocity dispersion and tracers of star formation. Comparisons with models are consistent with stellar feedback supplying the energy needed to maintain the gas motions. I am now developing mass models to study how gas, stars, and dark matter contribute to these galaxies’ gravitational potentials.":"我们还发现，气体速度弥散与恒星形成示踪量之间存在关联。与理论模型的比较表明，恒星反馈可以为气体运动提供所需的能量。目前，我正在构建质量模型，研究气体、恒星和暗物质对这些星系引力势的贡献。",
    "First author of TRICEPS III; second author of the survey paper, TRICEPS I. Both manuscripts are under review at Astronomy & Astrophysics.":"TRICEPS III 的第一作者，巡天论文 TRICEPS I 的第二作者。两篇稿件均在 Astronomy & Astrophysics 审稿中。", "TRICEPS I on arXiv":"TRICEPS I · arXiv", "Manuscripts →":"稿件 →", "Read the paper":"阅读论文", "Published · 2025":"已发表 · 2025年", "Milky Way & nearby dwarfs":"银河系与近邻矮星系", "What supports":"是什么支撑着", "a molecular cloud?":"分子云？",
    "Stars form in molecular clouds, whose motions reflect the interplay of gravity, turbulence, external pressure, and magnetic fields. Understanding their dynamical state helps us understand the conditions in which stars form.":"恒星在分子云中诞生。云中的运动受到引力、湍流、磁场和外部压力等多种作用的影响。理解分子云的动力学状态，也有助于理解恒星形成的条件。",
    "Our observations show that turbulence alone cannot balance self-gravity in many clouds in the outer Galaxy and nearby dwarf galaxies. This challenges the common picture of a balance between turbulent and gravitational energies. Magnetic fields may provide additional support.":"人们通常认为，分子云中的湍流动能与自引力能大致相当。但我们发现，银河系外盘和近邻矮星系的许多分子云中，仅靠湍流不足以抵抗自引力。磁场可能提供额外的支撑。",
    "We also considered how weaker turbulence injection from galactic rotation and stellar feedback could contribute to the low cloud velocity dispersions in the outer Galaxy. The study began during my undergraduate years and grew through follow-up observing proposals and analysis. It drew my attention to how the wider galactic environment relates to the conditions within star-forming clouds.":"这项研究始于本科期间，后来通过申请新的观测、分析数据逐步发展成论文。对于银河系外盘分子云中较弱的气体运动，我们也讨论了星系旋转和恒星反馈提供的湍流能量较少这一可能性。这让我更想了解分子云的状态与其所处的星系环境之间有怎样的联系。",
    "First-author study published in Nature Astronomy.":"第一作者论文，发表于 Nature Astronomy。", "Redshift ≈ 2.6":"红移约2.6", "A dynamically cold disk":"宇宙正午的", "at cosmic noon.":"低湍流星系盘",
    "PKS 0529–549 is a starburst radio galaxy with an active galactic nucleus. I used ALMA observations of atomic carbon, [C I], to study the motions of its molecular gas and the mass distribution of the galaxy.":"PKS 0529–549 位于红移约2.6的宇宙正午时期，是一个恒星形成剧烈、同时具有活动星系核的射电星系。我利用 ALMA 观测到的中性碳 [C I] 谱线，研究它的分子气体如何运动，以及这些运动所反映的质量分布。",
    "We found a rotation-supported disk alongside gas tails and an anomalous kinematic structure near the center. Regular rotation can therefore coexist with noncircular motions, intense star formation, and an active nucleus. The tails may reflect a past interaction, although their origin remains uncertain.":"它的气体整体上形成了一个由旋转支撑的盘，但并不处处平静：盘外有气体尾，中心附近也存在异常运动结构。这些气体尾可能留下了过去相互作用的痕迹，起源尚待确认。这个星系说明，有序旋转并不意味着没有扰动，也不排斥剧烈的恒星形成和星系核活动。",
    "The rotation curve also places limits on the gas and stellar masses that disagree with estimates based on standard methods. These discrepancies show how gas dynamics can independently test our interpretation of a galaxy’s gas and stars. They also illustrate why the dark-matter content is difficult to constrain without better knowledge of the baryonic mass.":"旋转曲线对气体和恒星质量给出的限制，与常用方法得到的估计并不一致。气体动力学因此提供了一种独立的检验；而在气体和恒星的质量尚不确定时，暗物质的贡献也难以准确确定。",
    "First-author study published in Astronomy & Astrophysics, developed through collaborations with Carlos De Breuck and Federico Lelli.":"第一作者论文，发表于 Astronomy & Astrophysics，与 Carlos De Breuck 和 Federico Lelli 合作完成。", "Galactic interstellar medium":"银河系星际介质", "Atomic gas within molecular clouds.":"分子云中的原子气体",
    "H I narrow self-absorption (HINSA) provides a way to measure the cold atomic gas within molecular clouds. With FAST observations and molecular-line data, I study the atomic-to-molecular gas fraction in clouds in the Galactic outer disk.":"分子云里也有原子气体。我利用 FAST 观测和分子谱线数据，研究银河系外盘分子云中原子氢与分子氢的比例。这里用到的 H I 窄线自吸收（HINSA），能够帮助我们测量混在分子云中的冷原子气体。",
    "This work brings gas kinematics and astrochemistry together. I also developed Python tools for calibrating FAST data and for fitting HINSA spectra.":"这项研究将气体运动学与天体化学联系起来。我也开发了用于 FAST 数据定标和 HINSA 谱线拟合的 Python 工具。", "Explore the pipelines →":"查看处理程序 →", "Related coauthored work →":"相关合作论文 →", "What I want to understand in the near future":"接下来想理解的问题", "How does a galaxy set the conditions":"星系如何决定", "for its local star formation?":"局部恒星形成的条件？",
    "These projects have brought me to a common question: how do gas motions on galactic scales relate to those of smaller structures, and how are they connected to star formation?":"这些研究虽然涉及不同的天体，却让我想到了同一个问题：星系尺度上的气体运动与较小结构中的气体运动有什么联系？这些联系又与恒星形成有什么关系？",
    "Research articles, current manuscripts, and other contributions.":"研究论文、在审稿件及其他学术成果。", "15 refereed / accepted papers · 4 submitted / under review":"15篇已发表或接收的同行评审论文 · 4篇已投稿或在审", "First-author papers":"第一作者论文", "Coauthored papers":"合作论文", "Under review":"审稿中", "Submitted / under review":"已投稿或在审", "Submitted":"已投稿", "Lin (fourth author)":"Lin（第四作者）", "Other contributions":"其他成果", "All":"全部", "First-author":"第一作者", "Coauthored":"合作论文", "Other":"其他", "Search publications":"搜索论文", "Search title, author, or year…":"搜索标题、作者或年份……", "Filter publications":"筛选论文", "No publications match that search.":"没有找到符合条件的论文。", "Paper":"论文", "Accepted":"已接收", "Download my CV":"下载简历",
    "Interactive visualizations and open-source pipelines for gas dynamics and radio astronomy.":"气体动力学与射电天文学的交互式可视化和开源处理程序。", "A place to start":"从这里开始", "A velocity gradient is only the beginning.":"速度梯度，只是起点。", "RotVis illustrates how rotating disks and interacting systems can produce similar observed velocity fields.":"RotVis 展示了旋转盘和相互作用系统如何产生相似的观测速度场。", "Interactive visualization":"交互式可视化", "Open RotVis":"打开 RotVis", "Try RotVis":"体验 RotVis", "User guide":"使用说明", "Velocity harmonics":"速度场谐波", "Explore harmonics":"查看谐波", "Power & spatial scales":"功率谱与空间尺度", "Explore the spectrum":"查看功率谱", "Open-source data reduction":"开源数据处理", "Open-source spectral analysis":"开源谱线分析", "FAST H I calibration":"FAST H I 数据定标", "HINSA fitting":"HINSA 拟合", "View on GitHub":"在 GitHub 查看",
    "An interactive comparison of rotating disks and mergers, with adjustable viewing geometry, beam, and velocity separation.":"通过交互式模型比较旋转盘和并合系统，可以调节观测视角、波束大小和速度差。", "Harmonic components of projected velocity fields, including circular rotation and radial motion.":"投影速度场的谐波分量，包括圆周旋转和径向运动。", "An interactive visualization of Fourier power, variance across spatial scales, and cumulative velocity statistics.":"交互式展示傅里叶功率、不同空间尺度上的方差以及累积速度统计量。", "My Python pipeline for calibrating FAST 19-beam H I observations, geared toward drift-scan data.":"我开发的 FAST 19波束 H I 观测定标程序，主要面向漂移扫描数据。", "Tools for identifying and fitting H I narrow self-absorption with the second-derivative method and MCMC.":"使用二阶导数方法和 MCMC 识别、拟合 H I 窄线自吸收的工具。",
    "About":"关于我", "an ever-evolving self":"不断变化的自己", ",":"，", "with much left to discover...":"还有许多有待发现……", "你好! Hello! Ciao! Glad you're here.":"你好！Hello! Ciao! 很高兴你来到这里。", "I am Lingrui Lin (林令瑞), a PhD student at Nanjing University, China. I expect to complete my PhD in June 2027.":"我是林令瑞，南京大学天文学博士研究生，预计于2027年6月毕业。",
    "My research has taken me from molecular clouds in the Milky Way to galaxy disks in the early Universe. Although these projects concern different systems, together they have made me increasingly curious about how motions within star-forming gas connect to the galaxy as a whole. Clouds assemble from the galactic reservoir, while the stars they produce affect the surrounding gas in return.":"我的研究从银河系中的分子云延伸到了早期宇宙的星系盘。这些天体虽然不同，却让我对同一个问题越来越感兴趣：孕育恒星的气体与整个星系之间有什么联系？分子云由星系中的气体汇聚而成，云中新生的恒星又会影响周围的环境。我希望进一步理解这些过程之间的联系。",
    "I enjoy getting to know people and places, whether through a scientific discussion, a walk with my camera, or a game of table tennis.":"我喜欢认识不同的人、去不同的地方。无论是讨论科研问题、带着相机散步，还是打一场乒乓球，都能让我从中收获乐趣。", "Get in touch →":"联系我 →", "My academic journey":"我的学术经历", "Education and research":"教育与研究经历", "PhD · Nanjing University":"博士研究生 · 南京大学", "expected":"预计毕业", "Multiscale gas dynamics in galaxies.":"星系中的多尺度气体动力学。", "Supervisor: Zhi-Yu Zhang.":"导师：张智昱。", "Research visit · INAF–Arcetri":"访问研究 · INAF–Arcetri", "A CSC-supported visit with Federico Lelli, working on the cold-gas dynamics of TRICEPS galaxies.":"获国家留学基金委资助，赴意大利与 Federico Lelli 合作，研究 TRICEPS 星系的冷气体动力学。", "Scientific visits · ESO Garching":"学术访问 · ESO Garching", "A three-month Early-Career Scientific Visitor stay in 2023, hosted by Carlos De Breuck, and a return visit in May 2026.":"2023年参加 ESO 青年科研访问项目，在 Carlos De Breuck 的接待下工作了三个月；2026年5月再次访问。", "BSc · Nanjing University":"本科 · 南京大学", "My molecular-cloud work began during my undergraduate studies. My bachelor's thesis examined atomic gas in IC 443.":"本科期间开始研究分子云，毕业论文研究的是超新星遗迹 IC 443 中的原子气体。",
    "Research is a shared activity":"与人合作", "Beyond my own projects.":"课题之外", "Organizing scientific discussions":"组织学术讨论", "Frontiers of high-redshift galaxies and the ISM · NJU, fall 2026":"高红移星系与星际介质前沿讨论 · 南京大学，2026年秋", "Teaching assistant":"课程助教", "Interstellar Medium · spring 2024":"星际介质 · 2024年春", "Astronomical Literature—Reading and Writing · spring 2025":"天文文献阅读与写作 · 2025年春", "Building and sharing analysis tools":"开发与分享分析工具", "FAST calibration, HINSA fitting, and interactive scientific visualizations":"FAST 定标、HINSA 拟合与交互式科学可视化", "Learning through collaboration":"在合作中学习", "Research connections across Europe, East Asia, and North America":"与欧洲、东亚和北美研究者合作", "The full academic record ↗":"完整学术简历 ↗", "As an astronomer":"我的科研工作",
    "My research is based mainly on radio and millimeter observations. I have led ten observing programs and worked with data from both single-dish telescopes and interferometers. I am experienced in taking a project from the observing proposal through data reduction and analysis to publication.":"我的研究主要基于射电和毫米波观测。我曾主持十项观测项目，处理过单天线望远镜和干涉阵的数据，也有从观测申请、数据处理与分析一直到论文发表的完整研究经历。",
    "For TRICEPS, I reduced all ALMA data presented in the survey and kinematic papers, as well as all VLA data obtained for the project to date. I also develop and share software for analyzing radio observations and interactive visualizations of gas motions.":"在 TRICEPS 中，我处理了巡天论文和运动学论文使用的全部 ALMA 数据，以及该项目截至目前取得的全部 VLA 数据。我也开发并分享射电观测分析软件和气体运动的交互式可视化工具。", "Code and visualizations →":"代码与可视化 →", "Recent awards and training":"近期奖励与培训", "Zhujian Program for Doctoral Students":"博士生铸剑计划", "Nanjing University · 2026–present":"南京大学 · 2026年至今", "China Scholarship Council support":"国家留学基金委资助", "Research visit to INAF–Arcetri · September 2025–September 2026":"INAF–Arcetri 访问研究 · 2025年9月—2026年9月", "National Scholarship":"国家奖学金", "China · 2025":"中国 · 2025年", "1st China Astrochemistry Summer School":"首届中国天体化学暑期学校", "Xiamen University · July 2025 · Poster prize":"厦门大学 · 2025年7月 · 海报奖", "JWST Data and Science Summer School":"JWST 数据与科学暑期学校", "Westlake University · July 2025 · Hands-on data-reduction training":"西湖大学 · 2025年7月 · 数据处理实践培训",
    "Home, and the world outside":"家乡，与外面的世界", "Growing up":"在海边", "near the sea.":"长大", "I was born in Ganyu, Lianyungang, Jiangsu (江苏省连云港市赣榆区), China, and grew up near the sea.":"我出生于江苏省连云港市赣榆区。在海边长大，去海边走走便成了家乡生活中熟悉的一部分。", "I like to record the world with my camera, both close to home and when traveling.":"无论在家附近还是旅行途中，我都喜欢用相机记录这个世界。", "A few things I have seen ↗":"我见过的一些风景 ↗", "Ganyu, Jiangsu · A view from home":"江苏赣榆 · 家乡的风景", "Ping-pong":"乒乓球", "My favorite sport is table tennis (ping-pong, 乒乓球). During my time in Florence, I enjoyed playing at the":"我最喜欢的运动是乒乓球。在佛罗伦萨期间，我也常去", "local table-tennis club ↗":"当地的乒乓球俱乐部打球 ↗", "Nanjing":"南京", "Florence":"佛罗伦萨",
    "Seen from the Earth":"从地球看世界", "Swipe to see more photographs.":"滑动查看更多照片。", "Inside the Colosseum (August 29, 2026, Rome)":"罗马斗兽场内部（2026年8月29日）", "Places I have lived, places I have visited, and a few moments I wanted to keep.":"住过的地方，走过的地方，以及一些想留下来的瞬间。", "Filter photographs":"筛选照片", "On the road":"在路上", "Close to home":"家乡附近", "Looking up":"仰望星空", "AI pets":"AI 宠物", "Nahida":"纳西妲", "Mavuika":"玛薇卡", "Animation showcase":"动画展示", "Motorcycle animation showcase":"摩托车动画展示", "AI-generated fan animations · Genshin Impact character designs © HoYoverse.":"AI 生成的同人动画 ·《原神》角色设计 © HoYoverse。", "Close ×":"关闭 ×", "Photo viewer":"照片查看器", "Close photo":"关闭照片",
    "August 29, 2026 · Rome, Italy":"2026年8月29日 · 意大利罗马", "July 2026 · Sesto, Italy":"2026年7月 · 意大利塞斯托", "June-July 2026 · Lausanne, Switzerland":"2026年6—7月 · 瑞士洛桑", "May 2026 · Grenoble · Sisteron · Gap, France":"2026年5月 · 法国格勒诺布尔、锡斯特龙、加普", "September 2025 · Florence, Italy":"2025年9月 · 意大利佛罗伦萨", "December 2023 · Munich Citywalk":"2023年12月 · 漫步慕尼黑", "Interlaken, Switzerland":"瑞士因特拉肯", "Hiking (somewhere in Germany)":"徒步（德国某处）", "Nanjing Downtown":"南京城区", "Nanjing University":"南京大学", "Chinese New Year 2024":"2024年春节", "Ganyu Seaside":"赣榆海边", "Starry Night":"星夜", "Page not found.":"页面未找到。", "Return home →":"返回首页 →"
  };
  Object.assign(zh, {
    "The TRICEPS survey and kinematic papers are under review at":"TRICEPS 巡天论文和运动学论文均在审，投稿期刊为",
    "Scientific commentary":"科学评论", "Conference poster":"会议海报", "Download my CV ↗":"下载简历 ↗",
    "an ever-evolving self":"不断成长的自己",
    "with much left to discover...":"还有许多值得探索的事……",
    "A thread through my work":"研究中的一条线索", "Follow the questions":"看看我在研究什么",
    "Selected research":"一些研究工作", "Read the story":"了解这项研究",
    "How early do":"早期宇宙中的", "galaxy disks settle?":"星系盘何时变得有序？",
    "What I want to understand in the near future":"我还想继续追问",
    "How does a galaxy set the conditions":"星系中的运动如何影响", "for its local star formation?":"恒星诞生的条件？",
    "A camera, a walk. There are many ways I enjoy getting to know the world, whether I am close to home or somewhere new.":"带着相机出门走走，是我认识世界的另一种方式。家附近的海岸、旅途中的街道，都有值得停下来看的风景。",
    "I am always happy to discuss research or share a curiosity.":"如果你想交流科研问题，或是有共同感兴趣的话题，欢迎给我写信。",
    "Our coauthored study of the broad-line region in NGC 1068 has been published in":"我参与的 NGC 1068 宽线区研究已发表于",
    "I was born in Ganyu, Lianyungang, Jiangsu (江苏省连云港市赣榆区), China, and grew up near the sea.":"我出生在江苏省连云港市赣榆区，从小在海边长大。",
    "I like to record the world with my camera, both close to home and when traveling.":"无论是在家附近还是旅行途中，我都喜欢用相机记录看到的风景。",
    "My research is based mainly on radio and millimeter observations. I have led ten observing programs and worked with data from both single-dish telescopes and interferometers. I am experienced in taking a project from the observing proposal through data reduction and analysis to publication.":"我的研究主要基于射电和毫米波观测。我主持过十项观测项目，处理过单天线望远镜和干涉阵的数据，也有从申请观测、处理和分析数据到发表论文的完整经历。",
    "For TRICEPS, I reduced all ALMA data presented in the survey and kinematic papers, as well as all VLA data obtained for the project to date. I also develop and share software for analyzing radio observations and interactive visualizations of gas motions.":"在 TRICEPS 合作中，我处理了巡天论文和运动学论文使用的全部 ALMA 数据，以及项目目前获得的全部 VLA 数据。我也开发并分享射电数据分析程序和气体运动的交互式可视化工具。",
    "Open RotVis":"打开 RotVis", "Open Velocity harmonics":"打开速度场谐波工具",
    "Open Power & spatial scales":"打开功率谱与空间尺度工具",
    "Open FAST H I calibration":"打开 FAST H I 定标工具", "Open HINSA fitting":"打开 HINSA 拟合工具",
    "Read about the TRICEPS project":"了解 TRICEPS 项目",
    "View the galactic dynamical ecosystem diagram at full resolution":"查看星系动力学生态系统示意图原图"
  });
  const originals = new WeakMap();
  const lastText = new WeakMap();
  const attributes = new WeakMap();
  const normalize = text => text.replace(/\s+/g, " ").trim();
  let language = "en";
  try {
    const requested = new URL(location.href).searchParams.get("lang");
    language = requested === "zh" || requested === "en" ? requested : localStorage.getItem("lingrui-language") === "zh" ? "zh" : "en";
    if (requested === "zh" || requested === "en") localStorage.setItem("lingrui-language", language);
  } catch (_) {}
  function translated(text) {
    const key = normalize(text);
    if (Object.hasOwn(zh, key)) return text.replace(key, zh[key]);
    // Dynamic gallery labels share the same translated album title.
    return text.replace(/^(Previous photos in |Next photos in |Enlarge )?(.+?)( — scrollable photographs| · Photo (\d+)| photo (\d+))?$/, (all, prefix, album, suffix, n, m) => {
      if (!Object.hasOwn(zh, album)) return all;
      const lead = prefix === "Previous photos in " ? "上一组：" : prefix === "Next photos in " ? "下一组：" : prefix === "Enlarge " ? "放大：" : "";
      return lead + zh[album] + (n || m ? ` · 照片 ${n || m}` : suffix ? " — 可横向滚动的照片" : "");
    });
  }
  function translate(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement.closest("script,style,.pub-title,.pub-authors,.pub-journal,.language-toggle")) continue;
      if (!originals.has(node) || node.nodeValue !== lastText.get(node)) originals.set(node, node.nodeValue);
      node.nodeValue = language === "zh" ? translated(originals.get(node)) : originals.get(node);
      if (language === "zh" && node.parentElement.closest(".about-intro .original-excerpt") && normalize(originals.get(node)) === "About") node.nodeValue = "关于";
      lastText.set(node, node.nodeValue);
    }
    for (const el of root.querySelectorAll("[aria-label],[placeholder]")) {
      if (el.matches(".language-toggle")) continue;
      if (!attributes.has(el)) attributes.set(el, {});
      for (const name of ["aria-label", "placeholder"]) {
        if (!el.hasAttribute(name)) continue;
        const values = attributes.get(el);
        if (!(name in values) || el.getAttribute(name) !== values[name + "Last"]) values[name] = el.getAttribute(name);
        el.setAttribute(name, language === "zh" ? translated(values[name]) : values[name]);
        values[name + "Last"] = el.getAttribute(name);
      }
    }
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    const button = document.querySelector(".language-toggle");
    button.textContent = language === "zh" ? "EN" : "中文";
    button.lang = language === "zh" ? "en" : "zh-CN";
    button.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
  }
  window.siteLanguage = {translate, get current() { return language; }};
  document.querySelector(".language-toggle").addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    try { localStorage.setItem("lingrui-language", language); } catch (_) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url);
    window.dispatchEvent(new Event("site-language-change"));
  });
})();
