#!/bin/bash

set -e

echo "🌐 FixLog Website Git Push"
echo "-------------------------"

# Make sure we're inside a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "❌ This folder is not a Git repository."
  echo "Run this script from your website folder."
  exit 1
fi

# Show current folder and branch
echo "📁 Folder: $(pwd)"
BRANCH=$(git branch --show-current)
echo "🌿 Branch: $BRANCH"

# Show remote
echo
echo "🔗 Remote:"
git remote -v

# Show current status
echo
echo "📋 Current status:"
git status --short

# Check for changes
if git diff --quiet && git diff --cached --quiet; then
  echo
  echo "✅ No website changes to push."
  exit 0
fi

# Ask for commit message
echo
read -p "📝 Commit message: " MESSAGE

if [[ -z "$MESSAGE" ]]; then
  echo "❌ Commit message cannot be empty."
  exit 1
fi

# Stage, commit, and push
echo
echo "📦 Staging website files..."
git add .

echo "💾 Committing changes..."
git commit -m "$MESSAGE"

echo "🚀 Pushing to GitHub..."
git push origin "$BRANCH"

echo
echo "✅ Website pushed successfully."
echo "GitHub Pages may take a minute or two to update."
