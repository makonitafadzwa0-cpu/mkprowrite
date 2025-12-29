# Mk ProWrite — Website (Static)

What you have
- index.html — the main page (SEO meta + Open Graph + structured data)
- styles.css — external stylesheet
- script.js — client-side form handler (uses FormSubmit.co)

Contact form (working)
- The contact form on the site submits to FormSubmit.co and will send messages to mkprowrite@gmail.com.
- Form action used: https://formsubmit.co/mkprowrite@gmail.com
- First time you use FormSubmit.co it may send a verification email to mkprowrite@gmail.com — follow the instructions in that email to enable delivery.

Quick edits you should make (optional)
- Replace `https://example.com/` and `https://example.com/og-image.jpg` in the meta tags / JSON-LD with your real domain and image URL (recommended for social sharing).
- Replace the email address if you prefer a different contact email.

Preview locally
1. Save the files in the repository and open `index.html` in a browser, or run a local server:
   - Python 3: `python -m http.server 8000` then open `http://localhost:8000`

Publish with GitHub Pages
1. Go to your repository on GitHub → Settings → Pages.
2. Under "Source" select Branch: `main` and Folder: `/ (root)` then Save.
3. Wait a few minutes for GitHub to publish. The site will be available at: https://makonitafadzwa0-cpu.github.io/mkprowrite/

Notes
- When hosted on GitHub Pages the contact form will still work with FormSubmit.co because the form submission is made directly to their endpoint.
- If you prefer a different form provider (Formspree, Netlify Forms, or a small serverless function), I can update the site accordingly.
