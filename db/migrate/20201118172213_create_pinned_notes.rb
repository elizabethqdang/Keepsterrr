class CreatePinnedNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :pinned_notes do |t|
			t.integer	:note_id, null: false
			
			t.timestamps
			
			t.index [:note_id]
    end
  end
end
