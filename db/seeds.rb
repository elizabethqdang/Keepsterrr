# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.connection.reset_pk_sequence!(table_name)

require 'open-uri'

User.destroy_all
Note.destroy_all
List.destroy_all
ListItem.destroy_all
PinnedNote.destroy_all

u1 = User.create({ email: "demo-user@keepsterrr.com", password: "password"})
	
u2 = User.create({ email: "maxwellthepig@keepsterrr.com", password: "hunter12"})

n1 = Note.create({ title: "note demo", body: "test test test", owner_id: u1.id, pinned: false, list: false })
l1 = Note.create(	{ title: "list demo", body: "", owner_id: u1.id, pinned: false, list: true })
n2 = Note.create({ title: "whee", body: "whee wheeeeeeeeeeeeeeeeeeeeeeeeee", owner_id: u2.id, pinned: true, list: false })
n3 = Note.create({ title: "This Little Piggy", body: "This little piggy went to the market, This little piggy stayed home, This little piggy had roast beef, ... And this little piggy cried wee wee wee all the way home.", owner_id: u2.id, pinned: false, list: false })
n4 = Note.create({ title: "money in da bank$$", body: "the piggybank that is", owner_id: u2.id, pinned: true, list: false })
l2 = Note.create({ title: "holiday gifts for my piggy friends", body: "", owner_id: u2.id, pinned: true, list: true }) 
n5 = Note.create({ title: "archive test", body: "test", owner_id: u1.id, pinned: false, list: false })
n6 = Note.create({ title: "archive test", body: "test", owner_id: u1.id, pinned: false, list: false })

# pinned = ([
# 	notes.each do |note|
# 		if note.pinned == true
# 			PinnedNote.create(note_id: note.id)
# 		end
# 	end
# ])

# lists = ([
# 	notes.each do |note|
# 		if note.list == true
# 			List.create(note_id: note.id, owner_id: note.owner_id, pinned: note.pinned)
# 		end
# 	end
# ])

l1_i = ListItem.create([
	{ list_id: l1.id, note_id: l1.id, owner_id: l1.owner_id, item: "test", completed: false },
	{ list_id: l1.id, note_id: l1.id, owner_id: l1.owner_id, item: "test test", completed: true },
	{ list_id: l1.id, note_id: l1.id, owner_id: l1.owner_id, item: "test test test", completed: false }
])

l2_i = ListItem.create([
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "Miss Piggy: something bedazzled", completed: false },
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "Piglet: tbd", completed: false },
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "Wilbur: tbd", completed: false },
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "Pumbaa: tbd", completed: false },
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "Porky Pig: tbd", completed: false },
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "Peppa Pig: tbd", completed: false },
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "3 Little Pigs: tbd", completed: false },
	{ list_id: l2.id, note_id: l2.id, owner_id: l2.owner_id, item: "Hamm: a piggybank--how meta", completed: true }
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