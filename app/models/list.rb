class List < ApplicationRecord
	
	validates :title, length: { maximum: 999 }

	belongs_to :user,
		foreign_key: :owner_id,
		class_name: :User
		
	belongs_to :note,
		foreign_key: :note_id,
		class_name: :Note
		
	has_many :list_items,
		foreign_key: :list_item_id,
		class_name: :ListItem
	
	has_many :pinnnedNotes,
		through: :user,
		source: :pinned_notes

end
