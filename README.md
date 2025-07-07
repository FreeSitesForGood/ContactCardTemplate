# Contact Card Template

This is a minimalist, Carrd-style contact card template built with [Eleventy](https://www.11ty.dev/), [Tailwind CSS](https://tailwindcss.com/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [FontAwesome](https://fontawesome.com/) for social icons. It's designed for nonprofits, community orgs, and mutual aid groups that need to get something online *fast* — no fluff, no paywall, no gatekeeping.

## Features
- Single-page layout with name, email, phone, and optional social links
- Built for GitHub Pages — auto-deploy on every push to `main`
- Customize with a single JSONC file (`site-config.jsonc`)
- Fully mobile-friendly and accessibility-minded
- Social icons via FontAwesome

## Getting Started
1. [Fork this repo](https://github.com/YOUR-ORG/contact-card-template)
2. Edit `site-config.jsonc` with your info
3. Commit to `main`
4. Site builds automatically via GitHub Actions and publishes to GitHub Pages

**Important:** In your repository, go to **Settings > Pages**, choose:
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

3. **Update `.github/workflows/deploy.yml`**
   - Change this line:
     ```yaml
     github_token: ${{ secrets.GITHUB_TOKEN }}
     ```
   - To this:
     ```yaml
     personal_token: ${{ secrets.PERSONAL_TOKEN }}
     ```

## Requirements
- GitHub account
- (Optional) Domain name for pointing at GitHub Pages

---

## License
See `LICENSE` for details.