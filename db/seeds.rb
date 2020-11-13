# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Note.destroy_all
ListItem.destroy_all
PinnedNote.destroy_all

users = User.create([
	{ email: "demo-user@keepsterrr.com", password: "password" },
	{ email: "maxwellthepig@keepsterrr.com", password: "hunter12" },
])

notes = Note.create([
	{ title: "note demo", body: "test test test", owner_id: users.first.id, pinned: false, list: false }, 
	# archived: false, trashed: false },
	{ title: "list demo", body: "", owner_id: users.first.id, pinned: false, list: true }, 
	# archived: false, trashed: false },
	{ title: "whee", body: "whee wheeeeeeeeeeeeeeeeeeeeeeeeee", owner_id: users.second.id, pinned: true, list: false }, 
	# archived: false, trashed: false },
	{ title: "This Little Piggy", body: "This little piggy went to the market, This little piggy stayed home, This little piggy had roast beef, ... And this little piggy cried wee wee wee all the way home.", owner_id: users.second.id, pinned: false, list: false }, 
	# archived: false, trashed: false },
	{ title: "money in da bank$$", body: "the piggybank that is", owner_id: users.second.id, pinned: true, list: false }, 
	# archived: false, trashed: false },
	{ title: "holiday gifts for my piggy friends", body: "", owner_id: users.second.id, pinned: true, list: true }, 
	# archived: false, trashed: false },
	{	title: "archive test", body: "test", owner_id: users.first.id, pinned: false, list: false }, 
	# archived: true, trashed: false}
	{	title: "archive test", body: "test", owner_id: users.first.id, pinned: false, list: false }, 
	# archived: false, trashed: true}
])

pinned = ([
	notes.map do |note|
		if note.pinned == true
			PinnedNote.create(note_id: note.id)
		end
	end
])

list_items = ListItem.create([
	{ note_id: notes.second.id, item: "test", completed: false },
	{ note_id: notes.second.id, item: "test test", completed: true },
	{ note_id: notes.second.id, item: "test test test", completed: false },
	{ note_id: notes.last.id, item: "Miss Piggy: something bedazzled", completed: false },
	{ note_id: notes.last.id, item: "Piglet: tbd", completed: false },
	{ note_id: notes.last.id, item: "Wilbur: tbd", completed: false },
	{ note_id: notes.last.id, item: "Pumbaa: tbd", completed: false },
	{ note_id: notes.last.id, item: "Porky Pig: tbd", completed: false },
	{ note_id: notes.last.id, item: "Peppa Pig: tbd", completed: false },
	{ note_id: notes.last.id, item: "3 Little Pigs: tbd", completed: false },
	{ note_id: notes.last.id, item: "Hamm: a piggybank--how meta", completed: true }
])

# archive = []
# # archive = ([
# 	notes.map do |note|
# 		if note.archived == true
# 			# ArchivedNote.create(note_id: note.id)
# 			archive.push(note.id)
# 		end
# 	end
# # ])

# trash = []
# # trash = ([
# 	notes.map do |note|
# 		if note.trashed == true
# 			# TrashedNote.create(note_id: note.id)
# 			trash.push(note.id)
# 		end
# 	end
# # ])