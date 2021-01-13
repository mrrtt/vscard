#!/bin/sh
echo 'export poeme tbl begin ';

#获取脚本的当前路径(工程路径)
CURRENT_DIR=$(cd $(dirname $0); pwd)

#进入到脚本的当前路径
cd ${CURRENT_DIR} \t\r

file_name='exc2Json.js' ;

node $file_name;

file_name_db='exc2JsonDB.js' ;

node $file_name_db;

echo 'export poeme tbl end';
