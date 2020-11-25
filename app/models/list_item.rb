class ListItem < ApplicationRecord
	
	validates :item, presence: true, length: { maximum: 999 }
	validates :completed, inclusion: { in: [true, false] }
	
	after_initialize { self.completed = false if self.completed.nil? }

	belongs_to :list,
		foreign_key: :list_id,
		class_name: :List

	belongs_to :note,
    foreign_key: :note_id,
		class_name: :Note
		
  has_one :user,
    through: :list,
		source: :user
		
end
