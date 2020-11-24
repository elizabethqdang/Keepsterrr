json.extract! note, :id, :title, :body :author_id, :created_at, :updated_at

if note.image.attached?
  json.imageUrl url_for(note.image)
end