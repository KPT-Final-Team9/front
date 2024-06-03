#!/bin/bash
REPOSITORY=/home/ubuntu/deploy
cd $REPOSITORY
sudo npm ci
sudo npx pm2 reload all
sudo npx next start
