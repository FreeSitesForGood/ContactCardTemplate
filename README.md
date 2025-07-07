# Contact Card Template

This is a simple, single-page contact card built with open-source tools. It's designed for nonprofits, mutual aid groups, and small organizations that need a clean web presence without dealing with complicated tools, subscriptions, or technical hurdles.

You can customize everything by editing a single configuration file. The site will automatically update and publish itself each time you make a change.

## What This Includes

- A responsive, mobile-friendly web page
- Your name, email, and phone number (if you want to show them)
- Optional links to social media platforms like Facebook, Instagram, TikTok, and more
- A modern, readable layout using accessible fonts and colors
- Automatic publishing through GitHub Pages
- Easy configuration with a single file — no need to know HTML or CSS

## How to Use This Template

1. Click the **"Use this template"** button at the top of this page
2. Name your new site repository and click **"Create repository from template"**
3. In your new repository, open the file at `site-config.jsonc`
4. Click the pencil icon to edit your information
5. When you're done, scroll down and click **"Commit changes"**
6. Your website will be built automatically and published online in a few minutes

## First-Time Setup

### Enable GitHub Pages

Once you've created your site, you'll need to turn on GitHub Pages:

1. In your new repository, go to the **Settings** tab
2. Click **Pages** in the sidebar
3. Under **Source**, choose **Deploy from a branch**
4. Select the `gh-pages` branch and click **Save**

Your site will be available at a `.github.io` web address (GitHub will show it to you after saving).

### If Deployment Doesn't Work

In rare cases, GitHub's automatic publishing system may not have permission to publish the site. If that happens, you'll see a red "X" in the **Actions** tab after you commit your changes.

To fix this:

1. Go to [https://github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta)
2. Create a **Personal Access Token (classic)** with the following scopes:
   - `repo`
   - `workflow`
3. In your new repository, go to **Settings > Secrets and variables > Actions**
4. Click **"New repository secret"** and name it `PERSONAL_TOKEN`
5. Paste your token into the value field and click **"Add secret"**

Once this is set up, commits to your `main` branch will successfully publish your site.

## Customizing the Site

Open the file `site-config.jsonc` in your repository. This file contains everything your site needs — name, email, phone number, and social media handles.

You can remove any field you don't want to display. Comments in the file will guide you as you edit. Here's an example:

```jsonc
{
  // This will appear as your site title
  "name": "Your Organization Name",

  // Optional contact info
  "email": "you@example.org",
  "phone": "(123) 456-7890",

  // Social media handles (or full URLs)
  "socialMediaLinks": {
    "facebook": "yourpage",
    "instagram": "yourhandle",
    "tiktok": "",
    "github": "yourgithub"
  }
}
```

You don't need to change anything else — just save your edits and your site will update automatically.

## Requirements
 - A free GitHub account
 - (Optional) A custom domain name, if you want to use one

This project is meant to be lightweight, easy to use, and easy to hand off. If you have feedback or suggestions, feel free to open an issue or make a copy of this template and adapt it for your own needs.

## License
See `LICENSE` for details.
