# Contact Card Template

This is a minimalist, Carrd-style contact card template built with [Eleventy](https://www.11ty.dev/), [Tailwind CSS](https://tailwindcss.com/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [FontAwesome](https://fontawesome.com/) for social icons. It's designed for nonprofits, community orgs, and mutual aid groups that need to get something online *fast* — no fluff, no paywall, no gatekeeping.

## Features
- Single-page layout with name, email, phone, and optional social links
- Built for GitHub Pages — auto-deploy on every push to `main`
- Customize with a single JSONC file (`site-config.jsonc`)
- Parses JSONC using `comment-json` so you can use comments
- Fully mobile-friendly and accessibility-minded
- Social icons via FontAwesome

## Getting Started
1. [Fork this repo](https://github.com/YOUR-ORG/contact-card-template)
2. Edit `src/_data/site-config.jsonc` with your info
3. Commit to `main`
4. Site builds automatically via GitHub Actions and publishes to GitHub Pages

## First-Time Setup
### Enable GitHub Pages
In your repository, go to **Settings > Pages**, then:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages`, root folder

### Fix Permissions for GitHub Actions
If GitHub Actions fails to deploy due to permission issues (403 errors), you’ll need to:

1. **Create a Personal Access Token (PAT)**
   - Go to [GitHub Tokens](https://github.com/settings/tokens?type=beta)
   - Generate a new token (classic) with these scopes:
     - `repo`
     - `workflow`

2. **Add the Token to Your Repo**
   - Go to **Settings > Secrets and variables > Actions**
   - Click **New repository secret**
   - Name it `PERSONAL_TOKEN`
   - Paste your PAT

### Parsing JSONC for Config
We use [`comment-json`](https://www.npmjs.com/package/comment-json) to read your `site-config.jsonc` file. That way, you can leave comments like this:
```jsonc
{
  // Your full name
  "name": "Your Name",
  
  // Only include this if you want it displayed
  "email": "you@example.org"
}
```
If you're editing this file manually, just remember to save it as `site-config.jsonc` and leave it in `src/_data/`.

## Requirements
- GitHub account
- (Optional) Domain name for pointing at GitHub Pages

---

## License
See `LICENSE` for details.
