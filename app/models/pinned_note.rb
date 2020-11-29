# == Schema Information
#
# Table name: pinned_notes
#
#  id         :bigint           not null, primary key
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PinnedNote < ApplicationRecord
	validates :note_id, uniqueness: true
	
	belongs_to :note
end
