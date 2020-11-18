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
List.destroy_all
ListItem.destroy_all
PinnedNote.destroy_all

users = User.create([
	{ id: 1, email: "demo-user@keepsterrr.com", password: "password" },
	{ id: 2, email: "maxwellthepig@keepsterrr.com", password: "hunter12" },
])

notes = Note.create([
	{ id: 1, title: "note demo", body: "test test test", owner_id: users.first.id, pinned: false, list: false }, 
	# archived: false, trashed: false },
	{ id: 2, title: "list demo", body: "", owner_id: users.first.id, pinned: false, list: true }, 
	# archived: false, trashed: false },
	{ id: 3, title: "whee", body: "whee wheeeeeeeeeeeeeeeeeeeeeeeeee", owner_id: users.second.id, pinned: true, list: false }, 
	# archived: false, trashed: false },
	{ id: 4, title: "This Little Piggy", body: "This little piggy went to the market, This little piggy stayed home, This little piggy had roast beef, ... And this little piggy cried wee wee wee all the way home.", owner_id: users.second.id, pinned: false, list: false }, 
	# archived: false, trashed: false },
	{ id: 5, title: "money in da bank$$", body: "the piggybank that is", owner_id: users.second.id, pinned: true, list: false }, 
	# archived: false, trashed: false },
	{ id: 6, title: "holiday gifts for my piggy friends", body: "", owner_id: users.second.id, pinned: true, list: true }, 
	# archived: false, trashed: false },
	{	id: 7, title: "archive test", body: "test", owner_id: users.first.id, pinned: false, list: false }, 
	# archived: true, trashed: false}
	{	id: 8, title: "archive test", body: "test", owner_id: users.first.id, pinned: false, list: false }, 
	# archived: false, trashed: true}
])

pinned = ([
	notes.each do |note|
		if note.pinned == true
			PinnedNote.create(note_id: note.id)
		end
	end
])

lists = ([
	notes.each do |note|
		if note.list == true
			List.create(note_id: note.id, owner_id: note.owner_id, pinned: note.pinned)
		end
	end
])

list1 = ListItem.create([
	{ id: 1, item: "test", completed: false },
	{ id: 2, item: "test test", completed: true },
	{ id: 3, item: "test test test", completed: false }
])

list2 = ListItem.create([
	{ list_id: 2, note_id: 6, owner_id: 2, item: "Miss Piggy: something bedazzled", completed: false },
	{ list_id: 2, note_id: 6, owner_id: 2, item: "Piglet: tbd", completed: false },
	{ list_id: 2, note_id: 6, owner_id: 2, item: "Wilbur: tbd", completed: false },
	{ list_id: 2, note_id: 6, owner_id: 2, item: "Pumbaa: tbd", completed: false },
	{ list_id: 2, note_id: 6, owner_id: 2, item: "Porky Pig: tbd", completed: false },
	{ list_id: 2, note_id: 6, owner_id: 2, item: "Peppa Pig: tbd", completed: false },
	{ list_id: 2, note_id: 6, owner_id: 2, item: "3 Little Pigs: tbd", completed: false },
	{ list_id: 2, note_id: 6, owner_id: 2, item: "Hamm: a piggybank--how meta", completed: true }
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