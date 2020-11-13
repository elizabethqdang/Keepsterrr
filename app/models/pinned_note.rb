
class PinnedNote < ApplicationRecord
	validates :note_id, uniqueness: true
	
	belongs_to :note
end
