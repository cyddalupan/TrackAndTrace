

## admins
["id","username","password","level","created_at","updated_at","deleted_at"]

## agents
["id","person_id","name","created_at","updated_at","deleted_at"]

## applicant_statuses
["id","name","color","created_at","updated_at","deleted_at"]

## casegens
["id","quest_id","report_category_id","subcategory","claimant","severity","remarks","created_at","updated_at","deleted_at"]

## categories
["id","parent_id","order","name","slug","created_at","updated_at"]

## category_keywords
["id","category_id","keyword","created_at","updated_at","deleted_at"]

## chat_logs
["id","fb_users_id","fb_users_name","user_message","bot_message","created_at","updated_at","deleted_at"]

## countries
["id","name","created_at","updated_at","deleted_at"]

## data_rows
["id","data_type_id","field","type","display_name","required","browse","read","edit","add","delete","details","order"]

## data_types
["id","name","slug","display_name_singular","display_name_plural","icon","model_name","policy_name","controller","description","generate_permissions","server_side","details","created_at","updated_at"]

## fb_quests
["id","message","get_query","rule","correct_query","wrong_redirect_id","wrong_query","created_at","updated_at"]

## fb_users
["id","fb_name","fb_id","fb_user_type_id","fb_person_id","fb_quest_id","fb_variable","last_chat_at","created_at","updated_at","img"]

## hitkey_severities
["id","hitkey_id","category_id","category_name","display","severity","created_at","updated_at","deleted_at"]

## hitkeys
["id","fb_id","unique_chat_id","is_report","is_done","created_at","updated_at","deleted_at"]

## menu_items
["id","menu_id","title","url","target","icon_class","color","parent_id","order","created_at","updated_at","route","parameters"]

## menus
["id","name","created_at","updated_at"]

## merge_reports
["id","person_name","person_id","categories_text","subcategories_text","claimant_text","remarks","chatlogs","is_closed","created_at","updated_at","deleted_at"]

## migrations
["id","migration","batch"]

## pages
["id","author_id","title","excerpt","body","image","slug","meta_description","meta_keywords","status","created_at","updated_at"]

## password_resets
["email","token","created_at"]

## people
["id","name","contact","address","birthday","passport_number","image","usertype_id","country_id","principal_id","agent_id","applicant_status_id","hire_date","deployed_date","encoder_id","is_connected","latitude","longitude","last_report_at","created_at","updated_at","deleted_at"]

## permission_role
["permission_id","role_id"]

## permissions
["id","key","table_name","created_at","updated_at"]

## posts
["id","author_id","category_id","title","seo_title","excerpt","body","image","slug","meta_description","meta_keywords","status","featured","created_at","updated_at"]

## principals
["id","name","contact","address","email","created_at","updated_at","deleted_at"]

## replies
["id","message","reply","created_at","updated_at","deleted_at"]

## report_categories
["id","name","created_at","updated_at","deleted_at"]

## report_severities
["id","report_id","category_id","category_name","severity","created_at","updated_at","deleted_at"]

## reports
["id","fb_id","person_id","report_category_id","sub_category","claimant","severity","is_active","is_tagged","merge_id","remarks","created_at","updated_at","deleted_at"]

## roles
["id","name","display_name","created_at","updated_at"]

## schedules
["id","title","image","message","button_name_1","button_link_1","button_name_2","button_link_2","button_name_3","button_link_3","month","year","created_at","updated_at","deleted_at"]

## settings
["id","key","display_name","value","details","type","order","group"]

## translations
["id","table_name","column_name","foreign_key","locale","value","created_at","updated_at"]

## unique_chats
["id","message","fb_id","is_closed","created_at","updated_at","deleted_at"]

## urgencies
["id","name","created_at","updated_at","deleted_at"]

## user_roles
["user_id","role_id"]

## user_types
["id","name","default_quest_id","created_at","updated_at"]

## users
["id","role_id","name","email","avatar","email_verified_at","password","remember_token","settings","created_at","updated_at"]