class AddColumnToNotes < ActiveRecord::Migration[5.2]
	def change
		add_column	:users, :owner_id, :integer
		
		add_index	:users, :owner_id
  end
end
