j=1
for filename in *.md; do mv "$filename" "${filename%.*}-studio-$j.md"; ((j++)); done;