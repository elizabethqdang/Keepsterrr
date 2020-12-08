@notes.each do |note|
	json.set! note.id do
		json.partial! "api/notes/note", note: note
		
		# json.extract! note, :id, :title, :body, :owner_id
		
		# json.id note.id
		# json.owner_id note.user.id 
		# json.title note.title
		# json.body note.body
		# json.pinned note.pinned
		# json.list note.list
		# json.created_at note.created_at
		# json.updated_at note.updated_at
		
		# json.imageUrl url_for(note.image)
  end
end

# json.array! @notes, partial: "notes/note", as: :note
