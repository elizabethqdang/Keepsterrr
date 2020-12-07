json.extract! user, :id, :email

json.id user.id
json.owner_id user.id
json.email user.email
# json.notes user.notes
# json.noteIds user.notes.pluck(:id)
# json.noteIds user.note_ids
# json.created_at user.created_at