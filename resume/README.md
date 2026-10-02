# Resume source

The portfolio serves `public/resume.pdf`. Regenerate it from the checked-in
source whenever the resume copy changes:

```bash
python3 -m venv .context/resume-venv
.context/resume-venv/bin/pip install -r resume/requirements.txt
.context/resume-venv/bin/python resume/generate_resume.py
```

The generator is intentionally separate from the website build, so production
deployments continue to serve the committed PDF without installing Python.

The bundled Latin Modern font files are distributed under the GUST Font License
included in `resume/fonts/GUST-FONT-LICENSE.TXT`.
