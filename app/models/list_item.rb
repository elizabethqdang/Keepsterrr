class ListItem < ApplicationRecord
	
	validates :item, presence: true, length = { maximum: 999 }
	validates :completed, :inclusion: { in: [true, false] }
	
	after_initialize { self.completed = false if self.completed.nil? }

	belongs_to :note,
		foreign_key: :item,
		class_name: :Note

  has_one :user,
    through: :note,
		source: :user
		
end
