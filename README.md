# Academic Discussion Writer

Read a professor's question and two classmates' posts, then write your own contribution in 10 minutes.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the TOEFL iBT and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Academic Discussion Writer.exe` from the [latest release](https://github.com/Apurba94/toefl-academic-discussion/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/toefl-academic-discussion/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

In Writing for an Academic Discussion you read a professor's question and two classmates' posts, then add your own contribution. This app has eight original discussions on education, business, the environment, technology and more, a timer, a 100-word target and a checklist.

Sections: Write, Progress, About.

## How to use it

1. Read the professor's question and both posts in **Write**.
2. Start the timer. Ten minutes is a practice default; check ets.org for the current timing.
3. State your view, add something new, and respond to a classmate by name.
4. Press **Get feedback** and work through the checklist.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (24 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
