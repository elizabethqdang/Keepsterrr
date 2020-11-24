@notes.each do |note|
  json.set! note.id do
    json.partial! 'api/notes/note', note: note
  end
end

# json.array! @notes, partial: "notes/note", as: :note
