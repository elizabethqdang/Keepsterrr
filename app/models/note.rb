class Note < ApplicationRecord
	
	validates :title, length: { maximum: 999 }
	validates :body, length: { allow_nil: true, maximum: 9999 }
	validates :list, inclusion: { in: [true, false] }
	validates :pinned, inclusion: { in: [true, false] }

	after_initialize { self.list = false if self.list.nil? }
	after_initialize { self.pinned = false if self.pinned.nil? }
	
	belongs_to :user,
		foreign_key: :owner_id,
		class_name: :User
	
	has_many :pinnnedNotes,
		foreign_key: :pinned_id,
		class_name: :PinnedNote
	
	has_many :lists,
		foreign_key: :item_id,
		class_name: :List
		
	has_many :list_items,
		through: :lists,
		source: :list_items
		
end
