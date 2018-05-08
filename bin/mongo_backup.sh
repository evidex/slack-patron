#!/usr/bin/env bash
# http://dimafeng.com/2015/05/31/docker-mongo-backup/
set -e
rm -rf /tmp/mongodump && mkdir /tmp/mongodump
db_ip=$(docker container inspect slack-patron_mongo_1 | jq '.[0].NetworkSettings.Networks["slack-patron_default"].IPAddress' | sed 's/"//g')
docker run -it --rm --net slack-patron_default --link slack-patron_mongo_1:mongo -v /tmp/mongodump:/tmp mongo bash -c 'mongodump -v --host '${db_ip}':27017 --db 'slack_logger' --out=/tmp'
tar -cvf $1  /tmp/mongodump/*
rm -rf /tmp/mongodump
