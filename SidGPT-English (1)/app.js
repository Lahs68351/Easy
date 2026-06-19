/* ==========================================
   SidGPT ENGLISH — Complete Application
   ========================================== */

// =================== CONSTANTS ===================

const MODELS = [
  { id:'llama-3.3-70b-versatile', name:'Llama 3.3 70B', desc:'Best overall quality — recommended for all lessons', quality:5, speed:3, rec:true },
  { id:'llama-3.1-70b-versatile', name:'Llama 3.1 70B', desc:'Excellent all-round performance', quality:5, speed:3, rec:false },
  { id:'deepseek-r1-distill-llama-70b', name:'DeepSeek R1 70B', desc:'Advanced reasoning & analysis', quality:5, speed:2, rec:false },
  { id:'llama-3.2-90b-text-preview', name:'Llama 3.2 90B', desc:'Frontier quality, large context', quality:5, speed:2, rec:false },
  { id:'qwen-qwq-32b', name:'Qwen QwQ 32B', desc:'Strong reasoning and comprehension', quality:4, speed:3, rec:false },
  { id:'mixtral-8x7b-32768', name:'Mixtral 8x7B', desc:'Great for long content, 32K context', quality:4, speed:4, rec:false },
  { id:'llama-3.2-11b-text-preview', name:'Llama 3.2 11B', desc:'Balanced performance, mid-tier speed', quality:4, speed:4, rec:false },
  { id:'llama3-70b-8192', name:'Llama 3 70B', desc:'Powerful classic, large context', quality:4, speed:3, rec:false },
  { id:'gemma2-9b-it', name:'Gemma 2 9B', desc:"Google's efficient instruction model", quality:3, speed:4, rec:false },
  { id:'llama3-8b-8192', name:'Llama 3 8B', desc:'Fast and efficient responses', quality:3, speed:5, rec:false },
  { id:'llama-3.2-3b-preview', name:'Llama 3.2 3B', desc:'Ultra-fast, lightweight tasks', quality:2, speed:5, rec:false },
  { id:'llama-3.1-8b-instant', name:'Llama 3.1 8B Instant', desc:'Maximum speed, lower quality', quality:2, speed:5, rec:false },
  { id:'gemma-7b-it', name:'Gemma 7B', desc:'Lightweight Google model', quality:3, speed:4, rec:false },
];

const ACHIEVEMENTS = [
  { id:'first_steps',    name:'First Steps',        desc:'Complete your first lesson',            icon:'🌟', xp:50  },
  { id:'bookworm',       name:'Bookworm',            desc:'Complete 5 reading passages',           icon:'📖', xp:75  },
  { id:'reading_champ',  name:'Reading Champion',    desc:'Complete 20 reading passages',          icon:'📚', xp:200 },
  { id:'word_collector', name:'Word Collector',      desc:'Learn 24 vocabulary words',             icon:'🔤', xp:75  },
  { id:'vocab_master',   name:'Vocabulary Master',   desc:'Learn 80 vocabulary words',             icon:'🎓', xp:200 },
  { id:'grammar_novice', name:'Grammar Novice',      desc:'Complete 3 grammar lessons',            icon:'✏️', xp:50  },
  { id:'grammar_wizard', name:'Grammar Wizard',      desc:'Complete 15 grammar lessons',           icon:'🧙', xp:200 },
  { id:'first_essay',    name:'Wordsmith',           desc:'Write your first essay',                icon:'✍️', xp:75  },
  { id:'prolific_writer',name:'Prolific Writer',     desc:'Write 10 essays',                       icon:'📝', xp:200 },
  { id:'streak_3',       name:'On a Roll',           desc:'Study 3 days in a row',                 icon:'🔥', xp:50  },
  { id:'streak_7',       name:'Week Warrior',        desc:'Study 7 days in a row',                 icon:'⚡', xp:150 },
  { id:'streak_30',      name:'Month Master',        desc:'Study 30 days in a row',                icon:'💎', xp:500 },
  { id:'boss_slayer',    name:'Boss Slayer',         desc:'Defeat your first Boss Challenge',      icon:'⚔️', xp:150 },
  { id:'boss_veteran',   name:'Boss Veteran',        desc:'Defeat 5 Boss Challenges',              icon:'🐉', xp:300 },
  { id:'level_5',        name:'Knowledge Seeker',    desc:'Reach Level 5',                         icon:'🌠', xp:100 },
  { id:'level_10',       name:'Language Master',     desc:'Reach Level 10',                        icon:'👑', xp:250 },
  { id:'perfect_score',  name:'Flawless',            desc:'Score 100% on any quiz',                icon:'💯', xp:100 },
  { id:'summer_scholar', name:'Summer Scholar',      desc:'Use Summer Bridge Mode for 3 sessions', icon:'🌉', xp:100 },
  { id:'xp_500',         name:'XP Grinder',          desc:'Earn 500 total XP',                     icon:'✨', xp:50  },
  { id:'xp_2000',        name:'English Legend',      desc:'Earn 2000 total XP',                    icon:'🏆', xp:200 },
];

const LEVEL_NAMES = [
  '','Explorer','Reader','Story Hunter','Word Warrior','Knowledge Seeker',
  'Phrase Pilot','Grammar Scout','Inference Ace','Prose Pioneer','Language Master',
  'Vocab Vanguard','Reading Ranger','Essay Artisan','Critical Thinker','Grammar Guardian',
  'Writing Wizard','Literary Lancer','Academic Ace','Lexicon Lord','Syntax Sage',
  'Rhetoric Ranger','Composition King','Narrative Noble','Eloquence Elite','English Champion',
  'Discourse Duke','Narrative Knight','Composition Count','Writing Sovereign','Eloquence Elder',
  'Literary Lord','Grammar Grand','Prose Prince','Inference Imperial','Lexicon Legend',
  'Rhetoric Royal','Academic Apex','Language Legend','Verse Viscount','Syntax Supreme',
  'Essay Emperor','Story Sovereign','Grammar Grand Master','Reading Royal','Writing Warlord',
  'Vocab Viceroy','Prose Paramount','Inference Immortal','Language Luminary','SidGPT Legend'
];

const BOSSES = [
  { name:'The Grammar Goblin',         art:'👺', lore:'A mischievous creature that scrambles sentences and confuses students who don\'t know their grammar rules.' },
  { name:'The Vocabulary Viper',        art:'🐍', lore:'A cunning serpent whose scales are made of words no ordinary student can understand. Know your words!' },
  { name:'The Reading Riddle Sphinx',   art:'🦁', lore:'An ancient guardian who only lets true readers pass. Answer its riddles correctly to move forward.' },
  { name:'The Writing Wraith',          art:'👻', lore:'A spectral entity that haunts blank pages and unfinished essays. Only strong writers can defeat it.' },
  { name:'The Inference Illusionist',   art:'🎩', lore:'A master of misdirection. Look beyond the words — the truth is always hidden between the lines.' },
  { name:'The English Dragon',          art:'🐉', lore:'The ultimate final boss. Centuries of language knowledge compressed into one legendary challenge. Legends only.' },
];

const QUEST_TEMPLATES = [
  { id:'q_read',    title:'Reading Explorer',  desc:'Complete a reading passage',      icon:'📖', xp:20, type:'reading'    },
  { id:'q_vocab',   title:'Word Collector',    desc:'Finish a vocabulary set',          icon:'📚', xp:15, type:'vocabulary' },
  { id:'q_grammar', title:'Grammar Guru',      desc:'Complete a grammar lesson',        icon:'✏️', xp:15, type:'grammar'    },
  { id:'q_write',   title:'Storyteller',       desc:'Submit a writing response',        icon:'✍️', xp:25, type:'writing'    },
];

const SID_MSGS = {
  morning: ['Good morning! Your brain is freshest right now — let\'s crush it! ☀️','Rise and shine! A new day, a new chance to level up. Let\'s go! 💪'],
  afternoon: ['Perfect afternoon for some learning! What skill shall we sharpen? 🧠','Afternoon energy activated! Let\'s make progress together! ⚡'],
  evening: ['Evening study session? That\'s the mark of a true champion! 🌙','The dedicated ones study even in the evening. You\'re special! 🌟'],
  no_key: ['Add your Groq API key in ⚙️ Settings to unlock all the AI magic! 🔑'],
  boss: ['A Boss Challenge is ready! Are you brave enough to face it? ⚔️'],
  streak_high: ['Your streak is LEGENDARY! Nothing can stop you now! 🔥🔥'],
  default: ['Ready to learn something amazing today? Let\'s dive in! 🎯','Every word you learn is a new superpower. What\'s next? 📚','Consistency is the key to mastery. You\'re doing great! ✨'],
};

// =================== STORAGE ===================

const SK = {
  PROFILE:'sidgpt_profile', PROGRESS:'sidgpt_progress', SETTINGS:'sidgpt_settings',
  ACH:'sidgpt_ach', STATS:'sidgpt_stats', HISTORY:'sidgpt_history',
  QUESTS:'sidgpt_quests', BOSS_HIST:'sidgpt_boss_hist', SETUP:'sidgpt_setup',
};

const lsGet = (k, def={}) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

const getProfile   = () => lsGet(SK.PROFILE,  { name:'Student', grade:6 });
const setProfile   = d  => lsSet(SK.PROFILE, d);
const getProgress  = () => lsGet(SK.PROGRESS, { totalXP:0, streak:0, lastDate:'', longestStreak:0 });
const setProgress  = d  => lsSet(SK.PROGRESS, d);
const getSettings  = () => lsGet(SK.SETTINGS, { apiKey:'', model:'llama-3.3-70b-versatile', bridge:false });
const setSettings  = d  => lsSet(SK.SETTINGS, d);
const getAch       = () => lsGet(SK.ACH,      { earned:[] });
const setAch       = d  => lsSet(SK.ACH, d);
const getStats     = () => lsGet(SK.STATS,    { totalActivities:0, readingPassages:0, vocabWords:0, grammarLessons:0, essays:0, bossesDefeated:0, perfectScores:0, bridgeDays:0, correctAnswers:0, totalAnswers:0 });
const setStats     = d  => lsSet(SK.STATS, d);
const getHistory   = () => lsGet(SK.HISTORY,  []);
const getQuests    = () => lsGet(SK.QUESTS,   { date:'', quests:[] });
const setQuests    = d  => lsSet(SK.QUESTS, d);
const getBossHist  = () => lsGet(SK.BOSS_HIST,[]);
const setBossHist  = d  => lsSet(SK.BOSS_HIST, d);

function addHistory(entry) {
  const h = getHistory();
  h.push({ ...entry, ts: Date.now() });
  lsSet(SK.HISTORY, h.slice(-90));
}

// =================== STATE ===================

const S = {
  currentView: 'dashboard',
  reading: { genre:'any', data:null, answers:{} },
  vocab: { theme:'any', words:[], idx:0, flipped:false, quizAnswers:[] },
  grammar: { topic:'any', data:null, answers:{} },
  writing: { type:'any', prompt:null },
  boss: { data:null, stage:0, scores:[], bossIdx:0 },
  charts: {},
};

// =================== INIT ===================

document.addEventListener('DOMContentLoaded', init);

function init() {
  if (!lsGet(SK.SETUP, null)) {
    document.getElementById('onboarding').style.display = 'flex';
    document.getElementById('app').classList.add('hidden');
  } else {
    document.getElementById('onboarding').style.display = 'none';
    startApp();
  }
}

function startApp() {
  document.getElementById('onboarding').style.display = 'none';
  document.getElementById('app').classList.remove('hidden');
  updateStreak();
  updateXPDisplay();
  populateDashboard();
  syncBridgeToggle();
  checkBossAvailable();
}

function updateStreak() {
  const p = getProgress();
  const today = dateStr(new Date());
  if (p.lastDate === today) return;
  const yesterday = dateStr(new Date(Date.now() - 86400000));
  if (p.lastDate === yesterday) {
    p.streak = (p.streak || 0) + 1;
    p.longestStreak = Math.max(p.longestStreak || 0, p.streak);
    if (p.streak > 1) showToast(`🔥 ${p.streak}-day streak! Keep it up!`, 'info', 3000);
  } else if (p.lastDate !== today) {
    if (p.lastDate && p.lastDate !== yesterday) p.streak = 1;
    else if (!p.lastDate) p.streak = 1;
  }
  p.lastDate = today;
  setProgress(p);
  checkAchievements();
}

function markActivityToday() {
  const p = getProgress();
  const today = dateStr(new Date());
  if (p.lastDate !== today) {
    p.lastDate = today;
    p.streak = (p.streak || 0) + 1;
    p.longestStreak = Math.max(p.longestStreak || 0, p.streak);
    setProgress(p);
    checkAchievements();
  }
}

// =================== ONBOARDING ===================

const OB = { step:1, name:'', grade:0, key:'' };

function obNext() {
  if (OB.step === 2) {
    const n = document.getElementById('ob-name-input').value.trim();
    if (!n) { showToast('Please enter your name', 'error'); return; }
    OB.name = n;
  }
  if (OB.step === 3 && !OB.grade) { showToast('Please select a grade', 'error'); return; }
  if (OB.step >= 5) return;
  OB.step++;
  obShowStep(OB.step);
  if (OB.step === 5) {
    document.getElementById('ob-ready-name').textContent = OB.name || 'Explorer';
    document.getElementById('ob-ready-grade').textContent = OB.grade || 6;
  }
}

function obBack() {
  if (OB.step <= 1) return;
  OB.step--;
  obShowStep(OB.step);
}

function obShowStep(n) {
  document.querySelectorAll('.ob-step').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('ob' + n);
  if (el) el.classList.add('active');
}

function obSelectGrade(g, el) {
  OB.grade = g;
  document.querySelectorAll('.grade-opt').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('ob-grade-btn').disabled = false;
}

function obSkipKey() { OB.key = ''; OB.step++; obShowStep(OB.step); document.getElementById('ob-ready-name').textContent = OB.name || 'Explorer'; document.getElementById('ob-ready-grade').textContent = OB.grade || 6; }

function obSaveKey() {
  const k = document.getElementById('ob-key-input').value.trim();
  OB.key = k;
  obNext();
}

function obComplete() {
  const p = { name: OB.name || 'Student', grade: OB.grade || 6 };
  setProfile(p);
  if (OB.key) { const s = getSettings(); s.apiKey = OB.key; setSettings(s); }
  lsSet(SK.SETUP, true);
  startApp();
}

// =================== NAVIGATION ===================

function navigate(view) {
  const prev = S.currentView;
  S.currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  if (el) { el.classList.remove('hidden'); el.classList.add('active'); }
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
  document.querySelectorAll(`.nav-link[data-view="${view}"]`).forEach(n => n.classList.add('active'));
  document.querySelectorAll('.bn-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll(`.bn-btn[data-view="${view}"]`).forEach(b => b.classList.add('active'));
  onViewEnter(view);
  // close mobile sidebar
  const sb = document.getElementById('sidebar');
  if (sb.classList.contains('mob-open')) { sb.classList.remove('mob-open'); document.querySelector('.sidebar-backdrop')?.remove(); }
  // scroll to top
  document.getElementById('main').scrollTo(0, 0);
}

function onViewEnter(view) {
  const p = getProfile();
  if (view === 'dashboard') populateDashboard();
  if (view === 'reading')   { setText('r-grade', p.grade); }
  if (view === 'vocabulary'){ setText('v-grade', p.grade); }
  if (view === 'grammar')   { setText('g-grade', p.grade); }
  if (view === 'writing')   { setText('w-grade', p.grade); }
  if (view === 'boss-challenge') populateBossIntro();
  if (view === 'achievements')   renderAchievements();
  if (view === 'progress')       setTimeout(populateProgress, 100);
  if (view === 'settings')       populateSettings();
}

// =================== DASHBOARD ===================

function populateDashboard() {
  const p = getProfile(); const prog = getProgress(); const stats = getStats();
  const ach = getAch();
  setText('nav-nm', p.name || 'Student');
  setText('nav-av', (p.name || 'S')[0].toUpperCase());
  const lv = getLevel(prog.totalXP);
  setText('nav-lv', `Lv ${lv} · ${getLevelName(lv)}`);
  setText('nav-streak', prog.streak || 0);
  setText('tb-streak', prog.streak || 0);
  setText('tb-xp', prog.totalXP || 0);
  setText('dash-grade-pill', `Grade ${p.grade}`);
  const h = new Date().getHours();
  const greet = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  setText('dash-greeting', `${greet}, ${p.name || 'Explorer'}! 👋`);
  setText('dash-sub', getBridgeSub(p.grade));
  updateDashboardStats();
  loadQuests();
  updateSidMessage();
  updateBridgeCard();
  checkBossAvailable();
}

function updateDashboardStats() {
  const prog = getProgress(); const ach = getAch(); const stats = getStats();
  const lv = getLevel(prog.totalXP);
  setText('sc-level', lv);
  setText('sc-level-name', getLevelName(lv));
  setText('sc-xp', prog.totalXP || 0);
  setText('sc-streak', prog.streak || 0);
  setText('sc-badges', (ach.earned || []).length);
  updateXPDisplay();
}

function getBridgeSub(grade) {
  const s = getSettings();
  if (s.bridge) return `Summer Bridge Mode — preparing for Grade ${grade + 1}`;
  return `Grade ${grade} · Let's make today count.`;
}

function updateSidMessage() {
  const settings = getSettings(); const p = getProgress(); const prog = getProgress();
  let msgs = SID_MSGS.default;
  if (!settings.apiKey) msgs = SID_MSGS.no_key;
  else if ((prog.streak || 0) >= 7) msgs = SID_MSGS.streak_high;
  else {
    const h = new Date().getHours();
    msgs = h < 12 ? SID_MSGS.morning : h < 18 ? SID_MSGS.afternoon : SID_MSGS.evening;
  }
  setText('sid-msg', msgs[Math.floor(Math.random() * msgs.length)]);
}

function updateBridgeCard() {
  const s = getSettings(); const p = getProfile();
  setText('bridge-desc', `Prepare for Grade ${p.grade + 1} — 70% current, 30% next-grade content`);
  document.getElementById('bridge-toggle').checked = !!s.bridge;
}

function checkBossAvailable() {
  const stats = getStats();
  const total = (stats.readingPassages||0)+(stats.grammarLessons||0)+(stats.essays||0)+(Math.floor((stats.vocabWords||0)/8));
  const defeated = stats.bossesDefeated || 0;
  const nextBossAt = (defeated + 1) * 5;
  const available = total >= nextBossAt;
  const dot = document.getElementById('boss-dot');
  const alert = document.getElementById('boss-alert');
  if (available) {
    dot?.classList.remove('hidden');
    alert?.classList.remove('hidden');
    const bIdx = defeated % BOSSES.length;
    setText('boss-alert-name', `${BOSSES[bIdx].art} ${BOSSES[bIdx].name} awaits your challenge`);
  } else {
    dot?.classList.add('hidden');
    alert?.classList.add('hidden');
  }
}

// =================== DAILY QUESTS ===================

function loadQuests() {
  const today = dateStr(new Date());
  let q = getQuests();
  if (q.date !== today) {
    q = { date: today, quests: QUEST_TEMPLATES.map(t => ({ ...t, done: false })) };
    setQuests(q);
  }
  renderQuests(q.quests);
}

function renderQuests(quests) {
  const grid = document.getElementById('quests-grid');
  if (!grid) return;
  const done = quests.filter(q => q.done).length;
  setText('quest-chip', `${done} / ${quests.length}`);
  grid.innerHTML = quests.map(q => `
    <div class="quest-card ${q.done ? 'done' : ''}">
      <div class="qc-icon">${q.icon}</div>
      <div class="qc-body">
        <div class="qc-title">${q.title}</div>
        <div class="qc-desc">${q.desc}</div>
        <span class="qc-xp">+${q.xp} XP</span>
      </div>
      <div class="qc-done">${q.done ? '✅' : ''}</div>
    </div>
  `).join('');
}

function completeQuest(type) {
  const today = dateStr(new Date());
  let q = getQuests();
  if (q.date !== today) return;
  const quest = q.quests.find(qt => qt.type === type && !qt.done);
  if (!quest) return;
  quest.done = true;
  setQuests(q);
  renderQuests(q.quests);
  addXP(quest.xp, `${quest.title} quest complete!`);
  showToast(`✅ Quest Complete: ${quest.title}!`, 'success', 3000);
}

// =================== AI / GROQ ===================

async function callGroq(userMsg, sysMsg='', parseJSON=false) {
  const s = getSettings();
  if (!s.apiKey) throw new Error('NO_KEY');
  const body = {
    model: s.model || 'llama-3.3-70b-versatile',
    messages: [...(sysMsg ? [{ role:'system', content:sysMsg }] : []), { role:'user', content:userMsg }],
    temperature: 0.7,
    max_tokens: 2500,
  };
  if (parseJSON) body.response_format = { type:'json_object' };
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method:'POST',
    headers:{ 'Authorization':`Bearer ${s.apiKey}`, 'Content-Type':'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    if (res.status === 401) throw new Error('Invalid API key. Check Settings → API Key.');
    if (res.status === 429) throw new Error('Rate limit reached. Please wait a moment and try again.');
    throw new Error(err.error?.message || `API error (${res.status})`);
  }
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content || '';
  return parseJSON ? parseJSONRobust(text) : text;
}

function parseJSONRobust(text) {
  try { return JSON.parse(text); } catch {}
  const cb = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (cb) try { return JSON.parse(cb[1].trim()); } catch {}
  const obj = text.match(/\{[\s\S]*\}/);
  if (obj) try { return JSON.parse(obj[0]); } catch {}
  throw new Error('Could not parse AI response. Please try again.');
}

function getGradeContext() {
  const p = getProfile(); const s = getSettings();
  const g = parseInt(p.grade) || 6;
  if (s.bridge) {
    return { grade:g, isBridge:true, instruction:`Grade ${g} student in Summer Bridge Mode (preparing for Grade ${g+1}). Generate content that is 70% Grade ${g} appropriate and 30% Grade ${g+1} appropriate to gently challenge and prepare them.` };
  }
  return { grade:g, isBridge:false, instruction:`Grade ${g} student. Content, vocabulary, and sentence complexity must be appropriate for Grade ${g}.` };
}

function handleAPIError(e) {
  hideLoading();
  if (e.message === 'NO_KEY') {
    showToast('🔑 No API key set. Go to Settings to add your Groq key.', 'warn', 5000);
  } else {
    showToast('❌ ' + (e.message || 'AI error. Please try again.'), 'error', 5000);
  }
}

function showLoading(msg='Sid is thinking…') {
  setText('loading-msg', msg);
  document.getElementById('loading-ol').classList.remove('hidden');
}
function hideLoading() {
  document.getElementById('loading-ol').classList.add('hidden');
}

// =================== XP & LEVELS ===================

function addXP(amount, label='') {
  if (!amount || amount <= 0) return;
  const prog = getProgress();
  const oldLv = getLevel(prog.totalXP);
  prog.totalXP = (prog.totalXP || 0) + amount;
  setProgress(prog);
  const newLv = getLevel(prog.totalXP);
  updateXPDisplay();
  updateDashboardStats();
  if (newLv > oldLv) setTimeout(() => showLevelUp(newLv), 600);
  markActivityToday();
  addHistory({ type:'xp', label: label || '+' + amount + ' XP', xp: amount });
  checkAchievements();
}

function getLevel(xp) { return Math.min(50, Math.floor((xp || 0) / 100) + 1); }
function getLevelName(lv) { return LEVEL_NAMES[Math.min(lv, 50)] || 'SidGPT Legend'; }

function getLevelProgress(xp) {
  const lv = getLevel(xp);
  const lvXP = (xp || 0) % 100;
  return { lv, lvXP, toNext: 100 - lvXP, pct: lvXP };
}

function updateXPDisplay() {
  const prog = getProgress();
  const { lv, lvXP, toNext, pct } = getLevelProgress(prog.totalXP);
  setText('nav-xp-cur', `${prog.totalXP || 0} XP`);
  setText('nav-xp-nxt', `→ ${(lv) * 100}`);
  const fill = document.getElementById('nav-xp-fill');
  if (fill) fill.style.width = pct + '%';
  setText('tb-xp', prog.totalXP || 0);
  setText('tb-streak', prog.streak || 0);
  setText('nav-streak', prog.streak || 0);
}

function showLevelUp(lv) {
  setText('lu-num', lv);
  setText('lu-name', getLevelName(lv));
  const pop = document.getElementById('lu-popup');
  pop.classList.remove('hidden');
  showToast(`🎉 LEVEL UP! You are now Level ${lv} — ${getLevelName(lv)}!`, 'success', 4000);
  setTimeout(() => pop.classList.add('hidden'), 3500);
}

// =================== ACHIEVEMENTS ===================

function checkAchievements() {
  const stats = getStats(); const prog = getProgress(); const ach = getAch();
  const earned = new Set(ach.earned || []);
  const checks = [
    ['first_steps',    () => stats.totalActivities >= 1],
    ['bookworm',       () => stats.readingPassages >= 5],
    ['reading_champ',  () => stats.readingPassages >= 20],
    ['word_collector', () => stats.vocabWords >= 24],
    ['vocab_master',   () => stats.vocabWords >= 80],
    ['grammar_novice', () => stats.grammarLessons >= 3],
    ['grammar_wizard', () => stats.grammarLessons >= 15],
    ['first_essay',    () => stats.essays >= 1],
    ['prolific_writer',() => stats.essays >= 10],
    ['streak_3',       () => (prog.streak||0) >= 3],
    ['streak_7',       () => (prog.streak||0) >= 7],
    ['streak_30',      () => (prog.streak||0) >= 30],
    ['boss_slayer',    () => stats.bossesDefeated >= 1],
    ['boss_veteran',   () => stats.bossesDefeated >= 5],
    ['level_5',        () => getLevel(prog.totalXP) >= 5],
    ['level_10',       () => getLevel(prog.totalXP) >= 10],
    ['perfect_score',  () => stats.perfectScores >= 1],
    ['summer_scholar', () => stats.bridgeDays >= 3],
    ['xp_500',         () => (prog.totalXP||0) >= 500],
    ['xp_2000',        () => (prog.totalXP||0) >= 2000],
  ];
  let newOnes = [];
  checks.forEach(([id, fn]) => { if (!earned.has(id) && fn()) { earned.add(id); newOnes.push(id); } });
  if (newOnes.length) {
    ach.earned = [...earned];
    setAch(ach);
    newOnes.forEach((id, i) => {
      const def = ACHIEVEMENTS.find(a => a.id === id);
      if (!def) return;
      setTimeout(() => showAchievementPopup(def), i * 1200);
      // Award achievement XP silently
      const p2 = getProgress(); p2.totalXP = (p2.totalXP||0) + def.xp; setProgress(p2);
      updateXPDisplay();
    });
  }
}

function showAchievementPopup(ach) {
  setText('ap-badge', ach.icon); setText('ap-name', ach.name); setText('ap-xp', `+${ach.xp} XP`);
  const pop = document.getElementById('ach-popup');
  pop.classList.remove('hidden');
  setTimeout(() => { pop.style.animation = 'slideOutRight 0.3s ease forwards'; setTimeout(() => { pop.classList.add('hidden'); pop.style.animation = ''; }, 300); }, 3500);
}

function renderAchievements() {
  const earned = new Set((getAch().earned || []));
  const total = ACHIEVEMENTS.length;
  setText('ach-count', earned.size); setText('ach-total', total);
  const grid = document.getElementById('ach-grid');
  if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="ach-card ${earned.has(a.id) ? 'earned' : 'locked'}">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
      <div class="ach-xp">+${a.xp} XP</div>
      ${earned.has(a.id) ? '<div class="ach-earned-tag">✓ Earned</div>' : ''}
    </div>
  `).join('');
}

// =================== READING ===================

async function genReading() {
  const ctx = getGradeContext();
  const genre = document.querySelector('#r-genre-grid .pick-btn.active')?.dataset.val || 'any';
  const genreInstr = genre === 'any' ? 'Choose an interesting genre (narrative, informational, science, history, mystery, or adventure)' : `Genre: ${genre}`;
  showLoading('Generating your reading passage…');
  try {
    const data = await callGroq(`Generate a reading comprehension passage.
Student context: ${ctx.instruction}
${genreInstr}

Return ONLY valid JSON with this exact structure:
{
  "title": "Engaging title",
  "genre": "chosen genre",
  "passage": "Full 4-5 paragraph passage. Use \\n\\n to separate paragraphs. Make it engaging and educational.",
  "vocabulary": [
    {"word": "word1", "definition": "clear definition appropriate for the grade"},
    {"word": "word2", "definition": "definition"},
    {"word": "word3", "definition": "definition"}
  ],
  "questions": [
    {"id":1,"question":"Literal comprehension question about specific facts in the passage","type":"mc","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"A","skill":"Literal","explanation":"Why A is correct"},
    {"id":2,"question":"Inferential question requiring reading between the lines","type":"mc","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"B","skill":"Inferential","explanation":"Why B is correct"},
    {"id":3,"question":"Critical thinking or author's purpose question","type":"mc","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"C","skill":"Critical Thinking","explanation":"Why C is correct"},
    {"id":4,"question":"Another comprehension question testing detail recall","type":"mc","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"D","skill":"Literal","explanation":"Why D is correct"},
    {"id":5,"question":"Vocabulary-in-context or inference question","type":"mc","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"A","skill":"Vocabulary","explanation":"Why A is correct"}
  ]
}`, '', true);
    hideLoading();
    S.reading.data = data;
    S.reading.answers = {};
    renderReading(data);
  } catch(e) { handleAPIError(e); }
}

function renderReading(d) {
  show('r-content'); hide('r-home');
  setText('r-title', d.title || 'Reading Passage');
  setText('r-genre-tag', d.genre || 'Passage');
  setText('r-grade-tag', 'Grade ' + getGradeContext().grade);
  const textEl = document.getElementById('r-text');
  if (textEl) textEl.innerHTML = (d.passage || '').split('\n\n').map(p => `<p>${p}</p>`).join('');
  const chipsEl = document.getElementById('r-vocab-chips');
  if (chipsEl && d.vocabulary) {
    chipsEl.innerHTML = d.vocabulary.map(v => `
      <div class="vocab-chip" onclick="this.classList.toggle('open')">
        <div class="vc-word">${v.word}</div>
        <div class="vc-def">${v.definition}</div>
      </div>`).join('');
  }
  renderQuestions(d.questions || []);
  hide('r-feedback');
  show('r-submit-btn');
}

function renderQuestions(qs) {
  const el = document.getElementById('r-questions');
  if (!el) return;
  el.innerHTML = qs.map(q => `
    <div class="q-item" id="q-${q.id}">
      <div class="q-num">Question ${q.id} · ${q.skill || ''}</div>
      <div class="q-text">${q.question}</div>
      <div class="q-options">${(q.options||[]).map(opt => {
        const letter = opt.charAt(0);
        return `<button class="q-opt" data-q="${q.id}" data-opt="${letter}" onclick="selectOpt(this,'${q.id}')">${opt}</button>`;
      }).join('')}</div>
    </div>`).join('');
}

function selectOpt(btn, qId) {
  document.querySelectorAll(`.q-opt[data-q="${qId}"]`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  S.reading.answers[qId] = btn.dataset.opt;
}

function submitReading() {
  const qs = S.reading.data?.questions || [];
  if (!qs.length) return;
  let score = 0; const results = [];
  qs.forEach(q => {
    const ans = S.reading.answers[q.id];
    const correct = q.correct;
    const isRight = ans === correct;
    if (isRight) score++;
    results.push({ q, ans, isRight, correct });
    document.querySelectorAll(`.q-opt[data-q="${q.id}"]`).forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.opt === correct) btn.classList.add('correct');
      else if (btn.dataset.opt === ans && !isRight) btn.classList.add('wrong');
    });
    // Add explanation
    const qEl = document.getElementById('q-' + q.id);
    if (qEl && q.explanation) {
      const exEl = document.createElement('div');
      exEl.className = 'q-explain';
      exEl.textContent = '💡 ' + q.explanation;
      qEl.appendChild(exEl);
    }
  });
  const total = qs.length;
  const xpEarned = Math.round((score / total) * 50) + 5;
  const pct = score / total;
  setText('r-score-txt', `${score}/${total}`);
  const arc = document.getElementById('r-arc');
  if (arc) { const offset = 188.5 * (1 - pct); arc.style.strokeDashoffset = offset; }
  const msg = pct === 1 ? '🎉 Perfect score! Outstanding comprehension!' : pct >= 0.8 ? '🌟 Excellent work! Strong reading skills!' : pct >= 0.6 ? '👍 Good effort! Review the explanations above.' : '📖 Keep practicing — reading gets easier with time!';
  const fbEl = document.getElementById('r-fb-body');
  if (fbEl) fbEl.innerHTML = `<p style="margin-bottom:12px">${msg}</p>${results.map(r => `<div class="rp-q-result"><span class="rq-icon">${r.isRight?'✅':'❌'}</span><span>Q${r.q.id}: ${r.isRight ? 'Correct' : `Incorrect — answer was ${r.correct}`}</span></div>`).join('')}`;
  setText('r-xp-num', xpEarned);
  document.getElementById('r-feedback').classList.remove('hidden');
  hide('r-submit-btn');
  document.getElementById('r-feedback').scrollIntoView({ behavior:'smooth', block:'nearest' });
  // Stats
  const st = getStats(); st.readingPassages++; st.totalActivities++;
  st.correctAnswers = (st.correctAnswers||0) + score; st.totalAnswers = (st.totalAnswers||0) + total;
  if (pct === 1) st.perfectScores++;
  if (getSettings().bridge) st.bridgeDays = (st.bridgeDays||0) + 1;
  setStats(st);
  addXP(xpEarned, 'Reading comprehension');
  completeQuest('reading');
  checkBossAvailable();
}

function resetReading() {
  hide('r-content'); show('r-home');
  S.reading = { genre:'any', data:null, answers:{} };
  document.getElementById('r-questions').innerHTML = '';
  hide('r-feedback');
}

// =================== VOCABULARY ===================

async function genVocab() {
  const ctx = getGradeContext();
  const theme = document.querySelector('#v-theme-grid .pick-btn.active')?.dataset.val || 'any';
  const themeInstr = theme === 'any' ? 'Choose an interesting educational theme' : `Theme: ${theme}`;
  showLoading('Generating your word set…');
  try {
    const data = await callGroq(`Generate a vocabulary lesson.
Student context: ${ctx.instruction}
${themeInstr}

Return ONLY valid JSON:
{
  "theme": "Theme Name",
  "words": [
    {"word":"word1","partOfSpeech":"noun","definition":"clear grade-appropriate definition","example":"Example sentence using the word naturally.","syllables":"syl-la-ble"},
    {"word":"word2","partOfSpeech":"verb","definition":"definition","example":"Example sentence.","syllables":"syl-la-ble"},
    {"word":"word3","partOfSpeech":"adjective","definition":"definition","example":"Example sentence.","syllables":"syl-la-ble"},
    {"word":"word4","partOfSpeech":"noun","definition":"definition","example":"Example sentence.","syllables":"syl-la-ble"},
    {"word":"word5","partOfSpeech":"adverb","definition":"definition","example":"Example sentence.","syllables":"syl-la-ble"},
    {"word":"word6","partOfSpeech":"verb","definition":"definition","example":"Example sentence.","syllables":"syl-la-ble"},
    {"word":"word7","partOfSpeech":"adjective","definition":"definition","example":"Example sentence.","syllables":"syl-la-ble"},
    {"word":"word8","partOfSpeech":"noun","definition":"definition","example":"Example sentence.","syllables":"syl-la-ble"}
  ]
}`, '', true);
    hideLoading();
    S.vocab.words = data.words || []; S.vocab.idx = 0; S.vocab.flipped = false; S.vocab.quizAnswers = [];
    show('v-content'); hide('v-home');
    show('v-flashcards'); hide('v-quiz'); hide('v-results');
    renderFlashcard();
  } catch(e) { handleAPIError(e); }
}

function renderFlashcard() {
  const words = S.vocab.words; const i = S.vocab.idx;
  if (!words.length) return;
  const w = words[i];
  setText('fc-word', w.word || '—');
  setText('fc-pos', w.partOfSpeech || '');
  setText('fc-syl', w.syllables || '');
  setText('fc-def', w.definition || '—');
  setText('fc-ex', w.example ? `"${w.example}"` : '');
  setText('v-card-prog', `Card ${i+1} of ${words.length}`);
  const fill = document.getElementById('v-prog-fill');
  if (fill) fill.style.width = ((i+1)/words.length*100) + '%';
  const fc = document.getElementById('flashcard');
  if (fc) { fc.classList.remove('flipped'); S.vocab.flipped = false; }
}

function flipCard() {
  const fc = document.getElementById('flashcard');
  if (!fc) return;
  S.vocab.flipped = !S.vocab.flipped;
  fc.classList.toggle('flipped', S.vocab.flipped);
}

function fcNext() {
  if (S.vocab.idx < S.vocab.words.length - 1) { S.vocab.idx++; renderFlashcard(); }
  else { document.getElementById('start-vocab-quiz-btn')?.scrollIntoView({behavior:'smooth'}); showToast('You\'ve seen all cards! Take the quiz now 🎯', 'info', 2500); }
}

function fcPrev() {
  if (S.vocab.idx > 0) { S.vocab.idx--; renderFlashcard(); }
}

function startVocabQuiz() {
  S.vocab.quizAnswers = []; S.vocab.quizIdx = 0;
  hide('v-flashcards'); show('v-quiz'); hide('v-results');
  renderVocabQuestion(0);
}

function renderVocabQuestion(idx) {
  const words = S.vocab.words; if (!words.length) return;
  const w = words[idx];
  setText('vq-prog', `${idx+1} / ${words.length}`);
  // Generate 4 options: correct def + 3 wrong defs
  const wrongWords = words.filter((_,i) => i !== idx);
  const shuffled = wrongWords.sort(() => Math.random()-0.5).slice(0,3);
  const opts = [w, ...shuffled].sort(() => Math.random()-0.5);
  const el = document.getElementById('vq-area');
  if (!el) return;
  el.innerHTML = `
    <div class="quiz-q-card">
      <div class="quiz-q-text">What is the definition of <strong>"${w.word}"</strong>?</div>
      <div class="quiz-opts">
        ${opts.map(opt => `<button class="quiz-opt" onclick="checkVocabAns(this,'${w.word}','${escQ(opt.definition)}','${escQ(w.definition)}')">${opt.definition}</button>`).join('')}
      </div>
    </div>`;
}

function escQ(s) { return (s||'').replace(/'/g,"\\'").replace(/"/g,'&quot;'); }

function checkVocabAns(btn, word, selected, correct) {
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  const isRight = selected === correct;
  btn.classList.add(isRight ? 'correct' : 'wrong');
  if (!isRight) document.querySelectorAll('.quiz-opt').forEach(b => { if (b.textContent.trim() === correct || b.getAttribute('onclick')?.includes(escQ(correct))) b.classList.add('correct'); });
  S.vocab.quizAnswers.push(isRight);
  const exEl = document.createElement('div');
  exEl.className = 'quiz-explain';
  exEl.textContent = isRight ? '✅ Correct! ' + (S.vocab.words.find(w=>w.word===word)?.example||'') : `❌ Correct answer: "${correct}"`;
  btn.parentElement.after(exEl);
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-primary quiz-next-btn';
  const nextIdx = S.vocab.quizIdx + 1;
  nextBtn.textContent = nextIdx < S.vocab.words.length ? 'Next Question →' : 'See Results →';
  nextBtn.onclick = () => { S.vocab.quizIdx = nextIdx; nextIdx < S.vocab.words.length ? renderVocabQuestion(nextIdx) : showVocabResults(); };
  exEl.after(nextBtn);
  S.vocab.quizIdx = nextIdx - 1; // will be incremented on click
}

function showVocabResults() {
  hide('v-quiz'); show('v-results');
  const answers = S.vocab.quizAnswers;
  const score = answers.filter(Boolean).length;
  const total = S.vocab.words.length;
  const pct = score/total;
  const xp = Math.round(pct * 30) + 5;
  setText('v-score-disp', `${score} / ${total}`);
  const msg = pct === 1 ? '🏆 Perfect! You\'re a vocabulary master!' : pct >= 0.75 ? '🌟 Excellent word knowledge!' : pct >= 0.5 ? '👍 Good effort! Review the words you missed.' : '📚 Keep studying — you\'ll get better!';
  setText('v-score-msg', msg);
  setText('v-xp-num', xp);
  document.getElementById('v-xp-banner').classList.remove('hidden');
  const st = getStats();
  st.vocabWords = (st.vocabWords||0) + total; st.totalActivities++;
  st.correctAnswers=(st.correctAnswers||0)+score; st.totalAnswers=(st.totalAnswers||0)+total;
  if (pct===1) st.perfectScores++;
  if (getSettings().bridge) st.bridgeDays=(st.bridgeDays||0)+1;
  setStats(st);
  addXP(xp, 'Vocabulary mastery');
  completeQuest('vocabulary');
  checkBossAvailable();
}

function resetVocab() {
  hide('v-content'); show('v-home');
  S.vocab = { theme:'any', words:[], idx:0, flipped:false, quizAnswers:[] };
}

// =================== GRAMMAR ===================

async function genGrammar() {
  const ctx = getGradeContext();
  const topic = document.querySelector('#g-topic-grid .pick-btn.active')?.dataset.val || 'any';
  const topicInstr = topic === 'any' ? 'Choose an important grammar topic for this grade level' : `Topic: ${topic}`;
  showLoading('Building your grammar lesson…');
  try {
    const data = await callGroq(`Generate a grammar lesson.
Student context: ${ctx.instruction}
${topicInstr}

Return ONLY valid JSON:
{
  "topic": "Topic Name",
  "explanation": "Clear, engaging 2-3 sentence explanation of the concept appropriate for the grade.",
  "rules": ["Rule 1 stated simply", "Rule 2 stated simply", "Rule 3 stated simply"],
  "examples": [
    {"incorrect":"Wrong sentence example","correct":"Corrected sentence","why":"Brief explanation of the error and fix"},
    {"incorrect":"Another wrong example","correct":"Corrected version","why":"Explanation"}
  ],
  "exercises": [
    {"id":1,"type":"mc","question":"Which sentence is grammatically correct?","options":["A. First sentence","B. Second sentence","C. Third sentence","D. Fourth sentence"],"correct":"B","explanation":"Why B is correct"},
    {"id":2,"type":"mc","question":"Choose the correct word to complete: He _____ to school every day.","options":["A. go","B. goes","C. going","D. gone"],"correct":"B","explanation":"Explanation"},
    {"id":3,"type":"mc","question":"Grammar question 3","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"A","explanation":"Explanation"},
    {"id":4,"type":"mc","question":"Grammar question 4","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"C","explanation":"Explanation"},
    {"id":5,"type":"mc","question":"Grammar question 5","options":["A. Option","B. Option","C. Option","D. Option"],"correct":"D","explanation":"Explanation"}
  ]
}`, '', true);
    hideLoading();
    S.grammar.data = data; S.grammar.answers = {};
    renderGrammarLesson(data);
  } catch(e) { handleAPIError(e); }
}

function renderGrammarLesson(d) {
  show('g-content'); hide('g-home');
  setText('g-title', d.topic || 'Grammar Lesson');
  setText('g-grade-tag', 'Grade ' + getGradeContext().grade);
  setText('g-explain', d.explanation || '');
  const rulesEl = document.getElementById('g-rules');
  if (rulesEl) rulesEl.innerHTML = (d.rules||[]).map(r => `<div class="rule-item"><span>→</span><span>${r}</span></div>`).join('');
  const exEl = document.getElementById('g-examples');
  if (exEl) exEl.innerHTML = (d.examples||[]).map(e => `
    <div class="example-item">
      <div class="ex-wrong">✗ ${e.incorrect}</div>
      <div class="ex-right">✓ ${e.correct}</div>
      <div class="ex-why">${e.why}</div>
    </div>`).join('');
  renderGrammarExercises(d.exercises||[]);
  hide('g-feedback'); show('g-submit-btn');
}

function renderGrammarExercises(exs) {
  const el = document.getElementById('g-exercises');
  if (!el) return;
  el.innerHTML = exs.map(ex => `
    <div class="ex-item" id="gex-${ex.id}">
      <div class="ex-q">Q${ex.id}. ${ex.question}</div>
      <div class="ex-opts">${(ex.options||[]).map(opt => {
        const letter = opt.charAt(0);
        return `<button class="ex-opt" data-gq="${ex.id}" data-opt="${letter}" onclick="selectGOpt(this,'${ex.id}')">${opt}</button>`;
      }).join('')}</div>
    </div>`).join('');
}

function selectGOpt(btn, qId) {
  document.querySelectorAll(`.ex-opt[data-gq="${qId}"]`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  S.grammar.answers[qId] = btn.dataset.opt;
}

function submitGrammar() {
  const exs = S.grammar.data?.exercises || [];
  if (!exs.length) return;
  let score = 0;
  exs.forEach(ex => {
    const ans = S.grammar.answers[ex.id]; const correct = ex.correct;
    const isRight = ans === correct; if (isRight) score++;
    document.querySelectorAll(`.ex-opt[data-gq="${ex.id}"]`).forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.opt === correct) btn.classList.add('correct');
      else if (btn.dataset.opt === ans && !isRight) btn.classList.add('wrong');
    });
    const exEl = document.getElementById('gex-' + ex.id);
    if (exEl && ex.explanation) {
      const div = document.createElement('div');
      div.className = 'ex-explain';
      div.textContent = '💡 ' + ex.explanation;
      exEl.appendChild(div);
    }
  });
  const total = exs.length; const pct = score/total;
  const xp = Math.round(pct * 35) + 5;
  setText('g-score-txt', `${score}/${total}`);
  const arc = document.getElementById('g-arc');
  if (arc) arc.style.strokeDashoffset = 188.5 * (1-pct);
  const msg = pct===1 ? '💯 Perfect! Grammar mastery achieved!' : pct>=0.8 ? '🌟 Excellent grammar skills!' : pct>=0.6 ? '👍 Good job! Review the explanations.' : '✏️ Keep practicing your grammar rules!';
  const fbEl = document.getElementById('g-fb-body');
  if (fbEl) fbEl.innerHTML = `<p style="margin-bottom:10px">${msg}</p>`;
  setText('g-xp-num', xp);
  show('g-feedback');
  hide('g-submit-btn');
  document.getElementById('g-feedback').scrollIntoView({behavior:'smooth',block:'nearest'});
  const st = getStats(); st.grammarLessons++; st.totalActivities++;
  st.correctAnswers=(st.correctAnswers||0)+score; st.totalAnswers=(st.totalAnswers||0)+total;
  if (pct===1) st.perfectScores++;
  if (getSettings().bridge) st.bridgeDays=(st.bridgeDays||0)+1;
  setStats(st);
  addXP(xp, 'Grammar lesson');
  completeQuest('grammar');
  checkBossAvailable();
}

function resetGrammar() {
  hide('g-content'); show('g-home');
  S.grammar = { topic:'any', data:null, answers:{} };
  document.getElementById('g-exercises').innerHTML = '';
}

// =================== WRITING ===================

async function genWritingPrompt() {
  const ctx = getGradeContext();
  const type = document.querySelector('#w-type-grid .pick-btn.active')?.dataset.val || 'any';
  const typeInstr = type === 'any' ? 'Choose an engaging writing type (narrative, persuasive, descriptive, or expository)' : `Writing type: ${type}`;
  showLoading('Creating your writing prompt…');
  try {
    const data = await callGroq(`Generate a writing prompt.
Student context: ${ctx.instruction}
${typeInstr}

Return ONLY valid JSON:
{
  "type": "writing type",
  "prompt": "A specific, engaging writing prompt 2-3 sentences long that gives the student a clear topic, purpose, and audience.",
  "tips": ["Helpful writing tip 1", "Helpful writing tip 2", "Helpful writing tip 3"],
  "wordTarget": 150
}`, '', true);
    hideLoading();
    S.writing.prompt = data;
    show('w-editor'); hide('w-home'); hide('w-feedback');
    const card = document.getElementById('w-prompt-card');
    if (card) {
      setText('w-prompt-txt', data.prompt || '');
      const tipsEl = document.getElementById('w-prompt-tips');
      if (tipsEl && data.tips) tipsEl.innerHTML = '💡 Tips: ' + (data.tips||[]).join(' · ');
    }
    setText('w-wc', 0);
    setText('w-wc-goal', `· aim for ${data.wordTarget||150}+ words`);
    const ta = document.getElementById('w-textarea');
    if (ta) ta.value = '';
  } catch(e) { handleAPIError(e); }
}

function updateWordCount() {
  const ta = document.getElementById('w-textarea');
  if (!ta) return;
  const words = ta.value.trim().split(/\s+/).filter(w=>w.length>0).length;
  setText('w-wc', words);
  const goal = S.writing.prompt?.wordTarget || 150;
  const goalEl = document.getElementById('w-wc-goal');
  if (goalEl) {
    if (words >= goal) { goalEl.textContent = `· ✅ Word goal reached!`; goalEl.style.color = 'var(--green)'; }
    else { goalEl.textContent = `· ${goal-words} more to reach goal`; goalEl.style.color = ''; }
  }
}

function clearWriting() {
  const ta = document.getElementById('w-textarea');
  if (ta) { ta.value = ''; updateWordCount(); }
}

async function submitWriting() {
  const ta = document.getElementById('w-textarea');
  const text = ta?.value.trim() || '';
  if (!text || text.split(/\s+/).length < 20) { showToast('Write at least 20 words before submitting!', 'warn', 3000); return; }
  const ctx = getGradeContext(); const prompt = S.writing.prompt?.prompt || '';
  showLoading('Sid is reading and evaluating your writing…');
  try {
    const eval_ = await callGroq(`Evaluate this student's writing response.
Student context: ${ctx.instruction}
Writing prompt given: "${prompt}"
Student's response: "${text}"

Return ONLY valid JSON:
{
  "totalScore": 14,
  "scores": {"content":4,"organization":3,"language":4,"conventions":3},
  "overallFeedback": "2-3 sentence overall feedback. Be encouraging and constructive.",
  "strengths": ["Specific strength 1","Specific strength 2"],
  "improvements": ["Specific improvement 1","Specific improvement 2"],
  "encouragement": "Short warm closing encouragement"
}
Scoring: each category 0-5. Total is sum. Be fair and grade-appropriate.`, '', true);
    hideLoading();
    showWritingResults(eval_);
  } catch(e) { handleAPIError(e); }
}

function showWritingResults(ev) {
  hide('w-editor'); show('w-feedback');
  const total = ev.totalScore || 0;
  const pct = total / 20;
  const xp = Math.round(pct * 50) + 5;
  setText('wf-badge', `${total} / 20`);
  const scoreGrid = document.getElementById('wf-score-grid');
  if (scoreGrid && ev.scores) {
    const cats = [['content','📖 Content'], ['organization','🏗️ Organization'], ['language','💬 Language'], ['conventions','✏️ Conventions']];
    scoreGrid.innerHTML = cats.map(([k,lbl]) => {
      const s = ev.scores[k]||0;
      const col = s>=4?'var(--green)':s>=3?'var(--cyan)':s>=2?'var(--gold)':'var(--red)';
      return `<div class="wf-score-item"><div class="wfs-label">${lbl}</div><div class="wfs-score" style="color:${col}">${s}/5</div></div>`;
    }).join('');
  }
  const fbEl = document.getElementById('wf-fb-txt');
  if (fbEl) fbEl.innerHTML = `<p>${ev.overallFeedback||''}</p>${ev.encouragement?`<p style="margin-top:10px;color:var(--cyan)">${ev.encouragement}</p>`:''}`;
  const strEl = document.getElementById('wf-strengths');
  if (strEl) strEl.innerHTML = `<div class="wf-sw-title">✅ Strengths</div>${(ev.strengths||[]).map(s=>`<div class="wf-sw-item"><span>•</span><span>${s}</span></div>`).join('')}`;
  const impEl = document.getElementById('wf-improve');
  if (impEl) impEl.innerHTML = `<div class="wf-sw-title">💡 To Improve</div>${(ev.improvements||[]).map(s=>`<div class="wf-sw-item"><span>•</span><span>${s}</span></div>`).join('')}`;
  setText('w-xp-num', xp);
  const st = getStats(); st.essays++; st.totalActivities++;
  if (getSettings().bridge) st.bridgeDays=(st.bridgeDays||0)+1;
  setStats(st);
  addXP(xp, 'Writing evaluation');
  completeQuest('writing');
  checkBossAvailable();
}

function resetWriting() {
  hide('w-feedback'); hide('w-editor'); show('w-home');
  S.writing.prompt = null;
  const ta = document.getElementById('w-textarea'); if (ta) ta.value = '';
}

// =================== BOSS CHALLENGE ===================

function populateBossIntro() {
  const stats = getStats();
  const defeated = stats.bossesDefeated || 0;
  const bIdx = defeated % BOSSES.length;
  S.boss.bossIdx = bIdx;
  const boss = BOSSES[bIdx];
  setText('boss-art', boss.art);
  setText('boss-name', boss.name);
  setText('boss-lore', boss.lore);
  // History
  const hist = getBossHist();
  const histEl = document.getElementById('boss-hist-panel');
  if (histEl) {
    if (hist.length === 0) { histEl.innerHTML = ''; return; }
    histEl.innerHTML = `<h3 style="font-size:15px;font-weight:700;margin-bottom:12px">Past Battles</h3>` +
      hist.slice(-5).reverse().map(h => `
        <div class="boss-hist-card">
          <div class="bhc-art">${BOSSES[h.bIdx||0]?.art||'⚔️'}</div>
          <div class="bhc-info"><div class="bhc-name">${BOSSES[h.bIdx||0]?.name||'Boss'}</div><div class="bhc-date">${formatDate(h.ts)}</div></div>
          <div class="bhc-xp">+${h.xp} XP</div>
        </div>`).join('');
  }
}

async function startBoss() {
  const ctx = getGradeContext();
  const boss = BOSSES[S.boss.bossIdx];
  showLoading(`${boss.art} ${boss.name} is preparing the challenge…`);
  try {
    const data = await callGroq(`Generate a complete boss challenge for an English student.
Student context: ${ctx.instruction}
Boss theme: ${boss.name}

Return ONLY valid JSON:
{
  "passage": "A short engaging 2-paragraph passage (the story/text for this challenge). Grade-appropriate.",
  "stage1": {
    "question": "A literal comprehension question about the passage",
    "options": ["A. Option one","B. Option two","C. Option three","D. Option four"],
    "correct": "B",
    "explanation": "Why B is correct"
  },
  "stage2": {
    "sentence": "The ___ explorer discovered a ___ artifact hidden beneath the ancient temple.",
    "words": ["experienced","remarkable","young","ordinary"],
    "answers": ["experienced","remarkable"],
    "explanation": "Why these words fit best"
  },
  "stage3": {
    "sentence": "Sentence with 2-3 grammar errors that need fixing.",
    "correct": "The fully corrected sentence.",
    "errors": ["Error 1 description","Error 2 description"]
  },
  "stage4": {
    "question": "An inferential or critical thinking question about the passage — requires reading between the lines",
    "options": ["A. Option one","B. Option two","C. Option three","D. Option four"],
    "correct": "A",
    "explanation": "Why A is correct and what clues in the passage support it"
  },
  "stage5": {
    "prompt": "A short creative writing prompt connected to the passage theme (1-2 sentences)",
    "wordTarget": 80
  }
}`, '', true);
    hideLoading();
    S.boss.data = data; S.boss.stage = 0; S.boss.scores = [];
    bossSelections = {}; bossWordSelections.length = 0;
    hide('boss-intro'); show('boss-active'); hide('boss-victory');
    setText('bhi-name', boss.name);
    document.getElementById('boss-hp-fill').style.width = '100%';
    renderBossStage(0);
  } catch(e) { handleAPIError(e); }
}

function renderBossStage(idx) {
  const d = S.boss.data; const boss = BOSSES[S.boss.bossIdx];
  const stages = ['📖 Reading Comprehension','📚 Vocabulary Fill-in','✏️ Grammar Fix','🧠 Inference Challenge','✍️ Writing Response'];
  setText('bhi-stage', `Stage ${idx+1} / 5`);
  document.getElementById('boss-hp-fill').style.width = `${100-(idx*20)}%`;
  document.getElementById('boss-next-btn').classList.add('hidden');
  hide('boss-victory');
  const area = document.getElementById('boss-stage-area');
  if (!area) return;

  if (idx === 0) {
    area.innerHTML = `
      <div class="boss-stage-card">
        <div class="bsc-eyebrow">Stage 1 · ${stages[0]}</div>
        <div class="bsc-title">Read the passage below, then answer the question.</div>
        <div style="background:var(--surface-a);border-radius:var(--r-lg);padding:18px;margin:14px 0;font-size:14px;line-height:1.8">${(d.passage||'').replace(/\n\n/g,'</p><p>').replace(/^/,'<p>').replace(/$/,'</p>')}</div>
        <div class="q-text" style="font-weight:700;margin-bottom:12px">${d.stage1?.question||''}</div>
        <div class="q-options">${(d.stage1?.options||[]).map(opt=>`<button class="q-opt" data-opt="${opt.charAt(0)}" onclick="bossMCQ(this,'stage1')">${opt}</button>`).join('')}</div>
      </div>`;
  } else if (idx === 1) {
    const s = d.stage2;
    area.innerHTML = `
      <div class="boss-stage-card">
        <div class="bsc-eyebrow">Stage 2 · ${stages[1]}</div>
        <div class="bsc-title">Fill in the blanks with the best words from the list below.</div>
        <div class="boss-fill-sentence" style="font-size:16px;line-height:2;margin:16px 0;padding:16px;background:var(--surface-a);border-radius:var(--r)">${(s?.sentence||'').replace(/_+/g,'<span class="fill-blank" style="border-bottom:2px solid var(--purple);padding:0 8px;min-width:80px;display:inline-block">____</span>')}</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px">${(s?.words||[]).map(w=>`<button class="pick-btn" onclick="selectBossWord(this,'${w}')" data-word="${w}">${w}</button>`).join('')}</div>
        <div id="boss-fill-area"></div>
        <button class="btn-primary" onclick="submitBossFill()" style="margin-top:12px">Check Answers →</button>
      </div>`;
  } else if (idx === 2) {
    const s = d.stage3;
    area.innerHTML = `
      <div class="boss-stage-card">
        <div class="bsc-eyebrow">Stage 3 · ${stages[2]}</div>
        <div class="bsc-title">Find and fix the grammar errors in this sentence.</div>
        <div style="background:var(--red-d);border:1px solid rgba(239,68,68,0.3);border-radius:var(--r-lg);padding:16px;margin:14px 0;font-size:15px;font-style:italic">${s?.sentence||''}</div>
        <div style="font-size:13px;color:var(--text-2);margin-bottom:10px">Errors to find: <strong style="color:var(--text)">${(s?.errors||[]).join(' · ')}</strong></div>
        <input type="text" class="input-glass" id="boss-grammar-input" placeholder="Type the corrected sentence here…" style="width:100%;margin-bottom:12px">
        <button class="btn-primary" onclick="submitBossGrammar()">Check Correction →</button>
      </div>`;
  } else if (idx === 3) {
    const s = d.stage4;
    area.innerHTML = `
      <div class="boss-stage-card">
        <div class="bsc-eyebrow">Stage 4 · ${stages[3]}</div>
        <div class="bsc-title">Answer this inference question using the passage from Stage 1.</div>
        <div class="q-text" style="font-weight:700;margin:14px 0 12px">${s?.question||''}</div>
        <div class="q-options">${(s?.options||[]).map(opt=>`<button class="q-opt" data-opt="${opt.charAt(0)}" onclick="bossMCQ(this,'stage4')">${opt}</button>`).join('')}</div>
      </div>`;
  } else if (idx === 4) {
    const s = d.stage5;
    area.innerHTML = `
      <div class="boss-stage-card">
        <div class="bsc-eyebrow">Stage 5 · ${stages[4]}</div>
        <div class="bsc-title">Final challenge — write your response!</div>
        <div style="background:var(--gold-d);border:1px solid rgba(245,158,11,0.25);border-radius:var(--r-lg);padding:16px;margin:14px 0;font-size:15px">${s?.prompt||''}</div>
        <textarea class="writing-ta" id="boss-write-input" style="border:1px solid var(--border);border-radius:var(--r-lg);margin-top:0" placeholder="Write your response here (aim for ${s?.wordTarget||80}+ words)…" rows="6"></textarea>
        <button class="btn-primary" onclick="submitBossWrite()">Submit Final Stage →</button>
      </div>`;
  }
}

// Track boss MC selections — reset on each new challenge
let bossSelections = {};
function bossMCQ(btn, stage) {
  const siblings = btn.closest('.q-options')?.querySelectorAll('.q-opt');
  siblings?.forEach(b => b.classList.remove('selected')); btn.classList.add('selected');
  bossSelections[stage] = btn.dataset.opt;
  const d = S.boss.data;
  const correct = d[stage]?.correct;
  const isRight = btn.dataset.opt === correct;
  setTimeout(() => {
    siblings?.forEach(b => { b.disabled=true; if(b.dataset.opt===correct) b.classList.add('correct'); else if(b.dataset.opt===bossSelections[stage]&&!isRight) b.classList.add('wrong'); });
    const exEl=document.createElement('div'); exEl.className='q-explain';
    exEl.textContent=(isRight?'✅ ':'❌ ')+(d[stage]?.explanation||'');
    btn.closest('.boss-stage-card')?.appendChild(exEl);
    S.boss.scores.push(isRight ? 1 : 0.5);
    document.getElementById('boss-next-btn').classList.remove('hidden');
  }, 400);
}

const bossWordSelections = [];
function selectBossWord(btn, word) { bossWordSelections.push(word); btn.disabled=true; }
function submitBossFill() {
  const s = S.boss.data?.stage2;
  const correct = s?.answers||[];
  const selected = bossWordSelections.slice(0, correct.length);
  const matches = selected.filter((w,i)=>w===correct[i]).length;
  const score = matches/Math.max(correct.length,1);
  S.boss.scores.push(score);
  const area = document.getElementById('boss-fill-area');
  if (area) area.innerHTML = `<div class="q-explain">${score===1?'✅ Perfect fill-in!':''} Correct answers: <strong>${correct.join(', ')}</strong>. ${s?.explanation||''}</div>`;
  bossWordSelections.length = 0;
  document.getElementById('boss-next-btn').classList.remove('hidden');
}
function submitBossGrammar() {
  const input = document.getElementById('boss-grammar-input');
  const val = (input?.value||'').trim();
  const correct = S.boss.data?.stage3?.correct||'';
  const sim = similarity(val.toLowerCase(), correct.toLowerCase());
  const score = sim > 0.8 ? 1 : sim > 0.5 ? 0.7 : 0.4;
  S.boss.scores.push(score);
  const div = document.createElement('div'); div.className='q-explain';
  div.innerHTML = `${score>=0.8?'✅ Excellent correction!':'💡 Suggested correction:'} <strong>${correct}</strong>`;
  input?.after(div);
  if (input) input.disabled=true;
  document.querySelector('.boss-stage-card .btn-primary')?.setAttribute('disabled','true');
  document.getElementById('boss-next-btn').classList.remove('hidden');
}
function submitBossWrite() {
  const ta = document.getElementById('boss-write-input');
  const words = (ta?.value||'').trim().split(/\s+/).filter(w=>w).length;
  const target = S.boss.data?.stage5?.wordTarget||80;
  const score = Math.min(1, words/target);
  S.boss.scores.push(score);
  if (ta) ta.disabled=true;
  const div=document.createElement('div'); div.className='q-explain';
  div.textContent = `✅ Response submitted! ${words} words written.${words<target?' (Aim for '+target+'+ next time!)':''}`;
  ta?.after(div);
  document.querySelector('.boss-stage-card .btn-primary')?.setAttribute('disabled','true');
  document.getElementById('boss-next-btn').classList.remove('hidden');
}

function similarity(a, b) {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  if (longer.length === 0) return 1.0;
  return (longer.length - editDistance(longer, shorter)) / longer.length;
}
function editDistance(a, b) {
  const m=a.length,n=b.length,dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}

function bossNext() {
  S.boss.stage++;
  if (S.boss.stage >= 5) { completeBoss(); return; }
  renderBossStage(S.boss.stage);
}

function completeBoss() {
  const scores = S.boss.scores;
  const total = scores.reduce((a,b)=>a+b,0);
  const maxPossible = 5;
  const pct = total/maxPossible;
  const xp = Math.round(pct * 250) + 50;
  const boss = BOSSES[S.boss.bossIdx];
  // boss-victory is nested inside boss-active — keep boss-active visible,
  // clear the stage area, hide the next button, reveal victory panel.
  const stageArea = document.getElementById('boss-stage-area');
  if (stageArea) stageArea.innerHTML = '';
  document.getElementById('boss-next-btn').classList.add('hidden');
  const grade = pct>=0.9?'S Rank — Legendary!':pct>=0.7?'A Rank — Excellent!':pct>=0.5?'B Rank — Good!':'C Rank — Keep training!';
  setText('vc-score', `${grade} · ${Math.round(pct*100)}% accuracy`);
  setText('boss-xp-num', xp);
  document.getElementById('boss-victory').classList.remove('hidden');
  document.getElementById('boss-hp-fill').style.width = '0%';
  // Stats
  const st = getStats(); st.bossesDefeated=(st.bossesDefeated||0)+1; st.totalActivities++;
  setStats(st);
  // Boss history
  const hist = getBossHist();
  hist.push({ bIdx:S.boss.bossIdx, xp, score:Math.round(pct*100), ts:Date.now() });
  setBossHist(hist);
  addXP(xp, `Boss Challenge — ${boss.name}`);
  checkBossAvailable();
  checkAchievements();
  showToast(`⚔️ ${boss.name} defeated! +${xp} XP!`, 'success', 4000);
}

// =================== PROGRESS ===================

function populateProgress() {
  const prog = getProgress(); const stats = getStats();
  setText('ps-xp', prog.totalXP||0);
  setText('ps-read', stats.readingPassages||0);
  setText('ps-essay', stats.essays||0);
  setText('ps-words', stats.vocabWords||0);
  setText('ps-gram', stats.grammarLessons||0);
  const acc = stats.totalAnswers > 0 ? Math.round((stats.correctAnswers/stats.totalAnswers)*100) + '%' : '—';
  setText('ps-acc', acc);
  renderActivityChart();
  renderSkillsChart();
  renderActivityLog();
}

function renderActivityChart() {
  const hist = getHistory();
  const canvas = document.getElementById('chart-activity');
  if (!canvas) return;
  // Build last 14 days
  const days = []; const labels = [];
  for (let i=13; i>=0; i--) {
    const d = new Date(Date.now() - i*86400000);
    days.push(dateStr(d));
    labels.push(d.toLocaleDateString('en',{month:'short',day:'numeric'}));
  }
  const xpByDay = {};
  days.forEach(d => xpByDay[d] = 0);
  hist.filter(h=>h.type==='xp').forEach(h => {
    const d = dateStr(new Date(h.ts));
    if (xpByDay[d] !== undefined) xpByDay[d] += (h.xp||0);
  });
  const values = days.map(d => xpByDay[d]);
  if (S.charts.activity) S.charts.activity.destroy();
  S.charts.activity = new Chart(canvas, {
    type:'line',
    data:{
      labels,
      datasets:[{
        label:'XP Earned', data:values,
        borderColor:'#7c3aed', backgroundColor:'rgba(124,58,237,0.1)',
        borderWidth:2.5, pointBackgroundColor:'#a855f7',
        pointRadius:4, tension:0.4, fill:true,
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:true,
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:'rgba(12,13,22,0.9)',borderColor:'rgba(124,58,237,0.5)',borderWidth:1} },
      scales:{
        x:{ grid:{color:'rgba(255,255,255,0.04)'}, ticks:{color:'#8b95a9',font:{size:11}} },
        y:{ grid:{color:'rgba(255,255,255,0.04)'}, ticks:{color:'#8b95a9',font:{size:11}}, beginAtZero:true },
      }
    }
  });
}

function renderSkillsChart() {
  const stats = getStats();
  const canvas = document.getElementById('chart-skills');
  if (!canvas) return;
  const norm = (v, max) => Math.min(100, Math.round((v/Math.max(max,1))*100));
  const values = [
    norm(stats.readingPassages||0, 20),
    norm(stats.vocabWords||0, 80),
    norm(stats.grammarLessons||0, 20),
    norm(stats.essays||0, 15),
    norm(stats.bossesDefeated||0, 5),
  ];
  if (S.charts.skills) S.charts.skills.destroy();
  S.charts.skills = new Chart(canvas, {
    type:'radar',
    data:{
      labels:['Reading','Vocabulary','Grammar','Writing','Boss Battles'],
      datasets:[{
        data:values,
        borderColor:'#06b6d4', backgroundColor:'rgba(6,182,212,0.12)',
        borderWidth:2, pointBackgroundColor:'#06b6d4', pointRadius:4,
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:true,
      plugins:{ legend:{display:false} },
      scales:{
        r:{
          grid:{color:'rgba(255,255,255,0.06)'}, angleLines:{color:'rgba(255,255,255,0.06)'},
          ticks:{display:false}, pointLabels:{color:'#8b95a9',font:{size:12}},
          min:0, max:100,
        }
      }
    }
  });
}

function renderActivityLog() {
  const hist = getHistory().slice(-20).reverse();
  const el = document.getElementById('activity-log');
  if (!el) return;
  if (!hist.length) { el.innerHTML = '<div class="no-activity">No activity yet. Start learning to see your history!</div>'; return; }
  const icons = { reading:'📖', vocabulary:'📚', grammar:'✏️', writing:'✍️', xp:'✨', boss:'⚔️' };
  el.innerHTML = hist.map(h => `
    <div class="activity-item">
      <span class="act-ico">${icons[h.type]||'📌'}</span>
      <span class="act-desc">${h.label||h.type}</span>
      ${h.xp?`<span class="act-xp">+${h.xp} XP</span>`:''}
      <span class="act-date">${formatDate(h.ts)}</span>
    </div>`).join('');
}

// =================== SETTINGS ===================

function populateSettings() {
  const p = getProfile(); const s = getSettings();
  const nameEl = document.getElementById('s-name'); if (nameEl) nameEl.value = p.name||'';
  const gradeEl = document.getElementById('s-grade'); if (gradeEl) gradeEl.value = p.grade||6;
  const keyEl = document.getElementById('s-key'); if (keyEl) keyEl.value = s.apiKey||'';
  const bridgeEl = document.getElementById('s-bridge'); if (bridgeEl) bridgeEl.checked = !!s.bridge;
  const bdesc = document.getElementById('s-bridge-desc');
  if (bdesc) bdesc.textContent = `Mix Grade ${p.grade} & ${p.grade+1} content (70% / 30%) to prepare for next school year`;
  populateModelGrid();
}

function saveProfile() {
  const name = document.getElementById('s-name')?.value.trim() || '';
  const grade = parseInt(document.getElementById('s-grade')?.value) || 6;
  if (!name) { showToast('Please enter a name', 'error'); return; }
  setProfile({ name, grade });
  updateXPDisplay();
  populateDashboard();
  showToast('✅ Profile saved!', 'success');
}

function saveKey() {
  const key = document.getElementById('s-key')?.value.trim() || '';
  const s = getSettings(); s.apiKey = key; setSettings(s);
  showToast(key ? '✅ API key saved!' : '✅ API key cleared.', 'success');
}

async function testKey() {
  const key = document.getElementById('s-key')?.value.trim() || '';
  if (!key) { showKeyStatus('No API key entered.', 'error'); return; }
  const s = getSettings(); const tempKey = s.apiKey; s.apiKey = key; setSettings(s);
  showLoading('Testing connection…');
  try {
    await callGroq('Say "OK" in one word.', '', false);
    hideLoading();
    showKeyStatus('✅ Connection successful! API key is valid.', 'success');
    showToast('✅ API key works!', 'success');
  } catch(e) {
    hideLoading();
    s.apiKey = tempKey; setSettings(s);
    showKeyStatus('❌ ' + (e.message || 'Connection failed.'), 'error');
  }
}

function showKeyStatus(msg, type) {
  const el = document.getElementById('key-status');
  if (!el) return;
  el.textContent = msg; el.className = 'key-status ' + type;
}

function populateModelGrid() {
  const s = getSettings();
  const grid = document.getElementById('model-grid');
  if (!grid) return;
  grid.innerHTML = MODELS.map(m => {
    const qual = [...Array(5)].map((_,i)=>`<div class="star ${i<m.quality?'lit':''}"></div>`).join('');
    const spd  = [...Array(5)].map((_,i)=>`<div class="star ${i<m.speed?'lit-c':''}"></div>`).join('');
    return `
      <button class="model-card ${s.model===m.id?'active':''}" onclick="selectModel('${m.id}')">
        <div class="mc-radio"></div>
        <div class="mc-body">
          <div class="mc-name">${m.name}${m.rec?' ⭐':''}</div>
          <div class="mc-desc">${m.desc}</div>
          <div class="mc-stars">
            <div class="star-row"><span>Quality</span><div class="stars">${qual}</div></div>
            <div class="star-row"><span>Speed</span><div class="stars">${spd}</div></div>
          </div>
        </div>
      </button>`;
  }).join('');
}

function selectModel(id) {
  const s = getSettings(); s.model = id; setSettings(s);
  populateModelGrid();
  showToast('🤖 Model updated!', 'success');
}

function toggleBridgeMode(checked) {
  const s = getSettings(); s.bridge = checked; setSettings(s);
  // Sync all bridge toggles
  ['bridge-toggle','s-bridge'].forEach(id => { const el=document.getElementById(id); if(el) el.checked=checked; });
  updateBridgeCard();
  const p = getProfile();
  showToast(checked ? `🌉 Summer Bridge Mode ON — preparing for Grade ${p.grade+1}!` : '🌉 Summer Bridge Mode off.', 'info');
}

function syncBridgeToggle() {
  const s = getSettings();
  ['bridge-toggle','s-bridge'].forEach(id => { const el=document.getElementById(id); if(el) el.checked=!!s.bridge; });
}

function exportData() {
  const data = {
    profile: getProfile(), progress: getProgress(), stats: getStats(),
    achievements: getAch(), history: getHistory(),
    exported: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `sidgpt-progress-${dateStr(new Date())}.json`;
  a.click(); URL.revokeObjectURL(a.href);
  showToast('📤 Progress exported!', 'success');
}

function handleImportFile(event) {
  const file = event.target.files?.[0];
  event.target.value = ''; // allow re-selecting the same file later
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    let data;
    try {
      data = JSON.parse(e.target.result);
    } catch {
      showImportStatus('❌ That file isn\'t valid JSON. Export a fresh copy and try again.', 'error');
      return;
    }
    // Basic shape validation — every export should have these top-level keys
    const required = ['profile', 'progress', 'stats', 'achievements', 'history'];
    const missing = required.filter(k => !(k in data));
    if (missing.length) {
      showImportStatus(`❌ This file is missing expected data (${missing.join(', ')}). It may not be a SidGPT export.`, 'error');
      return;
    }
    const name = data.profile?.name || 'Unknown';
    const xp = data.progress?.totalXP || 0;
    const ok = confirm(`Import progress for "${name}" (${xp} XP)?\n\nThis will REPLACE your current progress on this device. This can't be undone unless you've exported your current data first.`);
    if (!ok) { showImportStatus('Import cancelled.', 'error'); return; }
    try {
      setProfile(data.profile || { name:'Student', grade:6 });
      setProgress(data.progress || { totalXP:0, streak:0, lastDate:'', longestStreak:0 });
      setStats(data.stats || { totalActivities:0, readingPassages:0, vocabWords:0, grammarLessons:0, essays:0, bossesDefeated:0, perfectScores:0, bridgeDays:0, correctAnswers:0, totalAnswers:0 });
      setAch(data.achievements || { earned:[] });
      lsSet(SK.HISTORY, data.history || []);
      showImportStatus(`✅ Progress imported for "${name}"! Refreshing…`, 'success');
      showToast('📥 Progress imported successfully!', 'success', 4000);
      // Refresh every view that reads from localStorage
      populateDashboard();
      populateSettings();
      renderAchievements();
      if (S.currentView === 'progress') populateProgress();
    } catch (err) {
      showImportStatus('❌ Something went wrong while importing. Your current data was not changed.', 'error');
    }
  };
  reader.onerror = () => showImportStatus('❌ Could not read that file. Please try again.', 'error');
  reader.readAsText(file);
}

function showImportStatus(msg, type) {
  const el = document.getElementById('import-status');
  if (!el) return;
  el.textContent = msg;
  el.className = 'key-status ' + type;
}

function showResetModal() { document.getElementById('reset-modal').classList.remove('hidden'); }
function hideResetModal() { document.getElementById('reset-modal').classList.add('hidden'); }
function resetAll() {
  Object.values(SK).forEach(k => localStorage.removeItem(k));
  hideResetModal();
  document.getElementById('app').classList.add('hidden');
  document.getElementById('onboarding').style.display = 'flex';
  const OB2 = { step:1, name:'', grade:0, key:'' }; Object.assign(OB, OB2);
  obShowStep(1);
}

// =================== UTILITIES ===================

function showToast(msg, type='info', dur=3000) {
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = msg;
  document.getElementById('toast-area')?.appendChild(el);
  setTimeout(() => { el.style.animation='slideOutRight 0.3s ease forwards'; setTimeout(()=>el.remove(),300); }, dur);
}

function togglePwd(id, btn) {
  const inp = document.getElementById(id);
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
  btn.textContent = inp.type === 'password' ? '👁' : '🙈';
}

function pickBtn(btn, gridId) {
  document.querySelectorAll(`#${gridId} .pick-btn`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    if (sb.classList.contains('mob-open')) {
      sb.classList.remove('mob-open');
      document.querySelector('.sidebar-backdrop')?.remove();
    } else {
      sb.classList.add('mob-open');
      const bd = document.createElement('div');
      bd.className = 'sidebar-backdrop visible';
      bd.onclick = toggleSidebar;
      document.body.appendChild(bd);
    }
  } else {
    const app = document.getElementById('app');
    sb.classList.toggle('collapsed');
    app.classList.toggle('sidebar-collapsed');
  }
}

function formatDate(ts) {
  if (!ts) return '';
  const d = new Date(ts); const now = new Date();
  const diff = Math.floor((now-d)/86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  return d.toLocaleDateString('en',{month:'short',day:'numeric'});
}

function dateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function setText(id, val) { const el=document.getElementById(id); if(el) el.textContent=String(val); }
function show(id) { const el=document.getElementById(id); if(el) el.classList.remove('hidden'); }
function hide(id) { const el=document.getElementById(id); if(el) el.classList.add('hidden'); }
