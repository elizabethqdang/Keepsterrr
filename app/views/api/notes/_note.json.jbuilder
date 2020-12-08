# json.extract! note, :id

# json.id note.id
# json.title note.title
# json.body note.body
# json.owner_id note.user.id
# json.created_at note.created_at
# json.updated_at note.updated_at
# json.pinned note.pinned
# json.list note.list
# json.imageUrl url_for(note.image)

json.extract! note, :id, :title, :body, :owner_id, :pinned, :list, :created_at, :updated_at

if note.image.attached?
	json.imageUrl url_for(note.image)
else
	json.imageUrl ""
end