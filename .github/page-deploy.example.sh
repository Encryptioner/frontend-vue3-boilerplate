#!/usr/bin/env sh

# abort on errors
set -e

cd ..
rm -rf dist

# build
pnpm build


# navigate into the build output directory
cd dist

# prevent GitHub from treating built app as Jekyll and therefor treating _assets differently
touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git switch -c gh-pages
git add -A

# git config --global --add safe.directory <PROJECT-DIRECTORY>/dist
# git config user.email "you@example.com"
# git config user.email "Your Name"

git commit -m 'page-deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

# get git url and deploy
GIT_URL=$(git remote get-url origin)
git push -f $GIT_URL gh-pages

cd -

# NOTE:
# 1. Execute this file by running `bash page-deploy.sh` from this directory
# 2. You can setup ssh key for github: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh
# 3. Check https://github.com/Anoesj/vue-vite-gh-pages-template for `404` page
# 4. Read https://dev.to/patarapolw/vite-on-github-pages-with-html5-history-mode-283j
# 5. Read https://github.com/reiya0104/vite-vue-router-tailwind-test

# REFERENCE: 
# 1. https://vitejs.dev/guide/static-deploy.html#github-pages
# 2. https://github.com/patarapolw/jptools