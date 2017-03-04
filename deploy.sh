npm run build
cd ~/yong6.info/docs/student
rm -rf *
cp -rf ~/elance/student/dist/* .
cd ~/yong6.info
git rm docs/student/*
git add docs/student/*
git commit -m "student update"
git push
