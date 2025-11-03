# Delete existing resume (assume it's named 'resume.pdf' in current directory)
rm -f Resume.pdf

# Copy from Downloads/Resume folder (assume it's named 'resume.pdf' there)
cp ~/Downloads/ResumePush/Resume.pdf .

# Commit with message "Update resume"
git add Resume.pdf
git commit -m "Update resume"

# Push commit
git push origin master
