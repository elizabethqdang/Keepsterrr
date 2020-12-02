# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :string
#  owner_id   :integer          not null
#  pinned     :boolean          default(FALSE), not null
#  list       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Note < ApplicationRecord
	
	validates :title, length: { maximum: 999 }
	validates :body, length: { allow_nil: true, maximum: 9999 }
	validates :list, inclusion: { in: [true, false] }
	validates :pinned, inclusion: { in: [true, false] }

	after_initialize { self.list = false if self.list.nil? }
	after_initialize { self.pinned = false if self.pinned.nil? }
	
	has_one_attached :image
	
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
