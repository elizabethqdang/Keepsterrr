@users.each do |user|
	# json.set! user.id, user.email, user.owner_id
	json.set! user.id
	# 	json.extract! user, :id, :email, :owner_id
		
	# 	json.id user.id
	# 	json.email user.email
	# 	json.owner_id user.id
	# 	json.notes user.notes
	# 	json.noteIds user.note_ids
	# end
end