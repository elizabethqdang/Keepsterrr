# == Schema Information
#
# Table name: lists
#
#  id            :bigint           not null, primary key
#  note_id       :integer          not null
#  owner_id      :integer          not null
#  title         :string
#  pinned        :boolean          default(FALSE)
#  list_item_ids :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
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
