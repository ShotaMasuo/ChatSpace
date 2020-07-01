# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  2.6.5
* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|email|null: false|

### user's Association
- has_many :chats
- has_many :users_groups



## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### group's Association
- has_many :chats
- has_many :users_groups



## chatテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image_name|string|null: true|
|user_id|int|null: false, foreign_key: true|
|group_id|int|null: false, foreign_key: true|

### group's Association
- belongs_to :user
- belongs_to :group



## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|int|null: false, foreign_key: true|
|group_id|int|null: false, foreign_key: true|

### group's Association
- belongs_to :user
- belongs_to :group