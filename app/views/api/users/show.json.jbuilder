json.partial! "api/users/user", user: @user

# json.notes @user.notes

# json.notes do
# 	@user.notes.each do |note|
# 		json.set! note.id do
# 				json.extract! note, :id, :title, :body, :pinned, :list, :owner_id, :created_at, :updated_at, :image
# 		end
# 	end
# end


# json.user do
# 		json.id @user.id
# 		json.owner_id @user.id
# 		json.email @user.email
# 		json.notes	@user.notes
# 		json.noteIds @user.note_ids
# end

# json.notes do 
# 	@user.notes.each do |note|
# 		json.set! note.id do
# 			json.extract! note, :id, :owner_id, :title
			
# 			json.noteId note.id
# 			json.owner_id note.owner_id
# 			json.title note.title
# 			json.body note.body
# 			json.pinned note.pinned
# 			json.list note.list
# 			json.created_at note.created_at
# 			json.updated_at note.updated_at
			
# 			if note.image.attached?
# 				json.imageUrl url_for(note.image)
# 			else
# 				json.imageUrl ''
# 			end
				
# 		end
# 	end
# end