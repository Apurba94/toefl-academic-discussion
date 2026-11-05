/* Academic Discussion Writer: read a professor's question and two classmates' posts, then write your own post. */
(function () {
  'use strict';
  // Does the post mention a classmate by name, a sign that it joins the discussion rather than ignoring it?
  const engages = (text, posts) => posts.some(([name]) => new RegExp('\\b' + name + '\\b', 'i').test(text));
  const CHECK = ['I gave my own opinion clearly in the first sentence or two.', 'I added a new reason or example, not just repeated a classmate.', 'I responded to at least one classmate by name.', 'I wrote at least 100 words.', 'My post reads like a polite class discussion, not a formal essay.'];
  const App = {
    about: 'In Writing for an Academic Discussion you read a professor\'s question and two classmates\' posts, then add your own contribution. This app has eight original discussions on education, business, the environment, technology and more, a timer, a 100-word target and a checklist.',
    how: ['Read the professor\'s question and both posts in **Write**.', 'Start the timer. Ten minutes is a practice default; check ets.org for the current timing.', 'State your view, add something new, and respond to a classmate by name.', 'Press **Get feedback** and work through the checklist.'],
    tabs: [{ id: 'write', label: 'Write', render(el, ctx) {
      const d = SK.pick(SK.rng(SK.seedNow()), ctx.data.discussions);
      const prompt = SK.h('div', {}, SK.h('p', {}, SK.h('strong', { text: 'Professor (' + d.course + '): ' }), d.professor), d.posts.map(([n, t]) => SK.h('p', {}, SK.h('strong', { text: n + ': ' }), t)));
      const box = SK.h('div', {}), extra = SK.h('div', {});
      el.appendChild(SK.h('div', { class: 'sk-row', style: { marginBottom: '10px' } }, SK.btn('New discussion', () => SK.show('write'), 'ghost')));
      el.append(box, extra);
      SK.writer(box, { key: d.id, title: 'Your post', prompt, promptText: d.professor, minutes: 10, target: [100, 180], checklist: CHECK,
        onSubmit: (a, text) => { SK.clear(extra); extra.appendChild(engages(text, d.posts) ? SK.note('You responded to a classmate by name.', 'right') : SK.note('Try responding to ' + d.posts[0][0] + ' or ' + d.posts[1][0] + ' by name: "I agree with ' + d.posts[0][0] + ' that…, but…".', 'wrong')); } });
    } }],
    engages,
    checks: {
      'every discussion has a question and two named posts': (data, assert) => { assert.equal(data.discussions.length, 8); for (const d of data.discussions) { assert.ok(d.professor.includes('?')); assert.equal(d.posts.length, 2); } },
      'naming a classmate is detected': (data, assert) => { const d = data.discussions[0]; assert.ok(engages('I agree with ' + d.posts[1][0] + '.', d.posts)); assert.ok(!engages('I agree with the professor.', d.posts)); },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
