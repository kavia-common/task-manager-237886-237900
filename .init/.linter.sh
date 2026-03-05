#!/bin/bash
cd /home/kavia/workspace/code-generation/task-manager-237886-237900/todo_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

