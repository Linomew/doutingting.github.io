import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const xhsProfile = 'https://www.xiaohongshu.com/user/profile/5efbefaa000000000101f13b?xsec_token=AB8JP16B7iQSuW1nnBtHryJzHOKihgi5I3CpAZOaW32hg%3D&xsec_source=pc_search'

const notes = [
  {
    title: '设计师必备｜你要找的插画素材都在这里',
    date: '2022.02.25',
    likes: '6,666',
    likesValue: 6666,
    tag: '资源整理',
    image: '/posts/illustration-assets.webp',
    url: 'https://www.xiaohongshu.com/explore/6218d00400000000010247e5',
    insight: '高密度目录 + 强需求标题，形成稳定的搜索入口。',
  },
  {
    title: '设计师必看｜大厂官方设计团队，快来抄作业',
    date: '2022.03.04',
    likes: '657',
    likesValue: 657,
    tag: '行业洞察',
    image: '/posts/official-design-teams.webp',
    url: 'https://www.xiaohongshu.com/explore/6221ed69000000002103ccce',
    insight: '用权威来源降低决策成本，让内容具备长期检索价值。',
  },
  {
    title: '设计必看｜大厂官方号给你整理好啦',
    date: '2022.03.08',
    likes: '531',
    likesValue: 531,
    tag: '行业洞察',
    image: '/posts/official-accounts.webp',
    url: 'https://www.xiaohongshu.com/explore/62274ac50000000021038d42',
    insight: '把分散账号做成一页导航，分享和收藏自然发生。',
  },
  {
    title: '开工大吉｜2022年度8大色彩趋势来一波‼️',
    date: '2022.02.07',
    likes: '330',
    likesValue: 330,
    tag: '趋势内容',
    image: '/posts/color-trends.webp',
    url: 'https://www.xiaohongshu.com/explore/620117730000000021035bc3',
    insight: '借势节点做趋势预测，兼顾即时讨论与内容审美。',
  },
  {
    title: '7个高质量免抠png素材网站👀超多分类',
    date: '2022.04.21',
    likes: '5,809',
    likesValue: 5809,
    tag: '资源整理',
    image: '/posts/png-assets.webp',
    url: 'https://www.xiaohongshu.com/explore/62613e34000000000102fdb4',
    insight: '围绕高频设计需求做分类整理，用清单式结构提升收藏价值。',
  },
  {
    title: '关于作品集你必须知道的7个网站🔥',
    date: '2022.04.19',
    likes: '4,445',
    likesValue: 4445,
    tag: '资源整理',
    image: '/posts/portfolio-sites.webp',
    url: 'https://www.xiaohongshu.com/explore/625e9760000000000102ed59',
    insight: '把作品集灵感来源做成一页导航，帮助用户快速开始行动。',
  },
  {
    title: '🔥UI全链路设计师知识体系【全】梳理',
    date: '2021.12.30',
    likes: '1,175',
    likesValue: 1175,
    tag: '行业洞察',
    image: '/posts/ui-knowledge.webp',
    url: 'https://www.xiaohongshu.com/explore/61cd9ac7000000002103742d',
    insight: '用全链路视角组织知识，让复杂职业能力变成可理解的地图。',
  },
  {
    title: '☄️UI设计｜这些图标风格你了解几个呢？💥',
    date: '2022.01.21',
    likes: '991',
    likesValue: 991,
    tag: '趋势内容',
    image: '/posts/ui-interface.webp',
    url: 'https://www.xiaohongshu.com/explore/61ea86d600000000210364de',
    insight: '通过风格对比建立视觉认知，适合快速浏览与二次分享。',
  },
  {
    title: 'UI设计Ⅰ2022年8种设计趋势🔥',
    date: '2022.01.18',
    likes: '816',
    likesValue: 816,
    tag: '趋势内容',
    image: '/posts/moodboard.webp',
    url: 'https://www.xiaohongshu.com/explore/61ceea65000000002103616f',
    insight: '用年度趋势切入设计判断，兼顾信息密度与视觉浏览体验。',
  },
  {
    title: '3⃣️个月UI设计学习路径图🉑新手适用',
    date: '2022.03.23',
    likes: '203',
    likesValue: 203,
    tag: '设计教程',
    image: '/posts/ui-learning.webp',
    url: 'https://www.xiaohongshu.com/explore/623b08f7000000000102c597',
    insight: '把学习目标拆成阶段任务，为新手提供可执行的成长路径。',
  },
  {
    title: 'UI设计干货|你了解简笔画风格吗？',
    date: '2022.03.30',
    likes: '53',
    likesValue: 53,
    tag: '设计教程',
    image: '/posts/simple-illustration.webp',
    url: 'https://www.xiaohongshu.com/explore/6244425d00000000002103f84e',
    insight: '拆解插画风格的构成要素，帮助设计学习者建立观察框架。',
  },
  {
    title: '🔥一张图搞定｜如何自学UI设计⁉️',
    date: '2022.01.18',
    likes: '188',
    likesValue: 188,
    tag: '设计教程',
    image: '/posts/ui-learning.webp',
    url: 'https://www.xiaohongshu.com/explore/61e6a5f60000000021037e93',
    insight: '用一张图压缩入门信息，适合收藏后按步骤逐项实践。',
  },
]

const experiences = [
  {
    id: 'future',
    period: '2026.07 — 2026.09',
    company: '好未来 · 商业化与用户增长运营',
    type: '商业化增长',
    points: [
      '负责2大核心资源位及80+家教育应用运营，管理周曝光190万+的流量盘并建立分级运营机制。',
      '基于用户生命周期与时段开展分层运营，联合5家应用推动新用户下载转化提升120%、商城周度收入提升50%。',
      '搭建商业化数据看板并推动双屏改版，资源位曝光由5万提升至10万+。',
    ],
  },
  {
    id: 'unicef',
    period: '2025.09 — 2026.02',
    company: '联合国儿童基金会（西班牙总部）· 国际传播与数字化运营',
    type: '国际传播',
    points: [
      '独立策划制作20+项全球数字化项目宣传内容，推动发布量增长50%+、LinkedIn新增关注者近4000人。',
      '分析欧洲及拉美用户偏好，从选题、文案、视觉3个维度参与本地化传播策略制定。',
      '统筹多语言、多时区项目排期与审批，推动面向欧洲、拉美、非洲3大区域的内容按期上线。',
    ],
  },
  {
    id: 'zhiyi',
    period: '2020.09 — 2021.02',
    company: '知易时光 · 用户研究与产品运营',
    type: '产品与研究',
    points: [
      '搭建知乎、小红书双平台差异化内容矩阵，实现小红书账号从0至8000+粉丝的冷启动增长。',
      '独立完成内容生产全流程，单篇最高曝光3万+、点赞1.2万+，并沉淀高互动内容模板。',
      '搭建4环节公私域转化链路，通过内容与话术测试实现月均精准引流300+人。',
    ],
  },
]

const campus = [
  ['TGYD 国际青年对话', '活动运营与跨国项目统筹', '2024.10 — 2025.07', '统筹 30+ 国家、70 位青年代表参与的国际青年论坛，完成跨境资源对接与会务执行。'],
  ['联合国儿童基金会', '青年创业调研', '2025.04 — 2025.06', '围绕高校学生创业学习需求，完成 80+ 份结构化问卷与 10 位导师深访，输出研究报告。'],
]

function App() {
  const [activeTag, setActiveTag] = useState('资源整理')
  const [selectedNote, setSelectedNote] = useState(null)
  const tags = [...new Set(notes.map((note) => note.tag))]
  const filteredNotes = useMemo(() => notes.filter((note) => note.tag === activeTag), [activeTag])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="回到顶部"><span className="brand-mark">D</span><span>DOUTINGTING</span></a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#work">经历</a>
          <a href="#notes">小红书</a>
          <a href="#cases">案例</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="outline-button" href={xhsProfile} target="_blank" rel="noreferrer">查看账号 <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">CONTENT · GROWTH · PRODUCT</p>
            <h1>把内容做成<br /><em>可增长的产品</em></h1>
            <p className="hero-intro">我是窦婷婷，清华大学2027届硕士毕业生。擅长从用户洞察出发，完成内容策划、产品运营与跨团队落地，让每一次传播都能被看见、被记住、被转化。</p>
            <div className="hero-actions">
              <a className="solid-button" href="#cases">浏览作品 <span>↓</span></a>
              <a className="text-link" href="mailto:grace_dou2020@163.com">grace_dou2020@163.com <span>↗</span></a>
            </div>
            <div className="hero-meta"><div className="hero-meta-line"><span>北京 · 应届毕业生</span><span className="dot" /><span>普通话 / 英语 / 西班牙语 （均可作为工作语言）</span></div><div className="hero-meta-line"><span>MBTI: INFJ</span></div></div>
          </div>
          <div className="hero-visual" aria-label="小红书内容精选拼贴">
            <div className="visual-note visual-note-main"><img src="/posts/ui-interface.webp" alt="UI设计资源帖子封面" /></div>
            <div className="visual-note visual-note-small"><img src="/posts/illustration-assets.webp" alt="插画素材帖子封面" /></div>
            <div className="visual-sticker">DATA<br /><strong>→ ACTION</strong></div>
            <div className="visual-caption"><span>小红书运营</span><span>2021—2022</span></div>
          </div>
        </section>

        <section className="proof-strip section-wrap" aria-label="关键成果">
          <a className="proof-card" href="#unicef"><strong>3</strong><small>种工作语言<br />中英西无障碍沟通</small><span className="proof-arrow">↗</span></a>
          <a className="proof-card" href="#unicef"><strong>20<span>+</span></strong><small>全球传播项目落地</small><span className="proof-arrow">↗</span></a>
          <a className="proof-card" href="#future"><strong>190<span>万+</span></strong><small>资源位管理曝光</small><span className="proof-arrow">↗</span></a>
          <a className="proof-card" href="#notes"><strong>8,000<span>+</span></strong><small>小红书从 0 到 8000 粉丝</small><span className="proof-arrow">↗</span></a>
        </section>

        <section id="work" className="work-section section-wrap">
          <div className="section-heading"><div><p className="eyebrow">01 / EXPERIENCE</p><h2>在复杂项目里<br /><em>找到增长抓手</em></h2></div><p className="section-note">从资源位、内容矩阵到国际传播，我习惯把目标拆成可执行的动作，用数据验证每一轮判断。</p></div>
          <div className="experience-list">
            {experiences.map((item) => <article id={item.id} className="experience-item" key={item.company}><div className="experience-period">{item.period}</div><div className="experience-body"><div className="experience-title"><h3>{item.company}</h3><span>{item.type}</span></div><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}
          </div>
        </section>

        <section id="notes" className="notes-section section-wrap">
          <div className="section-heading notes-heading"><div><p className="eyebrow">02 / XIAOHONGSHU ARCHIVE</p><h2>一组可复盘的<br /><em>内容实验</em></h2></div><div className="notes-aside"><p>2021.11 — 2022.04<br />账号：小楚姐姐 / 824749826</p><a href={xhsProfile} target="_blank" rel="noreferrer">打开完整主页 ↗</a></div></div>
          <div className="filter-row" role="tablist" aria-label="筛选帖子类型">{tags.map((tag) => <button key={tag} className={activeTag === tag ? 'filter-chip active' : 'filter-chip'} onClick={() => setActiveTag(tag)} role="tab" aria-selected={activeTag === tag}>{tag}</button>)}</div>
          <div className="notes-grid">{filteredNotes.map((note, index) => <article className={`note-card note-${index + 1}`} key={note.title}><button className="note-image-button" onClick={() => setSelectedNote(note)} aria-label={`查看 ${note.title}`}><img src={note.image} alt="" /><span className="note-open">查看拆解 ↗</span></button><div className="note-info"><div><span className="note-tag">{note.tag}</span><span className="note-date">{note.date}</span></div><h3>{note.title}</h3><p>{note.insight}</p><div className="note-stats"><span>♡ {note.likes}</span><a href={note.url} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>查看原帖 ↗</a></div></div></article>)}</div>
          <p className="data-source">互动数为公开页面展示的获赞与收藏数；帖子链接来自公开页面。点击卡片可查看内容拆解。</p>
        </section>

        <section id="cases" className="cases-section section-wrap">
          <div className="section-heading"><div><p className="eyebrow">03 / SELECTED CASES</p><h2>不只做内容<br /><em>也做内容背后的项目复盘</em></h2></div><p className="section-note">三个我反复使用的方法：用户分层、内容结构化、跨团队协作。它们让创意不止停留在“好看”。</p></div>
          <div className="case-grid">
            <article className="case-card case-dark"><div className="case-number">01</div><div className="case-content"><p className="case-kicker">COMMERCIALIZATION</p><h3>黄金资源位<br />增长运营</h3><p>从资源盘点、SKU 分级到转化复盘，建立教育应用的日常运营机制。</p><div className="case-footer"><span>曝光 190万+</span><span>转化 +50%</span></div></div></article>
            <article className="case-card case-lilac"><div className="case-number">02</div><div className="case-content"><p className="case-kicker">GLOBAL COMMUNICATION</p><h3>把 20+ 个项目<br />讲给全球听</h3><p>为 TeamOne、UNIBOT 等数字化项目搭建内容节奏，串联多语种团队与审核流程。</p><div className="case-footer"><span>20+ 项目</span><span>多语种协作</span></div></div></article>
            <article className="case-card case-yellow"><div className="case-number">03</div><div className="case-content"><p className="case-kicker">USER RESEARCH</p><h3>从用户问题<br />到内容矩阵</h3><p>围绕学习场景做用户画像与旅程设计，把洞察转译成可持续的选题与转化链路。</p><div className="case-footer"><span>0→8,000+</span><span>引流 300+</span></div></div></article>
          </div>
        </section>

        <section className="campus-section section-wrap"><div className="section-heading compact-heading"><div><p className="eyebrow">04 / CAMPUS & RESEARCH</p><h2>把视野带进<br /><em>每一次协作</em></h2></div><p className="section-note">教育、国际组织与青年项目，让我对不同人群的需求保持敏感，也更擅长在差异中寻找共识。</p></div><div className="campus-grid">{campus.map(([name, role, period, desc]) => <article key={name}><div className="campus-top"><span>{period}</span><span>↗</span></div><h3>{name}</h3><p className="campus-role">{role}</p><p>{desc}</p></article>)}</div></section>

        <section id="contact" className="contact-section section-wrap"><div><p className="eyebrow">FROM INSIGHT TO IMPACT</p><h2>从洞察到行动<br /><em>让结果清晰可见</em></h2></div><div className="contact-side"><p>如果你正在寻找一位能把内容、产品与市场连接起来的伙伴，欢迎联系我。</p><a className="solid-button" href="mailto:grace_dou2020@163.com">发送邮件 <span>↗</span></a><div className="contact-lines"><span>18307207206</span><span>北京 · 清华大学</span></div></div></section>
      </main>

      <footer className="footer section-wrap"><span>© 2026 DOUTINGTING</span><span>CONTENT / GROWTH / PRODUCT</span><a href="#top">返回顶部 ↑</a></footer>

      {selectedNote && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedNote(null)}><div className="note-modal" role="dialog" aria-modal="true" aria-label={selectedNote.title} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedNote(null)} aria-label="关闭">×</button><img src={selectedNote.image} alt="" /><div className="modal-copy"><span className="note-tag">{selectedNote.tag} · {selectedNote.date}</span><h3>{selectedNote.title}</h3><p>{selectedNote.insight}</p><div className="modal-stats"><strong>♡ {selectedNote.likes}</strong><a className="solid-button" href={selectedNote.url} target="_blank" rel="noreferrer">打开原帖 ↗</a></div></div></div></div>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
