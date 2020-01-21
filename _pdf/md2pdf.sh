#!/bin/bash

pandoc "$1" \
    -V geometry:a4paper \
    -V geometry:margin=2cm \
    -V mainfont="Helvetica" \
    --pdf-engine=xelatex \
    -s -o "$2"