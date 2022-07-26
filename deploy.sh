
# abort on errors
set -e

# Build project

npm run build

# navigate into the build output directory
cd dist

# commit all changes

git init
git add dist
git commit -m 'adding dist subtree'

# push all changes on deployment subtree 

git subtree push --prefix dist origin gh-pages