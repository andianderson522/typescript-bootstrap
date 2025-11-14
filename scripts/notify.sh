#!/bin/bash

#set -x

function notify() {
    title="| $@ |"
    edge=$(echo "$title" | sed 's/./-/g')
    echo
    echo "$edge"
    echo "$title"
    echo "$edge"
}

notify $@
