j=1
for file in *.md
do
echo -e "---  \nlayout: parsons_post  \ntitle: studio $j \npermalink: /studio$j/  \ncategories:   \ntags:  \nassignment: \ndescription: \nassignment-due: 02/03\nreadings: \n---  " > $file
((j++))
done