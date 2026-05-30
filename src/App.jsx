import { useEffect, useMemo, useState } from "react";

import avatarAzhe from "./assets/avatar-azhe.png";
import avatarLinqiu from "./assets/avatar-linqiu.png";
import avatarYou from "./assets/avatar-you.png";
import avatarZhouke from "./assets/avatar-zhouke.png";
import brandLogo from "./assets/brand-logo.png";
import heroHome from "./assets/hero-home.png";
import heroJoin from "./assets/hero-join.png";
import heroMessage from "./assets/hero-message.png";
import heroTeam from "./assets/hero-team.png";
import iconAnnounce from "./assets/icon-announce.png";
import iconColdStable from "./assets/icon-cold-stable.png";
import iconColdStart from "./assets/icon-cold-start.png";
import iconGift from "./assets/icon-gift.png";
import iconJoinFriendsHead from "./assets/icon-join-friends-head.png";
import iconJoinRobotHead from "./assets/icon-join-robot-head.png";
import iconMedal from "./assets/icon-medal.png";
import iconMembers from "./assets/icon-members.png";
import iconMore from "./assets/icon-more.png";
import iconReminderClock from "./assets/icon-reminder-clock.png";
import iconReminderTeam from "./assets/icon-reminder-team.png";
import iconRobot from "./assets/icon-robot.png";
import iconRuleBell from "./assets/icon-rule-bell.png";
import iconRuleLock from "./assets/icon-rule-lock.png";
import iconRuleShield from "./assets/icon-rule-shield.png";
import iconRuleTeam from "./assets/icon-rule-team.png";
import iconSearch from "./assets/icon-search.png";
import iconTabFilter from "./assets/icon-tab-filter.png";
import iconTarget from "./assets/icon-target.png";
import iconTaskPanel from "./assets/icon-task-panel.png";
import iconToolAi from "./assets/icon-tool-ai.png";
import iconToolHeart from "./assets/icon-tool-heart.png";
import iconToolNudge from "./assets/icon-tool-nudge.png";
import iconTrophy from "./assets/icon-trophy.png";
import illustrationFriends from "./assets/illustration-friends.png";
import messageBirdFooter from "./assets/message-bird-footer.png";
import messageTipBulb from "./assets/message-tip-bulb.png";
import navJoin from "./assets/nav-join.png";
import navTask from "./assets/nav-task.png";
import navTeam from "./assets/nav-team.png";
import teamChatAvatar from "./assets/team-chat-avatar.png";
import userAvatar from "./assets/user-avatar.png";

const homeStats = [
  { title: "今日进度", value: "50%", subline: "2 / 4 项已完成", type: "progress" },
  { title: "剩余任务", value: "2", unit: "项", subline: "预计 43 分钟" },
  { title: "连续打卡", value: "6", unit: "天", subline: "再坚持 1 天升级徽章", icon: iconMedal },
  { title: "今日目标", value: "高效学习，稳步进步", icon: iconTarget, type: "goal" }
];

const teamStats = [
  { title: "今日完成率", value: "75%", subline: "较昨日 ↑ 12%", type: "progress" },
  { title: "连续打卡", value: "6", unit: "天", subline: "再坚持 1 天升级徽章", icon: iconMedal },
  { title: "当前排名", value: "第 3 名", subline: "超过 78% 的小队", icon: iconTrophy },
  { title: "全员目标", value: "全员完成可保持 6 天连胜", icon: iconTarget, type: "goal" }
];

const tasks = [
  {
    id: 1,
    subject: "数学",
    title: "二次函数错题回顾",
    duration: "预计 12 分钟",
    reason: "建议先做",
    status: "done",
    button: "已完成",
    accent: "green"
  },
  {
    id: 2,
    subject: "英语",
    title: "阅读理解精练 2 篇",
    duration: "预计 18 分钟",
    reason: "你通常晚饭后完成率最高",
    status: "active",
    button: "继续学习",
    accent: "purple"
  },
  {
    id: 3,
    subject: "物理",
    title: "压强与浮力随堂任务",
    duration: "预计 15 分钟",
    reason: "完成后今日进度可达到 75%",
    status: "warm",
    button: "先做这一项",
    accent: "orange"
  },
  {
    id: 4,
    subject: "语文",
    title: "古诗文默写",
    duration: "预计 8 分钟",
    reason: "睡前复习效果更好",
    status: "idle",
    button: "开始学习",
    accent: "purple"
  }
];

const members = [
  {
    name: "林秋",
    avatar: avatarLinqiu,
    state: "已完成",
    ok: true,
    note: "今日任务已全部完成",
    detailLabel: "完成时间",
    detailValue: "18:42",
    reminded: "已提醒 0/2 次",
    actions: []
  },
  {
    name: "周可",
    avatar: avatarZhouke,
    state: "已完成",
    ok: true,
    note: "太棒了，继续保持哦",
    detailLabel: "完成时间",
    detailValue: "18:35",
    reminded: "已提醒 0/2 次",
    actions: []
  },
  {
    name: "阿哲",
    avatar: avatarAzhe,
    state: "进行中",
    ok: false,
    note: "还剩约 20 分钟",
    detailLabel: "任务进度",
    detailValue: "60%",
    reminded: "已提醒 1/2 次",
    progress: 60,
    actions: ["戳一戳", "加油", "AI 队长"]
  },
  {
    name: "你",
    avatar: avatarYou,
    state: "未开始",
    ok: false,
    note: "今天就差你啦，加油去完成吧",
    detailLabel: "预计用时",
    detailValue: "约 43 分钟",
    reminded: "已提醒 0/2 次",
    actions: ["戳一戳", "加油", "AI 队长"]
  }
];

const reminders = [
  { icon: iconReminderClock, text: "你最近 7 天最常在 19:00-21:00 完成学习任务。" },
  { icon: iconReminderTeam, text: "今天小队还差 1 人满勤，完成后可保持 6 天连续打卡。" },
  { icon: iconTarget, text: "你还剩约 43 分钟任务，按当前节奏今晚可以完成。" }
];

const teamTools = [
  {
    title: "戳一戳",
    icon: iconToolNudge,
    desc: "发送一个轻轻的戳一戳，提醒一下队友",
    remain: "今日剩余：2 次"
  },
  {
    title: "发送鼓励",
    icon: iconToolHeart,
    desc: "给队友一句鼓励，传递正能量",
    remain: "今日剩余：2 次"
  },
  {
    title: "AI 队长提醒",
    icon: iconToolAi,
    desc: "由 AI 队长生成提醒文案并发送",
    remain: "今日剩余：2 次"
  }
];

const messageThreads = [
  {
    id: "squad",
    avatar: teamChatAvatar,
    name: "晚风冲刺队",
    badge: "小队",
    preview: "阿哲：我这会儿去完成任务，晚点追上！",
    time: "18:45",
    unread: 2,
    active: true
  },
  {
    id: "ai-captain",
    avatar: iconToolAi,
    name: "AI 队长小伴",
    badge: "官方",
    preview: "别忘了完成今日任务哦，全员完成率可再提升。",
    time: "18:30",
    unread: 1
  },
  {
    id: "linqiu",
    avatar: avatarLinqiu,
    name: "林秋",
    preview: "太棒啦！我们又离连胜更近一步啦。",
    time: "18:20"
  },
  {
    id: "zhouke",
    avatar: avatarZhouke,
    name: "周可",
    preview: "我先把英语阅读完成了，先去休息啦～",
    time: "18:10"
  },
  {
    id: "system",
    avatar: iconReminderClock,
    name: "系统通知",
    badge: "官方",
    preview: "你已连续打卡 6 天，继续保持哦！",
    time: "昨天 21:00"
  },
  {
    id: "assistant",
    avatar: iconJoinRobotHead,
    name: "学伴小助手",
    badge: "官方",
    preview: "本周学习报告已生成，点击查看 →",
    time: "昨天 19:30"
  }
];

const messageQuickActions = [
  { title: "提醒成员", icon: iconToolNudge },
  { title: "发送鼓励", icon: iconToolHeart },
  { title: "AI 队长提醒", icon: iconToolAi }
];

const messageHints = [
  { icon: iconAnnounce, text: "轻提醒为主" },
  { icon: iconReminderClock, text: "避免打扰休息" },
  { icon: iconToolHeart, text: "友善鼓励优先" }
];

const dashboardStats = [
  { title: "今日 DAU", value: "12,842", delta: "较昨日 ↑ 8.2%", icon: iconToolNudge, tone: "purple" },
  { title: "今日有任务学生数", value: "10,256", delta: "较昨日 ↑ 6.7%", icon: iconTaskPanel, tone: "blue" },
  { title: "今日未完成用户数", value: "3,124", delta: "较昨日 ↓ 3.1%", glyph: "clock", tone: "red" },
  { title: "小队平均完成率", value: "78.6%", delta: "较昨日 ↑ 4.5%", glyph: "pie", tone: "green" }
];

const strategyOptions = [
  { title: "系统 Push", desc: "在你活跃时段（19:00-21:00）推送提醒", priority: "推荐优先级：高", icon: iconReminderClock, accent: "purple" },
  { title: "队友戳一戳", desc: "由小队成员发送轻提醒，增强同伴影响力", priority: "推荐优先级：中", icon: iconToolNudge, accent: "blue" },
  { title: "AI 队长提醒", desc: "由 AI 队长发送鼓励式提醒，强调小队目标", priority: "推荐优先级：中", icon: iconToolAi, accent: "violet" },
  { title: "短信升级触达", desc: "若未打开 App，短信提醒任务进度", priority: "推荐优先级：低", glyph: "sms", accent: "orange" },
  { title: "微信服务号回流", desc: "连续多天未打开时，通过服务号回流提醒", priority: "推荐优先级：低", icon: iconJoinRobotHead, accent: "green" }
];

const chatMessages = [
  {
    id: 1,
    type: "incoming",
    author: "林秋",
    avatar: avatarLinqiu,
    time: "18:30",
    text: "今天的任务都完成得怎么样啦？我们还差 1 个人就能全员完成啦，一起加油！"
  },
  {
    id: 2,
    type: "outgoing",
    author: "你",
    avatar: avatarYou,
    time: "18:32",
    text: "我这会儿开始做物理大题，预计 40 分钟完成～",
    meta: "已读 3 人"
  },
  {
    id: 3,
    type: "incoming",
    author: "周可",
    avatar: avatarZhouke,
    time: "18:35",
    text: "我已经完成啦！可以帮大家一起冲击连胜！",
    meta: "点赞 2"
  },
  {
    id: 4,
    type: "incoming",
    author: "阿哲",
    avatar: avatarAzhe,
    time: "18:45",
    text: "我这会儿去完成任务，晚点追上！"
  }
];

function usePathname() {
  const validPaths = ["/", "/team", "/join", "/messages", "/dashboard", "/strategy"];

  const getPath = () => {
    const path = window.location.pathname || "/";
    return validPaths.includes(path) ? path : "/";
  };

  const [pathname, setPathname] = useState(getPath);

  useEffect(() => {
    const handlePopState = () => setPathname(getPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    const normalized = validPaths.includes(nextPath) ? nextPath : "/";
    if (normalized === pathname) return;
    window.history.pushState({}, "", normalized);
    setPathname(normalized);
  };

  return { pathname, navigate };
}

function ImgIcon({ src, alt, className = "" }) {
  return <img alt={alt} className={className} src={src} />;
}

function ReviewGlyph({ kind }) {
  if (kind === "clock") {
    return (
      <span className="review-glyph clock" aria-hidden="true">
        <span className="review-glyph-clock-face">
          <span className="review-glyph-clock-hour" />
          <span className="review-glyph-clock-minute" />
        </span>
      </span>
    );
  }

  if (kind === "pie") {
    return (
      <span className="review-glyph pie" aria-hidden="true">
        <span className="review-glyph-pie-core" />
      </span>
    );
  }

  if (kind === "bell") {
    return (
      <span className="review-glyph bell" aria-hidden="true">
        <span className="review-glyph-bell-top" />
        <span className="review-glyph-bell-body" />
        <span className="review-glyph-bell-clapper" />
      </span>
    );
  }

  if (kind === "user-layer") {
    return (
      <span className="review-glyph user-layer" aria-hidden="true">
        <span className="review-glyph-user-head" />
        <span className="review-glyph-user-body" />
      </span>
    );
  }

  if (kind === "sms") {
    return (
      <span className="review-glyph sms" aria-hidden="true">
        <span className="review-glyph-sms-box">
          <span className="review-glyph-sms-line" />
          <span className="review-glyph-sms-line short" />
        </span>
      </span>
    );
  }

  return null;
}

function Sidebar({ pathname, navigate }) {
  const navItems = useMemo(
    () => [
      { label: "学习任务", icon: navTask, href: "/" },
      { label: "我的小队", icon: navTeam, href: "/team" },
      { label: "加入小队", icon: navJoin, href: "/join" }
    ],
    []
  );

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">
          <ImgIcon src={brandLogo} alt="学伴" className="brand-logo-image" />
        </div>
        <span>学伴</span>
      </div>

      <nav className="nav-list">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <button
              key={item.label}
              className={`nav-item ${active ? "active" : ""}`}
              onClick={() => navigate(item.href)}
              type="button"
            >
              <span className="nav-icon">
                <ImgIcon src={item.icon} alt="" className="nav-icon-image" />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-avatar">
          <ImgIcon src={userAvatar} alt="当前用户头像" className="sidebar-avatar-image" />
        </div>
        <div>
          <strong>你</strong>
          <p>Lv.4</p>
        </div>
      </div>
    </aside>
  );
}

function HeaderHero({ mode = "home" }) {
  const heroMap = {
    home: {
      title: "晚上好，继续加油呀！",
      desc: "今天还差 2 个小任务，完成后晚风冲刺队就能全员满勤啦！",
      image: heroHome
    },
    team: {
      title: "晚风冲刺队",
      desc: "一起学习，一起进步，今天也要全员满勤哦！",
      image: heroTeam,
      badge: "第 3 名"
    },
    join: {
      title: "加入小队，一起进步！",
      desc: "找到志同道合的伙伴，互相督促，共同成长！",
      image: heroJoin
    }
  };

  const current = heroMap[mode];

  return (
    <section className="hero">
      <div className="hero-copy">
        {current.badge ? (
          <>
            <div className="team-hero-line">
              <h1>{current.title}</h1>
              <span className="hero-rank-badge">{current.badge}</span>
            </div>
            <p>{current.desc}</p>
          </>
        ) : (
          <>
            <h1>{current.title}</h1>
            <p>{current.desc}</p>
          </>
        )}
      </div>

      <div className="hero-illustration image-mode">
        <ImgIcon src={current.image} alt="" className="hero-illustration-image" />
      </div>
    </section>
  );
}

function StatCards({ stats }) {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <article className={`stat-card ${stat.type || ""}`} key={stat.title}>
          <span className="card-title">{stat.title}</span>
          <div className="stat-main">
            {stat.type === "goal" ? (
              <div className="goal-copy">
                <strong>{stat.value}</strong>
                {stat.icon ? <ImgIcon src={stat.icon} alt="" className="goal-icon-image" /> : null}
              </div>
            ) : (
              <>
                <div className="stat-value">
                  <strong>{stat.value}</strong>
                  {stat.unit ? <em>{stat.unit}</em> : null}
                </div>
                {stat.icon ? <ImgIcon src={stat.icon} alt="" className="stat-icon-image" /> : null}
              </>
            )}
          </div>
          {stat.type === "progress" ? (
            <>
              <p>{stat.subline}</p>
              <div className="mini-progress">
                <div className="mini-progress-fill" />
              </div>
            </>
          ) : stat.subline ? (
            <p>{stat.subline}</p>
          ) : null}
        </article>
      ))}
    </section>
  );
}

function TaskCard({ task }) {
  const leadingText =
    task.status === "done" ? "完成" : task.status === "active" ? "进行中" : task.status === "warm" ? "推荐" : "待开始";

  return (
    <div className={`task-card ${task.status}`}>
      <div className={`task-leading ${task.accent}`}>
        <span>{leadingText}</span>
      </div>

      <div className="task-content">
        <div className="task-topline">
          <span className={`subject subject-${task.accent}`}>{task.subject}</span>
        </div>
        <h3>{task.title}</h3>
        <p>{task.duration}</p>
        <div className={`task-reason ${task.accent}`}>{task.reason}</div>
      </div>

      <div className="task-actions">
        <button className={`task-btn ${task.status} ${task.accent}`} type="button">
          {task.button}
        </button>
      </div>
    </div>
  );
}

function TaskPanel() {
  return (
    <section className="panel task-panel">
      <div className="panel-head">
        <div className="panel-title">
          <span className="panel-icon panel-image-icon">
            <ImgIcon src={iconTaskPanel} alt="" className="panel-icon-image" />
          </span>
          <h2>今日任务</h2>
        </div>
        <button className="text-link" type="button">
          推荐顺序
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <button className="footer-link" type="button">
        查看全部任务
      </button>
    </section>
  );
}

function TeamPanel({ navigate }) {
  return (
    <section className="panel team-panel">
      <div className="panel-head compact">
        <div className="panel-title text-only">
          <small>学习小队</small>
          <h2>晚风冲刺队</h2>
        </div>
        <button className="text-link" onClick={() => navigate("/team")} type="button">
          查看小队
        </button>
      </div>

      <div className="team-summary">
        <div className="team-ring">
          <div className="ring-inner">
            <strong>75%</strong>
            <span>今日完成率</span>
          </div>
        </div>
        <div className="team-gap">
          <strong>还差 1 人</strong>
          <span>全员完成</span>
        </div>
      </div>

      <div className="member-row-list">
        {members.map((member) => (
          <div className="member-item" key={member.name}>
            <div className="member-head">
              <span className="member-face">
                <ImgIcon src={member.avatar} alt="" className="member-avatar-image" />
              </span>
              <span>{member.name}</span>
            </div>
            <span className={`member-mark ${member.ok ? "ok" : ""}`}>
              <span className={`status-dot ${member.ok ? "ok" : "pending"}`} />
              {member.state}
            </span>
          </div>
        ))}
      </div>

      <p className="team-note">你完成后，小队就能保持 6 天连续打卡。</p>

      <div className="stacked-actions">
        <button className="big-soft-btn" onClick={() => navigate("/team")} type="button">
          查看小队
        </button>
        <button className="secondary-soft-btn" onClick={() => navigate("/join")} type="button">
          加入小队
        </button>
      </div>
    </section>
  );
}

function ReminderPanel() {
  return (
    <section className="panel reminder-panel">
      <div className="panel-title text-only">
        <small>为什么现在提醒我？</small>
      </div>

      <div className="reminder-list">
        {reminders.map((item) => (
          <div className="reminder-item" key={item.text}>
            <span className="reminder-icon">
              <ImgIcon src={item.icon} alt="" className="reminder-icon-image" />
            </span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <button className="text-link footer-left" type="button">
        查看提醒设置
      </button>
    </section>
  );
}

function RewardBar({ teamMode = false }) {
  return (
    <section className={`reward-bar ${teamMode ? "team-mode" : ""}`}>
      <div className="reward-left">
        <span className="gift-icon">
          <ImgIcon src={teamMode ? iconTrophy : iconGift} alt="" className="reward-icon-image" />
        </span>
        <div>
          <strong>{teamMode ? "全员完成，今晚就能保持 6 天连胜！" : "今日完成所有任务可获得 20 学习能量"}</strong>
          <p>{teamMode ? "大家一起加油，把连续记录延续下去吧！" : "能量可兑换奖励，已连续 6 天领取"}</p>
        </div>
      </div>

      <div className="reward-right">
        {teamMode ? (
          <button className="hero-cta-btn" type="button">
            去完成任务
          </button>
        ) : (
          <>
            <span>已连续领取 6 天</span>
            <div className="energy-track">
              <div className="energy-fill" />
            </div>
            <span className="energy-badge">20</span>
          </>
        )}
      </div>
    </section>
  );
}

function TeamMemberRow({ member }) {
  const statusClass = member.state === "已完成" ? "ok" : member.state === "进行中" ? "active" : "warm";

  return (
    <div className="team-member-row">
      <div className="team-member-primary">
        <span className="member-face large">
          <ImgIcon src={member.avatar} alt="" className="member-avatar-image" />
        </span>
        <div className="member-copy">
          <div className="member-name-line">
            <strong>{member.name}</strong>
            <span className={`member-tag ${statusClass}`}>{member.state}</span>
          </div>
          <p>{member.note}</p>
        </div>
      </div>

      <div className="team-member-metric">
        <span>{member.detailLabel}</span>
        <strong>{member.detailValue}</strong>
        {member.progress ? (
          <div className="member-inline-progress">
            <div style={{ width: `${member.progress}%` }} />
          </div>
        ) : null}
      </div>

      <div className="team-member-actions">
        <span className={`remind-count ${statusClass}`}>{member.reminded}</span>
        {member.actions.length ? (
          <div className="member-action-row">
            {member.actions.map((action) => (
              <button className="mini-action-btn" key={action} type="button">
                {action}
              </button>
            ))}
          </div>
        ) : (
          <span className="mini-status-chip">已完成支持</span>
        )}
      </div>
    </div>
  );
}

function TeamMemberPanel() {
  return (
    <section className="panel team-member-panel">
      <div className="panel-head">
        <div className="panel-title text-only">
          <h2>成员列表（4/4）</h2>
        </div>
        <div className="team-meta-note">今日提醒次数：1/2</div>
      </div>

      <div className="team-member-list">
        {members.map((member) => (
          <TeamMemberRow key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}

function TeamToolsPanel() {
  return (
    <section className="team-tools-grid">
      <div className="panel tools-panel">
        <div className="panel-title text-only">
          <h2>轻提醒工具</h2>
          <small className="subtle">温和提醒，互相帮助，一起进步</small>
        </div>

        <div className="tool-card-grid">
          {teamTools.map((tool) => (
            <article className="tool-card" key={tool.title}>
              <span className="tool-icon">
                <ImgIcon src={tool.icon} alt="" className="tool-icon-image" />
              </span>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
              <span className="tool-remain">{tool.remain}</span>
            </article>
          ))}
        </div>
      </div>

      <aside className="panel tips-panel">
        <div className="panel-title text-only">
          <h2>提醒小贴士</h2>
        </div>
        <ul>
          <li>每位队友每天最多可被提醒 2 次</li>
          <li>提醒以鼓励为主，避免造成压力</li>
          <li>我们只展示任务完成状态，不比较学习成绩</li>
        </ul>
        <button className="text-link footer-left" type="button">
          了解更多规则
        </button>
      </aside>
    </section>
  );
}

function JoinOptionCard({ title, subtitle, headIcon, bullets, buttonLabel, linkLabel, accent, illustration }) {
  return (
    <article className={`join-option-card ${accent}`}>
      <div className="join-option-head">
        <span className="join-option-icon">
          <ImgIcon src={headIcon} alt="" className="join-option-icon-image" />
        </span>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <ul className="join-bullet-list">
        {bullets.map((bullet) => (
          <li key={bullet}>
            <span className="join-bullet-dot" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="join-illustration">
        <ImgIcon src={illustration} alt="" className="join-illustration-image" />
      </div>

      <button className={`join-main-btn ${accent}`} type="button">
        {buttonLabel}
      </button>
      <button className="text-link footer-link join-link" type="button">
        {linkLabel}
      </button>
    </article>
  );
}

function RuleCard({ icon, title, text }) {
  return (
    <div className="rule-card">
      <span className="rule-icon">
        <ImgIcon src={icon} alt="" className="rule-icon-image" />
      </span>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="faq-item">
      <div className="faq-question">
        <span className="faq-badge">Q</span>
        <strong>{q}</strong>
      </div>
      <p>{a}</p>
    </div>
  );
}

function JoinPage() {
  const leftFaq = [
    {
      q: "可以一个人先创建小队吗？",
      a: "可以！创建后可邀请好友加入，系统也会帮你匹配新成员。"
    },
    {
      q: "退出小队会有什么影响？",
      a: "退出后今日小队完成数据会更新，小队成员可重新拉你加入。"
    }
  ];

  const rightFaq = [
    {
      q: "中途可以换小队吗？",
      a: "可以的，每天有 1 次更换小队的机会。"
    },
    {
      q: "匹配到的队友不合适怎么办？",
      a: "可以随时退出并重新匹配，系统会为你推荐更合适的队友。"
    }
  ];

  return (
    <>
      <HeaderHero mode="join" />

      <section className="join-options-grid">
        <JoinOptionCard
          title="好友组队"
          subtitle="邀请好友一起，建立属于你们的小队"
          headIcon={iconJoinFriendsHead}
          bullets={["邀请 2-4 位好友", "一起完成每日学习任务", "互相鼓励，共同进步"]}
          buttonLabel="创建小队"
          linkLabel="输入邀请码加入"
          accent="purple"
          illustration={illustrationFriends}
        />
        <JoinOptionCard
          title="系统匹配"
          subtitle="系统为你匹配学习伙伴"
          headIcon={iconJoinRobotHead}
          bullets={["智能匹配学习节奏相近的同学", "快速找到适合你的小队", "共同目标，一起进步"]}
          buttonLabel="快速匹配"
          linkLabel="查看匹配规则"
          accent="blue"
          illustration={iconRobot}
        />
      </section>

      <section className="panel join-rules-panel">
        <div className="panel-title text-only">
          <h2>小队规则</h2>
        </div>

        <div className="rules-grid">
          <RuleCard icon={iconRuleTeam} title="3-5 人小队" text="每队 3-5 名同学，人数过多效果会降低哦" />
          <RuleCard icon={iconRuleShield} title="只看任务完成状态" text="小队内只展示任务完成状态，不展示成绩，轻松无压力" />
          <RuleCard icon={iconRuleBell} title="提醒次数有限制" text="每位队友每天最多可被提醒 2 次，避免打扰，友好提醒" />
          <RuleCard icon={iconRuleLock} title="保护隐私" text="不泄露任何个人学习数据，放心组队" />
        </div>
      </section>

      <section className="panel cold-start-panel">
        <div className="panel-title text-only">
          <h2>冷启动说明：先建立关系，再一起冲刺！</h2>
        </div>

        <div className="cold-start-grid">
          <div className="cold-stage">
            <div className="cold-stage-icon">
              <ImgIcon src={iconColdStart} alt="" className="cold-stage-image" />
            </div>
            <div>
              <h3>新组队阶段（前 7 天）</h3>
              <ul>
                <li>优先强调共同目标和习惯养成</li>
                <li>以系统鼓励和轻互动为主</li>
                <li>帮助大家熟悉节奏，建立信任</li>
              </ul>
            </div>
          </div>

          <div className="cold-arrow">→</div>

          <div className="cold-stage">
            <div className="cold-stage-icon">
              <ImgIcon src={iconColdStable} alt="" className="cold-stage-image" />
            </div>
            <div>
              <h3>稳定组队阶段（7 天后）</h3>
              <ul>
                <li>逐步解锁队友提醒和连胜目标</li>
                <li>强化小队荣誉感和轻竞争</li>
                <li>一起冲击更高的完成率</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="panel faq-panel">
        <div className="panel-title text-only">
          <h2>常见问题</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {leftFaq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <div className="faq-column">
            {rightFaq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="join-bottom-banner">
        <span>一起学习，一起进步，每一天都比昨天更好一点！</span>
      </section>
    </>
  );
}

function MessageHero() {
  return (
    <section className="message-hero">
      <div className="message-hero-copy">
        <div className="message-hero-title-row">
          <h1>消息</h1>
          <span className="message-hero-badge">轻消息</span>
        </div>
        <p>和小队伙伴、AI 队长一起交流，共同进步！</p>
        <span className="message-hero-underline" />
      </div>
      <div className="message-hero-art">
        <ImgIcon src={heroMessage} alt="" className="message-hero-image" />
      </div>
    </section>
  );
}

function ThreadList() {
  return (
    <section className="panel message-thread-panel">
      <div className="message-thread-tabs">
        <button className="message-tab active" type="button">
          全部
        </button>
        <button className="message-tab" type="button">
          小队消息
        </button>
        <button className="message-tab" type="button">
          系统通知
        </button>
        <button className="message-tab" type="button">
          提醒
        </button>
        <button className="message-filter-btn" type="button">
          <ImgIcon src={iconTabFilter} alt="" className="message-action-image" />
        </button>
      </div>

      <div className="message-thread-list">
        {messageThreads.map((thread) => (
          <article className={`message-thread-card ${thread.active ? "active" : ""}`} key={thread.id}>
            <div className="message-thread-avatar">
              <ImgIcon src={thread.avatar} alt="" className="message-thread-avatar-image" />
            </div>
            <div className="message-thread-copy">
              <div className="message-thread-top">
                <div className="message-thread-name-row">
                  <strong>{thread.name}</strong>
                  {thread.badge ? <span className="message-thread-badge">{thread.badge}</span> : null}
                </div>
                <span className="message-thread-time">{thread.time}</span>
              </div>
              <p>{thread.preview}</p>
            </div>
            {thread.unread ? <span className="message-unread-dot">{thread.unread}</span> : null}
          </article>
        ))}
      </div>

      <button className="message-archive-btn" type="button">
        查看已归档的消息
      </button>
    </section>
  );
}

function MessageWorkspace() {
  return (
    <section className="message-workspace">
      <div className="panel message-chat-panel">
        <div className="message-chat-header">
          <div className="message-chat-headline">
            <span className="message-thread-avatar group">
              <ImgIcon src={teamChatAvatar} alt="" className="message-thread-avatar-image" />
            </span>
            <div>
              <div className="message-thread-name-row">
                <strong>晚风冲刺队</strong>
                <span className="message-thread-badge">小队</span>
              </div>
              <p>4 名成员在线</p>
            </div>
          </div>

          <div className="message-chat-actions">
            <button className="message-circle-btn" type="button">
              <ImgIcon src={iconSearch} alt="" className="message-action-image" />
            </button>
            <button className="message-circle-btn" type="button">
              <ImgIcon src={iconMembers} alt="" className="message-action-image" />
            </button>
            <button className="message-circle-btn" type="button">
              <ImgIcon src={iconMore} alt="" className="message-action-image" />
            </button>
          </div>
        </div>

        <div className="message-announcement-bar">
          <span className="message-announcement-icon">
            <ImgIcon src={iconAnnounce} alt="" className="message-action-image" />
          </span>
          <p>小队公告：一起冲刺期末，保持连胜！</p>
          <button className="message-inline-arrow" type="button">
            查看
          </button>
        </div>

        <div className="message-chat-body">
          <div className="message-date-chip">今天 18:30</div>

          {chatMessages.map((message) => (
            <div className={`chat-row ${message.type}`} key={message.id}>
              {message.type === "incoming" ? (
                <>
                  <span className="chat-avatar">
                    <ImgIcon src={message.avatar} alt="" className="member-avatar-image" />
                  </span>
                  <div className="chat-bubble-wrap">
                    <span className="chat-author">{message.author}</span>
                    <div className="chat-bubble incoming">
                      <p>{message.text}</p>
                    </div>
                    {message.meta ? <span className="chat-meta incoming">{message.meta}</span> : null}
                  </div>
                  <span className="chat-time">{message.time}</span>
                </>
              ) : (
                <>
                  <div className="chat-bubble-wrap outgoing">
                    <span className="chat-author self">{message.author}</span>
                    <div className="chat-bubble outgoing">
                      <p>{message.text}</p>
                    </div>
                    {message.meta ? <span className="chat-meta outgoing">{message.meta}</span> : null}
                  </div>
                  <span className="chat-avatar">
                    <ImgIcon src={message.avatar} alt="" className="member-avatar-image" />
                  </span>
                </>
              )}
            </div>
          ))}

          <div className="message-recall-tip">
            <ImgIcon src={iconToolAi} alt="" className="message-recall-icon" />
            <span>AI 队长小伴 撤回了一条消息</span>
          </div>
        </div>

        <div className="message-composer">
          <div className="message-composer-actions">
            <button className="message-circle-btn" type="button">
              <ImgIcon src={iconSearch} alt="" className="message-action-image" />
            </button>
            <button className="message-circle-btn" type="button">
              <ImgIcon src={iconMembers} alt="" className="message-action-image" />
            </button>
          </div>
          <input className="message-input" placeholder="输入消息..." />
          <button className="message-send-btn" type="button">
            发送
          </button>
        </div>
      </div>

      <div className="message-side-column">
        <aside className="panel message-side-card">
          <div className="panel-title text-only">
            <h2>快捷功能</h2>
          </div>
          <div className="message-quick-list">
            {messageQuickActions.map((item) => (
              <button className="message-quick-item" key={item.title} type="button">
                <ImgIcon src={item.icon} alt="" className="message-quick-icon" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </aside>

        <aside className="panel message-side-card">
          <div className="panel-title text-only">
            <h2>小队状态</h2>
          </div>
          <div className="message-side-metric">
            <span>今日完成率</span>
            <div className="message-mini-ring">
              <div className="message-mini-ring-inner">
                <strong>75%</strong>
                <small>还差 1 人</small>
              </div>
            </div>
          </div>
          <div className="message-side-metric">
            <span>连胜天数</span>
            <div className="message-side-streak">
              <strong>6 天</strong>
              <ImgIcon src={iconMedal} alt="" className="message-side-medal" />
            </div>
          </div>
        </aside>

        <aside className="panel message-side-card">
          <div className="panel-title text-only">
            <h2>消息提示</h2>
          </div>
          <div className="message-hints">
            {messageHints.map((item) => (
              <div className="message-hint-row" key={item.text}>
                <ImgIcon src={item.icon} alt="" className="message-hint-icon" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function MessageTipBar() {
  return (
    <section className="message-tip-bar">
      <div className="message-tip-copy">
        <ImgIcon src={messageTipBulb} alt="" className="message-tip-bulb" />
        <div>
          <strong>温馨提示</strong>
          <p>善用鼓励和提醒，让小队氛围更温暖，一起进步更快乐！</p>
        </div>
      </div>
      <ImgIcon src={messageBirdFooter} alt="" className="message-tip-bird" />
    </section>
  );
}

function MessagePage() {
  return (
    <>
      <MessageHero />
      <section className="message-layout">
        <ThreadList />
        <MessageWorkspace />
      </section>
      <MessageTipBar />
    </>
  );
}

function ReviewEntry({ pathname, navigate }) {
  const [open, setOpen] = useState(false);
  const isReviewPage = pathname === "/dashboard" || pathname === "/strategy";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (isReviewPage) {
    return (
      <div className="top-utility">
        <button className="review-entry-btn return" onClick={() => navigate("/")} type="button">
          返回学生端
        </button>
      </div>
    );
  }

  return (
    <div className="top-utility">
      <div className={`review-entry ${open ? "open" : ""}`}>
        <button className="review-entry-btn" onClick={() => setOpen((v) => !v)} type="button">
          评审视角
        </button>
        {open ? (
          <div className="review-entry-menu">
            <button
              className="review-entry-item"
              onClick={() => {
                setOpen(false);
                navigate("/dashboard");
              }}
              type="button"
            >
              运营 Dashboard
            </button>
            <button
              className="review-entry-item"
              onClick={() => {
                setOpen(false);
                navigate("/strategy");
              }}
              type="button"
            >
              策略演示
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <>
      <section className="review-header">
        <div>
          <h1>运营 Dashboard</h1>
          <p>展示整体运营与学习效果的关键指标，用于评审理解方案价值。</p>
        </div>
        <div className="review-filters">
          <button className="review-filter-chip" type="button">
            2025-05-26
          </button>
          <button className="review-filter-chip" type="button">
            全部学校
          </button>
        </div>
      </section>

      <section className="panel dashboard-panel">
        <div className="panel-title text-only">
          <h2>运营 Dashboard</h2>
          <small className="subtle">数据更新时间：2025-05-26 10:00</small>
        </div>

        <div className="review-stat-grid">
          {dashboardStats.map((item) => (
            <article className="review-stat-card" key={item.title}>
              <span className="review-stat-title">{item.title}</span>
              <div className={`review-stat-icon ${item.tone}`}>
                {item.glyph ? (
                  <ReviewGlyph kind={item.glyph} />
                ) : (
                  <ImgIcon src={item.icon} alt="" className="review-stat-icon-image" />
                )}
              </div>
              <strong>{item.value}</strong>
              <p>{item.delta}</p>
            </article>
          ))}
        </div>

        <div className="review-chart-grid">
          <article className="review-chart-card">
            <div className="review-card-head">
              <h3>智能提醒打开率</h3>
              <span>32.7%</span>
            </div>
            <div className="review-single-metric">
              <div className="review-bell-circle">
                <ReviewGlyph kind="bell" />
              </div>
              <div>
                <strong>较昨日 ↑ 5.3%</strong>
                <p>个性化择时和小队提醒共同抬升打开率</p>
              </div>
            </div>
          </article>

          <article className="review-chart-card">
            <div className="review-card-head">
              <h3>各分层用户占比</h3>
            </div>
            <div className="review-segment-layout">
              <div className="review-donut">
                <div className="review-donut-inner">用户分层</div>
              </div>
              <div className="review-legend">
                <div className="review-legend-item">
                  <span className="review-dot purple" />
                  <span>自驱型用户</span>
                  <strong>35.6%</strong>
                </div>
                <div className="review-legend-item">
                  <span className="review-dot blue" />
                  <span>被动型用户</span>
                  <strong>41.2%</strong>
                </div>
                <div className="review-legend-item">
                  <span className="review-dot orange" />
                  <span>流失风险型</span>
                  <strong>23.2%</strong>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="review-chart-card full">
          <div className="review-card-head">
            <h3>预计完成率提升曲线</h3>
            <div className="review-line-legend">
              <span>
                <span className="review-line-marker primary" />
                使用智能提醒
              </span>
              <span>
                <span className="review-line-marker muted" />
                未使用智能提醒
              </span>
            </div>
          </div>

          <div className="review-line-chart">
            <div className="review-grid-lines" />
            <div className="review-line primary" />
            <div className="review-line muted" />
            <div className="review-axis-labels">
              <span>第 1 天</span>
              <span>第 2 天</span>
              <span>第 3 天</span>
              <span>第 4 天</span>
              <span>第 5 天</span>
              <span>第 6 天</span>
              <span>第 7 天</span>
            </div>
          </div>

          <div className="review-insight-banner">基于历史回测数据，使用智能提醒可提升预计完成率 23.6%</div>
        </article>
      </section>
    </>
  );
}

function StrategyPage() {
  const heatmapRowLabels = ["6-9点", "9-12点", "12-15点", "15-18点", "18-21点", "21-24点"];
  const heatmapDayLabels = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const heatmapRows = [
    [0.2, 0.3, 0.35, 0.6, 0.25, 0.2, 0.15],
    [0.15, 0.4, 0.48, 0.75, 0.35, 0.25, 0.2],
    [0.12, 0.25, 0.35, 0.45, 0.22, 0.2, 0.15],
    [0.15, 0.28, 0.4, 0.52, 0.26, 0.22, 0.18],
    [0.2, 0.32, 0.45, 0.35, 0.3, 0.28, 0.7],
    [0.12, 0.2, 0.25, 0.32, 0.28, 0.2, 0.18]
  ];

  return (
    <>
      <section className="review-header">
        <div>
          <h1>智能提醒策略演示</h1>
          <p>展示单个学生的分层结果与提醒策略，解释智能提醒如何从数据走到策略输出。</p>
        </div>
        <div className="review-filters">
          <button className="review-filter-chip" type="button">
            选择学生：林秋
          </button>
        </div>
      </section>

      <section className="panel strategy-panel">
        <div className="strategy-student-header">
          <div className="strategy-student-main">
            <span className="strategy-student-avatar">林</span>
            <div>
              <div className="message-thread-name-row">
                <strong>林秋</strong>
                <span className="message-thread-badge">初二（3）班</span>
              </div>
              <p>学号：20240215 ｜ 加入小队：晚风冲刺队</p>
            </div>
          </div>
          <div className="strategy-state-chip">今日状态：已完成任务</div>
        </div>

        <div className="strategy-top-grid">
          <article className="review-chart-card">
            <div className="review-card-head">
              <h3>历史活跃时段画像</h3>
            </div>
            <div className="strategy-heatmap-board">
              <div className="strategy-heatmap-yaxis">
                {heatmapRowLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <div className="strategy-heatmap-content">
                <div className="strategy-heatmap">
                  {heatmapRows.map((row, rowIndex) => (
                    <div className="strategy-heatmap-row" key={heatmapRowLabels[rowIndex]}>
                      {row.map((value, cellIndex) => (
                        <span
                          className="strategy-heatmap-cell"
                          key={`${rowIndex}-${cellIndex}`}
                          style={{ opacity: value }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="strategy-heatmap-days">
                  {heatmapDayLabels.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="strategy-scale">
              <span>低活跃</span>
              <span>高活跃</span>
            </div>
          </article>

          <article className="review-chart-card centered">
            <div className="review-card-head">
              <h3>当前分层结果</h3>
            </div>
            <div className="strategy-layer-card">
              <div className="strategy-layer-badge">
                <ReviewGlyph kind="user-layer" />
              </div>
              <strong>被动型用户</strong>
              <p>有学习习惯，但完成率不稳定，需要外部提醒推动。</p>
            </div>
          </article>

          <article className="review-chart-card centered">
            <div className="review-card-head">
              <h3>今日完成情况</h3>
            </div>
            <div className="message-mini-ring large">
              <div className="message-mini-ring-inner">
                <strong>2/4</strong>
                <small>已完成任务数</small>
              </div>
            </div>
            <p className="strategy-progress-copy">完成率 50%</p>
          </article>
        </div>

        <article className="review-chart-card full">
          <div className="review-card-head">
            <h3>当前推荐提醒策略</h3>
          </div>

          <div className="strategy-card-grid">
            {strategyOptions.map((item) => (
              <article className={`strategy-option-card ${item.accent}`} key={item.title}>
                <div className="strategy-option-icon">
                  {item.glyph ? (
                    <ReviewGlyph kind={item.glyph} />
                  ) : (
                    <ImgIcon src={item.icon} alt="" className="review-stat-icon-image" />
                  )}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span>{item.priority}</span>
              </article>
            ))}
          </div>

          <div className="review-insight-banner">
            策略说明：根据该学生的活跃时段、历史完成率和小队进度，优先使用系统 Push 提醒；若未打开，将逐步升级触达方式。
          </div>
        </article>
      </section>
    </>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <HeaderHero mode="home" />
      <StatCards stats={homeStats} />

      <section className="content-grid">
        <div className="left-column">
          <TaskPanel />
        </div>

        <div className="right-column">
          <TeamPanel navigate={navigate} />
          <ReminderPanel />
        </div>
      </section>

      <RewardBar />
    </>
  );
}

function TeamPage() {
  return (
    <>
      <HeaderHero mode="team" />
      <StatCards stats={teamStats} />
      <TeamMemberPanel />
      <TeamToolsPanel />
      <RewardBar teamMode />
    </>
  );
}

function App() {
  const { pathname, navigate } = usePathname();

  return (
    <div className="app-shell">
      <Sidebar pathname={pathname} navigate={navigate} />

      <main className="main-content">
        <ReviewEntry pathname={pathname} navigate={navigate} />
        {pathname === "/dashboard" ? (
          <DashboardPage />
        ) : pathname === "/strategy" ? (
          <StrategyPage />
        ) : pathname === "/team" ? (
          <TeamPage />
        ) : pathname === "/join" ? (
          <JoinPage />
        ) : pathname === "/messages" ? (
          <MessagePage />
        ) : (
          <HomePage navigate={navigate} />
        )}
      </main>
    </div>
  );
}

export default App;
