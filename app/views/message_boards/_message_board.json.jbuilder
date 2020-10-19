json.extract! message_board, :id, :message_id, :created_at, :updated_at
json.url message_board_url(message_board, format: :json)
